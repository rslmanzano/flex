import { createAction, createStandardAction } from 'typesafe-actions';
import { I<%= formalTitle %> } from 'app/models';


export namespace <%= formalTitle %>Actions {
  export enum Type {
    FETCH_LIST = '@@<%= title %>/FETCH_LIST',
    FETCH_LIST_RECEIVED = '@@<%= title %>/FETCH_LIST_RECEIVED',
    ADD_RECORD = '@@<%= title %>/ADD_RECORD',
    ADDED_RECORD = '@@<%= title %>/ADDED_RECORD',
    FETCH_RECORD = '@@<%= title %>/FETCH_RECORD',
    FETCH_RECORD_RECEIVED = '@@<%= title %>/FETCH_RECORD_RECEIVED',
    UPDATE_RECORD = '@@<%= title %>/UPDATE_RECORD',
    UPDATED_RECORD = '@@<%= title %>/UPDATED_RECORD',
    DELETE_RECORD = '@@<%= title %>/DELETE_RECORD',
    DELETE_RECORD_SUCCESS = '@@<%= title %>/DELETE_RECORD_SUCCESS'
}

export const fetch_list = createAction(Type.FETCH_LIST);
export const fetch_list_received = createStandardAction(Type.FETCH_LIST_RECEIVED)<I<%= formalTitle %>[]>();
export const fetch_record = createStandardAction(Type.FETCH_RECORD)<string>();
export const fetch_record_receved = createStandardAction(Type.FETCH_RECORD_RECEIVED)<I<%= formalTitle %>>();
export const add_record = createStandardAction(Type.ADD_RECORD)<I<%= formalTitle %>>();
export const added_record = createStandardAction(Type.ADDED_RECORD)<I<%= formalTitle %>>();
export const update_record = createStandardAction(Type.UPDATE_RECORD)<I<%= formalTitle %>>();
export const updated_record = createStandardAction(Type.UPDATED_RECORD)<I<%= formalTitle %>>();
export const delete_record = createStandardAction(Type.DELETE_RECORD)<string>();
export const delete_record_success = createStandardAction(Type.DELETE_RECORD_SUCCESS)<string>();
}

export type <%= formalTitle %>Actions = Omit<typeof <%= formalTitle %>Actions, 'Type'>;
