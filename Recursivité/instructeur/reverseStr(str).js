function reverseStr(str) {
  if (str.length == 1) {
    return str;
  }
  return reverseStr(str.slice(1)) + str[0];
}

/*
Stack : 
reverseStr("t") => "t"
reverseStr("at") => reverseStr("t") + "a"; => "t" + "a"
reverseStr("cat") => reverseStr("at") + "c"; => "t" + "a" + "c"

*/

console.log(reverseStr("cat"));
