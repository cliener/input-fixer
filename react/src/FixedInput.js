import React, { Component } from "react";

// 50ms throttle rate which is too fast for human interaction
// Fastest gamers can button mash around 100ms for reference
const throttleDuration = 50;

// Prevent second and subsequent events of this type from firing within the throttleDuration
const throttleEvent = (event) => {
  const element = event.target;
  const timeStamp = event.timeStamp;

  // set the last event time to a safe default for this element
  if (!element.lastEvent) {
    element.lastEvent = 1;
  }

  if (timeStamp < (element.lastEvent + throttleDuration)) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  // Only set the new time stamp if the event is valid
  element.lastEvent = timeStamp;
}

class FixedInput extends Component {
  render() {
    return (
      <input
        {...this.props}
        onFocusCapture={e => throttleEvent(e)}
        onBlurCapture={e => throttleEvent(e)}
      />);
  }
}

export default FixedInput;