import * as React from 'react'
import ReactTable, { TableProps } from 'react-table';

export interface FlexListProps extends TableProps {}

export const FlexList: React.SFC<FlexListProps> = (props: FlexListProps) => {
    return(
        <ReactTable {...props} />
    )
}