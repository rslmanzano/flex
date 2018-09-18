import * as React from 'react';
import { <%= formalTitle %>Form } from 'app/containers/<%= formalTitle %>/<%= formalTitle %>Form';

import { bindActionCreators, Dispatch } from 'redux';
import { <%= formalTitle %>Actions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { I<%= formalTitle %>InitialValue, I<%= formalTitle %> } from 'app/models';
import { RootState } from 'app/reducers';
import { RouteComponentProps } from 'react-router';

export namespace <%= formalTitle %>Edit {
    export interface Props extends RouteComponentProps<{ id: string }> {
        <%= title %>: I<%= formalTitle %>;
        actions: <%= formalTitle %>Actions;
    }
}

@connect(
    (state: RootState): Pick<<%= formalTitle %>Edit.Props, '<%= title %>'> => {
        return { <%= title %>: state.<%= title %>.record };
    },
    (dispatch: Dispatch): Pick<<%= formalTitle %>Edit.Props, 'actions'> => ({
        actions: bindActionCreators(omit(<%= formalTitle %>Actions, 'Type'), dispatch)
    })
)
export class <%= formalTitle %>Edit extends React.Component<<%= formalTitle %>Edit.Props> {
    constructor(props: <%= formalTitle %>Edit.Props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.fetch_record(id);
    }

    render() {
        const { <%= title %> } = this.props;
        console.log(<%= title %>);
        return (
            <div>
                {<%= title %> && (
                    <<%= formalTitle %>Form
                        initialValues={<%= title %>}
                        save={this.props.actions.update_record}
                    />
                )}
            </div>
        );
    }
}
