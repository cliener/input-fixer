import inputFixer from "./inputFixer.js";

const elementOne = document.getElementById("one");
const elementTwo = document.getElementById("two");
const elementThree = document.getElementById("three");
const out = document.getElementById("output");
const clearer = document.getElementById("clear");

// functions

const clearOutput = () => {
  out.value = "";
}

let logValue = [];
// 50ms throttle rate which is too fast for human interaction
// Fastest gamers can button mash around 100ms for reference

const watchEvent = (element, eventName) => {
  element.addEventListener(eventName, e => {

    logValue.push(element.id + " => " + eventName);

    if (eventName === "click" || eventName === "focus") {
      out.value = out.value + logValue.join(" | ") + "\n";
      logValue = [];
    }
  })
}

// Add event listeners

clearer.addEventListener("click", clearOutput);

// Init fix
// Disable one element two or three to see the bug

inputFixer.fix(elementOne);
inputFixer.fix(elementTwo);
inputFixer.fix(elementThree);

// Monitor events
watchEvent(elementOne, "click");
watchEvent(elementOne, "focus");
watchEvent(elementOne, "blur");
watchEvent(elementTwo, "click");
watchEvent(elementTwo, "focus");
watchEvent(elementTwo, "blur");
watchEvent(elementThree, "click");
watchEvent(elementThree, "focus");
watchEvent(elementThree, "blur");