const { readdirSync, lstatSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const { v4: uuid } = require('uuid');

const { loadFolderCodes } = require('./folderParser');
const path = process.env.CLOUD_PATH;

var folders = new Map();;

module.exports = {
  initializeFileSystem: () => {
      folders = new Map();
      // var rawFolders = loadFolderCodes();
      // console.log(rawFolders)
      // var folderList = rawFolders.folders;
      // for (folder in folderList) {
      //   folders.add(folder.key, folder.value);
      // }
      // console.log(folders);
  },

  isDir: (dirPath = '') => {
    return existsSync(join(path, dirPath)) && lstatSync(join(path, dirPath)).isDirectory();
  },

  readDir: (dirPath = '') => {
    return new Promise((resolve, reject) => {
      try {
        const children = readdirSync(join(path, dirPath), { withFileTypes: true });
        children.forEach(child => {
          child.path = `${dirPath}/${child.name}`;
        });
        resolve(children);
      } catch (err) {
        reject(err);
      }
    }); 
  },

  openFile: (dirPath = '') => {
    console.log(readFileSync(join(path, dirPath), { encoding: 'utf-8' }));
  },

  createFolder: (parentKey = '', folderName, path) => {
    folderKey = uuid();
    folderValue = {
      name: folderName,
      parentKey,
      path,
    }
    folders.set(folderKey, folderValue);
    console.log(folders);
    return folderKey;
  },
}