import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import { EmployeeActions } from 'app/actions';
import * as _ from 'lodash';
const initialState: RootState.EmployeeState = {
    list: {
        entities: [],
        loading: false,
        error: ''
    },
    record: undefined
};

export const employeeReducer = handleActions<RootState.EmployeeState, any, any>(
    {
        [EmployeeActions.Type.FETCH_LIST_RECEIVED]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: action.payload
                }
            };
        },
        [EmployeeActions.Type.ADDED_RECORD]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: action.payload
                }
            };
        },
        [EmployeeActions.Type.DELETE_RECORD_SUCCESS]: (state, action) => {
            const recordToRemove: any = _.find(state.list.entities, (entity) => {
                return entity.id === action.payload;
            });
            const index = state.list.entities.indexOf(recordToRemove);
            return {
                ...state,
                list: {
                    loading: false,
                    error: '',
                    entities: [
                        ...state.list.entities.slice(0, index),
                        ...state.list.entities.slice(index + 1)
                    ]
                }
            };
        },
        [EmployeeActions.Type.FETCH_RECORD_RECEIVED]: (state, action) => {
            return {
                ...state,
                record: action.payload,
            }
        },
        [EmployeeActions.Type.UPDATED_RECORD]: (state, action) => {
            const recordToRemove: any = _.find(state.list.entities, entity => {
                return entity.id == action.payload.id
            })

            const stateIndex = state.list.entities.indexOf(recordToRemove)
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: state.list.entities.map((item, index) => {
                        if (index != stateIndex) return item
                        return {
                            ...item,
                            ...action.payload,
                        }
                    })
                },
                record: action.payload
            }
        }
    },
    initialState
);
