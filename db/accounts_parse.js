const fs = require('fs');

fs.readFile('./accounts.jsonl', 'utf8' , (err, data) => {
  let dataString = data;
  let dataArray = dataString.split('\n');
  let dataObjs = dataArray.slice(0, dataArray.length - 1).map(ele => JSON.parse(ele));
  console.log(Object.keys(dataObjs[0]));
});