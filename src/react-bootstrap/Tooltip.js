"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  placement: 'right'
};

var Tooltip = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');
  return _react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), _react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), _react.default.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});

Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
var _default = Tooltip;
exports.default = _default;
module.exports = exports["default"];