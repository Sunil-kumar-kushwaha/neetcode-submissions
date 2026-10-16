class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Map();
        for (let num of nums) {
            if (numsMap.has(num)) {
            return true;
        }
        numsMap.set(num, 1);
    }
    return false;
    }
}
