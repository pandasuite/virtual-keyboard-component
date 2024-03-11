import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/greek';
import DefaultKeyboard from '../DefaultKeyboard';

export default class GreekKeyboard extends DefaultKeyboard {
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
