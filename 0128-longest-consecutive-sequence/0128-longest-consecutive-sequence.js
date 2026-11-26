/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hash = new Set(nums);
    let longest = 0;
    for(no of hash){
        if(!hash.has(no-1)){
            let current = no;
            let count = 0;
            while(hash.has(no)){
                count++;
                no++;
            }
            longest = Math.max(longest,count);
        }
    }
    return longest;

};