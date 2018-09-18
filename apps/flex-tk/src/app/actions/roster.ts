import { createAction, createStandardAction } from 'typesafe-actions';
import { IRoster } from 'app/models';


export namespace RosterActions {
  export enum Type {
    FETCH_LIST = '@@roster/FETCH_LIST',
    FETCH_LIST_RECEIVED = '@@roster/FETCH_LIST_RECEIVED',
    ADD_RECORD = '@@roster/ADD_RECORD',
    ADDED_RECORD = '@@roster/ADDED_RECORD',
    FETCH_RECORD = '@@roster/FETCH_RECORD',
    FETCH_RECORD_RECEIVED = '@@roster/FETCH_RECORD_RECEIVED',
    UPDATE_RECORD = '@@roster/UPDATE_RECORD',
    UPDATED_RECORD = '@@roster/UPDATED_RECORD',
    DELETE_RECORD = '@@roster/DELETE_RECORD',
    DELETE_RECORD_SUCCESS = '@@roster/DELETE_RECORD_SUCCESS'
}

export const fetch_list = createAction(Type.FETCH_LIST);
export const fetch_list_received = createStandardAction(Type.FETCH_LIST_RECEIVED)<IRoster[]>();
export const fetch_record = createStandardAction(Type.FETCH_RECORD)<string>();
export const fetch_record_receved = createStandardAction(Type.FETCH_RECORD_RECEIVED)<IRoster>();
export const add_record = createStandardAction(Type.ADD_RECORD)<IRoster>();
export const added_record = createStandardAction(Type.ADDED_RECORD)<IRoster>();
export const update_record = createStandardAction(Type.UPDATE_RECORD)<IRoster>();
export const updated_record = createStandardAction(Type.UPDATED_RECORD)<IRoster>();
export const delete_record = createStandardAction(Type.DELETE_RECORD)<string>();
export const delete_record_success = createStandardAction(Type.DELETE_RECORD_SUCCESS)<string>();
}

export type RosterActions = Omit<typeof RosterActions, 'Type'>;
