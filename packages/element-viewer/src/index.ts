import CropperElement from '@cropper/element';
import type { Selection } from '@cropper/element-selection';
import type CropperCanvas from '@cropper/element-canvas';
import type CropperImage from '@cropper/element-image';
import type CropperSelection from '@cropper/element-selection';
import {
  CROPPER_CANVAS,
  CROPPER_IMAGE,
  CROPPER_SELECTION,
  CROPPER_VIEWER,
  EVENT_CHANGE,
  EVENT_LOAD,
  EVENT_TRANSFORM,
  getRootDocument,
  isElement,
  off,
  on,
} from '@cropper/utils';
import style from './style';

const canvasCache = new WeakMap();
const imageCache = new WeakMap();
const selectionCache = new WeakMap();
const sourceImageCache = new WeakMap();

export const RESIZE_BOTH = 'both';
export const RESIZE_HORIZONTAL = 'horizontal';
export const RESIZE_VERTICAL = 'vertical';
export const RESIZE_NONE = 'none';
export default class CropperViewer extends CropperElement {
  static $name = CROPPER_VIEWER;

  static $version = '__VERSION__';

  protected $onSelectionChange: EventListener | null = null;

  protected $onSourceImageLoad: EventListener | null = null;

  protected $onSourceImageTransform: EventListener | null = null;

  protected $scale = 1;

  protected $style = style;

  resize: string = RESIZE_VERTICAL;

  selection = '';

  slottable = false;

  protected set $image(element: CropperImage) {
      throw new Error("STUB");
  }

  protected get $image(): CropperImage {
      throw new Error("STUB");
  }

  protected set $sourceImage(element: CropperImage) {
      throw new Error("STUB");
  }

  protected get $sourceImage(): CropperImage {
      throw new Error("STUB");
  }

  protected set $canvas(element: CropperCanvas) {
      throw new Error("STUB");
  }

  protected get $canvas(): CropperCanvas {
      throw new Error("STUB");
  }

  set $selection(element: CropperSelection) {
      throw new Error("STUB");
  }

  get $selection(): CropperSelection {
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

  protected $handleSelectionChange(event: Event): void {
      throw new Error("STUB");
  }

  protected $handleSourceImageLoad(): void {
      throw new Error("STUB");
  }

  protected $handleSourceImageTransform(event?: Event): void {
      throw new Error("STUB");
  }

  protected $render(selection?: Selection, matrix?: number[]): void {
      throw new Error("STUB");
  }

  protected $transformImageByOffset(matrix: number[], x: number, y: number): void {
      throw new Error("STUB");
  }
}
