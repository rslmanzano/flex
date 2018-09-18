import * as React from 'react';
import * as styledComponents from "styled-components";
export interface ITheme {
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
export declare const defaultTheme: ITheme;
export interface ThemeInterface extends ITheme {
}
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.ThemedCssFunction<ThemeInterface>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface>>;
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
