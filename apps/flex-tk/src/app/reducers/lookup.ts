import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers';
import { LookupActions } from 'app/actions';

const initialState: RootState.LookupState = {
    lookup:
        {
            shifts: [
                { id: 1, name: 'Shift 1' },
                { id: 2, name: 'Shift 2' },
                { id: 3, name: 'Shift 3' }
            ],
            locations: [
                { id: 1, name: 'Location 1' },
                { id: 2, name: 'Location 2' },
                { id: 3, name: 'Location 3' }
            ]
        }

};

export const lookupReducer = handleActions<RootState.LookupState, any, any>(
    {
        [LookupActions.Type.FETCH_LOOKUP]: (state, action) => {
            return { ...state };
        }
    },
    initialState
);
