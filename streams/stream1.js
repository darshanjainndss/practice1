// FS STREAMS (for Large Files)
// Why streams?

// Normal readFile loads whole file into memory

// Streams read small chunks

// Best for large files (videos, logs, backups)

//write 
import fs from 'fs'

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello World\n');
writeStream.write('This is stream writing');

writeStream.end(); // Important to close stream

writeStream.on('finish', () => {
    console.log('File writing completed');
});
//read


const readStream = fs.createReadStream('output.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Chunk received:', chunk);
});

readStream.on('end', () => {
  console.log('File reading finished');
});