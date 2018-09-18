import { ActionType, getType } from 'typesafe-actions';
import { LocationActions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import { ILocation } from 'app/models';
import { DataSource } from 'app/data_source';

type Actions = ActionType<typeof LocationActions>;

export function* LocationSaga(action: Actions): {} {
    if (action.type == getType(LocationActions.add_record)) {
        try {
            const resp: ILocation = yield call(() =>
                DataSource.location.add(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(LocationActions.added_record(resp));
        } catch (error) {}
    }
    if (action.type == getType(LocationActions.fetch_list)) {
        try {
            const resp: ILocation[] = yield call(() =>
                DataSource.location.getAll().then((list) => {
                    return list;
                })
            );
            yield put(LocationActions.fetch_list_received(resp));
        } catch (error) {}
    }
    if (action.type == getType(LocationActions.delete_record)) {
        try {
            yield call(() => DataSource.location.remove(action.payload));
            yield put(LocationActions.delete_record_success(action.payload));
        } catch (error) {}
    }
    if (action.type == getType(LocationActions.fetch_record)) {
        try {
            const resp: ILocation = yield call(() =>
                DataSource.location.get(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(LocationActions.fetch_record_receved(resp));
        } catch (error) {}
    }
    if (action.type == getType(LocationActions.update_record)) {
        try {
            const resp: ILocation = yield call(() =>
                DataSource.location.update(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(LocationActions.updated_record(resp))
        } catch (error) {}
    }
}
