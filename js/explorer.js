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

function openNewFolderModal() {
  console.log('New folder');
}

function openNewFileModal() {
  console.log('New file');
}

function uploadFile() {
  var uploadFile = document.getElementById('inputFile');
  uploadFile.click();
  uploadFile.addEventListener('change', (e) => {
    console.log('file selected');
    var files = e.target.files;

    // fetch('http://localhost/3000/upload-file', {
    //   method: 'PUT',
    //   mode: 'cors',
    //   body: {
    //     files: files
    //   }
    // })
    // .then(res => {
    //   console.log('Success: ', res)
    // })
    // .catch(err => console.error(err));
  })
}