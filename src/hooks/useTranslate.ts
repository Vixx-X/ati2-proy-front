import { useCallback } from 'react';

import userStore from '@stores/UserStore';

import en from '../translations/en.json';

interface TransDict {
  [name: string]: any;
}

const Format = function (str: string, ...args: any[]): string {
  if (!args) return str;
  return str.replace(/{(\d+)}/g, function (match: any, number: number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

const translationDict: TransDict = {
  EN: en,
};

export default function useTranslate() {
  const lang = userStore((state: any) => state.lang);

  const t = useCallback(
    (text: string, ...args: any[]): string => {
      const dict = translationDict?.[lang];
      const found = dict?.[text];
      if (found === undefined && dict !== undefined) {
        console.warn(`translation: '${text}' was not translated`);
      }
      const ret = found ?? text;
      if (!args) return ret;
      return Format(ret, ...args);
    },
    [lang]
  );

  return t;
}
