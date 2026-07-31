class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {};
        if (s.length != t.length)
            return false;
        
        for(let i = 0; i < s.length; i++) {
            if(map[s[i]])
                map[s[i]] += 1;
            else
                map[s[i]] = 1;
        }

        for(let i = 0; i < t.length; i++) {
            if(map[t[i]])
                map[t[i]] -= 1;
            else
                return false;
        }

        for(let key in map) {
            if(map[key] != 0)
                return false;
        }

        return true;
    }
}
