//1:
for (i = 1; i <= 25; i++) {
  if (i%2 ===0) {
    var str = i + " is even";
  }
  else {
    var str = i + " is odd";
  }
  console.log(str);
}

//2
for (var i = 1; i <= 50; i++) {

if (i%3 === 0 && i%5 ===0) {
  var str = "FizzBuzz";
}
else {
  if (i%3 ===0) {
    var str = "Fizz";
  }
  else if(i%5) {
    var str = "Buzz";
  }
  else {
    var str = i;
  }
}
  console.log(str);
}

//3
for (var i = 0; i < 1000; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log(i);
  }
}

//4

for (var i = 1; i <= 7; i++) {
  var str = "#".repeat(i);
  console.log(str);
}
