const router = require('express').Router();

const { createFolder } = require('../files/fileExplorer');

router.get('/:dir?', async (req, res) => {
  path = req.params.dir || '';
  children = [];
  res.render('explorer', {
    title: req.params.dir ? `${req.params.dir} | Home Cloud` : 'Inicio | Home Cloud',
    children,
    path: 'Inicio',
    isHome: req.params.dir ? false : true,
    parentPath: path.substring(0, path.lastIndexOf('/') || 0) ||'/',
  });
});

router.put('/upload', async (req, res) => {
  try {
    if (!req.files) {
      res.status(400).send('No file uploaded');
    } else {
      if (req.files.files) {
        const files = req.files.files;
        res.status(200).send('Done')
      } else {
        const file = req.files.file;
        res.status(200).send('Done')
      }
    }
  } catch (err) {
    console.error(err);
  }
});

router.post('/new-folder', (req, res) => {
  console.log(req.body);
  res.status(200);
});

module.exports = router;