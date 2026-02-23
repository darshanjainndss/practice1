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
const data = fs.writeFileSync('text1.txt','this is new fileasasas')
console.log(data)

const data2=fs.readFileSync('text1.txt','utf-8')
console.log(data2)