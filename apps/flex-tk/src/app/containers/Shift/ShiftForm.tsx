import * as React from 'react';
import BaseForm from 'app/components/Base/BaseForm';
import { IShift, IShiftInitialValue } from 'app/models';
import { TextField, DefaultButton, Checkbox } from 'flexies';
import { WithList } from 'app/components/Base/BaseDataEntry';
import { RouteComponentProps, withRouter } from 'react-router';
import { FlexRow } from 'app/style';

class ShiftBaseForm extends BaseForm<IShift> {}

class shiftForm extends React.Component<WithList.FormComponentProps & RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div>
                <ShiftBaseForm
                    initialValues={this.props.initialValue}
                    FormComponent={({ fields, onChange }) => (
                        <div>
                            <TextField
                                label="name"
                                value={fields.name}
                                onChanged={(e) => onChange('name', e)}
                            />
                            <TextField
                                label="Time Start"
                                value={fields.time_start || ''}
                                onChanged={(e) => onChange('time_start', e)}
                            />
                            <TextField
                                label="Time End"
                                value={fields.time_end || ''}
                                onChanged={(e) => onChange('time_end', e)}
                            />
                            <Checkbox
                                text="Active"
                                defaultChecked={fields.active}
                                onCheckBoxChanged={(e: any) => {
                                    onChange('active', e);
                                }}
                            />
                            <FlexRow>
                                <DefaultButton
                                    label="Save"
                                    onClick={() => this.props.save(fields)}
                                />

                                <DefaultButton
                                    label="Discard"
                                    onClick={() => this.props.history.push('/shift')}
                                />
                            </FlexRow>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export const ShiftForm = withRouter(shiftForm);
