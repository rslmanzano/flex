import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace RosterInfo {
    export interface Props extends RouteComponentProps<{id: string}>{}
}

export class RosterInfo extends React.Component<RosterInfo.Props>{
    constructor(props: RosterInfo.Props){
        super(props)
    }

    render(){
        const {id} = this.props.match.params
        return(
            <div>Roster Info {id}
            </div>
        )
    }
}