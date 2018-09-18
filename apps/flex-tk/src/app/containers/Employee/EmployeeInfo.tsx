import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace EmployeeInfo {
    export interface Props extends RouteComponentProps<{id: string}>{}
}

export class EmployeeInfo extends React.Component<EmployeeInfo.Props>{
    constructor(props: EmployeeInfo.Props){
        super(props)
    }

    render(){
        const {id} = this.props.match.params
        return(
            <div>Employee Info {id}
            </div>
        )
    }
}