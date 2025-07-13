import { defineMiddleware } from "astro:middleware";
import { sequence } from "astro/middleware";

// const redirect = defineMiddleware(async ({ url, request, redirect, cookies }, next) => {
//   // Ignore all paths that are not the root
//   if (url.pathname !== "/") {
//     return redirect("/", 307);
//   }

//   // Check for language cookie
//   const langCookie = cookies.get("lang");
//   console.log("langCookie", langCookie);
//   if (langCookie && langCookie.value === "it") {
//     return redirect("/", 307);
//   }

//   // If no cookie, check the browser's language header
//   const langHeader = request.headers.get("accept-language")?.split(",")[0].split("-")[0];
//   console.log("langHeader", langHeader);
//   if (langHeader === "it") {
//     return redirect("/it", 307);
//   }

//   // Otherwise, continue to the default (English) page
//   return next();
// });

// export const onRequest = sequence(redirect); 