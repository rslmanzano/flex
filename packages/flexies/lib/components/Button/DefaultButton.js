"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var theme_1 = require("../theme");
var Button = theme_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    background-color: ", "; /* Green */\n    border: none;\n    color: white;\n    margin: 5px;\n    /* text-align: center; */\n    text-decoration: none;\n    display: inline-block;\n    padding-top: 4px;\n    line-height: 22px;\n    font-size: 12px;\n    -webkit-transition-duration: 0.4s; /*Safari*/\n    transition-duration: 0.4s;\n    cursor: pointer;\n    :hover {\n        background-color: ", ";\n    }\n    :focus {\n        outline: none !important;\n    }\n    :active {\n        background-color: ", ";\n    }\n"], ["\n    background-color: ", "; /* Green */\n    border: none;\n    color: white;\n    margin: 5px;\n    /* text-align: center; */\n    text-decoration: none;\n    display: inline-block;\n    padding-top: 4px;\n    line-height: 22px;\n    font-size: 12px;\n    -webkit-transition-duration: 0.4s; /*Safari*/\n    transition-duration: 0.4s;\n    cursor: pointer;\n    :hover {\n        background-color: ", ";\n    }\n    :focus {\n        outline: none !important;\n    }\n    :active {\n        background-color: ", ";\n    }\n"])), function (props) { return props.theme.themePrimary; }, function (props) { return props.theme.themeDarkAlt; }, function (props) { return props.theme.themeDarker; });
var Label = theme_1.default.label(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    margin-left: 16px;\n    margin-right: 16px;\n    cursor: pointer;\n"], ["\n    margin-left: 16px;\n    margin-right: 16px;\n    cursor: pointer;\n"])));
exports.DefaultButton = function (props) {
    return (React.createElement("div", null,
        React.createElement(Button, tslib_1.__assign({}, props),
            React.createElement(Label, null, props.label))));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=DefaultButton.js.map