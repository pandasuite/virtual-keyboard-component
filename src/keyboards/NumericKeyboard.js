import merge from 'lodash/merge';
import DefaultKeyboard from './DefaultKeyboard';
import { getKeyboardLabels } from '../i18n/keyboardLabels';

export default class NumericKeyboard extends DefaultKeyboard {
  constructor(options) {
    const language = options && options.language;
    const labels = getKeyboardLabels(language);
    super(
      merge(
        {
          layout: {
            default: ['1 2 3', '4 5 6', '7 8 9', '{shift} 0 _', '{bksp}'],
            shift: ['! / #', '$ % ^', '& * (', '{shift} ) +', '{bksp}'],
          },
          display: {
            '{bksp}': labels.backspace,
          },
          mergeDisplay: true,
          theme: 'hg-theme-default hg-layout-numeric numeric-theme',
        },
        options,
      ),
    );
  }
}
