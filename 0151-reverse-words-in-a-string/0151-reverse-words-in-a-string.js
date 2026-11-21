/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(/\s+/);
    let result = [];
    for(let left = words.length-1;left>=0;left--){
        result.push(words[left])
     
    }
    return result.join(" ")

};