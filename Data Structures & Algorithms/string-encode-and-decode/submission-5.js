class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = strs.map((s) => `${s.length}#${s}`).join("");
        return encodedStr; //5#Hello5#World
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] != "#")
                j++;
            
            let len = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + len;
            res.push(str.substring(i,j));
            i = j;
        }
        return res;
    }
}
