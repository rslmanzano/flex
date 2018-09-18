import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import { <%= formalTitle %>Actions } from 'app/actions';
import * as _ from 'lodash';
const initialState: RootState.<%= formalTitle %>State = {
    list: {
        entities: [],
        loading: false,
        error: ''
    },
    record: undefined
};

export const <%= title %>Reducer = handleActions<RootState.<%= formalTitle %>State, any, any>(
    {
        [<%= formalTitle %>Actions.Type.FETCH_LIST_RECEIVED]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: action.payload
                }
            };
        },
        [<%= formalTitle %>Actions.Type.ADDED_RECORD]: (state, action) => {
            return {
                ...state,
                list: {
                    ...state.list,
                    entities: action.payload
                }
            };
        },
        [<%= formalTitle %>Actions.Type.DELETE_RECORD_SUCCESS]: (state, action) => {
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
        [<%= formalTitle %>Actions.Type.FETCH_RECORD_RECEIVED]: (state, action) => {
            return {
                ...state,
                record: action.payload,
            }
        },
        [<%= formalTitle %>Actions.Type.UPDATED_RECORD]: (state, action) => {
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
