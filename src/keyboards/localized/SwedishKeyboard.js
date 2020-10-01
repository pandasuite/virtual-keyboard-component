import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/swedish';
import DefaultKeyboard from '../DefaultKeyboard';

export default class SwedishKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
