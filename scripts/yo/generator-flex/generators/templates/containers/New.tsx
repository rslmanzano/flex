import * as React from 'react'
import { <%= formalTitle %>Form } from 'app/containers/<%= formalTitle %>/<%= formalTitle %>Form';

import { bindActionCreators, Dispatch } from 'redux';
import { <%= formalTitle %>Actions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { I<%= formalTitle %>InitialValue } from 'app/models';
import { DefaultButton } from 'flexies';

export namespace <%= formalTitle %>New {
    export interface Props {
        actions: <%= formalTitle %>Actions;
    }
}


@connect(
    undefined,
    (dispatch: Dispatch): Pick<<%= formalTitle %>New.Props, 'actions'> => ({
        actions: bindActionCreators(omit(<%= formalTitle %>Actions, 'Type'), dispatch)
    })
)
export class <%= formalTitle %>New extends React.Component<<%= formalTitle %>New.Props> {
    constructor(props: <%= formalTitle %>New.Props){
        super(props)
    }
    render(){
        return(
            <div>
                <<%= formalTitle %>Form
                    initialValues={I<%= formalTitle %>InitialValue}
                    save={this.props.actions.add_record}
                />

            </div>
        )
    }
}