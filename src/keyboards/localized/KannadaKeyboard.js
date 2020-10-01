import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/kannada';
import DefaultKeyboard from '../DefaultKeyboard';

export default class KannadaKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
    }, options));
  }
}
