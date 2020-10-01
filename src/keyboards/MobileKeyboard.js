import merge from 'lodash/merge';
import DefaultKeyboard from './DefaultKeyboard';

export default class MobileKeyboard extends DefaultKeyboard {
  constructor(options) {
    super(merge({
      mergeDisplay: true,
      layoutName: 'default',
      layout: {
        default: [
          'q w e r t y u i o p',
          'a s d f g h j k l',
          '{shift} z x c v b n m {backspace}',
          '{numbers} {space} {ent}',
        ],
        shift: [
          'Q W E R T Y U I O P',
          'A S D F G H J K L',
          '{shift} Z X C V B N M {backspace}',
          '{numbers} {space} {ent}',
        ],
        numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}'],
      },
      display: {
        '{numbers}': '123',
        '{ent}': 'return',
        '{escape}': 'esc ⎋',
        '{tab}': 'tab ⇥',
        '{backspace}': '⌫',
        '{capslock}': 'caps lock ⇪',
        '{shift}': '⇧',
        '{controlleft}': 'ctrl ⌃',
        '{controlright}': 'ctrl ⌃',
        '{altleft}': 'alt ⌥',
        '{altright}': 'alt ⌥',
        '{metaleft}': 'cmd ⌘',
        '{metaright}': 'cmd ⌘',
        '{abc}': 'ABC',
      },
    }, options));
  }

  onKeyPress(button) {
    super.onKeyPress(button);
    if (button === '{numbers}' || button === '{abc}') {
      this.handleNumbers();
    }
  }

  handleNumbers() {
    const currentLayout = this.keyboard.options.layoutName;
    const numbersToggle = currentLayout !== 'numbers' ? 'numbers' : 'default';

    this.keyboard.setOptions({
      layoutName: numbersToggle,
    });
  }
}
