/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0;
    let map = new Map();
    let count = 0;
    map.set(0,1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let prevSum = sum - k;
        if(map.has(prevSum)){
            count+= map.get(prevSum);
        }
        map.set(sum,(map.get(sum)||0)+1)
    }
    return count;
};