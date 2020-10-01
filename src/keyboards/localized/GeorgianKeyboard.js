import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/georgian';
import DefaultKeyboard from '../DefaultKeyboard';

export default class GeorgianKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
