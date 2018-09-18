import * as _ from "lodash"
import { I<%= formalTitle %> } from '../models';
import { CrudMapperBase, ICrudMapper } from "app/data_source/base";


export class <%= formalTitle %>Mapper extends CrudMapperBase<I<%= formalTitle %>> implements ICrudMapper<I<%= formalTitle %>> {
    toViewModelList(data: any): I<%= formalTitle %>[] {
         return _.chain(data)
            // .mapValues((<%= formalTitle %>, id) => _.merge(<%= formalTitle %>, { id }))
            .toArray()
            .value() as I<%= formalTitle %>[];
    }

    toViewModel(id: string, student: I<%= formalTitle %>): I<%= formalTitle %> {
        return _.assign({}, student, { id })  as I<%= formalTitle %>;
    }
}
