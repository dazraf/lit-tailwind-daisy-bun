import { html, LitElement } from "lit";
import { AppStyledElement } from "../AppStyledElement";
import { customElement } from "lit/decorators.js";

@customElement("about-page")
export class AboutPage extends AppStyledElement(LitElement) {
  protected render(): unknown {
    return html` <div class="bg-base-200">
      <!-- Hero Section -->
      <section class="hero min-h-[60vh] bg-base-100">
        <div class="hero-content text-center">
          <div>
            <h1 class="text-5xl font-bold mb-8">About Us</h1>
            <p class="text-xl max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Mission -->
      <section class="py-16 bg-base-200">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="py-16 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Our Values</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="card bg-base-200">
                <div class="card-body">
                  <h3 class="card-title">Innovation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div class="card bg-base-200">
                <div class="card-body">
                  <h3 class="card-title">Excellence</h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Journey -->
      <section class="py-16 bg-base-200">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Our Journey</h2>
            <ul class="timeline timeline-vertical">
              <li>
                <div class="timeline-start">1984</div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box">
                  First Macintosh computer
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">1998</div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box">iMac</div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">2001</div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box">iPod</div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">2007</div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box">iPhone</div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">2015</div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box">Apple Watch</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="py-16 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Our Team</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="card bg-base-200">
                <div class="card-body items-center text-center">
                  <div class="avatar placeholder mb-4">
                    <div
                      class="bg-neutral text-neutral-content rounded-full w-24"
                    >
                      <span class="text-2xl">JD</span>
                    </div>
                  </div>
                  <h3 class="card-title">John Doe</h3>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <div class="card bg-base-200">
                <div class="card-body items-center text-center">
                  <div class="avatar placeholder mb-4">
                    <div
                      class="bg-neutral text-neutral-content rounded-full w-24"
                    >
                      <span class="text-2xl">JS</span>
                    </div>
                  </div>
                  <h3 class="card-title">Jane Smith</h3>
                  <p>Creative Director</p>
                </div>
              </div>
              <div class="card bg-base-200">
                <div class="card-body items-center text-center">
                  <div class="avatar placeholder mb-4">
                    <div
                      class="bg-neutral text-neutral-content rounded-full w-24"
                    >
                      <span class="text-2xl">RJ</span>
                    </div>
                  </div>
                  <h3 class="card-title">Robert Johnson</h3>
                  <p>Tech Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;
  }
}
