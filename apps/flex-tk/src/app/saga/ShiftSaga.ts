import { ActionType, getType } from 'typesafe-actions';
import { ShiftActions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import { IShift } from 'app/models';
import { DataSource } from 'app/data_source';

type Actions = ActionType<typeof ShiftActions>;

export function* ShiftSaga(action: Actions): {} {
    if (action.type == getType(ShiftActions.add_record)) {
        try {
            const resp: IShift = yield call(() =>
                DataSource.shifts.add(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(ShiftActions.added_record(resp));
        } catch (error) {}
    }
    if (action.type == getType(ShiftActions.fetch_list)) {
        try {
            const resp: IShift[] = yield call(() =>
                DataSource.shifts.getAll().then((list) => {
                    return list;
                })
            );
            yield put(ShiftActions.fetch_list_received(resp));
        } catch (error) {}
    }
    if (action.type == getType(ShiftActions.delete_record)) {
        try {
            yield call(() => DataSource.shifts.remove(action.payload));
            yield put(ShiftActions.delete_record_success(action.payload));
        } catch (error) {}
    }
    if (action.type == getType(ShiftActions.fetch_record)) {
        try {
            const resp: IShift = yield call(() =>
                DataSource.shifts.get(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(ShiftActions.fetch_record_receved(resp));
        } catch (error) {}
    }
    if (action.type == getType(ShiftActions.update_record)) {
        try {
            const resp: IShift = yield call(() =>
                DataSource.shifts.update(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(ShiftActions.updated_record(resp))
        } catch (error) {}
    }
}
