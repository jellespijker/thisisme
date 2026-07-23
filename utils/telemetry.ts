/**
 * Low-key, cookie-less visit telemetry.
 *
 * Beacons are POSTed as application/x-www-form-urlencoded — a CORS-safelisted
 * content type — so requests need no preflight and work fire-and-forget against
 * a Home Assistant webhook (or Nabu Casa cloudhook) that lives on a different
 * origin. The receiving end sees the visitor's IP for geo lookup; the payload
 * itself contains no cookies and no persistent identifiers: `visit` is a random
 * id that lives only for the duration of one page load, so events of a single
 * visit can be grouped without tracking the visitor across visits.
 *
 * Disabled entirely when VITE_TELEMETRY_ENDPOINT is not configured at build
 * time, or when the visitor has Do Not Track / Global Privacy Control enabled.
 * See docs/TELEMETRY.md for the Home Assistant side.
 */

export type TelemetryEvent = 'page_view' | 'filter_change' | 'print' | 'outbound_click';

const ENDPOINT: string = import.meta.env.VITE_TELEMETRY_ENDPOINT ?? '';

const visitId =
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID().slice(0, 8)
    : Math.random().toString(36).slice(2, 10);

const optedOut = (): boolean => {
  if (typeof navigator === 'undefined') return true;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return navigator.doNotTrack === '1' || nav.globalPrivacyControl === true;
};

export const telemetryEnabled = (): boolean => ENDPOINT !== '' && !optedOut();

export const track = (event: TelemetryEvent, props: Record<string, string> = {}): void => {
  if (!telemetryEnabled()) return;

  const body = new URLSearchParams({
    event,
    visit: visitId,
    ts: new Date().toISOString(),
    page: location.pathname + location.search,
    referrer: document.referrer || '',
    lang: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ua: navigator.userAgent,
    ...props,
  });

  try {
    // sendBeacon survives page unload (prints, tab closes, outbound clicks).
    if (navigator.sendBeacon?.(ENDPOINT, body)) return;
  } catch {
    /* fall through to fetch */
  }
  fetch(ENDPOINT, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(() => {
    /* telemetry must never break the site */
  });
};
