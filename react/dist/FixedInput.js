"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 100ms throttle rate which is too fast for human interaction
// Fastest gamers can button mash around 100ms for reference
var throttleDuration = 100;

// Prevent second and subsequent events of this type from firing within the throttleDuration
var throttleEvent = function throttleEvent(event) {
  var element = event.target;
  var timeStamp = event.timeStamp;

  // set the last event time to a safe default for this element
  if (!element.lastEvent) {
    element.lastEvent = 1;
  }

  if (timeStamp < element.lastEvent + throttleDuration) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  // Only set the new time stamp if the event is valid
  element.lastEvent = timeStamp;
};

var FixedInput = function (_Component) {
  _inherits(FixedInput, _Component);

  function FixedInput() {
    _classCallCheck(this, FixedInput);

    return _possibleConstructorReturn(this, (FixedInput.__proto__ || Object.getPrototypeOf(FixedInput)).apply(this, arguments));
  }

  _createClass(FixedInput, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("input", _extends({}, this.props, {
        onFocusCapture: function onFocusCapture(e) {
          return throttleEvent(e);
        },
        onBlurCapture: function onBlurCapture(e) {
          return throttleEvent(e);
        }
      }));
    }
  }]);

  return FixedInput;
}(_react.Component);

exports.default = FixedInput;