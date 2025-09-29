import Keyboard from 'simple-keyboard';
import merge from 'lodash/merge';

import { getKeyboardLabels } from '../i18n/keyboardLabels';

export default class DefaultKeyboard {
  constructor(options) {
    const language = options && options.language;
    const labels = getKeyboardLabels(language);
    const keyboardOptions = merge(
      {
        onKeyPress: (button) => this.onKeyPress(button),
        theme: 'hg-theme-default',
        display: {
          '{bksp}': labels.backspace,
          '{enter}': labels.enterWithArrow,
        },
        mergeDisplay: true,
      },
      options,
    );

    if (keyboardOptions.dark) {
      keyboardOptions.theme += ' darkTheme';
    }
    if (options.onValidate) {
      this.onValidate = options.onValidate;
    }
    this.keyboard = new Keyboard(keyboardOptions);
  }

  onKeyPress(button) {
    if (button === '{shift}' || button === '{lock}') {
      this.handleShift();
    } else if (
      (button === '{enter}' || button === '{ent}') &&
      this.onValidate
    ) {
      this.onValidate(this.keyboard.getInput());
    }
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    this.keyboard.setOptions({
      layoutName: shiftToggle,
    });
  }

  setInput(input) {
    this.keyboard.replaceInput({ default: input });
  }

  clearInput() {
    this.keyboard.clearInput();
  }

  destroy() {
    this.keyboard.destroy();
  }
}
