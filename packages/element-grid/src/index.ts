import CropperElement from '@cropper/element';
import { CROPPER_GIRD } from '@cropper/utils';
import style from './style';

export default class CropperGrid extends CropperElement {
  static $name = CROPPER_GIRD;

  static $version = '__VERSION__';

  protected $style = style;

  bordered = false;

  columns = 3;

  covered = false;

  rows = 3;

  slottable = false;

  themeColor = 'rgba(238, 238, 238, 0.5)';

  protected static get observedAttributes(): string[] {
      throw new Error("STUB");
  }

  protected $propertyChangedCallback(name: string, oldValue: unknown, newValue: unknown): void {
      throw new Error("STUB");
  }

  protected connectedCallback(): void {
      throw new Error("STUB");
  }

  protected $render(): void {
      throw new Error("STUB");
  }
}
