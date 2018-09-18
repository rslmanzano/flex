import * as React from "react"
import { CheckboxProps } from "./Checkbox.types"


export class Checkbox extends React.Component<CheckboxProps, {}> {
    private _input: any
    constructor(props: CheckboxProps) {
        super(props)



    }

    private toggle(e: any) {
        if (this.props.onCheckBoxChanged) this.props.onCheckBoxChanged(this._input.checked)
    }
    render() {
        return (
            <div>
                <input
                    value={this.props.value}
                    checked={this.props.checked}
                    defaultChecked={this.props.defaultChecked}
                    defaultValue={this.props.defaultValue}
                    type="checkbox"
                    onClick={this.toggle.bind(this)}
                    ref={(ref)=>{this._input = ref}}
                />
                <label>{this.props.children || this.props.text}</label>
            </div>
        )
    }
}
