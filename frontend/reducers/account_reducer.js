import {
  RECEIVE_ACCOUNTS,
  RECEIVE_ACCOUNT,
  REMOVE_ACCOUNT,
} from '../actions/accounts';

const AccountReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ACCOUNTS:
      return action.accounts;
    case RECEIVE_ACCOUNT:
      newState[action.account.id] = action.account;
      return newState;
    case REMOVE_ACCOUNT:
      delete newState[action.accountId];
      return newState;
    default:
      return state;
  }
}

export default AccountReducer;