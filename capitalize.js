const capitalize = (str) => {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
};

module.exports = capitalize;
