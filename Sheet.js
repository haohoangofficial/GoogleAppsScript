/**
 * Convert number to letter
 * Example 0 = A; 1 = B; etc
 */

const Sheet = {
    /**
     * 
     * @param {*} num Number
     * @returns Letter
     * Example 0 = A; 1 = B
     */
    colName: function(num) {
        let letters = ''
        while (num >= 0) {
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
            num = Math.floor(num / 26) - 1
        }
        return letters
    }
}