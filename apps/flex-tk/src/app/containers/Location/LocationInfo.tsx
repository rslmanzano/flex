import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace LocationInfo {
    export interface Props extends RouteComponentProps<{id: string}>{}
}

export class LocationInfo extends React.Component<LocationInfo.Props>{
    constructor(props: LocationInfo.Props){
        super(props)
    }

    render(){
        const {id} = this.props.match.params
        return(
            <div>Location Info {id}
            </div>
        )
    }
}