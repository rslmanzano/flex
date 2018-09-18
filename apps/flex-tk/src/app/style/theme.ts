// styled-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

var margin = '12px'
var inputFontSize = '12px'

interface ITheme {
  themePrimary: string;
  themeLighterAlt: string;
  themeLighter: string;
  themeLight: string;
  themeTertiary: string;
  themeSecondary: string;
  themeDarkAlt: string;
  themeDark: string;
  themeDarker: string;
  neutralLighterAlt: string;
  neutralLighter: string;
  neutralLight: string;
  neutralQuaternaryAlt: string;
  neutralQuaternary: string;
  neutralTertiaryAlt: string;
  neutralTertiary: string;
  neutralSecondary: string;
  neutralPrimaryAlt: string;
  neutralPrimary: string;
  neutralDark: string;
  black: string;
  white: string;
  bodyBackground: string;
  bodyText: string;
  marginRight: any;
  marginBottom: any;
  inputFontSize: any;
}

export interface ThemeInterface extends ITheme {

}

export const theme: ITheme = {
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

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
