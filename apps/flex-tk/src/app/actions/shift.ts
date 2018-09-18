import { IShift } from "app/models/IShift";
import { createStandardAction, createAction } from "typesafe-actions";


export namespace ShiftActions {
    export enum Type {
        FETCH_LIST = '@@shift/FETCH_LIST',
        FETCH_LIST_RECEIVED = '@@shift/FETCH_LIST_RECEIVED',
        ADD_RECORD = '@@shift/ADD_RECORD',
        ADDED_RECORD = '@@shift/ADDED_RECORD',
        FETCH_RECORD = '@@shift/FETCH_RECORD',
        FETCH_RECORD_RECEIVED = '@@shift/FETCH_RECORD_RECEIVED',
        UPDATE_RECORD = '@@shift/UPDATE_RECORD',
        UPDATED_RECORD = '@@shift/UPDATED_RECORD',
        DELETE_RECORD = '@@shift/DELETE_RECORD',
        DELETE_RECORD_SUCCESS = '@@shift/DELETE_RECORD_SUCCESS'
    }

    export const fetch_list = createAction(Type.FETCH_LIST);
    export const fetch_list_received = createStandardAction(Type.FETCH_LIST_RECEIVED)<IShift[]>();
    export const fetch_record = createStandardAction(Type.FETCH_RECORD)<string>();
    export const fetch_record_receved = createStandardAction(Type.FETCH_RECORD_RECEIVED)<IShift>();
    export const add_record = createStandardAction(Type.ADD_RECORD)<IShift>();
    export const added_record = createStandardAction(Type.ADDED_RECORD)<IShift>();
    export const update_record = createStandardAction(Type.UPDATE_RECORD)<IShift>();
    export const updated_record = createStandardAction(Type.UPDATED_RECORD)<IShift>();
    export const delete_record = createStandardAction(Type.DELETE_RECORD)<string>();
    export const delete_record_success = createStandardAction(Type.DELETE_RECORD_SUCCESS)<string>();
}

export type ShiftActions = Omit<typeof ShiftActions, 'Type'>;