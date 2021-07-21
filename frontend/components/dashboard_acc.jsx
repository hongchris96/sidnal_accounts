import React from 'react';
import {Link} from 'react-router-dom';

class DashboardAccount extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let percentBalance = parseFloat(this.props.account.balance) / 5000;
    if (percentBalance > 1) percentBalance = 1;
    let percentCredit = this.props.account.credit / 620;
    if (percentCredit > 1) percentCredit = 1;
    let howCloseToMorg = Math.floor((percentCredit * 0.5 + percentBalance * 0.5) * 100);
    let shade = "red";
    if (howCloseToMorg >= 80) {
      shade = "rgb(51, 238, 23)";
    } else if (howCloseToMorg >= 70) {
      shade = "yellow";
    } else if (howCloseToMorg >= 60) {
      shade = "orange";
    }

    return (
      <li className="account-card">
        <img src={`${this.props.account.picture}`} alt="account-picture"/>
        <div className="account-overview">
          <h1>{this.props.account.name_first + " " + this.props.account.name_last}</h1>
          <p><a href={`mailto:${this.props.account.email}`} className="email" target="_blank" rel="noopener noreferrer">{this.props.account.email}</a></p>
          <p>{this.props.account.phone}</p>
          <p style={{color: `${shade}`}}>{howCloseToMorg}% towards Mortgage Eligible</p>
          <Link to={`/accounts/${this.props.account.id}`}>More Info</Link>
        </div>
      </li>
    );
  }
}

export default DashboardAccount;