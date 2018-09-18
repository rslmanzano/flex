import { BaseCrudModule } from "app/models";

export interface IEmployee extends BaseCrudModule {
    code: string;
    given_name: string;
    surname: string;
    other_given_name: string;
    prefix: string;
    suffix: string;
    tfn: string;
    mobile_number: string;
    email_address: string;
    date_of_birth: string;
    gender_id: number;
    work_type_id: number;
    employee_status_id: number;
}

export const IEmployeeInitialValue: IEmployee = {
    code: '',
    given_name: '',
    surname: '',
    other_given_name: '',
    prefix: '',
    suffix: '',
    tfn: '',
    mobile_number: '',
    email_address: '',
    date_of_birth: '',
    gender_id: 1,
    work_type_id: 1,
    employee_status_id: 1,
}