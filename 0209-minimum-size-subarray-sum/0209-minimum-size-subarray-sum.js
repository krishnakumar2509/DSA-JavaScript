/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let curSum = 0;
    let minRunCount = Infinity;

    for(let right = 0;right<nums.length;right++){
        curSum+=nums[right];

        while(curSum >= target){
            minRunCount = Math.min(minRunCount,right - left + 1);
            curSum-=nums[left];
            left++;
        }
    }
    return minRunCount === Infinity ? 0 : minRunCount

};