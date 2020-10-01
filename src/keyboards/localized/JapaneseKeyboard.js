import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/japanese';
import DefaultKeyboard from '../DefaultKeyboard';

export default class JapaneseKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
