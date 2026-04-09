class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // check for sequence groups using hash set
        let numSet = new Set(nums);

        let max = 0;
        let len = 0;

        for(let num of numSet) {

            // check if num is start of a sequnce (it is, if num-1 does not exist )
            if(!numSet.has(num - 1)) {
                len = 1;

                // check how big of a sequence do we have, (num + len)
                while(numSet.has(num + len)) {
                    len += 1;
                }
            }

            if(len > max)
                max = len;       
        }
        return max;
    }
}
