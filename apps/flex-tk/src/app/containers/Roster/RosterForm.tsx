import * as React from 'react';
import BaseForm from 'app/components/Base/BaseForm';
import { IRoster } from 'app/models';
import { TextField, DefaultButton, DatePicker } from 'flexies';
import { RootState } from 'app/reducers';
import { connect } from 'react-redux';

class RosterBaseForm extends BaseForm<IRoster> {}

export interface Lookup<S = {}> {
    records: S;
}

interface LookupProps<S = any> {
    lookup?: S;
}

const withLookup = <P extends LookupProps<any>>(Component: React.ComponentType<P>) => {
    type ResultProps = Omit<P, keyof LookupProps<any>> & ReduxState;
    interface ReduxState {
        lookup?: any;
    }
    const mapStateToProps = (state: RootState.LookupState): ReduxState => ({
        lookup: state.lookup
    });

    @connect(
        (state: RootState): ReduxState => {
            return {lookup: state.lookups.lookup}
        },
        undefined
    )
    class WithLookup extends React.Component<ResultProps, {}> {
        render(): JSX.Element {
            console.log(this.props.lookup)
            return (
                <div>
                    <Component {...this.props} lookup={this.props.lookup } />
                </div>
            );
        }
    }
    return WithLookup;
};

interface Lookups {
    shifts: any[];
    locations: any[];
}

interface FormProps extends LookupProps<Lookups> {
    save: (e: IRoster) => void;
    initialValues: any;
}

type Props = FormProps;

const rosterForm: React.SFC<Props> = (props: Props) => {
    const { save, initialValues } = props;
    console.log(props.lookup.shifts);

    return (
        <div>
            <RosterBaseForm
                initialValues={initialValues}
                FormComponent={({ fields, onChange }) => (
                    <div>
                        <TextField
                            label="Shift"
                            value={fields.shift_id}
                            onChanged={(e) => onChange('shift_id', e)}
                        />

                        <DatePicker
                            label="Date"
                            value={fields.date}
                            onChanged={(e) => onChange('date', e)}
                        />

                        <DefaultButton onClick={() => save(fields)}>Save</DefaultButton>
                    </div>
                )}
            />
        </div>
    );
};

export const RosterForm = withLookup(rosterForm);
