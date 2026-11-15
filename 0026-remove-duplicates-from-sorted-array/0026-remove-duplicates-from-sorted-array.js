/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left=0;
    let right=1;
    let temp 
    while(right<nums.length){
        if(nums[left] !== nums[right]){
            left++;
            nums[left] = nums[right];
        }
        right++;
        
    }
    return left+1;
};