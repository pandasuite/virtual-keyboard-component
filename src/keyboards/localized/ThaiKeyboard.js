import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/thai';
import DefaultKeyboard from '../DefaultKeyboard';

export default class ThaiKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
