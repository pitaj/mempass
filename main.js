"use strict";

var mempass = require("./library");

var args = process.argv.splice(2);

args = args.map(function(arg){
  return arg.toLowerCase();
});

function parseArgs(args){
  var opts = {};

  var lone = false, i;

  for(i = 0; i < args.length; i++){
    if(args[i][0] === "-"){
      i++;
    } else {
      lone = parseInt(args[i], 10);
      break;
    }
  }

  if(!isNaN(lone)){
    opts.words = lone;
  }

  var hash = {
    minLength: ["--min", "--minlength"],
    maxLength: ["--max", "--maxlength"],
    separator: ["-s", "--separator"],
    beginningNumbers: ["-b", "--beginningNumbers"],
    endingNumbers: ["-e", "--endingNumbers"],
    transform: ["-t", "--transform"],
  };

  Object.keys(hash).forEach(function(key){
    var one = hash[key][0], two = hash[key][1];
    args.forEach(function(arg, index){
      if(arg === one || arg === two){
        opts[key] = args[index + 1];
      }
    });
  });

  return opts;
}

console.log("\n", mempass.generate(parseArgs(args)));
