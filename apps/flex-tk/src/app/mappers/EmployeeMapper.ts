import * as _ from "lodash"
import { IEmployee } from '../models';
import { CrudMapperBase, ICrudMapper } from "app/data_source/base";


export class EmployeeMapper extends CrudMapperBase<IEmployee> implements ICrudMapper<IEmployee> {
    toViewModelList(data: any): IEmployee[] {
         return _.chain(data)
            // .mapValues((employee, id) => _.merge(employee, { id }))
            .toArray()
            .value() as IEmployee[];
    }

    toViewModel(id: string, student: IEmployee): IEmployee {
        return _.assign({}, student, { id })  as IEmployee;
    }
}
