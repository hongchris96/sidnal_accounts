import React from 'react';
import {Link} from 'react-router-dom';

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
          {/* <li>Testing: {this.props.accounts[0].name_first + " " + this.props.accounts[0].name_last}</li> */}
        </ul>
      </div>
    );
  }
}

export default Dashboard;