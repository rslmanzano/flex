import * as React from 'react'

export namespace TimePicker {
    export interface Props extends React.AllHTMLAttributes<HTMLInputElement>{}
    export interface State {}
}

export class TimePicker extends React.Component<TimePicker.Props, TimePicker.State> {
    constructor(props: TimePicker.Props){
        super(props)
    }

    render(){
        return(
            <input {...this.props}/>
        )
    }
}