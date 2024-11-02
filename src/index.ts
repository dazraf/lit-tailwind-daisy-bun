// Conditional ESM module loading (Node.js and browser)
// @ts-ignore: Property 'UrlPattern' does not exist
if (!globalThis.URLPattern) {
  console.log("awaiting urlpattern-polyfill");
  await import("urlpattern-polyfill");
  console.log("urlpattern-polyfill loaded");
}

// add all your custom elements here, or alternatively, import them in specific files that reference them
import "./components/Application";
