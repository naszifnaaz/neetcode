class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let smap = {};
        let tmap = {};

        if(s.length != t.length)
            return false;

        for(let i = 0; i < s.length; i++) {
            if(smap[s[i]])
                smap[s[i]] += 1;
            else
                smap[s[i]] = 1;


            if(tmap[t[i]])
                tmap[t[i]] += 1;
            else
                tmap[t[i]] = 1;
        }

        for(let key in smap) {
            if(smap[key] != tmap[key])
                return false;
        }

        return true;
    }
}
