import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/urdu';
import DefaultKeyboard from '../DefaultKeyboard';

export default class UrduKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
