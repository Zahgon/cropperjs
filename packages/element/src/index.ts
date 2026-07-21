import {
  IS_BROWSER,
  WINDOW,
  emit,
  isNaN,
  isNumber,
  isObject,
  isUndefined,
  nextTick,
  toCamelCase,
  toKebabCase,
} from '@cropper/utils';
import style from './style';

const REGEXP_SUFFIX = /left|top|width|height/i;
const DEFAULT_SHADOW_ROOT_MODE = 'open';
const shadowRoots = new WeakMap();
const styleSheets = new WeakMap();
const tagNames: Map<string, string> = new Map();
const supportsAdoptedStyleSheets = WINDOW.document && Array.isArray(WINDOW.document.adoptedStyleSheets) && 'replaceSync' in WINDOW.CSSStyleSheet.prototype;

export default class CropperElement extends HTMLElement {
  static $name: string;

  static $version = '__VERSION__';

  protected $style?: string;

  protected $template?: string;

  protected get $sharedStyle(): string {
      throw new Error("STUB");
  }

  shadowRootMode: ShadowRootMode = DEFAULT_SHADOW_ROOT_MODE;

  slottable = true;

  themeColor?: string;

  constructor() {
      throw new Error("STUB");
  }

  protected static get observedAttributes(): string[] {
      throw new Error("STUB");
  }

  // Convert attribute to property
  protected attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
      throw new Error("STUB");
  }

  // Convert property to attribute
  protected $propertyChangedCallback(name: string, oldValue: unknown, newValue: unknown): void {
      throw new Error("STUB");
  }

  protected connectedCallback(): void {
      throw new Error("STUB");
  }

  protected disconnectedCallback(): void {
      throw new Error("STUB");
  }

  // eslint-disable-next-line class-methods-use-this
  protected $getTagNameOf(name: string): string {
      throw new Error("STUB");
  }

  protected $setStyles(properties: Record<string, any>): this {
      throw new Error("STUB");
  }

  /**
   * Outputs the shadow root of the element.
   * @returns {ShadowRoot} Returns the shadow root.
   */
  $getShadowRoot(): ShadowRoot {
      throw new Error("STUB");
  }

  /**
   * Adds styles to the shadow root.
   * @param {string} styles The styles to add.
   * @returns {CSSStyleSheet|HTMLStyleElement} Returns the generated style sheet.
   */
  $addStyles(styles: string): CSSStyleSheet | HTMLStyleElement {
      throw new Error("STUB");
  }

  /**
   * Dispatches an event at the element.
   * @param {string} type The name of the event.
   * @param {*} [detail] The data passed when initializing the event.
   * @param {CustomEventInit} [options] The other event options.
   * @returns {boolean} Returns the result value.
   */
  $emit(type: string, detail?: unknown, options?: CustomEventInit): boolean {
      throw new Error("STUB");
  }

  /**
   * Defers the callback to be executed after the next DOM update cycle.
   * @param {Function} [callback] The callback to execute after the next DOM update cycle.
   * @returns {Promise} A promise that resolves to nothing.
   */
  $nextTick(callback?: () => void): Promise<void> {
      throw new Error("STUB");
  }

  /**
   * Defines the constructor as a new custom element.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define}
   * @param {string|object} [name] The element name.
   * @param {object} [options] The element definition options.
   */
  static $define(
    name?: string | ElementDefinitionOptions,
    options?: ElementDefinitionOptions,
  ): void {
    if (isObject(name)) {
      options = name;
      name = '';
    }

    if (!name) {
      name = this.$name || this.name;
    }

    name = toKebabCase(name as string);

    if (IS_BROWSER && WINDOW.customElements && !WINDOW.customElements.get(name)) {
      customElements.define(name, this, options);
    }
  }
}
