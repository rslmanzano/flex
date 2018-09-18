"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox(props) {
        return _super.call(this, props) || this;
    }
    Checkbox.prototype.toggle = function (e) {
        if (this.props.onCheckBoxChanged)
            this.props.onCheckBoxChanged(this._input.checked);
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { value: this.props.value, checked: this.props.checked, defaultChecked: this.props.defaultChecked, defaultValue: this.props.defaultValue, type: "checkbox", onClick: this.toggle.bind(this), ref: function (ref) { _this._input = ref; } }),
            React.createElement("label", null, this.props.children || this.props.text)));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map