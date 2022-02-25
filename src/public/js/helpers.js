/////////////////////////////
/////////////////////////////
//
// HELPERS
//
/////////////////////////////
/////////////////////////////
/**
 * Determines if the clicked element or any of its parent 
 * elements contain the given classname
 */
 function clickInsideElement(e, className) {
  var el = e.target;
  if (!el)
    return false;

  if (el.classList && el.classList.contains(className)) {
    return el;
  } else {
    while (el = el.parentNode) {
      if (el.classList && el.classList.contains(className)) {
        return el;
      }
    }

    return false;
  }
}

/**
 * Determines the position where the given event took place
 */
function getPosition(e) {
  let posX;
  let posY;

  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else if (e.clientX || e.clientY) {
    posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posX,
    y: posY 
  }
}