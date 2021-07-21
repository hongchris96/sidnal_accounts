import { connect } from 'react-redux';
import { requestAccounts } from '../actions/accounts';
import Analytics from './analytics';

const mapSTP = state => ({
  accounts: Object.values(state.accounts)
});

const mapDTP = dispatch => ({
  requestAccounts: () => dispatch(requestAccounts()),
});

export default connect(mapSTP, mapDTP)(Analytics);