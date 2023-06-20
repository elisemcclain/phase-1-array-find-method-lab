const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record) {
    const winRecord = record.find(entry => entry.result === 'W')
    if(winRecord) {
        return winRecord.year
    } else {
        return
    }

}

console.log(superbowlWin(record))