var modalWrapper = document.getElementById('modalWrapper');

function openNewFolderModal() {
  openModal('modalNewFolder');
}

function openNewFileModal() {
  openModal('modalNewFile');
}

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  
  if (!modal) return;

  modalWrapper.classList.add('show');
  modal.classList.add('show');
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  var modalText = modal.getElementsByTagName('input')[0];

  if (!modal) return;

  modalWrapper.classList.remove('show');
  modal.classList.remove('show');
  modalText.value = '';
}

function initModalListeners() {
  var newFolderText = document.getElementById('modalFolderText');
  var newFileText = document.getElementById('modalFileText');

  var newFolderNext = document.getElementById('modalFolderNext')
  var newFileNext = document.getElementById('modalFileNext')

  newFolderText.addEventListener('input', e => {
    if (e.target.value.length > 0) {
      newFolderNext.disabled = false;
    } else {
      newFolderNext.disabled = true;
    }
  });

  newFileText.addEventListener('input', e => {
    if (e.target.value.length > 0) {
      newFileNext.disabled = false;
    } else {
      newFileNext.disabled = true;
    }
  });

  newFolderNext.addEventListener('click', e => {
    closeModal('modalNewFolder');
    newFolderText.value = "";
  });

  newFileNext.addEventListener('click', e => {
    closeModal('modalNewFile');
    newFileText.value = "";
  });
}

function createFolder() {
  
}

initModalListeners();