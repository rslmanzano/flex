import { ActionType, getType } from 'typesafe-actions';
import { RosterActions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import { IRoster } from 'app/models';
import { DataSource } from 'app/data_source';

type Actions = ActionType<typeof RosterActions>;

export function* RosterSaga(action: Actions): {} {
    if (action.type == getType(RosterActions.add_record)) {
        try {
            const resp: IRoster = yield call(() =>
                DataSource.roster.add(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(RosterActions.added_record(resp));
        } catch (error) {}
    }
    if (action.type == getType(RosterActions.fetch_list)) {
        try {
            const resp: IRoster[] = yield call(() =>
                DataSource.roster.getAll().then((list) => {
                    return list;
                })
            );
            yield put(RosterActions.fetch_list_received(resp));
        } catch (error) {}
    }
    if (action.type == getType(RosterActions.delete_record)) {
        try {
            yield call(() => DataSource.roster.remove(action.payload));
            yield put(RosterActions.delete_record_success(action.payload));
        } catch (error) {}
    }
    if (action.type == getType(RosterActions.fetch_record)) {
        try {
            const resp: IRoster = yield call(() =>
                DataSource.roster.get(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(RosterActions.fetch_record_receved(resp));
        } catch (error) {}
    }
    if (action.type == getType(RosterActions.update_record)) {
        try {
            const resp: IRoster = yield call(() =>
                DataSource.roster.update(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(RosterActions.updated_record(resp))
        } catch (error) {}
    }
}
