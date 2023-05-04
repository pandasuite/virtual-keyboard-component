import PandaBridge from 'pandasuite-bridge';
import 'simple-keyboard/build/css/index.css';

import html2canvas from 'html2canvas';

import DefaultKeyboard from './keyboards/DefaultKeyboard';
import MobileKeyboard from './keyboards/MobileKeyboard';
import IPadKeyboard from './keyboards/IPadKeyboard';
import NumericKeyboard from './keyboards/NumericKeyboard';

import './index.css';

import FrenchKeyboard from './keyboards/localized/FrenchKeyboard';
import ArabicKeyboard from './keyboards/localized/ArabicKeyboard';
import AssameseKeyboard from './keyboards/localized/AssameseKeyboard';
import BurmeseKeyboard from './keyboards/localized/BurmeseKeyboard';
import ChineseKeyboard from './keyboards/localized/ChineseKeyboard';
import CzechKeyboard from './keyboards/localized/CzechKeyboard';
import FarsiKeyboard from './keyboards/localized/FarsiKeyboard';
import GeorgianKeyboard from './keyboards/localized/GeorgianKeyboard';
import GermanKeyboard from './keyboards/localized/GermanKeyboard';
import GreekKeyboard from './keyboards/localized/GreekKeyboard';
import HebrewKeyboard from './keyboards/localized/HebrewKeyboard';
import HindiKeyboard from './keyboards/localized/HindiKeyboard';
import ItalianKeyboard from './keyboards/localized/ItalianKeyboard';
import JapaneseKeyboard from './keyboards/localized/JapaneseKeyboard';
import KannadaKeyboard from './keyboards/localized/KannadaKeyboard';
import KoreanKeyboard from './keyboards/localized/KoreanKeyboard';
import PolishKeyboard from './keyboards/localized/PolishKeyboard';
import RussianKeyboard from './keyboards/localized/RussianKeyboard';
import SindhiKeyboard from './keyboards/localized/SindhiKeyboard';
import SpanishKeyboard from './keyboards/localized/SpanishKeyboard';
import SwedishKeyboard from './keyboards/localized/SwedishKeyboard';
import ThaiKeyboard from './keyboards/localized/ThaiKeyboard';
import TurkishKeyboard from './keyboards/localized/TurkishKeyboard';
import UkrainianKeyboard from './keyboards/localized/UkrainianKeyboard';
import UrduKeyboard from './keyboards/localized/UrduKeyboard';

let keyboard = null;
let properties = null;

function onChange(input) {
  PandaBridge.send(PandaBridge.UPDATED, {
    queryable: {
      value: input,
    },
  });
  PandaBridge.send('changed', [{ value: input }]);
}

function sendScreenshot() {
  if (PandaBridge.isStudio) {
    html2canvas(document.body, {
      backgroundColor: null,
      scale: 2,
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          PandaBridge.send(PandaBridge.SCREENSHOT_RESULT, [e.target.result]);
        };
        fileReader.readAsDataURL(blob);
      });
    });
  }
}

function initKeyboard() {
  const options = {
    onChange: (input) => onChange(input),
    onInit: sendScreenshot,
    onValidate: (input) => PandaBridge.send('validated', [{ value: input }]),
    dark: properties.darkTheme,
  };

  if (properties.limitInputLength) {
    options.maxLength = properties.maxLength;
  }

  if (properties.layout === 'def') {
    keyboard = new DefaultKeyboard(options);
  } else if (properties.layout === 'mobile') {
    keyboard = new MobileKeyboard(options);
  } else if (properties.layout === 'ipad') {
    keyboard = new IPadKeyboard(options);
  } else if (properties.layout === 'numeric') {
    keyboard = new NumericKeyboard(options);
  } else if (properties.layout === 'french') {
    keyboard = new FrenchKeyboard(options);
  } else if (properties.layout === 'arabic') {
    keyboard = new ArabicKeyboard(options);
  } else if (properties.layout === 'assamese') {
    keyboard = new AssameseKeyboard(options);
  } else if (properties.layout === 'burmese') {
    keyboard = new BurmeseKeyboard(options);
  } else if (properties.layout === 'chinese') {
    keyboard = new ChineseKeyboard(options);
  } else if (properties.layout === 'czech') {
    keyboard = new CzechKeyboard(options);
  } else if (properties.layout === 'farsi') {
    keyboard = new FarsiKeyboard(options);
  } else if (properties.layout === 'georgian') {
    keyboard = new GeorgianKeyboard(options);
  } else if (properties.layout === 'german') {
    keyboard = new GermanKeyboard(options);
  } else if (properties.layout === 'greek') {
    keyboard = new GreekKeyboard(options);
  } else if (properties.layout === 'hebrew') {
    keyboard = new HebrewKeyboard(options);
  } else if (properties.layout === 'hindi') {
    keyboard = new HindiKeyboard(options);
  } else if (properties.layout === 'italian') {
    keyboard = new ItalianKeyboard(options);
  } else if (properties.layout === 'japanese') {
    keyboard = new JapaneseKeyboard(options);
  } else if (properties.layout === 'kannada') {
    keyboard = new KannadaKeyboard(options);
  } else if (properties.layout === 'korean') {
    keyboard = new KoreanKeyboard(options);
  } else if (properties.layout === 'polish') {
    keyboard = new PolishKeyboard(options);
  } else if (properties.layout === 'russian') {
    keyboard = new RussianKeyboard(options);
  } else if (properties.layout === 'sindhi') {
    keyboard = new SindhiKeyboard(options);
  } else if (properties.layout === 'spanish') {
    keyboard = new SpanishKeyboard(options);
  } else if (properties.layout === 'swedish') {
    keyboard = new SwedishKeyboard(options);
  } else if (properties.layout === 'thai') {
    keyboard = new ThaiKeyboard(options);
  } else if (properties.layout === 'turkish') {
    keyboard = new TurkishKeyboard(options);
  } else if (properties.layout === 'ukrainian') {
    keyboard = new UkrainianKeyboard(options);
  } else if (properties.layout === 'urdu') {
    keyboard = new UrduKeyboard(options);
  }
}

PandaBridge.init(() => {
  PandaBridge.onLoad((pandaData) => {
    properties = pandaData.properties;

    if (document.readyState === 'complete') {
      initKeyboard();
    } else {
      document.addEventListener('DOMContentLoaded', initKeyboard, false);
    }
  });

  PandaBridge.onUpdate((pandaData) => {
    properties = pandaData.properties;

    if (keyboard) {
      keyboard.destroy();
      initKeyboard();
    }
  });
});

PandaBridge.listen('setInput', ([params]) => {
  const { input } = params;

  if (keyboard) {
    keyboard.setInput(input);
    onChange(input);
  }
});

PandaBridge.listen('clearInput', () => {
  if (keyboard) {
    keyboard.clearInput();
    onChange('');
  }
});
