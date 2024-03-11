import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/sindhi';
import DefaultKeyboard from '../DefaultKeyboard';

export default class SindhiKeyboard extends DefaultKeyboard {
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
