# Bajaj Finserv Fullstack Assessment API
[https://bajaj-finserv-fullstack-2.onrender.com/](https://bajaj-finserv-fullstack-2.onrender.com/)
This repository contains the source code for a REST API created as part of the **Bajaj Finserv Fullstack Developer qualifying round**.  
The API is built with **Node.js** and **Express.js**, and it processes an array of data to return a structured JSON object containing classified information based on the input.

The live and deployed API is hosted on **Render**.

---

## 🚀 Live API Endpoint
**Method:** `POST`  

**URL:** [https://bajaj-finserv-fullstack-e9ju.onrender.com/bfhl](https://bajaj-finserv-fullstack-e9ju.onrender.com/bfhl)

---

## 🛠️ Tech Stack
- **Backend:** Node.js  
- **Framework:** Express.js  
- **Hosting:** Render  

---

## 📋 API Endpoint Details

**Route:** `/bfhl`  
**Method:** `POST`

### Request
**Headers:**
```http
Content-Type: application/json
```
###Example request Body:
```
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```
 ### Response on success
 ```
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```
## ⚙️ How to Set Up and Run Locally
To run this project on your local machine, follow these steps:
### Prerequisites
Node.js (v14 or later recommended)
npm (comes with Node.js)
Git
##clone repo
```
Node.js (v14 or later recommended)

npm (comes with Node.js)

Git
```
##Install Dependencies
```
npm install
```
## run the server
```
node index.js
```
# ✅ How to Test the API
You cannot test this POST endpoint directly in a browser. Use Postman, Insomnia, or curl.

Using Postman

Set Method: POST

Enter the URL:

Local: http://localhost:3000/bfhl

Live: https://bajaj-finserv-fullstack-e9ju.onrender.com/bfhl

Set Headers:

Content-Type: application/json

Set Body (raw, JSON):
```
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```
click send
