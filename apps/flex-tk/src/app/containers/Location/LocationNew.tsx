import * as React from 'react'
import { LocationForm } from 'app/containers/Location/LocationForm';

import { bindActionCreators, Dispatch } from 'redux';
import { LocationActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { ILocationInitialValue } from 'app/models';
import { DefaultButton } from 'flexies';

export namespace LocationNew {
    export interface Props {
        actions: LocationActions;
    }
}


@connect(
    undefined,
    (dispatch: Dispatch): Pick<LocationNew.Props, 'actions'> => ({
        actions: bindActionCreators(omit(LocationActions, 'Type'), dispatch)
    })
)
export class LocationNew extends React.Component<LocationNew.Props> {
    constructor(props: LocationNew.Props){
        super(props)
    }
    render(){
        return(
            <div>
                <LocationForm
                    initialValues={ILocationInitialValue}
                    save={this.props.actions.add_record}
                />

            </div>
        )
    }
}