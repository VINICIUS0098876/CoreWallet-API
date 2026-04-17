const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transformIgnorePatterns: [
    "node_modules/(?!(mariadb)/)"
  ],
  transform: {
    ...tsJestTransformCfg,
  },
};