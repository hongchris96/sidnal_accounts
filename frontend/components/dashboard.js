import React from 'react';
import {Link} from 'react-router-dom';

import EachAccount from './single_account';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAccounts();
  }

  render(){
    return (
      <div>
        <h1>Account Cards</h1>
        <p><Link to="/analytics">Analytics</Link></p>
        <ul>
          {/* {this.props.accounts.map(acc => {})} */}
          <li>Testing: {this.props.accounts[0].name_first}</li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;