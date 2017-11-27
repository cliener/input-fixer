# input-fixer
Provides a workaround for phantom blur/focus events for HTML inputs in Safari MacOS.

With two or more text inputs on a form, switching focus by click from one to another sometimes causes an extra focus/blur to fire. Untreated form elements which depend on focus/blur can get stuck in a loop as demonstrated in [React Datepicker](https://github.com/Hacker0x01/react-datepicker/issues/1077). 

This package throttles all blur/focus events fired within 50ms of the original.

[Live Demo](https://codepen.io/cliener/pen/ooGpwW)

## Installation

The package can be installed via NPM:

```
npm install input-fixer --save
```

## Details of the bug

The bug this code fixes is described in a [WebKit bug/Radar](https://bugs.webkit.org/show_bug.cgi?id=179990) and [React bug](https://github.com/facebook/react/issues/10871).

From tests conducted, the bug effects Safari MacOS 10.x and 11.x.

### Steps to reproduce

Start with a form with two or more text inputs and watch focus/blur events. ([Demo](https://codepen.io/cliener/pen/ooGpwW))

1. Click on one of the text inputs (#1)
2. Click on another text input (#2)
3. Repeat the above until extra focus/blur events show.

The phantom events only seem to fire on the second and subsequent text inputs.

### Expected behaviour

Each clicked focus shift should fire single blur/focus events.
* Element #1 blur
* Element #2 focus
* Element #2 click

### Actual behaviour

Some clicked focus shifts fire secondary blur/focus events with the net effect of:
* Element #1 blur
* Element #2 focus
* Element #1 blur
* Element #2 focus
* Element #2 click

### Additional notes

Monitoring the events in the console with `monitorEvents()` (see [Google's monitorEvents reference](https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel)) does not show the phantom events. The extra events only appear to be visible when listening to the DOM focus/blur events with `addEventListener`.
