"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var theme_1 = require("../theme");
var NavGroup = theme_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    background: ", ";\n    color: white;\n    border: none;\n    line-height: 24px;\n    text-align: left;\n    display: flex;\n    cursor: pointer;\n    :focus {\n        outline: none !important;\n    }\n    :hover {\n        background: ", ";\n    }\n    & > * {\n        margin-right: ", ";\n    }\n"], ["\n    background: ", ";\n    color: white;\n    border: none;\n    line-height: 24px;\n    text-align: left;\n    display: flex;\n    cursor: pointer;\n    :focus {\n        outline: none !important;\n    }\n    :hover {\n        background: ", ";\n    }\n    & > * {\n        margin-right: ", ";\n    }\n"])), function (props) { return props.theme.themeDarkAlt; }, function (props) { return props.theme.themeLight; }, function (props) { return props.theme.marginRight; });
var Wrapper = theme_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    height: 100%;\n    /* min-width: 215px; */\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n"], ["\n    background-color: ", ";\n    color: white;\n    height: 100%;\n    /* min-width: 215px; */\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n"])), function (props) { return props.theme.themeDarkAlt; });
var List = theme_1.default.ul(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    margin: 0;\n    list-style-type: none;\n    padding-left: 5px;\n\n    & > li {\n        line-height: 30px;\n    }\n"], ["\n    margin: 0;\n    list-style-type: none;\n    padding-left: 5px;\n\n    & > li {\n        line-height: 30px;\n    }\n"])));
var ListItem = theme_1.default.li(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    cursor: pointer;\n    & > li {\n        /* margin-top: 10px; */\n    }\n"], ["\n    cursor: pointer;\n    & > li {\n        /* margin-top: 10px; */\n    }\n"])));
var Link = theme_1.default.a(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    text-decoration: none;\n"], ["\n    text-decoration: none;\n"])));
var Nav = /** @class */ (function (_super) {
    tslib_1.__extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this._renderGroup = function (group, groupIndex) {
            return (React.createElement("div", { key: groupIndex },
                React.createElement(NavGroup, { key: groupIndex, onClick: _this._onGroupHeaderClicked.bind(_this, group) },
                    group.text,
                    React.createElement("div", { style: { marginLeft: "auto" } })),
                React.createElement("div", { style: { marginLeft: 15 } }, _this._renderLinks(group.links, 0))));
        };
        return _this;
    }
    Nav.prototype._renderLinks = function (links, nestingLevel) {
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) {
            return _this._renderLink(link, linkIndex, nestingLevel);
        });
        return React.createElement(List, { role: "list" }, linkElements);
    };
    Nav.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        return (React.createElement(ListItem, { key: link.key || linkIndex, role: "listitem" },
            this._renderCompositeLink(link, linkIndex, nestingLevel),
            this._renderLinks(link.links, ++nestingLevel)));
    };
    Nav.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        return (React.createElement("div", { key: link.key || linkIndex },
            link.links && link.links.length > 0 ? React.createElement("button", null, link.text) : null,
            this._renderNavLink(link, linkIndex, nestingLevel)));
    };
    Nav.prototype._onLinkClicked = function (link, ev) {
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
    };
    Nav.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
        return (React.createElement("div", null,
            React.createElement("div", { style: { marginLeft: -20 } }),
            React.createElement(Link, { href: link.url, onClick: this._onLinkClicked.bind(this, link) }, link.text)));
    };
    Nav.prototype._onGroupHeaderClicked = function (group, ev) {
        ev.preventDefault();
        ev.stopPropagation();
    };
    Nav.prototype.render = function () {
        var groups = this.props.groups;
        var groupElements = groups.map(this._renderGroup);
        return React.createElement(Wrapper, null, groupElements);
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Nav.js.map