// src/utils/mailto.ts

// Tryb deweloperski: podczas "npm run dev" mamy import.meta.env.DEV === true.
// W DEV pokazujemy alert z linkiem zamiast otwierać klienta poczty.
// Po wdrożeniu (build/hosting) import.meta.env.DEV === false i otwieramy realnego mailto.
export const DEV_MAIL_MODE: boolean = import.meta.env.DEV;

/** Buduje poprawny URL "mailto" z bezpiecznym kodowaniem znaków i nowych linii. */
export function buildMailto(to: string, subject: string, body: string): string {
  // Normalizujemy nowe linie, żeby na każdym OS było tak samo.
  const normalized = body.replace(/\r?\n/g, "\n");
  // Kodujemy parametry – spacje i nowe linie muszą być %20 / %0A
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(normalized);
  return `mailto:${to}?subject=${s}&body=${b}`;
}

/** Otwiera mailto (albo pokazuje podgląd w DEV). */
export function openMailto(to: string, subject: string, body: string): void {
  const url = buildMailto(to, subject, body);
  if (DEV_MAIL_MODE) {
    alert(`[DEV MAIL MODE]\nOtworzyłabym:\n${url}`);
  } else {
    window.location.href = url;
  }
}
