import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/ukrainian';
import DefaultKeyboard from '../DefaultKeyboard';

export default class UkrainianKeyboard extends DefaultKeyboard {
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
