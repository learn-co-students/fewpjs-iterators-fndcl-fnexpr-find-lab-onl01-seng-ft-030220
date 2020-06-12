const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (games) => {
  const win = games.find(game => game.result === 'W')
  if (win) {
    return win.year
  }
}
