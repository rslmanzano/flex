import { IDbEntity } from "app/models/Base/BaseModel";


export interface BaseCrudModule extends IDbEntity {
    created_by_id?: number;
    date_created?: Date;
    modified_by_id?: number;
    date_modified?: Date;
}