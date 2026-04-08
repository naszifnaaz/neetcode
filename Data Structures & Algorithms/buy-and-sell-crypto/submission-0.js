class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;
        let max = 0;

        while(left < prices.length && right < prices.length) {
            let profit = prices[right] - prices[left];
            if(profit > max)
                max = profit;
            else if(prices[left] > prices[right])
                left++;
            else
                right++;
        }
        return max;
    }
}
