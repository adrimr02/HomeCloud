const { v4: uuid} = require('uuid');
const { join } = require('path');
const { readFileSync } = require('fs');

const keysPath = 'folders.json';

module.exports = {
  loadFolderMap: () => {
    return JSON.parse(readFileSync(join(__dirname, keysPath), 'utf8'));
  },

  saveFolderMap: () => {

  }
}