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

import fs from'fs'
///write in the file
const data = fs.writeFileSync('text1.txt','this is new fileasasas')   //Create .txt if not exists   Overwrite if already exists
console.log(data)
// read from the file
const data2=fs.readFileSync('text1.txt','utf-8')
console.log(data2)
