import {RECEIVE_ACCOUNT_ERRORS, RECEIVE_ACCOUNT, CLEAR_ERRORS} from '../actions/accounts';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ACCOUNT_ERRORS:
      return action.errors;
    case RECEIVE_ACCOUNT:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;