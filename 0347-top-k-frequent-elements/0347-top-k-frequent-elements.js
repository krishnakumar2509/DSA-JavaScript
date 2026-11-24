/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for(let ch of nums){
        map.set(ch,(map.get(ch)||0)+1)
    }
    
    let entries = [...map.entries()];
    entries.sort((a,b)=>b[1] - a[1] )
    let result = [];
    for(let i=0;i<k;i++){
        result.push(entries[i][0])
    }
    return result;
    
};