/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq={};
    for(let no of nums){
        freq[no] = (freq[no]||0)+1;
    }
    let maxCount = 0;
    let high = null;
    for(let [no1,count] of Object.entries(freq)){
        if(count>maxCount){
            maxCount = count;
            high=Number(no1);
        }
    }
    return high;
};