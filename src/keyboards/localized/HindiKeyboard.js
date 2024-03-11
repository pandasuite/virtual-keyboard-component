import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/hindi';
import DefaultKeyboard from '../DefaultKeyboard';

export default class HindiKeyboard extends DefaultKeyboard {
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
