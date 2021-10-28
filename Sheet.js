/**
 * Convert number to letter
 * Example 0 = A; 1 = B; etc
 */

const Sheet = {
    /**
     * 
     * @param {*} sheetID Sheet ID value
     * @param {*} sheetName Sheet Name 
     * @returns 
     */
    getSheetName: function(sheetID, sheetName) {
        return SpreadsheetApp.openById(sheetID).getSheetByName(sheetName)
    },
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
    },
    /**
     * 
     * @param {*} table Data returned after the method getSheetName
     * @returns Number of last row
     */
    countLastRow: function(table) {
        return table.getDataRange().getLastRow()
    },
    /**
     * 
     * @param {*} table Data returned after the method getSheetName
     * @returns Number of last column
     */
    countLastColumn: function(table) {
        return table.getDataRange().getLastColumn()
    },
    /**
     * 
     * @param {*} table Data returned after the method getSheetName
     * @returns return first row data
     */
    getHeader: function(table) {
        return (table.getRange(`A1:${colName(countLastColumn(table) - 1)}1`).getValues())[0]
    }
}