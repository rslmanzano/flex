import * as React from 'react';
import BaseForm from 'app/components/Base/BaseForm';
import { IEmployee } from 'app/models';
import { TextField, DefaultButton } from 'flexies';

class EmployeeBaseForm extends BaseForm<IEmployee> {}

interface FormProps {
    save: (e: IEmployee) => void;
    initialValues: any;
}

type Props = FormProps;

export const EmployeeForm: React.SFC<Props> = (props: Props) => {
    const { save, initialValues } = props;
    return (
        <div>
            <EmployeeBaseForm
                initialValues={initialValues}
                FormComponent={({ fields, onChange }) => (
                    <div>
                        <TextField
                            label="Code"
                            value={fields.code}
                            onChanged={(e) => onChange('code', e)}
                        />
                        <TextField
                            label="Given Name"
                            value={fields.given_name}
                            onChanged={(e) => onChange('given_name', e)}
                        />
                        <DefaultButton onClick={() => save(fields)}>Save</DefaultButton>
                    </div>
                )}
            />
        </div>
    );
};
