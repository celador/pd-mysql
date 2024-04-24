import { parser } from "./my.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const language = LRLanguage.define({
  name: "pd-mustache",
  parser: parser.configure({
    props: [
      styleTags({
        Mustache: t.comment,
        OpenMustache: t.comment,
        CloseMustache: t.comment,
        SQL: t.content,
        VariablePath: t.variableName,
      }),
    ],
  }),
});

export function Mustache() {
  return new LanguageSupport(language);
}
