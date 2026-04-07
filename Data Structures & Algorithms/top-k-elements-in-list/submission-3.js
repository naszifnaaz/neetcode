class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let ans = [];
        for(let i = 0; i < nums.length; i++) {
           if(map[nums[i]])
                map[nums[i]] += 1;
            else
                map[nums[i]] = 1;
        }
        console.log(map);
        for(let i = 0; i < k; i++) {
            let max = 0;
            let maxkey = '';
            for(let key in map) {
                if(map[key] > max) {
                    max = map[key];
                    maxkey = key;
                }
                    
            }
            delete map[maxkey];
            ans.push(maxkey);
        }
        return ans;
    }
}
