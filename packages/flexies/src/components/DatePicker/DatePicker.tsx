import * as React from "react"
import { DatePickerProps } from "./DatePicker.types"

export class DatePicker extends React.Component<DatePickerProps, {}> {
    private _input: any
    constructor(props: DatePickerProps) {
        super(props)
    }

    private _onInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const element: HTMLInputElement = event.target as HTMLInputElement
        const value: string = element.value

        if (this.props.onChanged) this.props.onChanged(value)
    }

    render() {
        return (
            <input
                value={this.props.value}
                checked={this.props.checked}
                defaultChecked={this.props.defaultChecked}
                defaultValue={this.props.defaultValue}
                type="date"
                ref={ref => {
                    this._input = ref
                }}
                onChange={this._onInputChange.bind(this)}
            >
                {this.props.children}
            </input>
        )
    }
}
