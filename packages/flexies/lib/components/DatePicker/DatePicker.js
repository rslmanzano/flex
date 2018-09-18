"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DatePicker = /** @class */ (function (_super) {
    tslib_1.__extends(DatePicker, _super);
    function DatePicker(props) {
        return _super.call(this, props) || this;
    }
    DatePicker.prototype._onInputChange = function (event) {
        var element = event.target;
        var value = element.value;
        if (this.props.onChanged)
            this.props.onChanged(value);
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("input", { value: this.props.value, checked: this.props.checked, defaultChecked: this.props.defaultChecked, defaultValue: this.props.defaultValue, type: "date", ref: function (ref) {
                _this._input = ref;
            }, onChange: this._onInputChange.bind(this) }, this.props.children));
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map