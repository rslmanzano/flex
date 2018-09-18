import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';

type Component = React.ComponentClass<{}>;
// type Component = React.ComponentClass<RouteComponentProps<{}>>

export namespace pageShell {
    export interface Props extends RouteComponentProps<{}> {
        session: RootState.SessionState;
    }
}

function pageShell(Component: Component): any {
    @connect(
        (state: RootState): Pick<pageShell.Props, 'session'> => {
            return { session: state.sessions };
        },
        undefined
    )
    class PageShell extends React.Component<pageShell.Props, {}> {
        constructor(props: pageShell.Props) {
            super(props);
        }
        componentWillReceiveProps(nextProps: pageShell.Props): void {
            if (!nextProps.session.loggedIn && this.props.session.loggedIn) {
                nextProps.history.push('/login');
            } else if (nextProps.session.loggedIn && !this.props.session.loggedIn) {
                this.props.history.push('/');
            }
        }

        render(): JSX.Element {
            const { session, ...props } = this.props;
            // const loggedIn = isLoggedIn()
            return (
                <div>
                    {this.props.session.loggedIn}

                    {/* {this.props.session.loggedIn && <PageHeader {...props} />} */}
                    <Component {...props} />

                    {/* <ProgressSpinner /> */}
                </div>
            );
        }
    }

    return PageShell;
}

export default pageShell;
