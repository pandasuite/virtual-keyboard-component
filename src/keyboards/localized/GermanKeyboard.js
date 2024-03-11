import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/german';
import DefaultKeyboard from '../DefaultKeyboard';

export default class GermanKeyboard extends DefaultKeyboard {
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
