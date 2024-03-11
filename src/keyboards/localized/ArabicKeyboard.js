import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/arabic';
import DefaultKeyboard from '../DefaultKeyboard';

export default class ArabicKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(
      merge(
        {
          layout,
        },
        options,
      ),
    );
  }
}
