
import { ActionType, getType } from 'typesafe-actions'
import { SessionActions } from 'app/actions';
import { put, call } from 'redux-saga/effects';
import AuthClient from 'app/api/AuthClient';
import HandleErrors from 'app/saga/HandleErrors';
import { setAccessToken } from 'app/utils/access_token_utils';
import { routerActions } from 'react-router-redux';

type Actions = ActionType<typeof SessionActions>;


export function* AuthClientSaga(action: Actions): {} {
    switch (action.type) {
        case getType(SessionActions.login):
        {
            const client = new AuthClient

            const resp = yield call(client.login, action.payload.username, action.payload.password)

            const respHasError: boolean = yield call(HandleErrors, resp.status)
            if (respHasError) { return }

            setAccessToken(resp.items.accessToken)

            yield put(routerActions.push('/'))
            yield put( SessionActions.loginSuccess(resp.items) )
        }
    }
}
