// Handling in Node.js (Simple Explanation)

// File handling means:
// 👉 Creating files
// 👉 Reading files
// 👉 Updating files
// 👉 Deleting files

// In Node.js, file handling is done using the fs (File System) module.
// File handling in Node.js is using the fs module to create, read, update, delete, or rename files.

// Sync vs Async
// Type	Behavior
// Sync	Runs step by step, blocks program
// Async	Runs in background, faster
// Simple Definition

import fs from 'fs';               // callbacks, streams
import fsPromises from 'fs/promises'; 
///write in the file
const data = fs.writeFileSync('text1.txt','this is new fileasasas') 
const data4 = fs.writeFileSync('text2.txt','this is new fileasasas')  //Create .txt if not exists   Overwrite if already exists
console.log(data)
// read from the file
const data2=fs.readFileSync('text1.txt','utf-8')
console.log(data2)
//Append Data (Add without deleting old content)
const data3=fs.appendFileSync('text1.txt', '\nNew line added');
console.log(data3)
//Delete File
const data5=fs.unlinkSync('text2.txt');
console.log(data5)
//rename 
const data6=fs.renameSync("text1.txt",'test.txt')

// Async Version (Better for performance) // Instead of Sync, use async: Callback async


fs.writeFile('test2.txt', 'Hello', (err) => {
  if (err) throw err;
  console.log('File created');
});

//directory make 
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created');
});

////MODERN ASYNC (Promise + async/await)
const data7= await fs.readFile('test.txt', 'utf8');
console.log(data);

// Simple Rules (Very Important)
// Use case	Use
// Sync (blocking)	fs.writeFileSync()
// Async callback	fs.writeFile()
// Async / await ⭐	fs/promises
// Large files	fs.createReadStream()