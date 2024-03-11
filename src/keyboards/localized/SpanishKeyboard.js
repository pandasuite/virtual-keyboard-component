import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/spanish';
import DefaultKeyboard from '../DefaultKeyboard';

export default class SpanishKeyboard extends DefaultKeyboard {
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
