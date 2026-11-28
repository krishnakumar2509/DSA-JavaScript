/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let result = [];
    let sum=0;
    let maxCount=0;
    let map = new Map();
    map.set(0,-1);
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            result.push(-1);
            sum+=-1;
        }
        else{
            result.push(nums[i]);
            sum+=nums[i];
        }
        if(map.has(sum)){
            let count = i - map.get(sum);
            maxCount = Math.max(count,maxCount);
        }
        else{
             map.set(sum,i);
        }
       
    }
    return maxCount;
  
};