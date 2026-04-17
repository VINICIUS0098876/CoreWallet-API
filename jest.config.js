const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  // 1. Dizemos ao ts-jest para processar tanto .ts como .js
  transform: {
    '^.+\\.(ts|js)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  // 2. A linha mágica: "Ignora tudo na node_modules, EXCEPTO o mariadb"
  transformIgnorePatterns: [
    "node_modules/(?!(mariadb)/)"
  ],
  // 3. Ajuda o Jest a encontrar os ficheiros corretamente
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    ...tsJestTransformCfg,
  },
};