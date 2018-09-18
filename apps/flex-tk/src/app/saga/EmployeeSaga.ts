import { ActionType, getType } from 'typesafe-actions';
import { EmployeeActions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import { IEmployee } from 'app/models';
import { DataSource } from 'app/data_source';

type Actions = ActionType<typeof EmployeeActions>;

export function* EmployeeSaga(action: Actions): {} {
    if (action.type == getType(EmployeeActions.add_record)) {
        try {
            const resp: IEmployee = yield call(() =>
                DataSource.employees.add(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(EmployeeActions.added_record(resp));
        } catch (error) {}
    }
    if (action.type == getType(EmployeeActions.fetch_list)) {
        try {
            const resp: IEmployee[] = yield call(() =>
                DataSource.employees.getAll().then((list) => {
                    return list;
                })
            );
            yield put(EmployeeActions.fetch_list_received(resp));
        } catch (error) {}
    }
    if (action.type == getType(EmployeeActions.delete_record)) {
        try {
            yield call(() => DataSource.employees.remove(action.payload));
            yield put(EmployeeActions.delete_record_success(action.payload));
        } catch (error) {}
    }
    if (action.type == getType(EmployeeActions.fetch_record)) {
        try {
            const resp: IEmployee = yield call(() =>
                DataSource.employees.get(action.payload).then((record) => {
                    return record;
                })
            );
            console.log(resp);
            yield put(EmployeeActions.fetch_record_receved(resp));
        } catch (error) {}
    }
    if (action.type == getType(EmployeeActions.update_record)) {
        try {
            const resp: IEmployee = yield call(() =>
                DataSource.employees.update(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(EmployeeActions.updated_record(resp))
        } catch (error) {}
    }
}
