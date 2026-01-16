// Supabase Edge Function for waitlist with rate limiting
// Deploy with: supabase functions deploy waitlist

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limiting (resets on cold start, but good enough for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // requests per window
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS })
        return false
    }

    if (record.count >= RATE_LIMIT) {
        return true
    }

    record.count++
    return false
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

Deno.serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Get client IP for rate limiting
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || req.headers.get('cf-connecting-ip')
            || 'unknown'

        // Check rate limit
        if (isRateLimited(ip)) {
            return new Response(
                JSON.stringify({ error: 'Too many requests. Please try again later.' }),
                { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Parse request body
        const { email } = await req.json()

        // Validate email
        if (!email || !isValidEmail(email)) {
            return new Response(
                JSON.stringify({ error: 'Please provide a valid email address.' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Create Supabase client with service role key (server-side only)
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Insert into waitlist
        const { error } = await supabase
            .from('waitlist')
            .insert([{ email: email.toLowerCase().trim() }])

        if (error) {
            // Handle duplicate email gracefully
            if (error.code === '23505') {
                return new Response(
                    JSON.stringify({ success: true, message: "You're already on the waitlist!" }),
                    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }
            console.error('Supabase error:', error)
            return new Response(
                JSON.stringify({ error: 'Something went wrong. Please try again.' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        return new Response(
            JSON.stringify({ success: true, message: "You're on the waitlist!" }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (err) {
        console.error('Edge function error:', err)
        return new Response(
            JSON.stringify({ error: 'Something went wrong. Please try again.' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
