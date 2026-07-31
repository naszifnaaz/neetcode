class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = [];
        for(let i = 0; i < strs.length; i++) {
            let sorted_text = strs[i].split("").sort().join("");

            if(map[sorted_text])
                map[sorted_text].push(strs[i]);
            else
                map[sorted_text] = [strs[i]];
        }

        return Object.values(map);
    }
}
