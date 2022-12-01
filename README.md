# aoc2022 🎄
https://adventofcode.com/2022

## Installation
```shell
git clone git@github.com:VincentHardouin/aoc2022.git
cd aoc2022
npm install
```

## Usage
### Initialize a day
```shell
npm run generate:day <day:number>
```

### Get day input
It's save input in days/<day:number>/input.txt

Required `SESSION=<session-id>` in `.env` file

```shell
npm run get:input <day:number>
```

### Run tests
```shell
npm test
```

### Get a day part result
```
npm start -- --day 2 --part 2
```
