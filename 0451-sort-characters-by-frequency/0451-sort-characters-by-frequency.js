/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(ch of s){
        map.set(ch,(map.get(ch)||0)+1);
    }
    let entries = [...map.entries()];
    entries.sort((a,b)=> b[1] - a[1]);
    let result = "";
    for(let i=0;i<entries.length;i++){
        result+=entries[i][0].repeat(entries[i][1])
    }
    return result;
};