var util = require('util');
process.stdin.resume();
process.stdin.setEncoding('utf8');
do {
    process.stdin.on('data', function (input) {
      if(parseInt(input)==input )
        console.log(fact(parseInt(input[i])));
    }
});
} while (condition);
process.stdin.on('data', function (input) {
    input.replace( /\n/g, " " ).split( " " );
    for (var i = 0; i < input.length; i++) {
      if(parseInt(input[i]) == input[i])
        console.log(fact(parseInt(input[i])));
    }
    process.exit();
});