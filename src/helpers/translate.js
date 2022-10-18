import { POLISH } from './polish.js';
import { ENGLISH } from './english.js';

const Lang = {
  EN: 'EN',
  PL: 'PL',
};

export const translate = (lang) => {
  switch (lang) {
    case Lang.EN:
      return ENGLISH;
    case Lang.PL:
      return POLISH;
    default:
      return ENGLISH;
  }
};
