# MERN-CRASH-COURSE

A full-stack **MERN** app with a modern Vite/Chakra UI frontend and a simple Express/Mongo API.

## Features
- Product management (add, view, etc.)
- Modern React frontend (**Vite + Chakra UI**)
- RESTful API backend (**Express + MongoDB**)
- Global state with **Zustand**

## Project Structure

MERN-CRASH-COURSE/
├─ backend/ # Express API and MongoDB models
│ └─ src/ # routes/, models/, controllers/, server.js
└─ frontend/ # React app (Vite)
└─ src/ # pages/, components/, api/, App.jsx, main.jsx


## Getting Started
```bash
# Backend
cd backend && npm i
# create .env with MONGO_URI and PORT=5000
npm run dev

# Frontend
cd ../frontend && npm i
npm run dev
# open http://localhost:5173
