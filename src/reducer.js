import { combineReducers } from 'redux';

import todos from './todos';
// import visibilityFilter from './filterReducer'
const reducer = combineReducers({
  todos,
});

export default reducer;

