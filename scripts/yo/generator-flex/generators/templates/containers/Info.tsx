import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace <%= formalTitle %>Info {
    export interface Props extends RouteComponentProps<{id: string}>{}
}

export class <%= formalTitle %>Info extends React.Component<<%= formalTitle %>Info.Props>{
    constructor(props: <%= formalTitle %>Info.Props){
        super(props)
    }

    render(){
        const {id} = this.props.match.params
        return(
            <div><%= formalTitle %> Info {id}
            </div>
        )
    }
}