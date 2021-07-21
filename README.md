# Full Stack Challenge

A full stack project showing all account cards, individual accounts information and some statistics.

[Sidnal Live](https://google.com)

------
## Technologies

* Rails
* PostgreSQL
* React
* Redux
* Webpack
* CSS

### Backend
Using Rails to build schema, models, validations, controllers and views located in the `app` folder.
accounts.jsonl was parsed seeded in the seeds file in the `db` folder.

### Frontend
Using React with Redux to build actions, classical components, reducers, store, api util files and entry files located in the `frontend` folder. Styling was added from `app/assets/stylesheets` folder.

------
## Features
##
### Account Index Page
###
First page loads all the account cards. Each account cards has a picture, name, email, phone, and link to more details.

![account index page](https://github.com/hongchris96/sidnal_accounts/blob/main/app/assets/images/account_index.png)

Render information from GET request in the Dashboard component. Passing down props to child components:
```javascript
import React from 'react';
import DashboardAccount from './dashboard_acc';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAccounts();
  }

  render(){
    if (!this.props.accounts.length) {
      return null;
    }
    console.log(this.props.accounts);
    return (
      <div className="dashboard">
        <h1>Account Cards</h1>
        <ul>
          {this.props.accounts.map(acc => {
            return (<DashboardAccount
              key={acc.acc_id}
              account={acc}
            />)
          })}
        </ul>
      </div>
    );
  }
}
export default Dashboard;
```

------
### Account Details Page
###
Shows all the details of the account.

![account show page](https://github.com/hongchris96/sidnal_accounts/blob/main/app/assets/images/account_show.png)

Render information from GET request in the SingleAccount Component:
```javascript
import React from 'react';

class SingleAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAccount(this.props.match.params.accountId);
  }

  render(){
    if (this.props.account === undefined) {
      return null;
    }
    return(
      <div className="account-show">
        <div className="account-highlight">
          <img src={`${this.props.account.picture}`} alt="account-picture" />
          <div className="account-numbers">
            <h1>{this.props.account.name_first + " " + this.props.account.name_last}</h1>
            <p>Balance: ${this.props.account.balance}</p>
            <p>Credit: {this.props.account.credit}</p>
          </div>
        </div>
        <div className="account-details">
          <div><label>Account ID: </label><p>{this.props.account.acc_id}</p></div>
          <div><label>Email: </label><p>{this.props.account.email}</p></div>
          <div><label>Phone Number: </label><p>{this.props.account.phone}</p></div>
          <div><label>Address: </label><p>{this.props.account.address}</p></div>
          <div><label>Employer: </label><p>{this.props.account.employer}</p></div>
          <div><label>Created Date: </label><p>{this.props.account.created}</p></div>
          <div><label>Comments: </label><p>{this.props.account.comments}</p></div>
        </div>
      </div>
    );
  }
}
export default SingleAccount;
```
------

### Analytics Page
###
Shows percentages of users for each range of credits.
Shows total balance and average credit score for each state.

![analytics page](https://github.com/hongchris96/sidnal_accounts/blob/main/app/assets/images/account_analytics.png)

Calculating percentages in Analytics Page Component:
```javascript
allStates.forEach(ele => {
  statesBalances[ele] = 0;
  statesCredits[ele] = [];
});
let goodCredCount = 0;
let fairCredCount = 0;
let poorCredCount = 0;
this.props.accounts.forEach(acc => {
  let theAddress = acc.address.split(",");
  let theState = theAddress[theAddress.length - 2].slice(1);
  statesCredits[theState].push(acc.credit);
  statesBalances[theState] += this.balanceConvert(acc.balance);
  if (acc.credit >= 670) goodCredCount += 1;
  else if (acc.credit >= 580) fairCredCount += 1;
  else poorCredCount += 1;
});

let goodCredPercent = Math.floor(goodCredCount / this.props.accounts.length * 100);
let fairCredPercent = Math.floor(fairCredCount / this.props.accounts.length * 100);
let poorCredPercent = Math.floor(poorCredCount / this.props.accounts.length * 100);
```
------
### Future Features

* React placeholder before image loads
* Add sorting function for Stats by State in the Analytics page
* Convert all class components into functional components using React Hooks
* Graphs and Visual in the Analytics page using D3.js
