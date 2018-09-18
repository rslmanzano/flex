import * as React from 'react';
import { LocationForm } from 'app/containers/Location/LocationForm';

import { bindActionCreators, Dispatch } from 'redux';
import { LocationActions } from 'app/actions';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { ILocationInitialValue, ILocation } from 'app/models';
import { RootState } from 'app/reducers';
import { RouteComponentProps } from 'react-router';

export namespace LocationEdit {
    export interface Props extends RouteComponentProps<{ id: string }> {
        record: ILocation;
        actions: LocationActions;
    }
}

@connect(
    (state: RootState): Pick<LocationEdit.Props, 'record'> => {
        return { record: state.location.record };
    },
    (dispatch: Dispatch): Pick<LocationEdit.Props, 'actions'> => ({
        actions: bindActionCreators(omit(LocationActions, 'Type'), dispatch)
    })
)
export class LocationEdit extends React.Component<LocationEdit.Props> {
    constructor(props: LocationEdit.Props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.fetch_record(id);
    }

    render() {
        const { location } = this.props;
        console.log(location);
        return (
            <div>
                {location && (
                    <LocationForm
                        initialValues={location}
                        save={this.props.actions.update_record}
                    />
                )}
            </div>
        );
    }
}
