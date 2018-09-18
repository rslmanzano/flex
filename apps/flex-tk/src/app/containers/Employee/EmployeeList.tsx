import * as React from 'react';
import { RootState } from 'app/reducers';
import { EmployeeActions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import ReactTable from 'react-table';
import { Link, RouteComponentProps } from 'react-router-dom';
import { DefaultButton } from 'flexies';
export namespace EmployeeList {
    export interface Props extends RouteComponentProps<{}> {
        employee: RootState.EmployeeState;
        actions: EmployeeActions;
    }

    export interface State {
        list: any[];
    }
}

@connect(
    (state: RootState): Pick<EmployeeList.Props, 'employee'> => {
        return { employee: state.employees };
    },
    (dispatch: Dispatch): Pick<EmployeeList.Props, 'actions'> => ({
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch)
    })
)
export class EmployeeList extends React.Component<EmployeeList.Props, EmployeeList.State> {
    constructor(props: EmployeeList.Props) {
        super(props);
        this.state = { list: props.employee.list.entities };
    }
    private getColumns() {
        return [
            {
                Header: 'Employee Code',
                id: 'link_code',
                accessor: (d: any) => <Link to={`/employee/${d.id}`}>{d.code}</Link>
            },
            {
                Header: 'Id',
                accessor: 'id',
                show: false
            },

            {
                Header: 'Given Name',
                accessor: 'given_name'
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
    componentWillReceiveProps(nextProps: EmployeeList.Props) {
        this.setState({ ...this.state, list: nextProps.employee.list.entities });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <h1>Employee</h1>
                <DefaultButton onClick={() => this.props.history.push('/employee/new')}>Add</DefaultButton>
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
