import { Nav } from 'flexies';

interface IAppState {
    Title: string;
    Pages: Nav.IPage[];
}

export const AppState: IAppState = {
    Title: 'Flex-TK',
    Pages: [
        {
            title: 'Dashboard',
            url: '/',
            isExactPath: true,
            component: require<any>('./containers/Dashboard').Dashboard
        },
        {
            title: 'Employee',
            url: '/employee',
            isExactPath: true,
            component: require<any>('./containers/Employee').EmployeeList,
            pages: [
                {
                    title: 'Employee Info',
                    url: '/employee/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Employee').EmployeeInfo
                },
                {
                    title: 'Employee New',
                    url: '/employee/new',
                    isExactPath: true,
                    component: require<any>('./containers/Employee').EmployeeNew
                },
                {
                    title: 'Employee Edit',
                    url: '/employee/edit/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Employee').EmployeeEdit
                }
            ]
        },
        {
            title: 'Shift',
            url: '/shift',
            component: require<any>('./containers/Shift').ShiftPage
        },
        {
            title: 'Location',
            url: '/location',
            isExactPath: true,
            component: require<any>('./containers/Location').LocationList,
            pages: [
                {
                    title: 'Location Info',
                    url: '/location/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Location').LocationInfo
                },
                {
                    title: 'Location New',
                    url: '/location/new',
                    isExactPath: true,
                    component: require<any>('./containers/Location').LocationNew
                },
                {
                    title: 'Location Edit',
                    url: '/location/edit/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Location').LocationEdit
                }
            ]
        },
        {
            title: 'Roster',
            url: '/roster',
            isExactPath: true,
            component: require<any>('./containers/Roster').RosterList,
            pages: [
                {
                    title: 'Roster Info',
                    url: '/roster/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Roster').RosterInfo
                },
                {
                    title: 'Roster New',
                    url: '/roster/new',
                    isExactPath: true,
                    component: require<any>('./containers/Roster').RosterNew
                },
                {
                    title: 'Roster Edit',
                    url: '/roster/edit/:id',
                    isExactPath: true,
                    component: require<any>('./containers/Roster').RosterEdit
                }
            ]
        }
    ]
};
