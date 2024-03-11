import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/burmese';
import DefaultKeyboard from '../DefaultKeyboard';

export default class BurmeseKeyboard extends DefaultKeyboard {
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
