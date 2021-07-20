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
        {this.props.account}
      </div>
    );
  }
}

export default SingleAccount;