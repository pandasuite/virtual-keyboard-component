import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/assamese';
import DefaultKeyboard from '../DefaultKeyboard';

export default class AssameseKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
