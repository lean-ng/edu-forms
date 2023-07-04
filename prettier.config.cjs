/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  importOrderTypeScriptVersion: "5.1",
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrder: [
    "^@angular/$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~(.*)$",
    "",
    "^[./]",
  ],
};
