import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers';
import { SessionActions } from 'app/actions';
import { SessionModel } from 'app/models/SessionModel';
import { deleteAccessToken } from 'app/utils/access_token_utils';

const initialState: RootState.SessionState = {
  loggedIn: false,
  accessToken: '',
  userId: null
};

const removeSession = (state: RootState.SessionState): RootState.SessionState => {
  deleteAccessToken();
  return {
    accessToken: '',
    loggedIn: false,
    userId: null
  };
};

export const sessionReducer = handleActions<RootState.SessionState, SessionModel>(
  {
    [SessionActions.Type.LOGIN_SUCCESS]: (state, action) => {
      if (action.payload) {
        return {
          userId: action.payload.userId,
          accessToken: action.payload.accessToken,
          loggedIn: true
        };
      } else {
        return state;
      }
    },
    [SessionActions.Type.LOGOUT]: (state) => {
        return removeSession(state);
    }
  },
  initialState
);
