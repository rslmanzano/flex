"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var HelloWorld = /** @class */ (function (_super) {
    tslib_1.__extends(HelloWorld, _super);
    function HelloWorld(p) {
        return _super.call(this, p) || this;
    }
    HelloWorld.prototype.render = function () {
        return React.createElement("div", { style: { color: this.props.color } }, "Hello world!");
    };
    return HelloWorld;
}(React.Component));
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=HelloWorld.js.map