import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/italian';
import DefaultKeyboard from '../DefaultKeyboard';

export default class ItalianKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
