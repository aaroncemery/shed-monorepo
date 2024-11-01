export default {
  extends: ["@repo/eslint-config/library"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  }
};
