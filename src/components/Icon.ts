import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AppStyledElement } from "./AppStyledElement";

@customElement("b-icon")
export class Icon extends AppStyledElement(LitElement) {
  @property({ type: String })
  icon: string = "";

  @property({ type: Boolean })
  filled: boolean = false;

  protected render(): unknown {
    return html`<i class="bi bi-${this.icon}${this.filled ? "-fill" : ""}"></i>`;
  }
}
