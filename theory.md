# Backend Security, Module Caching, and CDN Notes

---

# Top 10 Most Used API Security Methods

| #   | Security Method                             | Use / Purpose                                 |
| --- | ------------------------------------------- | --------------------------------------------- |
| 1   | HTTPS (SSL)                                 | Encrypts data between client and server       |
| 2   | JWT Authentication                          | Verifies user identity and protects routes    |
| 3   | bcrypt Password Hashing                     | Stores passwords securely (hashed)            |
| 4   | Environment Variables (.env)                | Keeps secrets like API keys and DB URLs safe  |
| 5   | Rate Limiting                               | Prevents brute force and API abuse            |
| 6   | Input Validation                            | Blocks invalid or malicious user data         |
| 7   | Helmet                                      | Adds security headers to protect the API      |
| 8   | CORS Restriction                            | Allows only trusted frontend domains          |
| 9   | Role-Based Access Control (RBAC)            | Restricts access (admin/user permissions)     |
| 10  | Error Handling (Hide Details in Production) | Prevents exposing internal server information |

---

# Node.js Module Caching

## What is Module Caching?

Node.js **loads a module only once** and **stores it in memory**.

When the same module is required again, Node **returns the cached version instead of loading it again**.

### Key Points

- A module is **loaded only once**
- It is **stored in memory**
- Future `require()` calls return the **cached module**
- It **improves performance**
- It allows **shared state across files**

---

## Example Behavior

If a file prints:

```
Counter file loaded
```

And you `require()` it in two different files:

```
const c1 = require('./counter')
const c2 = require('./counter')
```

### What Happens?

- `"Counter file loaded"` prints **only once**
- Because **Node cached the module**
- Both `c1` and `c2` **share the same memory**

---

## Simple Definition (Easy to Remember)

> **Module caching means Node.js loads a file one time and reuses it instead of loading it again.**

---

# CDN (Content Delivery Network)

A **CDN (Content Delivery Network)** is a system of **many servers located in different places around the world** that work together to **deliver website or app content faster to users**.

---

## Simple Definition

A **CDN stores copies of your website files** (such as images, videos, JavaScript, and CSS) on **multiple servers globally** and delivers them from the **nearest server to the user**.

---

## Example

If your server is in **India** and a user opens your website from **USA**:

Without CDN:

```
User (USA) → Server (India) → Response back to USA
```

Result: **Slow loading**

With CDN:

```
User (USA) → Nearest CDN Server (USA)
```

Result: **Fast loading**

---

## Common Content Delivered by CDN

- Images
- Videos
- CSS files
- JavaScript files
- Fonts
- Downloads

---

## Benefits of CDN

- Faster website loading
- Reduced server load
- Better global performance
- DDoS protection
- High scalability

---

# React vs React Native vs Node.js

| Feature         | React (Web)        | React Native             | Node.js               |
| --------------- | ------------------ | ------------------------ | --------------------- |
| Where it runs   | Browser            | Mobile (Android / iOS)   | Server / Backend      |
| Purpose         | Build web UI       | Build mobile apps        | Build APIs / Backend  |
| Rendering       | HTML + CSS (DOM)   | Native Components        | No UI (Logic only)    |
| JS Engine       | V8 (Browser)       | Hermes / JavaScriptCore  | V8                    |
| UI Components   | div, button        | View, Text               | None                  |
| Platform Output | Website            | APK / IPA App            | API / Server Response |
| Uses Browser    | Yes                | No                       | No                    |
| Device Access   | Limited            | Full (Camera, GPS, etc.) | Limited               |
| Example Code    | `<div>Hello</div>` | `<Text>Hello</Text>`     | `console.log()`       |

# What is Node.js?

Node.js is a JavaScript runtime environment that allows you to run JavaScript outside the browser (on the server).
Node.js is built on the Google V8 JavaScript Engine.
-Before Node.js:
You could NOT use JavaScript for backend
You needed other languages like:
Java
PHP
Python
-What Node.js does
Node.js lets you run JavaScript:
✅ On your computer
✅ On servers
✅ In terminal

# Single Thread Architecture

What is Single Thread?
-Node.js runs on a single main thread, meaning it executes one task at a time in the main execution thread.
-But Node.js can still handle thousands of requests using event loop + async operations.
-Non-Blocking I/O
Node.js performs I/O operations asynchronously without blocking the main thread.
-Event Driven Architecture
Node.js works on events where callbacks are executed when an event occurs.

# Node.js Async Concepts (Simple & Clear)

🔹 How Node.js Handles a Request
Client sends request → Node.js server receives it
Event Loop manages the request
Slow tasks (DB/API/file) run in background (Non-blocking I/O)
When task finishes → result comes back
Response is sent to client

👉 Important: Node.js does NOT wait → it handles multiple requests at the same time

🎯 Example Task

👉 “Get user data and print it”

🔸 1. Callback (Old Way)
function getUser(callback) {
setTimeout(() => {
callback(null, { name: "Darshan" });
}, 1000);
}

getUser((err, user) => {
if (err) console.log(err);
else console.log(user.name);
});
🧠 Explanation
Function starts async task (like DB call)
You pass a callback function
When work finishes → callback runs
❌ Problem (Callback Hell)
getUser((err, user) => {
getPosts(user, (err, posts) => {
getComments(posts, (err, comments) => {
console.log(comments);
});
});
});

👉 Too nested → hard to read 😵

🔸 2. Promise (Better Way)
function getUser() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve({ name: "Darshan" });
}, 1000);
});
}

getUser()
.then(user => console.log(user.name))
.catch(err => console.log(err));
🧠 Explanation
Function returns a Promise
Promise has 3 states:
Pending → working
Resolved → success ✅
Rejected → error ❌
.then() → success
.catch() → error
✅ Advantage
No deep nesting
Cleaner than callbacks
🔸 3. Async/Await (Best Way)
function getUser() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({ name: "Darshan" });
}, 1000);
});
}

async function showUser() {
try {
const user = await getUser();
console.log(user.name);
} catch (err) {
console.log(err);
}
}

showUser();
🧠 Explanation
async → makes function asynchronous
await → waits for result
Code looks like normal (sync) but works async

👉 Important:

It does NOT block Node.js
Only pauses that function
🔄 How They Fit in Flow
Callback Flow

Request → Event Loop → Async Task → Callback → Response

Promise Flow

Request → Event Loop → Async Task → Promise → .then() → Response

Async/Await Flow

Request → Event Loop → Async Task → await → Result → Response
