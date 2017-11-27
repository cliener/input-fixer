const inputFixer = {
  // 50ms throttle rate which is too fast for human interaction
  // Fastest gamers can button mash around 100ms for reference
  throttleDuration: 50,
  // Prevent second and subsequent events of this type from firing within the throttleDuration
  throttleEvent: (element, eventType) => {
    element.addEventListener(eventType, event => {
      const timeStamp = event.timeStamp;

      // set the last event time to a safe default for this element
      if (!element.lastEvent) {
        element.lastEvent = 1;
      }

      if (timeStamp < (element.lastEvent + inputFixer.throttleDuration)) {
        event.preventDefault();
        // Stop all subsequent listeners of this event from firing
        // See https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation
        event.stopImmediatePropagation();
        return false;
      }

      // Only set the new time stamp if the event is valid
      element.lastEvent = timeStamp;
    });
  },
  // 
  fix: (element) => {
    inputFixer.throttleEvent(element, "focus");
    inputFixer.throttleEvent(element, "blur");
  },
}

export default inputFixer;