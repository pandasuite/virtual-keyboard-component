import merge from 'lodash/merge';
import DefaultKeyboard from './DefaultKeyboard';

export default class NumericKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(
      merge(
        {
          layout: {
            default: ['1 2 3', '4 5 6', '7 8 9', '{shift} 0 _', '{bksp}'],
            shift: ['! / #', '$ % ^', '& * (', '{shift} ) +', '{bksp}'],
          },
          display: {
            '{bksp}': options.language.startsWith('fr')
              ? 'effacer'
              : 'backspace',
          },
          mergeDisplay: true,
          theme: 'hg-theme-default hg-layout-numeric numeric-theme',
        },
        options,
      ),
    );
  }
}
