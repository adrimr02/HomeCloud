const { generateFolderCodes } = require('../files/folderParser');

const router = require('express').Router();

router.get('/:dir?', async (req, res) => {
  path = req.params.dir || '';
  children = [];
  generateFolderCodes();
  res.render('explorer', {
    title: req.params.dir ? `${req.params.dir} | Home Cloud` : 'Inicio | Home Cloud',
    children,
    isHome: req.params.dir ? false : true,
    parentPath: path.substring(0, path.lastIndexOf('/') || 0) ||'/',
  });
});

router.post('/upload', async (req, res) => {
  try {
    console.log(req)
    if (!req.files) {
      res.status(400).send('No file uploaded');
    } else {
      let file =req.files.file;
      console.log(file);
      res.status(200).send('Done')
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;