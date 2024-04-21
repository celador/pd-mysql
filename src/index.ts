import { parser } from "./my.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

const config = parser.configure({
  props: [
    styleTags({
      Mustache: t.comment,
      SQL: t.content,
    }),
  ],
})

export const language = LRLanguage.define({
  name: "pd-mustache",
  parser: config,
  languageData: {
    // autocomplete: (...args) => { }
  }
});

export function Mustache() {
  return new LanguageSupport(language);
}
