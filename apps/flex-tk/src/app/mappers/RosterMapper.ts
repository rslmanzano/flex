import * as _ from "lodash"
import { IRoster } from '../models';
import { CrudMapperBase, ICrudMapper } from "app/data_source/base";


export class RosterMapper extends CrudMapperBase<IRoster> implements ICrudMapper<IRoster> {
    toViewModelList(data: any): IRoster[] {
         return _.chain(data)
            // .mapValues((Roster, id) => _.merge(Roster, { id }))
            .toArray()
            .value() as IRoster[];
    }

    toViewModel(id: string, student: IRoster): IRoster {
        return _.assign({}, student, { id })  as IRoster;
    }
}
