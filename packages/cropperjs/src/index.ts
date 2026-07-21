import {
  CROPPER_CANVAS,
  CROPPER_IMAGE,
  CROPPER_SELECTION,
  getRootDocument,
  isElement,
  isString,
} from '@cropper/utils';
import {
  CropperCanvas,
  CropperCrosshair,
  CropperGrid,
  CropperHandle,
  CropperImage,
  CropperSelection,
  CropperShade,
  CropperViewer,
} from '@cropper/elements';
import DEFAULT_TEMPLATE from './template';

export interface CropperOptions {
  container?: Element | string;
  template?: string;
}

const REGEXP_ALLOWED_ELEMENTS = /^img|canvas$/;
const REGEXP_BLOCKED_TAGS = /<(\/?(?:script|style)[^>]*)>/gi;
const DEFAULT_OPTIONS: CropperOptions = {
  template: DEFAULT_TEMPLATE,
};

CropperCanvas.$define();
CropperCrosshair.$define();
CropperGrid.$define();
CropperHandle.$define();
CropperImage.$define();
CropperSelection.$define();
CropperShade.$define();
CropperViewer.$define();

export { DEFAULT_TEMPLATE };
export * from '@cropper/utils';
export * from '@cropper/elements';
export default class Cropper {
  static version = '__VERSION__';

  element: HTMLImageElement | HTMLCanvasElement;

  options: CropperOptions = DEFAULT_OPTIONS;

  container: Element;

  constructor(
    element: HTMLImageElement | HTMLCanvasElement | string,
    options?: CropperOptions,
  ) {
      throw new Error("STUB");
  }

  getCropperCanvas(): CropperCanvas | null {
      throw new Error("STUB");
  }

  getCropperImage(): CropperImage | null {
      throw new Error("STUB");
  }

  getCropperSelection(): CropperSelection | null {
      throw new Error("STUB");
  }

  getCropperSelections(): NodeListOf<CropperSelection> | null {
      throw new Error("STUB");
  }

  destroy(): void {
      throw new Error("STUB");
  }
}
