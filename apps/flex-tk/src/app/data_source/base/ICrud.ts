import { IDbEntity } from "./IDbEntity"

interface Resp {
    readonly text: string
    readonly status: number
    readonly statusText: string
}

interface HandledResp {
    readonly items: {}
    readonly status: number
    readonly statusText: string
}

export interface ICrud<T extends IDbEntity>{
    getAll: () => Promise<T[]>;
    getAllFromParent: (parentId: string) => Promise<T[]>;
    get: (id: string) => Promise<T>;
    add: (entity: T) => Promise<T>;
    // update: (entity: T) => Promise<T>;
    remove: (id: string) => Promise<string>;
}