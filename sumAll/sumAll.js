const sumAll = function(...nums) {
  nums.sort( (a,b) => a - b ); // puts in ascending order
  if (
    nums.some(num => num < 0) ||
    nums.some(num => !Number.isInteger(num))
  ) return 'ERROR';

  let a = nums[0];
  let b = nums[1];
  let sum = 0
  for (; a <= b; a++) sum += a;
  return sum;
};

module.exports = sumAll;
