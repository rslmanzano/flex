import { BaseCrudModule } from "app/models";

export interface IShift extends BaseCrudModule {
    name: string;
    time_start: string;
    time_end: string;
    active: boolean;
}

export const IShiftInitialValue: IShift = {
    name: '',
    time_start: '',
    time_end: '',
    active: true,
}
