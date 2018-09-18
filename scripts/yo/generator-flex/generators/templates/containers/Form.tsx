import * as React from 'react';
import BaseForm from 'app/components/Base/BaseForm';
import { I<%= formalTitle %> } from 'app/models';
import { TextField, DefaultButton } from 'flexies';

class <%= formalTitle %>BaseForm extends BaseForm<I<%= formalTitle %>> {}

interface FormProps {
    save: (e: I<%= formalTitle %>) => void;
    initialValues: any;
}

type Props = FormProps;

export const <%= formalTitle %>Form: React.SFC<Props> = (props: Props) => {
    const { save, initialValues } = props;
    return (
        <div>
            <<%= formalTitle %>BaseForm
                initialValues={initialValues}
                FormComponent={({ fields, onChange }) => (
                    <div>
                        <TextField
                            label="Name"
                            value={fields.name}
                            onChanged={(e) => onChange('name', e)}
                        />

                        <DefaultButton onClick={() => save(fields)}>Save</DefaultButton>
                    </div>
                )}
            />
        </div>
    );
};
