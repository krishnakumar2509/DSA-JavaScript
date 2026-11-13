/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freq1={};
     if(s.length !== t.length){
        return false;
    }
    for(let ch1 of s){
        freq1[ch1] = (freq1[ch1]||0)+1;
    }
    for(let ch2 of t){
        if(!freq1[ch2]){
            return false
        }
        freq1[ch2]--;
    }
    return true;

};