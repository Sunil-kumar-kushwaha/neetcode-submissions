class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let len = nums.length;
        let freq = {};
        for(let i=0;i<len;i++){
            freq[nums[i]] = (freq[nums[i]]||0) + 1;
        }

        return Object.keys(freq).sort((a,b)=>freq[b]-freq[a]).slice(0,k).map(Number)
        



    }
}
