import { combineReducers } from 'redux';
import { users, setPage } from '../components/Items';
import { setFilter } from '../components/Filter';

const rootReducer = combineReducers({
  setFilter,
  setPage,
  users,
});

export default rootReducer;
