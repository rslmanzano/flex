import { combineReducers } from 'redux';
import { RootState } from 'app/reducers/state';
import { sessionReducer } from 'app/reducers/sessions';

import { routerReducer, RouterState } from 'react-router-redux';
import { employeeReducer } from 'app/reducers/employees';
import { shiftReducer } from 'app/reducers/shift';
import { locationReducer } from 'app/reducers/location';
import { rosterReducer } from 'app/reducers/roster';
import { lookupReducer } from 'app/reducers/lookup';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
  sessions: sessionReducer as any,
  employees: employeeReducer as any,
  shifts: shiftReducer as any,
  location: locationReducer as any,
  roster: rosterReducer as any,
  lookups: lookupReducer as any,
});
