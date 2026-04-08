class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currSum = 0;

        for(let i = 0; i < nums.length; i++) {
            if(currSum < 0)
                currSum = 0;
            
            currSum += nums[i];
            if(currSum > maxSum) 
                maxSum = currSum;
        }
        return maxSum;
    }
}
