# KYC PAN Verification Microservice  
A lightweight **Node.js + Express** microservice built as a demonstration of backend skills in the **KYC / Identity Verification** domain.

This project simulates a simplified version of a fintech-style PAN verification workflow — similar to what platforms like **Decentro** offer — while showcasing clean API design, modular structure, validation, insights, and basic fraud analysis.

---

## 🚀 Features

### 🔹 1. PAN Verification API  
- Validates PAN format using standard regex  
- Looks up PAN in a mock verification database  
- Returns verification status + holder name  

### 🔹 2. Fraud Scoring Engine  
Adds basic risk intelligence based on:  
- Invalid PAN  
- Suspicious PAN patterns  
- Odd/even digit heuristics  
- Simple risk classification (low / medium / high)

### 🔹 3. PAN Insights API  
Returns additional metadata:  
- Masked PAN  
- Last verification timestamp  
- Number of verification attempts  
- Fraud score + risk level  

---

## 🧪 API Endpoints

### Test LIVE API ✔ POST https://kyc-miniservice.onrender.com/kyc/pan/verify
```json
{
    "pan": "ABCDE1234F"
}
```
### Test 2:

### GET https://kyc-miniservice.onrender.com/kyc/pan/insights/ABCDE1234F

### ✔ POST `/kyc/pan/verify`  
Validate and verify a PAN.

#### Request Body
```json
{
  "pan": "ABCDE1234F"
}
```
### ✔ GET `/kyc/pan/insights/:pan`
Returns metadata and risk insights for the given PAN.

## 🌐 Server
The server runs locally at: http://localhost:5000