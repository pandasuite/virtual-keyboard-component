import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/turkish';
import DefaultKeyboard from '../DefaultKeyboard';

export default class TurkishKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
