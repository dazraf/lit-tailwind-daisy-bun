import { CSSResult, LitElement, css, unsafeCSS } from "lit";
import inlineCss from "../index.css?inline";
export const appStyle = unsafeCSS(inlineCss);

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * This is a mixin for creating a new class that extends LitElement with the application styles
 * which include Tailwind, Daisy and our Icons.
 * Usage:
 *     <code>
 *      export class MyElement extends AppStyledElement(LitElement) {
 *         ...
 *      }
 *      </code>
 *
 *or with custom styles:
 *     <code>
 *     export class MyElement extends AppStyledElement(LitElement, css`
 *      .my-class {
 *       color: red;
 *     }
 *    `) {
 *      ...
 *     }
 *     </code>
 * @param componentStyle - additional custom styles provided by the derived
 * @returns
 */

export const AppStyledElement = <T extends Constructor<LitElement>>(
  superClass: T,
  componentStyle: CSSResult = css``
) => {
  class MyMixinClass extends superClass {
    static styles = [appStyle, componentStyle];
  }
  return MyMixinClass as T /* see "typing the subclass" below */;
};
