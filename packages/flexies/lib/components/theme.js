"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styledComponents = require("styled-components");
var margin = "12px";
var inputFontSize = "14px";
exports.defaultTheme = {
    themePrimary: "#51445f",
    themeLighterAlt: "#f7f6f9",
    themeLighter: "#e0dbe5",
    themeLight: "#c6bdcf",
    themeTertiary: "#91849f",
    themeSecondary: "#635672",
    themeDarkAlt: "#493d55",
    themeDark: "#3d3448",
    themeDarker: "#2d2635",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff",
    bodyBackground: "#fff",
    bodyText: "#333",
    marginRight: margin,
    marginBottom: margin,
    inputFontSize: inputFontSize,
};
var _a = styledComponents, styled = _a.default, css = _a.css, injectGlobal = _a.injectGlobal, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;
exports.css = css;
exports.injectGlobal = injectGlobal;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.default = styled;
//# sourceMappingURL=theme.js.map