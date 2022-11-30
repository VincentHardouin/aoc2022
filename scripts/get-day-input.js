require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

main();

async function main() {
  const day = process.argv[2];
  const inputUrl = `https://adventofcode.com/2022/day/${day}/input`;
  const { data } = await axios.get(inputUrl, { headers: { Cookie: `session=${process.env.SESSION}` } });
  fs.writeFileSync(`./days/${day}/input.txt`, data);
}
