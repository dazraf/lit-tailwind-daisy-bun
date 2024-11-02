import { html, LitElement, PropertyValues } from "lit";
import { AppStyledElement } from "./AppStyledElement";
import { customElement, property } from "lit/decorators.js";
import { PathRouteConfig, Router } from "@lit-labs/router";

export interface Breadcrumb {
  name: string;
  url: string;
}

type StringOrStringFunction =
  | string
  | ((params: { [key: string]: string | undefined }) => string);

export interface PathRouteConfigWithBreadcrumb extends PathRouteConfig {
  breadcrumbs?: StringOrStringFunction[];
}

@customElement("app-breadcrumbs")
export class Breadcrumbs extends AppStyledElement(LitElement) {
  private static _urlPatternCache: Map<string, URLPattern> = new Map();

  private static getUrlPatternOrCreate(path: string): URLPattern {
    let urlPattern = this._urlPatternCache.get(path);
    if (!urlPattern) {
      urlPattern = new URLPattern({ pathname: path });
      this._urlPatternCache.set(path, urlPattern);
    }
    return urlPattern;
  }

  @property({ type: Array, attribute: false })
  routes: PathRouteConfigWithBreadcrumb[] = [];

  @property({ type: String, attribute: false })
  link: string = "";

  private routeMap: Map<string, PathRouteConfigWithBreadcrumb> = new Map<
    string,
    PathRouteConfigWithBreadcrumb
  >();

  private updateRouteMap() {
    this.routes.forEach((route) => {
      const pathRouteConfig = route as PathRouteConfigWithBreadcrumb;
      this.routeMap.set(pathRouteConfig.name!, pathRouteConfig);
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.updateRouteMap();
  }

  protected render() {
    return html`${this.getBreadcrumbs(this.routes, this.link)}`;
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    this.updateRouteMap();
    return true;
  }

  private getBreadcrumbs(
    routes: PathRouteConfigWithBreadcrumb[],
    link: string = ""
  ) {
    const result =
      routes
        .map((r) => {
          const pathRouteConfig = r as PathRouteConfigWithBreadcrumb;
          const urlPattern = Breadcrumbs.getUrlPatternOrCreate(
            pathRouteConfig.path
          );
          const execResult = urlPattern.exec({ pathname: link });
          if (execResult) {
            const result = {
              params: execResult.pathname.groups,
              breadcrumbs: pathRouteConfig.breadcrumbs,
            };
            return result;
          } else {
            return null;
          }
        })
        .filter((r) => r !== null) || [];
    const item = result.pop();
    if (!item) {
      return html``;
    }
    const breadCrumbs = item.breadcrumbs?.map((b) => {
      let name = "";
      if (typeof b === "string") {
        name = b;
      } else {
        name = b(item.params);
      }
      let url = this.routeMap.get(name)?.path || window.location.pathname;
      return {
        name,
        url,
      };
    });
    return html`
      <div class="breadcrumbs text-sm m-0 pl-7">
        <ul>
          ${breadCrumbs?.map(
            (b) => html`
              <li>
                <a href="${b.url}">${b.name}</a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
