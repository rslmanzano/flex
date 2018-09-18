"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var theme_1 = require("../theme");
var Description = theme_1.default.label(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    font-size: 11px;\n    color: ", ";\n    padding-top: 4px;\n"], ["\n    font-size: 11px;\n    color: ", ";\n    padding-top: 4px;\n"])), function (props) { return props.theme.neutralTertiary; });
var Flex = theme_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var Required = theme_1.default.label(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    color: #990000;\n"], ["\n    color: #990000;\n"])));
var LabelWrapper = theme_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    padding-bottom: 5px;\n"], ["\n    padding-bottom: 5px;\n"])));
var Label = theme_1.default.label(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n"], ["\n    color: ", ";\n    font-size: ", ";\n"])), function (props) { return props.theme.neutralPrimary; }, function (props) { return props.theme.inputFontSize || theme_1.defaultTheme.inputFontSize; });
var Input = theme_1.default.input(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n    border: 1px solid ", ";\n    line-height: 24px;\n    font-size: calc(", " - 1px);\n    text-indent: 6px;\n    :focus {\n        outline: none !important;\n        border: 1px solid ", ";\n        /* box-shadow: 0 0 10px #719ECE; */\n    }\n    :disabled {\n        background: ", ";\n        cursor: no-drop;\n    }\n"], ["\n    border: 1px solid ", ";\n    line-height: 24px;\n    font-size: calc(", " - 1px);\n    text-indent: 6px;\n    :focus {\n        outline: none !important;\n        border: 1px solid ", ";\n        /* box-shadow: 0 0 10px #719ECE; */\n    }\n    :disabled {\n        background: ", ";\n        cursor: no-drop;\n    }\n"])), function (props) { return props.theme.neutralTertiary || theme_1.defaultTheme.neutralTertiary; }, function (props) { return props.theme.inputFontSize || theme_1.defaultTheme.inputFontSize; }, function (props) { return props.theme.themePrimary || theme_1.defaultTheme.themePrimary; }, function (props) { return props.theme.neutralTertiary || theme_1.defaultTheme.neutralTertiary; });
var TextField = /** @class */ (function (_super) {
    tslib_1.__extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        if (props.value !== undefined) {
            _this._latestValue = props.value;
        }
        else if (props.defaultValue !== undefined) {
            _this._latestValue = props.defaultValue;
        }
        else {
            _this._latestValue = '';
        }
        _this.state = {
            value: _this._latestValue,
        };
        _this._onInputChange = _this._onInputChange.bind(_this);
        return _this;
    }
    Object.defineProperty(TextField.prototype, "value", {
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype._onInputChange = function (event) {
        var element = event.target;
        var value = element.value;
        if (this.props.onChanged)
            this.props.onChanged(value);
    };
    TextField.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", null,
            React.createElement(Flex, null,
                props.label && (React.createElement(LabelWrapper, null,
                    React.createElement(Label, null, props.label),
                    props.required ? React.createElement(Required, null, " *") : null)),
                React.createElement(Input, tslib_1.__assign({}, props, { onChange: this._onInputChange })),
                props.description && React.createElement(Description, null, props.description))));
    };
    return TextField;
}(React.Component));
exports.TextField = TextField;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=TextField.js.map