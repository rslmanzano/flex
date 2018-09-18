import { BaseCrudModule } from "app/models";

export interface IRoster extends BaseCrudModule {
    shift_id: string | any;
    date: string;
}

export const IRosterInitialValue: IRoster = {
    shift_id: '',
    date: ''
}
