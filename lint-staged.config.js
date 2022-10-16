module.exports = {
  '*.+(ts|js)': ['eslint --fix', 'prettier --write'],
  '*.+(css|scss)': ['stylelint --fix', 'prettier --write'],
};
