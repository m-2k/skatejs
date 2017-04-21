// @flow

interface EventOptions {
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
  detail?: any
}

const { Event, HTMLElement } = window;
const defs: EventOptions = {
  bubbles: true,
  cancelable: true,
  composed: false
};

export function emit (elem: HTMLElement, name: string, opts: EventOptions) {
  opts = { ...defs, ...opts };
  const e: Event = document.createEvent('CustomEvent');
  e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
  Object.defineProperty(e, 'composed', { value: opts.composed });
  return elem.dispatchEvent(e);
}
