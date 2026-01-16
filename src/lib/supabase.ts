// Waitlist API via Supabase Edge Function
// This approach is more secure - no anon key exposed on frontend

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export async function addToWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  if (!SUPABASE_URL) {
    console.warn('Supabase URL not configured');
    return { success: false, error: 'Waitlist is currently unavailable' };
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Something went wrong' };
    }

    return { success: true };
  } catch (err) {
    console.error('Waitlist error:', err);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

