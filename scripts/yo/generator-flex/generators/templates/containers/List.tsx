import * as React from 'react';
import { RootState } from 'app/reducers';
import { <%= formalTitle %>Actions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import ReactTable from 'react-table';
import { Link, RouteComponentProps } from 'react-router-dom';
import { DefaultButton } from 'flexies';
export namespace <%= formalTitle %>List {
    export interface Props extends RouteComponentProps<{}> {
        entities: RootState.<%= formalTitle %>State;
        actions: <%= formalTitle %>Actions;
    }

    export interface State {
        list: any[];
    }
}

@connect(
    (state: RootState): Pick<<%= formalTitle %>List.Props, 'entities'> => {
        return { entities: state.<%= title %> };
    },
    (dispatch: Dispatch): Pick<<%= formalTitle %>List.Props, 'actions'> => ({
        actions: bindActionCreators(omit(<%= formalTitle %>Actions, 'Type'), dispatch)
    })
)
export class <%= formalTitle %>List extends React.Component<<%= formalTitle %>List.Props, <%= formalTitle %>List.State> {
    constructor(props: <%= formalTitle %>List.Props) {
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
                accessor: (d: any) => <Link to={`/<%= title %>/${d.id}`}>{d.name}</Link>
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
    componentWillReceiveProps(nextProps: <%= formalTitle %>List.Props) {
        this.setState({ ...this.state, list: nextProps.entities.list.entities });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <h1><%= formalTitle %></h1>
                <DefaultButton onClick={() => this.props.history.push('/<%= formalTitle %>/new')}>Add</DefaultButton>
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
