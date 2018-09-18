export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
    return (Object.keys(target) as K[]).reduce(
        (res, key) => {
            if (!omitKeys.includes(key)) {
                res[key] = target[key];
            }
            return res;
        },
        {} as any
    );
}

export function getReturnOfExpression<RT>(expression: (...params: any[]) => RT): RT {
    // tslint:disable-next-line:no-null-keyword
    return (null as any) as RT;
}

export * from './data_utils'