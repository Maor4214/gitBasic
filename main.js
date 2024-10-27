"use strict";
var gBallSize = 100;

function onBallClick(elBall) {
  var newBallSize = gBallSize + 50;
  elBall.style.height = newBallSize + "px";
  elBall.style.width = newBallSize + "px";
  gBallSize = newBallSize;
  elBall.innerText = gBallSize;
}
