

function superbowlWin(record) {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined // if there is a result, return the year. else undefined. 

}
