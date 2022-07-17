const func = (nums: number[]) => {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

const a = [1, 2, 3];
const ret = func(a);
console.log(ret);