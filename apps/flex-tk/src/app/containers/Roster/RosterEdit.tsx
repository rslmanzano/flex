import * as React from 'react';
import { RosterForm } from 'app/containers/Roster/RosterForm';

import { bindActionCreators, Dispatch } from 'redux';
import { RosterActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { IRosterInitialValue, IRoster } from 'app/models';
import { RootState } from 'app/reducers';
import { RouteComponentProps } from 'react-router';

export namespace RosterEdit {
    export interface Props extends RouteComponentProps<{ id: string }> {
        roster: IRoster;
        actions: RosterActions;
    }
}

@connect(
    (state: RootState): Pick<RosterEdit.Props, 'roster'> => {
        return { roster: state.roster.record };
    },
    (dispatch: Dispatch): Pick<RosterEdit.Props, 'actions'> => ({
        actions: bindActionCreators(omit(RosterActions, 'Type'), dispatch)
    })
)
export class RosterEdit extends React.Component<RosterEdit.Props> {
    constructor(props: RosterEdit.Props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.fetch_record(id);
    }

    render() {
        const { roster } = this.props;
        console.log(roster);
        return (
            <div>
                {roster && (
                    <RosterForm
                        initialValues={roster}
                        save={this.props.actions.update_record}
                    />
                )}
            </div>
        );
    }
}
