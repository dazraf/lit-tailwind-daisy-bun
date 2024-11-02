import { html, LitElement } from "lit";
import { AppStyledElement } from "../AppStyledElement";
import { customElement } from "lit/decorators.js";
import { navigate } from "../../navigation";

@customElement("home-page")
export class HomePage extends AppStyledElement(LitElement) {
  protected render(): unknown {
    return html`
      <div class="hero bg-base-200 min-h-96">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there!</h1>
            <p class="py-6">
              Welcome, to the home page <br />🌻Plant something beautiful here
              🌻
            </p>
            <button
              class="btn btn-primary"
              @click=${() => navigate("/contact")}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
