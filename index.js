const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winningRecord = arr.find(record => record["result"] == "W");
  return winningRecord ? winningRecord.year : undefined
}
