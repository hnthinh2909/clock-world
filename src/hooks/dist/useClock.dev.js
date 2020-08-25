"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function formatDate(zone) {
  var time = new Date().toLocaleTimeString("en-GB", {
    timeZone: zone
  });
  var date = new Date().toLocaleDateString("en-GB", {
    timeZone: zone
  });
  var timeZone = zone.split("/").slice(-1)[0];
  return {
    zone: zone,
    timeZone: timeZone,
    time: time,
    date: date
  };
}

function useClock(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      timeString = _useState2[0],
      setTimeString = _useState2[1];

  (0, _react.useEffect)(function () {
    var clockInterval = setInterval(function () {
      var newTimeString = formatDate(props);
      setTimeString([].concat(_toConsumableArray(timeString), [newTimeString]));
    }, 1000);
    return function () {
      console.log("Clock cleanup !");
      clearInterval(clockInterval);
    };
  }, []);
  return {
    timeString: timeString
  };
}

var _default = useClock;
exports["default"] = _default;