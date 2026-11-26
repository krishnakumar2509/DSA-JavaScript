/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let left = 0;
    let right = nums.length-1;
    let result = new Array(nums.length);
    let position = nums.length-1;

    while(left <= right){
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if(leftSquare > rightSquare){
            result[position] = leftSquare;
            left++;
        }
        else{
            result[position] = rightSquare;
            right--;
        }
        position--;
    }
    return result;
  
};