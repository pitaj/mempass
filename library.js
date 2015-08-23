"use strict";

var randomWord = require("random-word");

function digit(){
  return Math.floor(Math.random()*10).toString();
}

var mempass = {
  transforms: {
    lower: function(arr){
      return arr.map(function(word){
        return word.toLowerCase();
      });
    },
    everyOTHERcaps: function(arr){
      return arr.map(function(word, index){
        if(index % 2){
          return word.toUpperCase();
        }
      });
    },
    Capitalize: function(arr){
      return arr.map(function(word){
        word[0] = word[0].toUpperCase();
        return word;
      });
    },
    rEVERSEcAPITALIZE: function(arr){
      return arr.map(function(word){
        word = word.toUpperCase();
        word[0] = word[0].toLowerCase();
        return word;
      });
    },
    ALLCAPS: function(arr){
      return arr.map(function(word){
        return word.toUpperCase();
      });
    },
    randomCAPS: function(arr){
      return arr.map(function(word){
        var capitalize = Math.round(Math.random());

        return capitalize ? word.toUpperCase() : word;
      });
    },
    none: function(arr){
      return arr;
    }
  },
  defaults: {
    words: 3,
    minLength: 0,
    maxLength: 0,
    separator: "-",
    beginningNumbers: 0,
    endingNumbers: 0,
    transform: "lower"
  },
  generate: function(options){

    Object.keys(mempass.defaults).forEach(function(key){
      if( options[key] === undefined || isNaN(parseInt(options[key])) !== isNaN(parseInt(mempass.defaults[key]))){
        options[key] = mempass.defaults[key];
      }
    });

    if(!mempass.transforms[options.transform]){
      options.transform = mempass.defaults.transform;
    }


    var words = [], i, word, phrase, startDigits = "", endDigits = "";

    for(i = 0; i < options.words; i++){
      do {
        word = randomWord();
      } while((word.length < options.minLength && options.minLength) || (word.length > options.maxLength && options.maxLength));

      words[i] = word;
    }


    words = mempass.transforms[options.transform](words);

    while(startDigits.length < options.beginningNumbers){
      startDigits += digit();
    }

    while(endDigits.length < options.endingNumbers){
      endDigits += digit();
    }

    phrase = startDigits + words.join(options.separator) + endDigits;

    return phrase;

  }
};

Object.keys(mempass.transforms).forEach(function(key){
  mempass.transforms[key.toLowerCase()] = mempass.transforms[key];
});

module.exports = mempass;
