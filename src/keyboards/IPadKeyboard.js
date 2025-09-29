import merge from 'lodash/merge';
import DefaultKeyboard from './DefaultKeyboard';
import { getKeyboardLabels } from '../i18n/keyboardLabels';

export default class IPadKeyboard extends DefaultKeyboard {
  constructor(options) {
    const language = options && options.language;
    const labels = getKeyboardLabels(language);
    super(
      merge(
        {
          theme: 'hg-theme-default hg-theme-ios',
          layout: {
            default: [
              'q w e r t y u i o p {bksp}',
              'a s d f g h j k l {enter}',
              '{shift} z x c v b n m , . {shift}',
              '{alt} {smileys} {space} {altright} {downkeyboard}',
            ],
            shift: [
              'Q W E R T Y U I O P {bksp}',
              'A S D F G H J K L {enter}',
              '{shiftactivated} Z X C V B N M , . {shiftactivated}',
              '{alt} {smileys} {space} {altright} {downkeyboard}',
            ],
            alt: [
              '1 2 3 4 5 6 7 8 9 0 {bksp}',
              '@ # $ & * ( ) \' " {enter}',
              '{shift} % - + = / ; : ! ? {shift}',
              '{default} {smileys} {space} {back} {downkeyboard}',
            ],
            smileys: [
              '😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}',
              '😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}',
              '😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}',
              '{default} {smileys} {space} {altright} {downkeyboard}',
            ],
          },
          display: {
            '{alt}': '.?123',
            '{smileys}': '\uD83D\uDE03',
            '{shift}': '⇧',
            '{shiftactivated}': '⇧',
            '{enter}': labels.returnKey,
            '{bksp}': '⌫',
            '{altright}': '.?123',
            '{downkeyboard}': '🞃',
            '{space}': ' ',
            '{default}': 'ABC',
            '{back}': '⇦',
          },
        },
        options,
      ),
    );
  }

  onKeyPress(button) {
    if (button.includes('{') && button.includes('}')) {
      this.handleLayoutChange(button);
    }
  }

  handleLayoutChange(button) {
    const currentLayout = this.keyboard.options.layoutName;
    let layoutName;

    switch (button) {
      case '{shift}':
      case '{shiftactivated}':
      case '{default}':
        layoutName = currentLayout === 'default' ? 'shift' : 'default';
        break;

      case '{alt}':
      case '{altright}':
        layoutName = currentLayout === 'alt' ? 'default' : 'alt';
        break;

      case '{smileys}':
        layoutName = currentLayout === 'smileys' ? 'default' : 'smileys';
        break;

      case '{downkeyboard}':
        if (this.onValidate) {
          this.onValidate(this.keyboard.getInput());
        }
        break;

      default:
        break;
    }

    if (layoutName) {
      this.keyboard.setOptions({
        layoutName,
      });
    }
  }
}
