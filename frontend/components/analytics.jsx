import React from 'react';

class Analytics extends React.Component {
  constructor(props){
    super(props);

    this.balanceConvert = this.balanceConvert.bind(this);
    this.calcAvg = this.calcAvg.bind(this);
  }

  componentDidMount(){
    this.props.requestAccounts();
  }

  balanceConvert(str) {
    return parseFloat(str);
  }

  calcAvg(arr) {
    if (!arr.length) return "N/A";
    let total = arr.reduce((acc, ele) => acc + ele);
    return Math.floor(total / arr.length);
  }

  render(){
    if (!this.props.accounts.length) {
      return null;
    }
    let allStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas',
                    'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia',
                    'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
                    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
                    'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri',
                    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                    'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                    'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
                    'South Dakota', 'Tennessee', 'Texas', 'Virgin Islands', 'Utah', 'Vermont',
                    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    let statesBalances = {};
    let statesCredits = {};
    allStates.forEach(ele => {
      statesBalances[ele] = 0;
      statesCredits[ele] = [];
    });
    this.props.accounts.forEach(acc => {
      let theAddress = acc.address.split(",");
      let theState = theAddress[theAddress.length - 2].slice(1);
      statesCredits[theState].push(acc.credit);
      statesBalances[theState] += this.balanceConvert(acc.balance);
    });

    return (
      <div className="analytics">
        <h1>Stats by States</h1>
        <ul>
          <li className="stats-titles">
            <p>State</p>
            <p>Total Assets</p>
            <p>Credit Average</p>
          </li>
          {allStates.map(ele => {
            return (<li key={ele} className="state-stats">
              <h1>{ele}</h1>
              <p>$ {statesBalances[ele].toFixed(2)}</p>
              <p>{this.calcAvg(statesCredits[ele])}</p>
            </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Analytics;