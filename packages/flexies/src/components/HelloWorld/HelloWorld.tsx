import * as React from "react"
import { IHelloWorldProps } from "./HelloWorld.types"

export class HelloWorld extends React.Component<IHelloWorldProps, any> {
    constructor(p: IHelloWorldProps) {
        super(p)
    }
    render() {
        return <div style={{ color: this.props.color }}>Hello world!</div>
    }
}
