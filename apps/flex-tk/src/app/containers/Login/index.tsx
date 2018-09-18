import * as React from 'react';
import { TextField, Nav, DefaultButton } from 'flexies';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { SessionActions } from 'app/actions';
import { omit } from 'app/utils';
import { FlexCenter, FlexColumn, FlexRowRightAlign } from 'app/style';
import { device } from 'app/style/var';
import styled from 'app/style/theme';

const Panel = styled(FlexColumn)`
    background-color: #f1f1f1;
    width: 200px;
    padding: 40px;
    @media ${device.laptop} {
        flex-direction: column;
    }
`;

const Wrapper = styled(FlexCenter)`
    height: 100vh;
`;

export namespace Login {
    export interface Props {
        actions: SessionActions;
    }

    export interface State {
        username: string;
        password: string;
    }
}
@connect(
    undefined,
    (dispatch: Dispatch): Pick<Login.Props, 'actions'> => ({
        actions: bindActionCreators(omit(SessionActions, 'Type'), dispatch)
    })
)
export class Login extends React.Component<Login.Props, Login.State> {
    constructor(props: Login.Props, context?: any) {
        super(props, context);
        this.state = { username: '', password: '' };

        this._onLoginClick = this._onLoginClick.bind(this);
    }

    private setValueToState(propertyName: string, value: any) {
        this.setState({ ...this.state, [propertyName]: value });
    }

    private _onLoginClick() {
        const { username, password } = this.state;

        this.props.actions.login({ username, password });
    }

    render() {
        return (
            <Wrapper>
                <Panel>
                    <TextField
                        label="Username"
                        onChanged={(e) => this.setValueToState('username', e)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        onChanged={(e) => this.setValueToState('password', e)}
                    />
                    <FlexRowRightAlign>
                        <DefaultButton onClick={this._onLoginClick}>Login</DefaultButton>
                        <DefaultButton>Cancel</DefaultButton>
                    </FlexRowRightAlign>
                </Panel>
            </Wrapper>
        );
    }
}
