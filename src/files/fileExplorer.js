const { readdirSync, lstatSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const path = process.env.CLOUD_PATH;

module.exports = {
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

  path
}