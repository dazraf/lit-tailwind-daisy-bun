import { html, LitElement } from "lit";
import { AppStyledElement } from "../AppStyledElement";
import { customElement } from "lit/decorators.js";

@customElement("contact-page")
export class ContactPage extends AppStyledElement(LitElement) {
  protected render(): unknown {
    return html`
      <div
        class="h-full flex-1 bg-base-200 flex items-center justify-center p-4"
      >
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title mb-4">Contact Us</h2>
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  id="name"
                  autocomplete="name"
                  type="text"
                  placeholder="Enter your name"
                  class="input input-bordered"
                  required
                />
              </div>

              <div class="form-control mt-4">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  id="email"
                  autocomplete="email"
                  type="email"
                  placeholder="Enter your email"
                  class="input input-bordered"
                  required
                />
              </div>

              <div class="form-control mt-6">
                <button id="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
