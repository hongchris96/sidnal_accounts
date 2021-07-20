import * as AccountAPIUtil from '../utils/account_api_utils';

export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS";
export const RECEIVE_ACCOUNT = "RECEIVE_ACCOUNT";
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT";

export const RECEIVE_ACCOUNT_ERRORS = "RECEIVE_ACCOUNT_ERRORS";

// Regular Action

const receiveAccounts = accounts => ({
  type: RECEIVE_ACCOUNTS,
  accounts
});

const receiveAccount = account => ({
  type: RECEIVE_ACCOUNT,
  account
});

const removeAccount = accountId => ({
  type: REMOVE_ACCOUNT,
  accountId
});

const receiveAccountErrors = errors => ({
  type: RECEIVE_ACCOUNT_ERRORS,
  errors
});

// Thunk Action

export const requestAccounts = () => dispatch => {
  return AccountAPIUtil.fetchAccounts().then(accounts => dispatch(receiveAccounts(accounts)));
};

export const requestAccount = (accountId) => dispatch => {
  return AccountAPIUtil.fetchAccount(accountId).then(account => dispatch(receiveAccount(account)));
};

export const createAccount = (account) => dispatch => {
  return AccountAPIUtil.createAccount(account)
    .then(account => (dispatch(receiveAccount(account))),
    err => (dispatch(receiveAccountErrors(err.responseJSON))));
};

export const deleteAccount = (accountId) => dispatch => {
  return AccountAPIUtil.deleteAccount(accountId).then(() => dispatch(removeAccount(accountId)));
};