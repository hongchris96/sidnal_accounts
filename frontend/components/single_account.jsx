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
          <h1>{this.props.account.name_first + " " + this.props.account.name_last}</h1>
          <p>Balance: ${this.props.balance}</p>
          <p>Credit: {this.props.account.credit}</p>
        </div>
        <div className="account-details">
          <p>Account ID: {this.props.account.acc_id}</p>
          <p>Email: {this.props.account.email}</p>
          <p>Phone Number: {this.props.account.phone}</p>
          <p>Address: {this.props.account.address}</p>
          <p>Employer: {this.props.account.employer}</p>
          <p>Created Date: {this.props.account.created}</p>
          <p>Comments: {this.props.account.comments}</p>
        </div>
      </div>
    );
  }
}

export default SingleAccount;