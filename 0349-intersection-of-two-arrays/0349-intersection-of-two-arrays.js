/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set();
    for(let i=0;i<nums1.length;i++){
        set1.add(nums1[i]);
    }
    let set2 = new Set();
    for(let j=0;j<nums2.length;j++){
        if(set1.has(nums2[j])){
            set2.add(nums2[j]);
        }
    }
    return [...set2];
};