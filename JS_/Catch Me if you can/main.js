let box = document.getElementById("box");
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

// updates the width and height of the window

window.addEventListener("resize", function (event) {
  viewWidth = window.innerWidth;
  viewHeight = window.innerHeight;
});

document.addEventListener("DOMContentLoaded", function (event) {
box.addEventListener('mouseenter', function (event) {
  let boxPos = box.getBoundingClientRect();
  let pos = getnewPos(boxPos.width, boxPos.height);

  box.style.top = pos.y + "px";
  box.style.left = pos.x + "px";
});

function getnewPos(boxWidth, boxHeight) {
  let newX = Math.floor(Math.random() * viewWidth + 1 - boxWidth);
  let newY = Math.floor(Math.random() * viewHeight + 1 - boxHeight);

  if (newX < 0) {
    newX = 0;
  }
  if (newY < 0) {
    newY = 0;
  }
  return { x: newX, y: newY };
}
});
