const repeatString = function(string, num) {
  let output = '';
  if (num < 0) return 'ERROR';
  for (i = 0; i < num; i++) {
    output += string;
  }
  return output;
};

module.exports = repeatString;
