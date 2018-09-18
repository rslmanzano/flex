import * as React from "react";
import { ITextFieldProps, ITextField } from "./TextField.types";
export interface ITextFieldState {
    value?: string | undefined;
    /** Is true when the control has focus. */
    isFocused?: boolean;
    /**
     * The validation error message.
     *
     * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
     * - If we have done the validation and there is validation error, errorMessage is the validation error message.
     */
    errorMessage?: string;
}
export declare class TextField extends React.Component<ITextFieldProps, ITextFieldState> implements ITextField {
    private _latestValue;
    constructor(props: ITextFieldProps);
    readonly value: string | undefined;
    private _onInputChange;
    render(): JSX.Element;
}
