class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let len = 0;
        let max = 0;
        
        for(let num of numSet) {
            if(!numSet.has(num-1)) {
                len = 1;
                while(numSet.has(num + len))
                    len++;
            }
            if(len > max)
                max = len;
        }

        return max;
    }
}
