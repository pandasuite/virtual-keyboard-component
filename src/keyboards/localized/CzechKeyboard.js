import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/czech';
import DefaultKeyboard from '../DefaultKeyboard';

export default class CzechKeyboard extends DefaultKeyboard {
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
