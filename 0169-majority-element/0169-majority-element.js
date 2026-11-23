/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq= new Map();
    for(let i=0;i<nums.length;i++){
        freq.set(nums[i],(freq.get(nums[i]) || 0) + 1)
    }
    for(let [key,value] of freq){
        if(value> nums.length/2){
            return key;
        }
    }
   
};