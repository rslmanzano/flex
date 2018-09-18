import * as React from 'react'
import { RosterForm } from 'app/containers/Roster/RosterForm';

import { bindActionCreators, Dispatch } from 'redux';
import { RosterActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { IRosterInitialValue } from 'app/models';
import { DefaultButton } from 'flexies';

export namespace RosterNew {
    export interface Props {
        actions: RosterActions;
    }
}


@connect(
    undefined,
    (dispatch: Dispatch): Pick<RosterNew.Props, 'actions'> => ({
        actions: bindActionCreators(omit(RosterActions, 'Type'), dispatch)
    })
)
export class RosterNew extends React.Component<RosterNew.Props> {
    constructor(props: RosterNew.Props){
        super(props)
    }
    render(){
        return(
            <div>
                <RosterForm
                    initialValues={IRosterInitialValue}
                    save={this.props.actions.add_record}
                />

            </div>
        )
    }
}