import fs from 'fs/promises';

////MODERN ASYNC (Promise + async/await)
const data7= await fs.readFile('test.txt', 'utf8');
console.log(data7);