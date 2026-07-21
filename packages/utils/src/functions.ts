import { WINDOW } from './constants';

/**
 * Check if the given value is a string.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the given value is a string, else `false`.
 */
export function isString(value: unknown): value is string {
    throw new Error("STUB");
}

/**
 * Check if the given value is not a number.
 */
export const isNaN = Number.isNaN || WINDOW.isNaN;

/**
 * Check if the given value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
export function isNumber(value: unknown): value is number {
    throw new Error("STUB");
}

/**
 * Check if the given value is a positive number.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
 */
export function isPositiveNumber(value: unknown): value is number {
    throw new Error("STUB");
}

/**
 * Check if the given value is undefined.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */
export function isUndefined(value: unknown): value is undefined {
    throw new Error("STUB");
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

const { hasOwnProperty } = Object.prototype;

/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
    throw new Error("STUB");
}

/**
 * Check if the given value is a function.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
    throw new Error("STUB");
}

/**
 * Check if the given node is an element.
 * @param {*} node The node to check.
 * @returns {boolean} Returns `true` if the given node is an element; otherwise, `false`.
 */
export function isElement(node: unknown): node is Element {
    throw new Error("STUB");
}

const REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

/**
 * Transform the given string from camelCase to kebab-case.
 * @param {string} value The value to transform.
 * @returns {string} Returns the transformed value.
 */
export function toKebabCase(value: string): string {
  return String(value).replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
}

const REGEXP_KEBAB_CASE = /-[A-z\d]/g;

/**
 * Transform the given string from kebab-case to camelCase.
 * @param {string} value The value to transform.
 * @returns {string} Returns the transformed value.
 */
export function toCamelCase(value: string): string {
    throw new Error("STUB");
}

const REGEXP_SPACES = /\s\s*/;

/**
 * Remove event listener from the event target.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener}
 * @param {EventTarget} target The target of the event.
 * @param {string} types The types of the event.
 * @param {EventListenerOrEventListenerObject} listener The listener of the event.
 * @param {EventListenerOptions} [options] The options specify characteristics about the event listener.
 */
export function off(
  target: EventTarget,
  types: string,
  listener: EventListenerOrEventListenerObject,
  options?: EventListenerOptions,
): void {
    throw new Error("STUB");
}

/**
 * Add event listener to the event target.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}
 * @param {EventTarget} target The target of the event.
 * @param {string} types The types of the event.
 * @param {EventListenerOrEventListenerObject} listener The listener of the event.
 * @param {AddEventListenerOptions} [options] The options specify characteristics about the event listener.
 */
export function on(
  target: EventTarget,
  types: string,
  listener: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions,
): void {
    throw new Error("STUB");
}

/**
 * Add once event listener to the event target.
 * @param {EventTarget} target The target of the event.
 * @param {string} types The types of the event.
 * @param {EventListenerOrEventListenerObject} listener The listener of the event.
 * @param {AddEventListenerOptions} [options] The options specify characteristics about the event listener.
 */
export function once(
  target: EventTarget,
  types: string,
  listener: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions,
): void {
    throw new Error("STUB");
}

const defaultEventOptions: CustomEventInit = {
  bubbles: true,
  cancelable: true,
  composed: true,
};

/**
 * Dispatch event on the event target.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent}
 * @param {EventTarget} target The target of the event.
 * @param {string} type The name of the event.
 * @param {*} [detail] The data passed when initializing the event.
 * @param {CustomEventInit} [options] The other event options.
 * @returns {boolean} Returns the result value.
 */
export function emit(
  target: EventTarget,
  type: string,
  detail?: unknown,
  options?: CustomEventInit,
): boolean {
    throw new Error("STUB");
}

/**
 * Get the real event target by checking composed path.
 * This is useful when dealing with events that can cross shadow DOM boundaries.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath}
 * @param {Event} event The event object.
 * @returns {EventTarget | null} The first element in the composed path, or the original event target.
 */
export function getComposedPathTarget(event: Event): EventTarget | null {
    throw new Error("STUB");
}

const resolvedPromise: Promise<any> = Promise.resolve();

/**
 * Defers the callback to be executed after the next DOM update cycle.
 * @param {*} [context] The `this` context.
 * @param {Function} [callback] The callback to execute after the next DOM update cycle.
 * @returns {Promise} A promise that resolves to nothing.
 */
export function nextTick(context?: unknown, callback?: () => void): Promise<void> {
    throw new Error("STUB");
}

/**
 * Get the root document node.
 * @param {Element} element The target element.
 * @returns {Document|DocumentFragment|null} The document node.
 */
export function getRootDocument(element: Element): Document | DocumentFragment | null {
    throw new Error("STUB");
}

/**
 * Get the offset base on the document.
 * @param {Element} element The target element.
 * @returns {object} The offset data.
 */
export function getOffset(element: Element): {
  left: number;
  top: number;
} {
    throw new Error("STUB");
}

const REGEXP_ANGLE_UNIT = /deg|g?rad|turn$/i;

/**
 * Convert an angle to a radian number.
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/angle}
 * @param {number|string} angle The angle to convert.
 * @returns {number} Returns the radian number.
 */
export function toAngleInRadian(angle: number | string): number {
    throw new Error("STUB");
}

interface SizeAdjustmentData {
  aspectRatio: number;
  height: number;
  width: number;
}

interface SizeAdjustmentDataWithoutWidth {
  aspectRatio: number;
  height: number;
}

interface SizeAdjustmentDataWithoutHeight {
  aspectRatio: number;
  width: number;
}

type SizeAdjustmentType = 'contain' | 'cover';
const SIZE_ADJUSTMENT_TYPE_CONTAIN: SizeAdjustmentType = 'contain';
const SIZE_ADJUSTMENT_TYPE_COVER: SizeAdjustmentType = 'cover';

/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {object} data The original sizes.
 * @param {string} [type] The adjust type.
 * @returns {object} Returns the result sizes.
 */
export function getAdjustedSizes(
  data: SizeAdjustmentData | SizeAdjustmentDataWithoutWidth | SizeAdjustmentDataWithoutHeight,
  type: SizeAdjustmentType = SIZE_ADJUSTMENT_TYPE_CONTAIN,
): {
    width: number;
    height: number;
  } {
    throw new Error("STUB");
}

/**
 * Multiply multiple matrices.
 * @param {Array} matrix The first matrix.
 * @param {Array} args The rest matrices.
 * @returns {Array} Returns the result matrix.
 */
export function multiplyMatrices(matrix: number[], ...args: number[][]): number[] {
    throw new Error("STUB");
}
