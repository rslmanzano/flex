import { BaseCrudModule } from "app/models";

export interface ILocation extends BaseCrudModule {
    name: string;
}

export const ILocationInitialValue: ILocation = {
    name: ''
}
