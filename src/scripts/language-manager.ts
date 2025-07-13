// src/scripts/language-manager.js

const COOKIE_NAME = 'user_lang_pref';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'it'];

/**
 * Imposta il cookie con la preferenza della lingua.
 * @param {string} lang - 'en' o 'it'
 */
function setLangCookie(lang: string) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  // Scadenza tra un anno
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${lang}; path=/; expires=${expires}; SameSite=Lax`;
}

/**
 * Legge il cookie.
 * @returns {string|null}
 */
function getLangCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${COOKIE_NAME}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
}

/**
 * Logica di reindirizzamento automatico all'arrivo.
 * Funziona solo sulla pagina radice per evitare loop.
 */
function handleAutomaticRedirect() {
  // Esegui solo se siamo sulla pagina radice (es. miosito.com/)
  if (window.location.pathname === '/') {
    const preferredLang = getLangCookie();
    if (preferredLang && SUPPORTED_LANGS.includes(preferredLang)) {
      // Reindirizza alla versione salvata nel cookie
      window.location.replace(`/${preferredLang}`);
    } else {
      // Opzionale: reindirizza alla lingua di default se non c'è cookie
      window.location.replace(`/${DEFAULT_LANG}`);
    }
  }
}

// --- Esecuzione ---

// 1. Aggiungi event listener ai tuoi switcher di lingua
// Assicurati che i link dello switcher abbiano l'attributo `data-lang-switcher`
document.addEventListener('astro:page-load', () => {
  document.querySelectorAll('a[data-lang-switcher]').forEach(link => {
    link.addEventListener('click', () => {
      const lang = link.getAttribute('lang') ?? DEFAULT_LANG; // es. <a href="/it" lang="it" data-lang-switcher>
      setLangCookie(lang);
    });
  });
});

// 2. Esegui il reindirizzamento automatico
handleAutomaticRedirect();