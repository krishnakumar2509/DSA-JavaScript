/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let merge = []
    while((left<m) && (right<n)){
        if(nums1[left] <= nums2[right]){
            merge.push(nums1[left]);
            left++;
        }
        else{
            merge.push(nums2[right]);
            right++;
        }
    }
    if(left === m){
        for(let i=right;i<n;i++){
            merge.push(nums2[i])
        }
    }
    else{
        for(let j=left;j<m;j++){
            merge.push(nums1[j])
        }
    }
   
    for (let k = 0; k < m + n; k++) {
    nums1[k] = merge[k];
}
  
};