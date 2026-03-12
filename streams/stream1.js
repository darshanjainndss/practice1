/*
=========================================================
NODE JS FS STREAMS - COMPLETE EXPLANATION
=========================================================

WHY STREAMS?

Normal Method:
--------------
fs.readFile()

Problem:
--------
It loads the ENTIRE file into memory.

Example:
A 2GB file → Node tries to load full 2GB into RAM.

Solution:
---------
Streams read the file in SMALL CHUNKS.

Benefits:
---------
✔ Low memory usage
✔ Faster for large files
✔ Used for logs, videos, uploads, backups

=========================================================
TYPES OF STREAMS
=========================================================

1. Readable Stream
   -> Used to read data

2. Writable Stream
   -> Used to write data

3. Duplex Stream
   -> Can read and write

4. Transform Stream
   -> Modify data while streaming

In this file we will cover:
✔ Write Stream
✔ Read Stream
✔ Stream Events
✔ Pipe
✔ Append
✔ Large File Example
✔ Why only one chunk appears sometimes

=========================================================
STREAM EVENTS EXPLAINED
=========================================================

stream.on('data')
-----------------
Triggered when a chunk of data is received.

Example output:
Chunk received: Hello World

stream.on('end')
----------------
Triggered when the reading is completed.

Meaning:
No more data is left in the stream.

stream.on('finish')
-------------------
Triggered when writing is completed.

Used only for Writable Streams.

Example:
writeStream finished writing file.

stream.on('error')
------------------
Triggered if something goes wrong.

Example:
File not found
Permission denied

=========================================================
EXAMPLE 1 : WRITE STREAM
=========================================================
*/

import fs from "fs";

console.log("\n------ WRITE STREAM ------");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello World\n");
writeStream.write("This is Node.js Stream Example\n");
writeStream.write("Streams process data in chunks\n");

writeStream.end(); // close stream

writeStream.on("finish", () => {
  console.log("File writing completed");
});

/*
=========================================================
EXAMPLE 2 : READ STREAM
=========================================================
*/

setTimeout(() => {
  console.log("\n------ READ STREAM ------");

  const readStream = fs.createReadStream("output.txt", "utf8");

  readStream.on("data", (chunk) => {
    console.log("Chunk received:");
    console.log(chunk);
  });

  readStream.on("end", () => {
    console.log("File reading finished");
  });

  readStream.on("error", (err) => {
    console.log("Error:", err.message);
  });
}, 1000);

/*
=========================================================
WHY ONLY ONE CHUNK SOMETIMES?
=========================================================

You wrote:

Hello World
This is Node.js Stream Example
Streams process data in chunks

But sometimes output appears like:

Chunk received:
Hello World
This is Node.js Stream Example
Streams process data in chunks

Why?

Because the file is SMALL.

Streams read in chunks of about 64KB by default.

If the file is smaller than 64KB,
Node reads the ENTIRE file in ONE CHUNK.

So you see only ONE "data" event.

If file is BIG → many chunks.

=========================================================
EXAMPLE 3 : LARGE FILE TO SEE MULTIPLE CHUNKS
=========================================================
*/

setTimeout(() => {
  console.log("\n------ CREATE LARGE FILE ------");

  const bigFile = fs.createWriteStream("bigfile.txt");

  for (let i = 1; i <= 10000; i++) {
    bigFile.write(`Line number ${i}\n`);
  }

  bigFile.end();

  bigFile.on("finish", () => {
    console.log("Large file created");
  });
}, 2000);

/*
=========================================================
EXAMPLE 4 : READ LARGE FILE (MULTIPLE CHUNKS)
=========================================================
*/

setTimeout(() => {
  console.log("\n------ READ LARGE FILE ------");

  const bigRead = fs.createReadStream("bigfile.txt", "utf8");

  bigRead.on("data", (chunk) => {
    console.log("Chunk size:", chunk.length);
  });

  bigRead.on("end", () => {
    console.log("Finished reading large file");
  });
}, 3000);

/*
=========================================================
EXAMPLE 5 : PIPE STREAM
=========================================================

Pipe connects:

Readable Stream -> Writable Stream

Used for copying files efficiently.
*/

setTimeout(() => {
  console.log("\n------ PIPE EXAMPLE ------");

  const readStream = fs.createReadStream("bigfile.txt");
  const writeStream = fs.createWriteStream("copy_bigfile.txt");

  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File copied successfully using pipe");
  });
}, 4000);

/*
=========================================================
EXAMPLE 6 : APPEND USING STREAM
=========================================================
*/

setTimeout(() => {
  console.log("\n------ APPEND STREAM ------");

  const appendStream = fs.createWriteStream("output.txt", { flags: "a" });

  appendStream.write("\nAppending new line using stream");

  appendStream.end();

  appendStream.on("finish", () => {
    console.log("Data appended successfully");
  });
}, 5000);

/*
=========================================================
IMPORTANT STREAM METHODS
=========================================================

CREATE READ STREAM
------------------
fs.createReadStream(path)

CREATE WRITE STREAM
-------------------
fs.createWriteStream(path)

WRITE DATA
----------
writeStream.write(data)

END STREAM
----------
writeStream.end()

PIPE STREAM
-----------
readStream.pipe(writeStream)

APPEND MODE
-----------
fs.createWriteStream('file.txt', { flags: 'a' })

=========================================================
STREAM EVENT SUMMARY
=========================================================

data
----
Triggered when chunk arrives.

end
---
Triggered when reading finishes.

finish
------
Triggered when writing finishes.

error
-----
Triggered if error occurs.

=========================================================
REAL WORLD STREAM USAGE
=========================================================

Streams are used in:

✔ Video streaming
✔ File upload/download
✔ Processing logs
✔ Data pipelines
✔ API streaming responses
✔ Compression (zlib)

=========================================================
SIMPLE RULE
=========================================================

If async task depends on another:

Example:

Write file
→ wait for finish event
→ then read file

This prevents race conditions.

=========================================================
END OF FILE
=========================================================
*/