const { v4: uuid} = require('uuid');
const Dictionary = require('./Dictionary');

const { readDir, isDir } = require('./fileExplorer');

const keysPath = 'folders.json';

module.exports = {
  loadFolderCodes: () => {

  },
  generateFolderCodes: async () => {
    const folders = new Dictionary();
    
    const getDir = async (dirName = '') => {
      await readDir(dirName)
      .then(children => {
        children.forEach(async child => {
          if (isDir(child.path)) {
            folders.add(uuid(), { name: child.name, path: child.path });
            getDir(child.path)
          }
        });
      });
    }

    await getDir();

    console.log(folders);
    return folders;
  }
}