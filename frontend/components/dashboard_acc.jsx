import React from 'react';
import {Link} from 'react-router-dom';

class DashboardAccount extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="account-card">
        <img src={`${this.props.account.picture}`} alt="account-picture"/>
        <div className="account-overview">
          <h1>{this.props.account.name_first + " " + this.props.account.name_last}</h1>
          <p>{this.props.account.email}</p>
          <p>{this.props.account.phone}</p>
          <Link to={`/accounts/${this.props.account.id}`}>More Info</Link>
        </div>
      </li>
    );
  }
}

export default DashboardAccount;