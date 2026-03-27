✅ Your Code
function fetchData(callback) {
console.log("Fetching data...");

setTimeout(() => {
const data = { user: "Darshan" };
callback(data); // async callback execution
}, 2000);
}

fetchData((result) => {
console.log("Data received:", result);
});
🔹 Step 1: Function Declaration (Memory Phase)
function fetchData(callback) { ... }
JS engine stores this function in memory
Nothing executes yet
🔹 Step 2: Function Call
fetchData((result) => {
console.log("Data received:", result);
});
fetchData is pushed into Call Stack
The callback function (result) => {...} is passed as argument
🔹 Step 3: Inside fetchData()
console.log("Fetching data...");
Executes immediately
👉 Output:
Fetching data...
🔹 Step 4: setTimeout Registered
setTimeout(() => {
const data = { user: "Darshan" };
callback(data);
}, 2000);

Here’s the important part:

setTimeout is NOT handled by JS engine directly
It is handed over to Web APIs (browser) / Node APIs
What happens:
Timer (2 sec) starts in background
The callback inside setTimeout is registered
JS does NOT wait
🔹 Step 5: fetchData Finishes
No more code inside fetchData
Function is removed from Call Stack

👉 At this moment:

Call Stack = EMPTY
Timer still running in background
🔹 Step 6: After 2 Seconds
() => {
const data = { user: "Darshan" };
callback(data);
}
Timer completes
This function is moved to Callback Queue
🔹 Step 7: Event Loop Action
Event Loop checks:
👉 "Is Call Stack empty?"

✔ Yes → It pushes callback into Call Stack

🔹 Step 8: Callback Executes
const data = { user: "Darshan" };
callback(data);
data object created
callback(data) is called
🔹 Step 9: Your Passed Callback Runs
(result) => {
console.log("Data received:", result);
}
result = { user: "Darshan" }

👉 Output:

Data received: { user: "Darshan" }
🔥 Final Flow (Super Simple)
fetchData runs
Logs → "Fetching data..."
setTimeout starts timer (background)
JS moves on (non-blocking)
After 2 sec → callback goes to queue
Event loop → pushes it to stack
Callback executes → logs result

# FINAL INTERVIEW SUMMARY
JS is single-threaded
Async handled via:
Web APIs
Event Loop
Queues
Microtask > Macrotask priority
Promises use Microtask queue
setTimeout uses Macrotask queue
async/await = cleaner Promises