import { BaseCrudModule } from "app/models";

export interface I<%= formalTitle %> extends BaseCrudModule {
    name: string;
}

export const I<%= formalTitle %>InitialValue: I<%= formalTitle %> = {
    name: ''
}
