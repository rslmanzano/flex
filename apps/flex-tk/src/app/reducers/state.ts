import { SessionModel, IEmployee, IShift, ILocation, IRoster } from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
    sessions: RootState.SessionState;
    router: RouterState;
    employees: RootState.EmployeeState;
    shifts: RootState.ShiftState;
    location: RootState.LocationState;
    roster: RootState.RosterState;
    lookups: RootState.LookupState;
}

type MyType = {
    id: number;
    name: string;
}

type MyGroupType = {
    [key: string]: MyType[];
}


export namespace RootState {
    export type EmployeeState = {
        readonly list: {
            readonly entities: IEmployee[];
            readonly loading: boolean;
            readonly error: string;
        };
        readonly record: IEmployee;
    };
    export type ShiftState = {
        readonly list: {
            readonly entities: IShift[];
            readonly loading: boolean;
            readonly error: string;
        };
        readonly record: IShift;
    };
    export type LookupState = {
        readonly lookup: MyGroupType;
    }
    export type LocationState = {
        readonly list: {
            readonly entities: ILocation[];
            readonly loading: boolean;
            readonly error: string;
        };
        readonly record: ILocation;
    };
    export type RosterState = {
        readonly list: {
            readonly entities: IRoster[];
            readonly loading: boolean;
            readonly error: string;
        };
        readonly record: IRoster;
    };
    export type SessionState = SessionModel;
}
