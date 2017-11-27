# react-input-fixer for React

[![npm version](https://badge.fury.io/js/input-fixer.svg)](https://badge.fury.io/js/input-fixer)

Provides a workaround for phantom blur/focus events for HTML inputs in Safari MacOS. The bug this code fixes is described in a [WebKit bug/Radar](https://bugs.webkit.org/show_bug.cgi?id=179990) and [React bug](https://github.com/facebook/react/issues/10871).

For details of the original problem and code, see the [Vanilla JS version](../).

## Usage

The `<FixedInput ... />` directly replaces a regular `<input ... />` and fixes Safari's event mangling.


```
import FixedInput from './FixedInput'

…
  render() {
    return <FixedInput ... />
  }
…

```