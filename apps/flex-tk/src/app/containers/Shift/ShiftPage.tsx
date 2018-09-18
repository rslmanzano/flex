import * as React from 'react';
import { withList } from 'app/components/Base/BaseDataEntry';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import { ShiftActions } from 'app/actions/shift';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import { IShiftInitialValue } from 'app/models';
import { ShiftForm } from 'app/containers/Shift/ShiftForm';
import { Link, RouteComponentProps } from 'react-router-dom';

const WithList = withList(ShiftForm);

export namespace ShiftPage {
    export interface Props extends RouteComponentProps<{}> {
        shift: RootState.ShiftState;
        actions: ShiftActions;
    }
}

@connect(
    (state: RootState): Pick<ShiftPage.Props, 'shift'> => {
        return { shift: state.shifts };
    },
    (dispatch: Dispatch): Pick<ShiftPage.Props, 'actions'> => ({
        actions: bindActionCreators(omit(ShiftActions, 'Type'), dispatch)
    })
)
export class ShiftPage extends React.Component<ShiftPage.Props, {}> {
    private getColumns() {
        return [
            {
                Header: 'Name',
                id: 'name',
                accessor: (d: any) => (
                    <button onClick={() => {
                        this.props.history.push(`/shift/edit/${d.id}`)
                        this.props.actions.fetch_record(d.id)
                    }}>{d.name}</button>
                )
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

    render() {
        return (
            <div>
                <WithList
                    columns={this.getColumns()}
                    list={this.props.shift.list.entities}
                    saveNew={this.props.actions.add_record}
                    saveEdit={this.props.actions.update_record}
                    initialValue={IShiftInitialValue}
                    recordToEdit={this.props.shift.record}
                    path="/shift"
                />
            </div>
        );
    }
}
