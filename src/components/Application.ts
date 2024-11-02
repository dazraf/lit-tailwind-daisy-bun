import { Router } from "@lit-labs/router";
import { AppStyledElement } from "./AppStyledElement";
import { PathRouteConfigWithBreadcrumb } from "./Breadcrumbs";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./Breadcrumbs";
import "./ThemeSelector";
import "./Icon";
import "./pages/HomePage";
import "./pages/AboutPage";
import "./pages/ContactPage";
import { initNavigation } from "../navigation";

@customElement("x-app")
export class Application extends AppStyledElement(LitElement) {
  private routes: PathRouteConfigWithBreadcrumb[] = [
    {
      path: "/",
      name: "Home",
      render: () => html` <home-page></home-page> `,
      breadcrumbs: ["Home"],
    },
    {
      path: "/about",
      name: "About",
      render: () => html`<about-page></about-page>`,
      breadcrumbs: ["Home", "About"],
    },
    {
      path: "/contact",
      name: "Contact",
      render: () => html`<contact-page></contact-page>`,
      breadcrumbs: ["Home", "Contact"],
    },
  ];

  private router = new Router(this, this.routes);

  render() {
    return html`
      <div
        class="fixed w-full z-10 top-0 bg-base-100 bg-opacity-70 backdrop-blur-md"
      >
        <div class="navbar">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl" href="/">My App</a>
          </div>
          ${this.toolbar()}
        </div>
        <app-breadcrumbs
          .routes=${this.routes}
          .link=${this.router.link()}
        ></app-breadcrumbs>
      </div>
      <!-- this shifts the contents down to clear the floating navbar -->
      <div style="padding-top: 8rem;">${this.router.outlet()}</div>
    `;
  }
  private toolbar() {
    return html` <div class="flex-none">
      <ul
        class="menu menu-horizontal bg-base-200 text-2xl rounded-box text-center"
      >
        <li>
          <a href="/">
            <b-icon icon="house-door"></b-icon>
          </a>
        </li>
        <li>
          <a href="/contact">
            <b-icon icon="person-lines" filled></b-icon>
          </a>
        </li>
        <li>
          <a href="/about">
            <b-icon icon="info-circle" filled></b-icon>
          </a>
        </li>
        <li>
          <theme-selector></theme-selector>
        </li>
      </ul>
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    initNavigation(this.router);
  }
}
