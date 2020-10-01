import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/hebrew';
import DefaultKeyboard from '../DefaultKeyboard';

export default class HebrewKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
