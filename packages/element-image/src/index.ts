import CropperElement from '@cropper/element';
import type CropperCanvas from '@cropper/element-canvas';
import type CropperSelection from '@cropper/element-selection';
import {
  ACTION_MOVE,
  ACTION_NONE,
  ACTION_ROTATE,
  ACTION_SCALE,
  ACTION_TRANSFORM,
  CROPPER_CANVAS,
  CROPPER_IMAGE,
  CROPPER_SELECTION,
  EVENT_ACTION,
  EVENT_ACTION_END,
  EVENT_ACTION_START,
  EVENT_ERROR,
  EVENT_LOAD,
  EVENT_TRANSFORM,
  isFunction,
  isNumber,
  multiplyMatrices,
  off,
  on,
  once,
  toAngleInRadian,
} from '@cropper/utils';
import style from './style';

const canvasCache = new WeakMap();
const NATIVE_ATTRIBUTES = [
  'alt',
  'crossorigin',
  'decoding',
  'elementtiming',
  'fetchpriority',
  'loading',
  'referrerpolicy',
  'sizes',
  'src',
  'srcset',
];

export default class CropperImage extends CropperElement {
  static $name = CROPPER_IMAGE;

  static $version = '__VERSION__';

  protected $isReady = false;

  protected $matrix = [1, 0, 0, 1, 0, 0];

  protected $onLoad: EventListener | null = null;

  protected $onCanvasAction: EventListener | null = null;

  protected $onCanvasActionEnd: EventListener | null = null;

  protected $onCanvasActionStart: EventListener | null = null;

  protected $actionStartTarget: EventTarget | null = null;

  protected $style = style;

  readonly $image = new Image();

  initialCenterSize = 'contain';

  rotatable = false;

  scalable = false;

  skewable = false;

  slottable = false;

  translatable = false;

  // Native attributes
  alt = '';

  crossorigin = '';

  decoding = '';

  elementtiming = '';

  fetchpriority = '';

  loading = '';

  referrerpolicy = '';

  sizes = '';

  src = '';

  srcset = '';

  protected set $canvas(element: CropperCanvas) {
      throw new Error("STUB");
  }

  protected get $canvas(): CropperCanvas {
      throw new Error("STUB");
  }

  protected static get observedAttributes(): string[] {
      throw new Error("STUB");
  }

  protected attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
      throw new Error("STUB");
  }

  protected $propertyChangedCallback(name: string, oldValue: unknown, newValue: unknown): void {
      throw new Error("STUB");
  }

  protected connectedCallback(): void {
      throw new Error("STUB");
  }

  protected disconnectedCallback(): void {
      throw new Error("STUB");
  }

  protected $handleLoad(): void {
      throw new Error("STUB");
  }

  protected $handleAction(event: Event | CustomEvent): void {
      throw new Error("STUB");
  }

  /**
   * Defers the callback to execute after successfully loading the image.
   * @param {Function} [callback] The callback to execute after successfully loading the image.
   * @returns {Promise} Returns a promise that resolves to the image element.
   */
  $ready(callback?: (image: HTMLImageElement) => unknown): Promise<HTMLImageElement> {
      throw new Error("STUB");
  }

  /**
   * Aligns the image to the center of its parent element.
   * @param {string} [size] The size of the image.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $center(size?: string): this {
      throw new Error("STUB");
  }

  /**
   * Moves the image.
   * @param {number} x The moving distance in the horizontal direction.
   * @param {number} [y] The moving distance in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $move(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Moves the image to a specific position.
   * @param {number} x The new position in the horizontal direction.
   * @param {number} [y] The new position in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $moveTo(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Rotates the image.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate}
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate}
   * @param {number|string} angle The rotation angle (in radians).
   * @param {number} [x] The rotation origin in the horizontal, defaults to the center of the image.
   * @param {number} [y] The rotation origin in the vertical, defaults to the center of the image.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $rotate(angle: number | string, x?: number, y?: number): this {
      throw new Error("STUB");
  }

  /**
   * Zooms the image.
   * @param {number} scale The zoom factor. Positive numbers for zooming in, and negative numbers for zooming out.
   * @param {number} [x] The zoom origin in the horizontal, defaults to the center of the image.
   * @param {number} [y] The zoom origin in the vertical, defaults to the center of the image.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $zoom(scale: number, x?: number, y?: number): this {
      throw new Error("STUB");
  }

  /**
   * Scales the image.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale}
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale}
   * @param {number} x The scaling factor in the horizontal direction.
   * @param {number} [y] The scaling factor in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $scale(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Skews the image.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew}
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform}
   * @param {number|string} x The skewing angle in the horizontal direction.
   * @param {number|string} [y] The skewing angle in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $skew(x: number | string, y: number | string = 0): this {
      throw new Error("STUB");
  }

  /**
   * Translates the image.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate}
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate}
   * @param {number} x The translating distance in the horizontal direction.
   * @param {number} [y] The translating distance in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $translate(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Transforms the image.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix}
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform}
   * @param {number} a The scaling factor in the horizontal direction.
   * @param {number} b The skewing angle in the vertical direction.
   * @param {number} c The skewing angle in the horizontal direction.
   * @param {number} d The scaling factor in the vertical direction.
   * @param {number} e The translating distance in the horizontal direction.
   * @param {number} f The translating distance in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $transform(a: number, b: number, c: number, d: number, e: number, f: number): this {
      throw new Error("STUB");
  }

  /**
   * Resets (overrides) the current transform to the specific identity matrix.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform}
   * @param {number|Array} a The scaling factor in the horizontal direction.
   * @param {number} b The skewing angle in the vertical direction.
   * @param {number} c The skewing angle in the horizontal direction.
   * @param {number} d The scaling factor in the vertical direction.
   * @param {number} e The translating distance in the horizontal direction.
   * @param {number} f The translating distance in the vertical direction.
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $setTransform(
    a: number | number[],
    b?: number,
    c?: number,
    d?: number,
    e?: number,
    f?: number,
  ): this {
      throw new Error("STUB");
  }

  /**
   * Retrieves the current transformation matrix being applied to the element.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getTransform}
   * @returns {Array} Returns the readonly transformation matrix.
   */
  $getTransform(): number[] {
      throw new Error("STUB");
  }

  /**
   * Resets the current transform to the initial identity matrix.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform}
   * @returns {CropperImage} Returns `this` for chaining.
   */
  $resetTransform(): this {
      throw new Error("STUB");
  }
}
