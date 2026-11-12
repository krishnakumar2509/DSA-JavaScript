/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = 1;
    while(left<nums.length){
        let total = nums[left] + nums[right];
        if(total === target && left!==right){
            return [left,right];
        }
        if(right === nums.length-1){
            right=left+1;
            left++;
        }
        else{
            right++;
        }
        
    }
};