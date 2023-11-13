import merge from 'lodash/merge';
import layout from 'simple-keyboard-layouts/build/layouts/french';
import DefaultKeyboard from '../DefaultKeyboard';

export default class FrenchKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      layout,
      display: {
        '{bksp}': 'effacer',
        '{enter}': '< entrée',
      },
      mergeDisplay: true,
    }, options));
  }
}
