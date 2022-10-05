module.exports = {
  '*.+(ts|js)': ['eslint --fix', 'prettier --write'],
  '*.scss': ['stylelint --config ./stylelintrc.json'],
};
