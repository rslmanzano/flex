import * as _ from "lodash"
import { ILocation } from '../models';
import { CrudMapperBase, ICrudMapper } from "app/data_source/base";


export class LocationMapper extends CrudMapperBase<ILocation> implements ICrudMapper<ILocation> {
    toViewModelList(data: any): ILocation[] {
         return _.chain(data)
            // .mapValues((Location, id) => _.merge(Location, { id }))
            .toArray()
            .value() as ILocation[];
    }

    toViewModel(id: string, student: ILocation): ILocation {
        return _.assign({}, student, { id })  as ILocation;
    }
}
