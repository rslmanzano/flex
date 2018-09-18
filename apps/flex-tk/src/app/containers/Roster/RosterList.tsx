import * as React from 'react';
import { RootState } from 'app/reducers';
import { RosterActions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import ReactTable from 'react-table';
import { Link, RouteComponentProps } from 'react-router-dom';
import { DefaultButton } from 'flexies';
export namespace RosterList {
    export interface Props extends RouteComponentProps<{}> {
        entities: RootState.RosterState;
        actions: RosterActions;
    }

    export interface State {
        list: any[];
    }
}

@connect(
    (state: RootState): Pick<RosterList.Props, 'entities'> => {
        return { entities: state.roster };
    },
    (dispatch: Dispatch): Pick<RosterList.Props, 'actions'> => ({
        actions: bindActionCreators(omit(RosterActions, 'Type'), dispatch)
    })
)
export class RosterList extends React.Component<RosterList.Props, RosterList.State> {
    constructor(props: RosterList.Props) {
        super(props);
        this.state = { list: props.entities.list.entities };
    }
    private getColumns() {
        return [
            {
                Header: 'Id',
                accessor: 'id',
                show: false,
            },
            {
                Header: 'Shift ID',
                accessor: 'shift_id',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'Actions',
                id: 'delete',
                accessor: (a: any) => (
                    <button onClick={() => this.props.actions.delete_record(a.id)}>Delete</button>
                )
            }
        ];
    }
    componentDidMount() {
        this.props.actions.fetch_list();
    }
    componentWillReceiveProps(nextProps: RosterList.Props) {
        this.setState({ ...this.state, list: nextProps.entities.list.entities });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <h1>Roster</h1>
                <DefaultButton onClick={() => this.props.history.push('/Roster/new')}>Add</DefaultButton>
                <ReactTable
                    data={list}
                    columns={this.getColumns()}
                    getTheadThProps={() => {
                        return { style: { outline: 0 } };
                    }}
                />
            </div>
        );
    }
}
