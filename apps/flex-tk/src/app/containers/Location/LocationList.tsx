import * as React from 'react';
import { RootState } from 'app/reducers';
import { LocationActions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import ReactTable from 'react-table';
import { Link, RouteComponentProps } from 'react-router-dom';
import { DefaultButton } from 'flexies';
export namespace LocationList {
    export interface Props extends RouteComponentProps<{}> {
        entities: RootState.LocationState;
        actions: LocationActions;
    }

    export interface State {
        list: any[];
    }
}

@connect(
    (state: RootState): Pick<LocationList.Props, 'entities'> => {
        return { entities: state.location };
    },
    (dispatch: Dispatch): Pick<LocationList.Props, 'actions'> => ({
        actions: bindActionCreators(omit(LocationActions, 'Type'), dispatch)
    })
)
export class LocationList extends React.Component<LocationList.Props, LocationList.State> {
    constructor(props: LocationList.Props) {
        super(props);
        this.state = { list: props.entities.list.entities };
    }
    private getColumns() {
        return [
            {
                Header: 'Id',
                accessor: 'id',
                show: false
            },
            {
                Header: 'Name',
                id: '_name',
                accessor: (d: any) => <Link to={`/Location/${d.id}`}>{d.name}</Link>
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
    componentWillReceiveProps(nextProps: LocationList.Props) {
        this.setState({ ...this.state, list: nextProps.entities.list.entities });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <h1>location</h1>
                <DefaultButton onClick={() => this.props.history.push('/location/new')}>Add</DefaultButton>
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
