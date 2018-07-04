// Create your own `template` function:
//
// • the `template` function should accept
//    1. a string of the template to parse
//    2. an `options` object for custom delimiters
//        - an `open` property for the open delimiter
//        - a `close` property for the close delimiter
// • the default delimiters the `template` function should use are:
//    1. `*(` for the opening delimiter
//    2. `)*` for the closing delimiter
// • the `template` function should return a function
// • the returned function should accept:
//    1. one argument for each placeholder in the original string
//    2. a number - this is how many times the string should be logged to the console
//
// EXAMPLE:
// in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
// var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//
//
// Now it's your turn!

function template(string, options) {

  //set delimiters
  if (!options) {
    var open = '*(';
    var close = ')*';
  } else {
    var open = options.open;
    var close = options.close;
  };

  //test log
  //console.log(string + open + close);

  // splitting the string at open delimiter
  var newString = string.split(open);
  //console.log(newString);

  // create new array to hold split up parts of string
  var toPrint = [];
  toPrint.push(newString[0]);
  //console.log(toPrint);

  for (var i = 0; i < newString.length; i++) {
    if (newString[i].split(close).length > 1) {
    toPrint.push(newString[i].split(close)[1]);
  }
  }

  //console.log(toPrint);

  var ret = function(...args) {
    var str = 1;
    for (var j = 0; j < args.length-1; j++) {
      toPrint.splice(str, 0, args[j]);
      //console.log(toPrint.join(''));
      str += 2;
    }

    if (Number.isInteger(args[args.length-1]) === true) {
      for (var k = 0; k < args[args.length-1]; k++) {
        console.log(toPrint.join(''));
      }
    } else {
      console.log(toPrint.join(''));
    }
};
  return ret;

}
