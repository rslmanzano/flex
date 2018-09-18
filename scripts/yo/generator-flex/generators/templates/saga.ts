import { ActionType, getType } from 'typesafe-actions';
import { <%= formalTitle %>Actions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import { I<%= formalTitle %> } from 'app/models';
import { DataSource } from 'app/data_source';

type Actions = ActionType<typeof <%= formalTitle %>Actions>;

export function* <%= formalTitle %>Saga(action: Actions): {} {
    if (action.type == getType(<%= formalTitle %>Actions.add_record)) {
        try {
            const resp: I<%= formalTitle %> = yield call(() =>
                DataSource.<%= title %>.add(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(<%= formalTitle %>Actions.added_record(resp));
        } catch (error) {}
    }
    if (action.type == getType(<%= formalTitle %>Actions.fetch_list)) {
        try {
            const resp: I<%= formalTitle %>[] = yield call(() =>
                DataSource.<%= title %>.getAll().then((list) => {
                    return list;
                })
            );
            yield put(<%= formalTitle %>Actions.fetch_list_received(resp));
        } catch (error) {}
    }
    if (action.type == getType(<%= formalTitle %>Actions.delete_record)) {
        try {
            yield call(() => DataSource.<%= title %>.remove(action.payload));
            yield put(<%= formalTitle %>Actions.delete_record_success(action.payload));
        } catch (error) {}
    }
    if (action.type == getType(<%= formalTitle %>Actions.fetch_record)) {
        try {
            const resp: I<%= formalTitle %> = yield call(() =>
                DataSource.<%= title %>.get(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(<%= formalTitle %>Actions.fetch_record_receved(resp));
        } catch (error) {}
    }
    if (action.type == getType(<%= formalTitle %>Actions.update_record)) {
        try {
            const resp: I<%= formalTitle %> = yield call(() =>
                DataSource.<%= title %>.update(action.payload).then((record) => {
                    return record;
                })
            );
            yield put(<%= formalTitle %>Actions.updated_record(resp))
        } catch (error) {}
    }
}
