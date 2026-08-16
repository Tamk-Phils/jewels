export async function sendTransactionalEmail(type: 'contact' | 'order', payload: any) {
  const endpoints = ['/api/email', '/.netlify/functions/email'];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, payload }),
      });
      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (e) {
      console.warn(`[sendTransactionalEmail] Endpoint ${endpoint} failed, trying fallback:`, e);
    }
  }

  return { success: false, error: 'All email endpoints unreachable' };
}
