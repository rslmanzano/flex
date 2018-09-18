import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import * as _  from 'lodash';
import { ShiftActions } from 'app/actions/shift';
import { IShiftInitialValue } from 'app/models';

const initialState: RootState.ShiftState = {
    list: {
        entities: [],
        loading: false,
        error: ''
    },
    record: undefined
}

export const shiftReducer = handleActions<RootState.ShiftState, any, any>(
    {
        [ShiftActions.Type.FETCH_LIST_RECEIVED]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: action.payload
                }
            };
        },
        [ShiftActions.Type.ADDED_RECORD]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: [...state.list.entities, action.payload]
                }
            };
        },
        [ShiftActions.Type.DELETE_RECORD_SUCCESS]: (state, action) => {
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
        [ShiftActions.Type.FETCH_RECORD_RECEIVED]: (state, action) => {
            return {
                ...state,
                record: action.payload,
            }
        },
        [ShiftActions.Type.UPDATED_RECORD]: (state, action) => {
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
)