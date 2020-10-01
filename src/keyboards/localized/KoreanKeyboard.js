import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/korean';
import DefaultKeyboard from '../DefaultKeyboard';

export default class KoreanKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
