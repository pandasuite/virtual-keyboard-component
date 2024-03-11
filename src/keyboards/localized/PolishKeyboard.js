import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/polish';
import DefaultKeyboard from '../DefaultKeyboard';

export default class PolishKeyboard extends DefaultKeyboard {
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
