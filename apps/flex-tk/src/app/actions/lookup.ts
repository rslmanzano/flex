import { createStandardAction } from "typesafe-actions";

export namespace LookupActions {
    export enum Type {
        FETCH_LOOKUP = '@@lookup/FETCH_LOOKUP',
    }

    export const fetch_lookup = createStandardAction(Type.FETCH_LOOKUP)<string, string>()
}

export type LookupActions = Omit<typeof LookupActions, 'Type'>;