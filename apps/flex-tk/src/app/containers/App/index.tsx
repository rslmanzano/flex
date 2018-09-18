import * as React from 'react';
// import { Nav } from 'flexies';
// import { AppState } from 'app/containers/App/AppState';
import styled from 'app/style/theme';
import './App.styles';
import SideNav from 'app/components/SideNav';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { SessionActions } from 'app/actions';
import { omit } from 'app/utils';
import { AppState } from 'app/AppState';

const Page = styled.div`
    min-height: 100vh;
`;

const LeftPanel = styled.div`
    height: 100%;
    min-width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
`;

const Main = styled.div`
    margin-left: 160px; /* Same as the width of the sidenav */
    min-height: 100vh;
`;

const Content = styled.div`
    padding: 0px 10px;
`;

const Header = styled.div`
    min-height: 50px;
    background-color: blue;
`;

export namespace App {
    export interface Props extends React.Props<App>{
        actions?: SessionActions;
    }
}

@connect(
    undefined,
    (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
        actions: bindActionCreators(omit(SessionActions, 'Type'), dispatch)
    })
)
export class App extends React.Component<App.Props, {}> {
    constructor(props: App.Props){
        super(props);
    }
    render() {
        const { children } = this.props;
        return (
            <Page>
                <LeftPanel>
                    <SideNav links={AppState.Pages}/>
                </LeftPanel>
                <Main>
                    <Header><button onClick={() => this.props.actions.logout()}>Logout</button></Header>
                    <Content>{children}</Content>
                </Main>
            </Page>
        );
    }
}
