import * as React from 'react';
import BaseForm from 'app/components/Base/BaseForm';
import { ILocation } from 'app/models';
import { TextField, DefaultButton } from 'flexies';

class LocationBaseForm extends BaseForm<ILocation> {}

interface FormProps {
    save: (e: ILocation) => void;
    initialValues: any;
}

type Props = FormProps;

export const LocationForm: React.SFC<Props> = (props: Props) => {
    const { save, initialValues } = props;
    return (
        <div>
            <LocationBaseForm
                initialValues={initialValues}
                FormComponent={({ fields, onChange }) => (
                    <div>
                        <TextField
                            label="Code"
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
