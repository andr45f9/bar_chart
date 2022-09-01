"use strict";

document.addEventListener("DOMContentLoaded", init);
const model = [];

function init() {
  const queueSize = getNumberOfCostumers();

  for (let visitors = 0; visitors < 40; visitors++) {
    model.push(queueSize);
  }

  loop();
}

function loop() {
  displayData();
  setTimeout(loop, 1000);
}

function getNumberOfCostumers() {
  //Gives number between 0 and 32.
  return Math.floor(Math.random() * 32);
}

function displayData() {
  const queueSize = getNumberOfCostumers();
  model.shift();
  model.push(queueSize);

  modifyBars();
}

function modifyBars() {
  //Change the height of each bar
  const bars = document.querySelectorAll(".bar");
  let i = 0;

  bars.forEach((bar) => {
    let newHeight = model[i];
    bar.style.height = newHeight + "px";
    i++;
    console.log(model[model.length - 1]);
  });
}
