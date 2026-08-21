import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const dataDir = new URL("../data/", import.meta.url);
const sources = JSON.parse(fs.readFileSync(new URL("knowledgeLibraryEnglishStrings.json", dataDir), "utf8"));
const translations = JSON.parse(fs.readFileSync(new URL("generatedKnowledgeLibraryTranslations.json", dataDir), "utf8"));
const generatedLocales = ["ja", "de", "ar", "id", "it"];

test("knowledge-library dictionaries cover every visible English source string", () => {
  for (const locale of generatedLocales) {
    const dictionary = translations[locale];
    assert.ok(dictionary, `${locale} dictionary is present`);
    for (const source of sources) {
      const target = dictionary[source];
      assert.equal(typeof target, "string", `${locale}: ${source.slice(0, 80)}`);
      assert.notEqual(target.trim(), "", `${locale}: ${source.slice(0, 80)}`);
      if (source.length >= 40) assert.notEqual(target, source, `${locale}: substantive English fallback`);
    }
  }
});

test("Japanese and Arabic knowledge-library prose retains the target script", () => {
  for (const source of sources.filter((value) => value.length >= 40)) {
    assert.match(translations.ja[source], /[\u3040-\u30ff\u3400-\u9fff]/, `ja: ${source.slice(0, 80)}`);
    assert.match(translations.ar[source], /[\u0600-\u06ff]/, `ar: ${source.slice(0, 80)}`);
  }
});
