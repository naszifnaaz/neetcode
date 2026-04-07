class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
       
       let left = 0;
       let right = str.length - 1;

       while(left <= right) {
        if(str[left] != str[right])
            return false;
        else {
            left++;
            right--;
        }
       }

       return true;
    }
}
