import CropperElement from '@cropper/element';
import type CropperCanvas from '@cropper/element-canvas';
import type CropperImage from '@cropper/element-image';
import {
  ACTION_MOVE,
  ACTION_RESIZE_EAST,
  ACTION_RESIZE_NORTH,
  ACTION_RESIZE_NORTHEAST,
  ACTION_RESIZE_NORTHWEST,
  ACTION_RESIZE_SOUTH,
  ACTION_RESIZE_SOUTHEAST,
  ACTION_RESIZE_SOUTHWEST,
  ACTION_RESIZE_WEST,
  ACTION_SCALE,
  ACTION_SELECT,
  CROPPER_CANVAS,
  CROPPER_IMAGE,
  CROPPER_SELECTION,
  EVENT_ACTION,
  EVENT_ACTION_END,
  EVENT_ACTION_START,
  EVENT_CHANGE,
  EVENT_KEYDOWN,
  getAdjustedSizes,
  getOffset,
  isFunction,
  isNumber,
  isPlainObject,
  isPositiveNumber,
  getComposedPathTarget,
  off,
  on,
} from '@cropper/utils';
import style from './style';

const canvasCache = new WeakMap();

export interface Selection {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class CropperSelection extends CropperElement {
  static $name = CROPPER_SELECTION;

  static $version = '__VERSION__';

  protected $onCanvasAction: EventListener | null = null;

  protected $onCanvasActionStart: EventListener | null = null;

  protected $onCanvasActionEnd: EventListener | null = null;

  protected $onDocumentKeyDown: EventListener | null = null;

  protected $action = '';

  protected $actionStartTarget: EventTarget | null = null;

  protected $changing = false;

  protected $style = style;

  private $initialSelection = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  x = 0;

  y = 0;

  width = 0;

  height = 0;

  aspectRatio = NaN;

  initialAspectRatio = NaN;

  initialCoverage = NaN;

  active = false;

  // Deprecated as of v2.0.0-rc.0, use `dynamic` instead.
  linked = false;

  dynamic = false;

  movable = false;

  resizable = false;

  zoomable = false;

  multiple = false;

  keyboard = false;

  outlined = false;

  precise = false;

  protected set $canvas(element: CropperCanvas) {
      throw new Error("STUB");
  }

  protected get $canvas(): CropperCanvas {
      throw new Error("STUB");
  }

  protected static get observedAttributes(): string[] {
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

  protected $getSelections(): CropperSelection[] {
      throw new Error("STUB");
  }

  protected $initSelection(center = false, resize = false) {
      throw new Error("STUB");
  }

  protected $createSelection(): CropperSelection {
      throw new Error("STUB");
  }

  protected $removeSelection(selection: CropperSelection = this): void {
      throw new Error("STUB");
  }

  protected $handleActionStart(event: Event): void {
      throw new Error("STUB");
  }

  protected $handleAction(event: Event): void {
      throw new Error("STUB");
  }

  protected $handleActionEnd(): void {
      throw new Error("STUB");
  }

  protected $handleKeyDown(event: Event): void {
      throw new Error("STUB");
  }

  /**
   * Aligns the selection to the center of its parent element.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $center(): this {
      throw new Error("STUB");
  }

  /**
   * Moves the selection.
   * @param {number} x The moving distance in the horizontal direction.
   * @param {number} [y] The moving distance in the vertical direction.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $move(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Moves the selection to a specific position.
   * @param {number} x The new position in the horizontal direction.
   * @param {number} [y] The new position in the vertical direction.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $moveTo(x: number, y: number = x): this {
      throw new Error("STUB");
  }

  /**
   * Adjusts the size the selection on a specific side or corner.
   * @param {string} action Indicates the side or corner to resize.
   * @param {number} [offsetX] The horizontal offset of the specific side or corner.
   * @param {number} [offsetY] The vertical offset of the specific side or corner.
   * @param {number} [aspectRatio] The aspect ratio for computing the new size if it is necessary.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $resize(
    action: string,
    offsetX = 0,
    offsetY = 0,
    aspectRatio: number = this.aspectRatio,
  ): this {
      throw new Error("STUB");
  }

  /**
   * Zooms the selection.
   * @param {number} scale The zoom factor. Positive numbers for zooming in, and negative numbers for zooming out.
   * @param {number} [x] The zoom origin in the horizontal, defaults to the center of the selection.
   * @param {number} [y] The zoom origin in the vertical, defaults to the center of the selection.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $zoom(scale: number, x?: number, y?: number): this {
      throw new Error("STUB");
  }

  /**
   * Changes the position and/or size of the selection.
   * @param {number} x The new position in the horizontal direction.
   * @param {number} y The new position in the vertical direction.
   * @param {number} [width] The new width.
   * @param {number} [height] The new height.
   * @param {number} [aspectRatio] The new aspect ratio for this change only.
   * @param {number} [_force] Force change.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $change(
    x: number,
    y: number,
    width: number = this.width,
    height: number = this.height,
    aspectRatio: number = this.aspectRatio,
    _force = false,
  ): this {
      throw new Error("STUB");
  }

  /**
   * Resets the selection to its initial position and size.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $reset(): this {
      throw new Error("STUB");
  }

  /**
   * Clears the selection.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $clear(): this {
      throw new Error("STUB");
  }

  /**
   * Refreshes the position or size of the selection.
   * @returns {CropperSelection} Returns `this` for chaining.
   */
  $render(): this {
      throw new Error("STUB");
  }

  /**
   * Generates a real canvas element, with the image (selected area only) draw into if there is one.
   * @param {object} [options] The available options.
   * @param {number} [options.width] The width of the canvas.
   * @param {number} [options.height] The height of the canvas.
   * @param {Function} [options.beforeDraw] The function called before drawing the image onto the canvas.
   * @returns {Promise} Returns a promise that resolves to the generated canvas element.
   */
  $toCanvas(options?: {
    width?: number;
    height?: number;
    beforeDraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
  }): Promise<HTMLCanvasElement> {
      throw new Error("STUB");
  }
}
