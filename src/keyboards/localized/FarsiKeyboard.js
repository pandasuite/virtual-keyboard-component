import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/farsi';
import DefaultKeyboard from '../DefaultKeyboard';

export default class FarsiKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
