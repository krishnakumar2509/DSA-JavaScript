/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    let flag = true;
    const isAlphaNumeric = (num)=>{
      return  num >= '0' && num <= '9' || num >= 'a' && num <= 'z' || num >= 'A' && num <= 'Z' 
    }
    while(left < right){
        while(left < right && !isAlphaNumeric(s[left])){
            left++;
        }
         while(left < right && !isAlphaNumeric(s[right])){
            right--;
        }
         
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
            left++;
            right--;
    }
    return true;
};