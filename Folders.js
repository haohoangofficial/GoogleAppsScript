
const Folders = {
    /**
     * Get subfolders in a folder
     * @param {*} folderID 
     * @return array subfolders id 
     */
    getChildFolders: function(folderID) {
        let childFolders = [];
        while(DriveApp.getFolderById(folderID).getFolders().hasNext()) {
          let child = folder.next();
          childFolders.push(child.getId());
        }
        return childFolders;
    },
    /**
     * Count number of subfolders in a folder
     * @param {*} folderID 
     * @returns number of subfolders in a folder
     */
    countChildFolders: function (folderID) {
        let count = 0;
        while(DriveApp.getFolderById(folderID).getFolders().hasNext()) {
          let child = folder.next();
          count ++;
        }
        return count;
    }

}