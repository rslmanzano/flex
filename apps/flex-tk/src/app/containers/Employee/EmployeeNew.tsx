import * as React from 'react'
import { EmployeeForm } from 'app/containers/Employee/EmployeeForm';

import { bindActionCreators, Dispatch } from 'redux';
import { EmployeeActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { IEmployeeInitialValue } from 'app/models';
import { DefaultButton } from 'flexies';

export namespace EmployeeNew {
    export interface Props {
        actions: EmployeeActions;
    }
}


@connect(
    undefined,
    (dispatch: Dispatch): Pick<EmployeeNew.Props, 'actions'> => ({
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch)
    })
)
export class EmployeeNew extends React.Component<EmployeeNew.Props> {
    constructor(props: EmployeeNew.Props){
        super(props)
    }
    render(){
        return(
            <div>
                <EmployeeForm
                    initialValues={IEmployeeInitialValue}
                    save={this.props.actions.add_record}
                />

            </div>
        )
    }
}