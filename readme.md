# mempass

A configurable generator for memorable passphrases

## CLI

`mempass` is the CLI command, run `npm i -g mempass` to use it in the command line

#### Examples:

```
$ mempass -s = -t allcaps

 METHANOL=TODDED=BROWNOUT

$ mempass 4 -s + -t randomcaps

 DITT+syntexis+tithing+BARRATOR

$ mempass 2 -s "<>" -t capitalize

 paterae<>rebraced
```

#### Usage:

```
$ mempass [words] [options]...
```

`words` is an optional number specifying the number of words in the passphrase

#### Options

*Note: not case-sensitive*

|           Command          |      Description
| -------------------------- | ----------------------
| `-s`, `--separator`        | Symbol to use to separate the individual words (`" "` for space)
| `-b`, `--beginningNumbers` | Amount of digits to insert before the phrase
| `-e`, `--endingNumbers`    | Amount of digits to append to the phrase
| `-t`, `--transform`        | Tranformation of the words, see list below
| `--min`, `--minLength`     | The minimum length of each word (`0` for anything)
| `--max`, `--maxLength`     | The maximum length of each word (`0` for anything)

#### Transforms

*Note: not case-sensitive*

|        Name         |     Example
| ------------------- | ------------------
| `none`              | `whatevers-in-Dictionary`
| `lower`             | `all-lower-case`
| `everyOTHERcaps`    | `every-OTHER-word-IS-caps`
| `Capitalize`        | `First-Letter-Is-Capitalized`
| `rEVERSEcAPITALIZE` | `fIRST-lETTER-iS-lOWERCASE`
| `ALLCAPS`           | `EVERY-LETTER-CAPITALIZED`
| `randomCAPS`        | `random-words-ARE-capitalized`

## API

You can use mempass programmatically

Install as a dependency with `npm i -s mempass`

```js
var mempass = require("mempass")

// generates and returns a passphrase as a string
// possible options are in mempass.defaults
mempass.generate(options?)

// contains the default options object
mempass.defaults = {

  words: 3,
  minLength: 4,
  maxLength: 8,
  separator: "-",
  beginningNumbers: 0,
  endingNumbers: 0,
  transform: "lower" // case insensitive

}

// contains the default transforms, detailed above
mempass.transforms
```
