import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/chinese';
import DefaultKeyboard from '../DefaultKeyboard';

export default class ChineseKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
