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
    let goodCredCount = 0;
    let fairCredCount = 0;
    let poorCredCount = 0;
    this.props.accounts.forEach(acc => {
      let theAddress = acc.address.split(",");
      let theState = theAddress[theAddress.length - 2].slice(1);
      statesCredits[theState].push(acc.credit);
      statesBalances[theState] += this.balanceConvert(acc.balance);
      if (acc.credit >= 670) goodCredCount += 1;
      else if (acc.credit >= 580) fairCredCount += 1;
      else poorCredCount += 1;
    });

    let goodCredPercent = Math.floor(goodCredCount / this.props.accounts.length * 100);
    let fairCredPercent = Math.floor(fairCredCount / this.props.accounts.length * 100);
    let poorCredPercent = Math.floor(poorCredCount / this.props.accounts.length * 100);

    return (
      <div className="analytics">
        <h1 className="cred-title">Percentage of Users by Credit</h1>
        <ul className="cred-range1">
          <li className="cred-percent1">
            <h2>Good</h2>
            <p>{goodCredPercent}%</p>
          </li>
          <li className="cred-percent2">
            <h2>Fair</h2>
            <p>{fairCredPercent}%</p>
          </li>
          <li className="cred-percent3">
            <h2>Poor</h2>
            <p>{poorCredPercent}%</p>
          </li>
        </ul>
        <h1 className="analytic-title">Stats by States</h1>
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