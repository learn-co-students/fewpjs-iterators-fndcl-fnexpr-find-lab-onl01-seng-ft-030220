function superbowlWin(record){
  if (record.find(e => e.result === "W")){
    return record.find(e => e.result === "W").year
  }
}
