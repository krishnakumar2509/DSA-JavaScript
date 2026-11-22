/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let words = s.split(" ");
    let result = [];

        for(let left=0;left<words.length;left++){
            let reversed = "";

            for(let right = words[left].length-1;right>=0;right--){
                reversed+=words[left][right]
                }
                result.push(reversed)
            }

        return result.join(" ");

    
};