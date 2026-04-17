const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  // 2. Abrimos a exceção para a pasta do mariadb na node_modules
  transformIgnorePatterns: [
    'node_modules/(?!(mariadb)/)',
  ],
  
  // 3. Garantimos que ele tenta ler todas as extensões
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    ...tsJestTransformCfg,
  },
};