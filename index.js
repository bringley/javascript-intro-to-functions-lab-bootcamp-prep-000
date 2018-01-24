//receives one argument and returns it in all caps
function shout(string){
  return string.toUpperCase()
}

//receives one argument and returns it in all lowercase
function whisper(string){
  return string.toLowerCase()
}

//calls console.log() its one argument in all caps
function shoutLog(string){
  return console.log(shout.toUpperCase)
}