import * as React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import styled from 'app/style/theme';
import { FlexColumn } from 'app/style';

export namespace WithList {
    export interface Props {
        saveNew: (entity: any) => void;
        saveEdit: (entity: any) => void;
        initialValue: any;
        recordToEdit: any;
        path: string;
        list: any[];
        columns: any[];
    }
    export interface FormComponentProps {
        save: (entity: any) => void;
        initialValue?: any;
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const withList = <P extends WithList.Props>(
    FormComponent: React.ComponentType<WithList.FormComponentProps>
) => {
    type ResultProps = P;


    return class WithList extends React.Component<ResultProps> {
        constructor(props: ResultProps) {
            super(props);
        }



        render() {

            return (
                <Container>
                    <FlexColumn>
                        <Link to={`${this.props.path}/new`}>New</Link>
                        <ReactTable
                            data={this.props.list}
                            columns={this.props.columns}
                            getTheadThProps={() => {
                                return { style: { outline: 0 } };
                            }}
                        />
                    </FlexColumn>
                    <Route
                        path={`${this.props.path}/new`}
                        render={() => (
                            <FormComponent
                                save={this.props.saveNew}
                                initialValue={this.props.initialValue}
                            />
                        )}
                    />
                    <Route
                        path={`${this.props.path}/edit/:id`}
                        render={() => (
                            <FormComponent
                                save={this.props.saveEdit}
                                initialValue={this.props.recordToEdit || this.props.initialValue}
                            />
                        )}
                    />
                </Container>
            );
        }
    };
};
