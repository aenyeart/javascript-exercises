const ftoc = function(temperature) {
  let celsius = (temperature - 32)/1.8;
  let nearest10th = Math.round(celsius * 10)/10;
  return nearest10th;
};

const ctof = function(temperature) {
  let fahrenheit = (temperature * 1.8) + 32;
  let nearest10th = Math.round(fahrenheit * 10)/10;
  return nearest10th;
};

module.exports = {
  ftoc,
  ctof
};
