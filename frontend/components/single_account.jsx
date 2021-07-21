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