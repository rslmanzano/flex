import * as _ from "lodash"
import { IShift } from '../models';
import { CrudMapperBase, ICrudMapper } from "app/data_source/base";


export class ShiftMapper extends CrudMapperBase<IShift> implements ICrudMapper<IShift> {
    toViewModelList(data: any): IShift[] {
         return _.chain(data)
            // .mapValues((employee, id) => _.merge(employee, { id }))
            .toArray()
            .value() as IShift[];
    }

    toViewModel(id: string, student: IShift): IShift {
        return _.assign({}, student, { id })  as IShift;
    }
}
