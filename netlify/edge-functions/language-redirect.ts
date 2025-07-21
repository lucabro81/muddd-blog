import type { Config, Context } from "@netlify/edge-functions";

// --- Localization Settings ---
const DEFAULT_LANG = 'it';
const OTHER_LANGS = ['en']; // All languages except the default

export default async (request: Request, context: Context) => {

  const { url, headers } = request;
  const { cookies } = context;
  const currentPath = new URL(url).pathname;

  // Canonical Redirect: The /it/ URL should not exist.
  // If someone ends up here, redirect them permanently (301) to the correct version.
  if (currentPath.startsWith(`/${DEFAULT_LANG}/`)) {
    const newPath = currentPath.replace(`/${DEFAULT_LANG}/`, '/');
    return Response.redirect(new URL(newPath, url), 301);
  }

  const pathPrefix = currentPath.split('/')[1];
  const currentLang = OTHER_LANGS.includes(pathPrefix) ? pathPrefix : DEFAULT_LANG;

  const hasConsent = cookies.get('cookie_consent') === 'true';
  if (hasConsent) {
    const preferredLang = cookies.get('lang');

    if (!preferredLang) {
      return;
    }

    if (preferredLang && preferredLang !== currentLang) {
      let newPath;
      // If the preferred language is the default, remove the prefix
      if (preferredLang === DEFAULT_LANG) {
        newPath = currentPath.replace(`/${currentLang}/`, '/');
      }
      // Otherwise, replace the existing prefix or add it
      else {
        if (currentLang === DEFAULT_LANG) {
          // From /page -> /en/page
          newPath = `/${preferredLang}${currentPath}`;
        } else {
          // From /de/page -> /en/page
          newPath = currentPath.replace(`/${currentLang}/`, `/${preferredLang}/`);
        }
      }
      return Response.redirect(new URL(newPath, url), 302);
    }

    // Logic for first access (new visitors on the root)
    const hasLangCookie = cookies.get('lang');
    if (!hasLangCookie && currentPath === '/') {
      const browserLangHeader = headers.get('accept-language');
      const mainBrowserLang = browserLangHeader?.split(',')[0].split('-')[0].toLowerCase();

      // If the browser language is one of the other languages (e.g. 'en'), redirect
      if (mainBrowserLang && OTHER_LANGS.includes(mainBrowserLang)) {
        return Response.redirect(new URL(`/${mainBrowserLang}`, url), 302);
      }
      // If the browser language is 'it' or not supported, the user stays on the root (which is already 'it')
    }
  }

  // If no redirect rule applies, serve the requested page
  return;
};


export const config: Config = {
  path: "/*",
};