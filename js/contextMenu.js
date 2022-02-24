/////////////////////////////
/////////////////////////////
//
// CORE FUNCTIONS
//
/////////////////////////////
/////////////////////////////



/**
 * Variables
 */
const contextMenuClassName = 'context-menu';
const contextMenuItemClassName = 'context-menu__item';
const contextMenuLinkClassName = 'context-menu__link';
const contextMenuActiveClassName = 'context-menu--active';

const menu = document.getElementById('context-menu');
var menuState = 0;

const elementClassName = 'element';
const folderClassName = 'folder';
const fileClassName = 'file';

var clickCoords;
var clickCoordsX;
var clickCoordsY;

var menuWidth;
var menuHeight;

var windowWidth;
var windowHeight;

/**
 * Initilizes aplication
 */
function init() {
  contextListener();
  clickListener();
  keyupListener();
  resizeListener();
}

/**
 * Listens for context menu events
 */
function contextListener() {
  document.addEventListener('contextmenu', e => {
    if (clickInsideElement(e, elementClassName)) {
      e.preventDefault();
      toggleMenuOn();
      positionMenu(e)
    } else {
      toggleMenuOff();
    }
  });
}

/**
 * Listens for click events
 */
function clickListener() {
  document.addEventListener('click', e => {
    if (!clickInsideElement(e, contextMenuClassName)) {
      toggleMenuOff();
    }
  });
}

/**
 * Listen for keyup events
 */
function keyupListener() {
  document.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
      toggleMenuOff();
    }
  });
}

function resizeListener() {
  window.onresize = e => {
    toggleMenuOff();
  }
}

/**
 * Turns custom context menu on
 */
function toggleMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add(contextMenuActiveClassName);
  }
}

/**
 * Turns custom context menu off
 */
function toggleMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove(contextMenuActiveClassName);
  }
}

function positionMenu(e) {
  clickCoords = getPosition(e);
  clickCoordsX = clickCoords.x;
  clickCoordsY = clickCoords.y;

  menuWidth = menu.offsetWidth + 5;
  menuHeight = menu.offsetHeight + 5;

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if ((windowWidth - clickCoordsX) < menuWidth) 
    menu.style.left = windowWidth - menuWidth + 'px';
  else 
    menu.style.left = clickCoordsX + 'px';

  if ((windowHeight - clickCoordsY) < menuHeight) 
    menu.style.top = windowHeight - menuHeight + 'px';
  else 
    menu.style.top = clickCoordsY + 'px';
}

init();
