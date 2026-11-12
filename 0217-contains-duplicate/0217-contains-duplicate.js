/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let left=0;
  let right=1;
  let seen = new Set();
  for(num of nums){
    if(seen.has(num)){
        return true;
    }
        seen.add(num)
  }
  return false;
};