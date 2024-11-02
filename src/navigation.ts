import { Router } from "@lit-labs/router";

export function navigate(path: string) {
  globalThis.history.pushState(null, "", path);
}

export function initNavigation(router: Router) {
  globalThis.history.pushState = new Proxy(globalThis.history.pushState, {
    apply: (
      target,
      thisArg,
      argArray: [
        data: any,
        unused: string,
        url?: string | URL | null | undefined
      ]
    ) => {
      const url = argArray[2];
      if (url instanceof URL) {
        router.goto(url.pathname);
      } else if (typeof url === "string") {
        if (url.startsWith("/")) {
          router.goto(url);
        } else {
          router.goto(new URL(url).pathname);
        }
      } else {
        router.goto(window.location.pathname);
      }
      return target.apply(thisArg, argArray);
    },
  });
}
