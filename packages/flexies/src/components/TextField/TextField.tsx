import * as React from "react"
import styled, { defaultTheme } from "../theme"
import { ITextFieldProps, ITextField } from "./TextField.types"

const Description = styled.label`
    font-size: 11px;
    color: ${props => props.theme.neutralTertiary};
    padding-top: 4px;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
`
const Required = styled.label`
    color: #990000;
`

const LabelWrapper = styled.span`
    padding-bottom: 5px;
`

const Label = styled.label`
    color: ${props => props.theme.neutralPrimary};
    font-size: ${props => props.theme.inputFontSize || defaultTheme.inputFontSize};
`

const Input = styled.input`
    border: 1px solid ${props => props.theme.neutralTertiary || defaultTheme.neutralTertiary};
    line-height: 24px;
    font-size: calc(${props => props.theme.inputFontSize || defaultTheme.inputFontSize} - 1px);
    text-indent: 6px;
    :focus {
        outline: none !important;
        border: 1px solid ${props => props.theme.themePrimary || defaultTheme.themePrimary};
        /* box-shadow: 0 0 10px #719ECE; */
    }
    :disabled {
        background: ${props => props.theme.neutralTertiary || defaultTheme.neutralTertiary};
        cursor: no-drop;
    }
`
export interface ITextFieldState {
    value?: string | undefined

    /** Is true when the control has focus. */
    isFocused?: boolean

    /**
     * The validation error message.
     *
     * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
     * - If we have done the validation and there is validation error, errorMessage is the validation error message.
     */
    errorMessage?: string
}

export class TextField extends React.Component<ITextFieldProps, ITextFieldState> implements ITextField {
    private _latestValue: string | undefined | any

    constructor(props: ITextFieldProps) {
        super(props)

        if (props.value !== undefined) {
            this._latestValue = props.value
        } else if (props.defaultValue !== undefined){
            this._latestValue = props.defaultValue
        } else {
            this._latestValue = '';
        }

        this.state = {
            value: this._latestValue,
        }

        this._onInputChange = this._onInputChange.bind(this)
    }

    public get value(): string | undefined {
        return this.state.value
    }

    private _onInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const element: HTMLInputElement = event.target as HTMLInputElement
        const value: string = element.value

        if (this.props.onChanged) this.props.onChanged(value)
    }
    render() {
        const props = this.props
        return (
            <div>
                <Flex>
                    {props.label && (
                        <LabelWrapper>
                            <Label>{props.label}</Label>
                            {props.required ? <Required> *</Required> : null}
                        </LabelWrapper>
                    )}
                    <Input {...props} onChange={this._onInputChange} />
                    {props.description && <Description>{props.description}</Description>}
                </Flex>
            </div>
        )
    }
}
