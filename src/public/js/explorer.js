var newMenuStatus = 0;

function showNewMenu() {
  if (newMenuStatus === 0) {
    document.getElementById('newMenu').classList.add('show');
    newMenuStatus = 1;
  }
}

window.addEventListener('click', e => {
  if (!clickInsideElement(e, 'new-btn') && !clickInsideElement(e, 'new-menu')) {
    closeNewMenu();
  }
});

function closeNewMenu() {
  if (newMenuStatus == 1) {
    document.getElementById('newMenu').classList.remove('show');
    newMenuStatus = 0;
  }
}

function clickedMenuOption(value) {
  closeNewMenu();
  switch (value) {
    case 'new_folder':
      openNewFolderModal();
      break;
    case 'new_file':
      openNewFileModal();
      break;
    case 'upload_file':
      uploadFile();
      break;
  }
}

function uploadFile() {
  var data;
  var uploadFile = document.getElementById('inputFile');
  uploadFile.click();
  uploadFile.addEventListener('change', (e) => {
    var files = e.target.files;
    console.log(files) 
    if (files) {
      if (files.length <= 10) {
        data = new FormData();
        if (files.length <= 1)
          data.append('file', files[0]);
        else
          for (let file of files) {
            data.append('files', file);
          }

        console.log(data);
        fetch('http://localhost:3000/drive/upload', {
          method: 'PUT',
          body: data
        })
        .then(res => {
          console.log('Success: ', res)
        })
        .catch(err => console.error(err));
      } else {
        console.error('You can only upload 10 files at a time!');
      }
    }
  });
}