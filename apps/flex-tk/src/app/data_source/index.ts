import { CrudGeneric } from "app/data_source/base";
import { IEmployee, IShift, ILocation, IRoster } from "app/models";
import { ShiftMapper, EmployeeMapper, LocationMapper, RosterMapper } from "app/mappers";


export class EmployeeDataSource extends CrudGeneric<IEmployee> {}
export class ShiftDataSource extends CrudGeneric<IShift> {}
export class LocationDataSource extends CrudGeneric<ILocation> {}
export class RosterDataSource extends CrudGeneric<IRoster> {}

const endPointUrl = 'http://localhost:5000/api';

export class DataSource {
    static employees: EmployeeDataSource = new EmployeeDataSource({
        endPointUrl,
        collectionName: 'employees'
    }, new EmployeeMapper)

    static shifts: ShiftDataSource = new ShiftDataSource({
        endPointUrl,
        collectionName: 'shifts'
    }, new ShiftMapper)

    static location: LocationDataSource = new LocationDataSource({
        endPointUrl,
        collectionName: 'location'
    }, new LocationMapper)

    static roster: RosterDataSource = new RosterDataSource({
        endPointUrl,
        collectionName: 'rosters'
    }, new RosterMapper)
}