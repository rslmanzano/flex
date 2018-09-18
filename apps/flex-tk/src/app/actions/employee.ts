import { createAction, createStandardAction } from "typesafe-actions";
import { IEmployee } from "app/models/IEmployee";


export namespace EmployeeActions {
    export enum Type {
        FETCH_LIST = '@@employee/FETCH_LIST',
        FETCH_LIST_RECEIVED = '@@employee/FETCH_LIST_RECEIVED',
        ADD_RECORD = '@@employee/ADD_RECORD',
        ADDED_RECORD = '@@employee/ADDED_RECORD',
        FETCH_RECORD = '@@employee/FETCH_RECORD',
        FETCH_RECORD_RECEIVED = '@@employee/FETCH_RECORD_RECEIVED',
        UPDATE_RECORD = '@@employee/UPDATE_RECORD',
        UPDATED_RECORD = '@@employee/UPDATED_RECORD',
        DELETE_RECORD = '@@employee/DELETE_RECORD',
        DELETE_RECORD_SUCCESS = '@@employee/DELETE_RECORD_SUCCESS'
    }

    export const fetch_list = createAction(Type.FETCH_LIST);
    export const fetch_list_received = createStandardAction(Type.FETCH_LIST_RECEIVED)<IEmployee[]>();
    export const fetch_record = createStandardAction(Type.FETCH_RECORD)<string>();
    export const fetch_record_receved = createStandardAction(Type.FETCH_RECORD_RECEIVED)<IEmployee>();
    export const add_record = createStandardAction(Type.ADD_RECORD)<IEmployee>();
    export const added_record = createStandardAction(Type.ADDED_RECORD)<IEmployee>();
    export const update_record = createStandardAction(Type.UPDATE_RECORD)<IEmployee>();
    export const updated_record = createStandardAction(Type.UPDATED_RECORD)<IEmployee>();
    export const delete_record = createStandardAction(Type.DELETE_RECORD)<string>();
    export const delete_record_success = createStandardAction(Type.DELETE_RECORD_SUCCESS)<string>();
}

export type EmployeeActions = Omit<typeof EmployeeActions, 'Type'>;