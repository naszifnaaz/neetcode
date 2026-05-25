class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let ans = [];
        for(let i=0; i < nums.length; i++) {
            if(map[nums[i]])
                map[nums[i]] += 1;
            else
                map[nums[i]] = 1;
        }
       
        for(let i = 0; i < k; i++) {
             let max = 0;
             let flag;
             for(let key in map) {
                if(map[key] > max) {
                    max = map[key];
                    flag = key;
                }
             }
            ans.push(flag);
            delete map[flag];
        }

        return ans;
    }
}
