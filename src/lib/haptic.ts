export function triggerHaptic(durationMs: number = 15) {
  if (typeof window === 'undefined') return;
  if (window.navigator && window.navigator.vibrate) {
    try {
      window.navigator.vibrate(durationMs);
    } catch {
      // Silence unsupported vibrate
    }
  }
}
