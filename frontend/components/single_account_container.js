import { connect } from 'react-redux';
import { requestAccount } from '../actions/accounts';
import SingleAccount from './single_account';

const mapSTP = (state, ownProps) => ({
  account: state.accounts[ownProps.match.params.accountId]
});

const mapDTP = dispatch => ({
  requestAccount: (accountId) => dispatch(requestAccount(accountId)),
});

export default connect(mapSTP, mapDTP)(SingleAccount);