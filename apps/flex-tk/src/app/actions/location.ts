import { createAction, createStandardAction } from 'typesafe-actions';
import { ILocation } from 'app/models';


export namespace LocationActions {
  export enum Type {
    FETCH_LIST = '@@location/FETCH_LIST',
    FETCH_LIST_RECEIVED = '@@location/FETCH_LIST_RECEIVED',
    ADD_RECORD = '@@location/ADD_RECORD',
    ADDED_RECORD = '@@location/ADDED_RECORD',
    FETCH_RECORD = '@@location/FETCH_RECORD',
    FETCH_RECORD_RECEIVED = '@@location/FETCH_RECORD_RECEIVED',
    UPDATE_RECORD = '@@location/UPDATE_RECORD',
    UPDATED_RECORD = '@@location/UPDATED_RECORD',
    DELETE_RECORD = '@@location/DELETE_RECORD',
    DELETE_RECORD_SUCCESS = '@@location/DELETE_RECORD_SUCCESS'
}

export const fetch_list = createAction(Type.FETCH_LIST);
export const fetch_list_received = createStandardAction(Type.FETCH_LIST_RECEIVED)<ILocation[]>();
export const fetch_record = createStandardAction(Type.FETCH_RECORD)<string>();
export const fetch_record_receved = createStandardAction(Type.FETCH_RECORD_RECEIVED)<ILocation>();
export const add_record = createStandardAction(Type.ADD_RECORD)<ILocation>();
export const added_record = createStandardAction(Type.ADDED_RECORD)<ILocation>();
export const update_record = createStandardAction(Type.UPDATE_RECORD)<ILocation>();
export const updated_record = createStandardAction(Type.UPDATED_RECORD)<ILocation>();
export const delete_record = createStandardAction(Type.DELETE_RECORD)<string>();
export const delete_record_success = createStandardAction(Type.DELETE_RECORD_SUCCESS)<string>();
}

export type LocationActions = Omit<typeof LocationActions, 'Type'>;
