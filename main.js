"use strict";
var gBallSize = 100;

function onBallClick(elBall) {
  var newBallSize = gBallSize + 50;
  if (gBallSize === 400) {
    elBall.style.height = "100px";
    elBall.style.width = "100px";
    gBallSize = 100;
    elBall.innerText = gBallSize;
  } else {
    elBall.style.height = newBallSize + "px";
    elBall.style.width = newBallSize + "px";
    gBallSize = newBallSize;
    elBall.innerText = gBallSize;
  }
}
