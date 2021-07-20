export const fetchAccounts = () => {
  return $.ajax({
    method: "GET",
    url: `/api/accounts`
  });
};

export const fetchAccount = (accountId) => {
  return $.ajax({
    method: "GET",
    url: `/api/accounts/${accountId}`
  });
};

export const createAccount = (account) => {
  return $.ajax({
    method: "POST",
    url: `/api/accounts`,
    data: {account: account}
  });
};


export const deleteAccount = (accountId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/accounts/${accountId}`
  });
};