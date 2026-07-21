import CropperElement from '@cropper/element';
import type CropperCanvas from '@cropper/element-canvas';
import type CropperSelection from '@cropper/element-selection';
import {
  ACTION_SELECT,
  CROPPER_CANVAS,
  CROPPER_SELECTION,
  CROPPER_SHADE,
  EVENT_ACTION_END,
  EVENT_ACTION_START,
  EVENT_CHANGE,
  EVENT_RESIZE,
  WINDOW,
  isNumber,
  off,
  on,
} from '@cropper/utils';
import style from './style';

const canvasCache = new WeakMap();

export default class CropperShade extends CropperElement {
  static $name = CROPPER_SHADE;

  static $version = '__VERSION__';

  protected $onWindowResize: EventListener | null = null;

  protected $onCanvasActionEnd: EventListener | null = null;

  protected $onCanvasActionStart: EventListener | null = null;

  protected $onSelectionChange: EventListener | null = null;

  protected $style = style;

  x = 0;

  y = 0;

  width = 0;

  height = 0;

  slottable = false;

  themeColor = 'rgba(0, 0, 0, 0.65)';

  protected set $canvas(element: CropperCanvas) {
      throw new Error("STUB");
  }

  protected get $canvas(): CropperCanvas {
      throw new Error("STUB");
  }

  protected static get observedAttributes(): string[] {
      throw new Error("STUB");
  }

  protected connectedCallback(): void {
      throw new Error("STUB");
  }

  protected disconnectedCallback(): void {
      throw new Error("STUB");
  }

  /**
   * Changes the position and/or size of the shade.
   * @param {number} x The new position in the horizontal direction.
   * @param {number} y The new position in the vertical direction.
   * @param {number} [width] The new width.
   * @param {number} [height] The new height.
   * @returns {CropperShade} Returns `this` for chaining.
   */
  $change(x: number, y: number, width: number = this.width, height: number = this.height): this {
      throw new Error("STUB");
  }

  /**
   * Resets the shade to its initial position and size.
   * @returns {CropperShade} Returns `this` for chaining.
   */
  $reset(): this {
      throw new Error("STUB");
  }

  /**
   * Refreshes the position or size of the shade.
   * @returns {CropperShade} Returns `this` for chaining.
   */
  $render(): this {
      throw new Error("STUB");
  }
}
