import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/russian';
import DefaultKeyboard from '../DefaultKeyboard';

export default class RussianKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
