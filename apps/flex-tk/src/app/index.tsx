import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App as FlexApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
import { Login as LoginPage, Login } from 'app/containers/Login';
import { AppState } from 'app/AppState';
import { PrivateRoute } from 'app/components/Base/private_route';
import pageShell from 'app/components/Base/page_shell';

const Hello: React.SFC<{}> = () => {
    return <div>Hello</div>;
};

const World: React.SFC<{}> = () => {
    return <div>World</div>;
};

export const App = hot(module)(() => (
    <Switch>
        <Route exact={true} path={'/login'} component={Login}/>
        <FlexApp>
            {_getAppRoutes()}
        </FlexApp>
    </Switch>
));


function _createRoutes(pages: {}[]): {}[] {
    let routes: any = []

    // tslint:disable-next-line:no-any
    pages.forEach((page: any, pageIndex: number) => {
        if (page.component) {
            routes.push(
                <PrivateRoute
                    exact={page.isExactPath}
                    key={page.url}
                    path={page.url}
                    component={pageShell(page.component)}
                />,
            )
        }
        if (page.pages) {
            routes = routes.concat(_createRoutes(page.pages))
        }
        if (page.links) {
            routes = routes.concat(_createRoutes(page.links))
        }
    })

    return routes
}

function _getAppRoutes() {
    let routes: any = []

    //   AppState.pages.forEach((page: any, pageIndex: number) => {
    //     routes.push(_createRoutes(page))
    //   })
    routes = _createRoutes(AppState.Pages)

    // Add the default route
    // routes.push(
    //   <Route key='home' component={ HomePage } />
    // );
    return routes
}
