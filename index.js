function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log (string.toUpperCase());
}
function logWhisper(string) {
    console.log (string.t0LowerCase());
}
console.log(sayHiToGrandma("hello"));
console.log(sayHiToGrandma("HELLO"));
console.log(sayHiToGrandma("Let's have dinner together!"));
function sayHiToGrandma(string) {
    if (string ===string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }  else if (string === "I love you, too.") {
    return "I love you, too."
    }
}