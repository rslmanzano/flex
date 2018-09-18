import { createAction, createStandardAction } from 'typesafe-actions';
import { SessionModel } from 'app/models';
import { AuthModel } from 'app/models/AuthModel';


export namespace SessionActions {
  export enum Type {
    LOGOUT = '@@session/LOGOUT',
    RECEIVE_ACCESS_TOKEN = '@@session/RECIEVE_ACCESS_TOKEN',
    LOGIN = '@@session/LOGIN',
    RECEIVE_ERROR = '@@session/RECEIVE_ERROR',
    LOGIN_SUCCESS = '@@session/LOGIN_SUCCESS'
  }

  export const logout = createAction(Type.LOGOUT);
  export const login = createStandardAction(Type.LOGIN)<AuthModel>();
  export const loginSuccess = createStandardAction(Type.LOGIN_SUCCESS)<SessionModel>();
  export const receiveError = createStandardAction(Type.RECEIVE_ERROR)<string>();
  export const receiveAccessToken = createStandardAction(Type.RECEIVE_ACCESS_TOKEN)<string>();
}

export type SessionActions = Omit<typeof SessionActions, 'Type'>;
