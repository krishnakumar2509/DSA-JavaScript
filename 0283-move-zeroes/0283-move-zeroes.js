/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right=0;
    let temp;
    for(right;right<nums.length;right++){
        if(nums[right] !==0){
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }
    return nums;
};