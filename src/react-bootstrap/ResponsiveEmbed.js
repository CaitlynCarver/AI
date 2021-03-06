"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = _react.default.Children.only(children);

    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio)
    }), _react.default.cloneElement(child, {
      className: (0, _classnames.default)(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(_react.default.Component);

ResponsiveEmbed.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(ResponsiveEmbed, 'embed-responsive');

exports.default = _default;
module.exports = exports["default"];