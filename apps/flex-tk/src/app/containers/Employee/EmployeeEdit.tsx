import * as React from 'react';
import { EmployeeForm } from 'app/containers/Employee/EmployeeForm';

import { bindActionCreators, Dispatch } from 'redux';
import { EmployeeActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { IEmployeeInitialValue, IEmployee } from 'app/models';
import { RootState } from 'app/reducers';
import { RouteComponentProps } from 'react-router';

export namespace EmployeeEdit {
    export interface Props extends RouteComponentProps<{ id: string }> {
        employee: IEmployee;
        actions: EmployeeActions;
    }
}

@connect(
    (state: RootState): Pick<EmployeeEdit.Props, 'employee'> => {
        return { employee: state.employees.record };
    },
    (dispatch: Dispatch): Pick<EmployeeEdit.Props, 'actions'> => ({
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch)
    })
)
export class EmployeeEdit extends React.Component<EmployeeEdit.Props> {
    constructor(props: EmployeeEdit.Props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.fetch_record(id);
    }

    render() {
        const { employee } = this.props;
        console.log(employee);
        return (
            <div>
                {employee && (
                    <EmployeeForm
                        initialValues={employee}
                        save={this.props.actions.update_record}
                    />
                )}
            </div>
        );
    }
}
