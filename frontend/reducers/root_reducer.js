import {combineReducers} from 'redux';
import AccountReducer from './account_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  accounts: AccountReducer,
  errors: ErrorReducer
});

export default RootReducer;