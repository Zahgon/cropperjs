import CropperElement from '@cropper/element';
import {
  ACTION_NONE,
  ACTION_ROTATE,
  ACTION_SCALE,
  ACTION_TRANSFORM,
  ATTRIBUTE_ACTION,
  CROPPER_CANVAS,
  CROPPER_IMAGE,
  EVENT_ACTION,
  EVENT_ACTION_END,
  EVENT_ACTION_MOVE,
  EVENT_ACTION_START,
  EVENT_POINTER_DOWN,
  EVENT_POINTER_MOVE,
  EVENT_POINTER_UP,
  EVENT_WHEEL,
  getAdjustedSizes,
  isElement,
  isFunction,
  isNumber,
  isPlainObject,
  isPositiveNumber,
  isString,
  off,
  on,
} from '@cropper/utils';
import style from './style';

interface ActionEventData {
  action: string;
  relatedEvent: Event;
  scale?: number;
  rotate?: number;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  centerX?: number;
  centerY?: number;
}

export default class CropperCanvas extends CropperElement {
  static $name = CROPPER_CANVAS;

  static $version = '__VERSION__';

  protected $onPointerDown: EventListener | null = null;

  protected $onPointerMove: EventListener | null = null;

  protected $onPointerUp: EventListener | null = null;

  protected $onWheel: EventListener | null = null;

  protected $wheeling = false;

  protected readonly $pointers: Map<number, any> = new Map();

  protected $style = style;

  protected $action = ACTION_NONE;

  background = false;

  disabled = false;

  scaleStep = 0.1;

  themeColor = '#39f';

  protected static get observedAttributes(): string[] {
      throw new Error("STUB");
  }

  protected connectedCallback(): void {
      throw new Error("STUB");
  }

  protected disconnectedCallback(): void {
      throw new Error("STUB");
  }

  protected $propertyChangedCallback(name: string, oldValue: unknown, newValue: unknown): void {
      throw new Error("STUB");
  }

  protected $bind(): void {
      throw new Error("STUB");
  }

  protected $unbind(): void {
      throw new Error("STUB");
  }

  protected $handlePointerDown(event: Event): void {
      throw new Error("STUB");
  }

  protected $handlePointerMove(event: Event): void {
      throw new Error("STUB");
  }

  protected $handlePointerUp(event: Event): void {
      throw new Error("STUB");
  }

  protected $handleWheel(event: Event): void {
      throw new Error("STUB");
  }

  /**
   * Changes the current action to a new one.
   * @param {string} action The new action.
   * @returns {CropperCanvas} Returns `this` for chaining.
   */
  $setAction(action: string): this {
      throw new Error("STUB");
  }

  /**
   * Generates a real canvas element, with the image draw into if there is one.
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
