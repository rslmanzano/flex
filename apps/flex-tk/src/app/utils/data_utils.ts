export function generateColumns(data: any) {
    return Object.keys(data[0]).map((key) => {
        return {
            Header: key,
            accessor: key
        };
    });
}
