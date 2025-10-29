IA03 – User Registration API with React Frontend

A full-stack demo built with:
- Backend: NestJS + Mongoose (MongoDB)
- Frontend: React + Vite + Tailwind CSS, React Router, React Query, React Hook Form + Zod

## Features
- POST `/user/register` endpoint with validation, duplicate email check, and bcrypt hashing
- CORS enabled and sensitive values via environment variables
- React app with Home, Login (mock UI), and Sign Up (register) pages
- Form validation and friendly success/error feedback using React Query

---

## Prerequisites
- Node.js LTS (>= 18)
- MongoDB running locally or a connection string (MongoDB Atlas works too)

---

## Backend (NestJS)

Location: `Backend/`

1) Configure environment variables

Copy `.env.example` to `.env` and adjust values:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ia03
CORS_ORIGIN=http://localhost:5173
```

2) Install and run

```
cd Backend
npm install
npm run dev
```

The API will listen on `http://localhost:3000`.

Endpoints:
- `POST /user/register` { email, password } → `{ message: string }`

---

## Frontend (React + Vite)

Location: `Frontend/`

1) Configure environment variables

Copy `.env.example` to `.env` and adjust values to point to the backend URL:

```
VITE_API_URL=http://localhost:3000
```

2) Install and run

```
cd Frontend
npm install
npm run dev
```

Open the app at the URL printed by Vite (usually `http://localhost:5173`).

Pages:
- `/` Home
- `/register` Sign Up
- `/login` Login (mock UI only)

---

## Deployment (quick suggestions)

- Backend (NestJS):
	- Render.com → create a Web Service from `Backend/`, set build command `npm ci && npm run build` and start command `npm run start`. Add `MONGODB_URI`, `PORT`, and `CORS_ORIGIN` env vars.
	- Railway or Fly.io are also good options.

- Database:
	- MongoDB Atlas (free tier). Use the connection string in `MONGODB_URI` (remember to whitelist server IPs).

- Frontend (React):
	- Netlify / Vercel → set `VITE_API_URL` as an environment variable pointing to the deployed backend.
	- Build command: `npm ci && npm run build` ; Publish directory: `dist`.

---

## Notes
- This project keeps the Login page as a UI mock per requirement. Only registration is wired to the backend.
- Passwords are hashed with bcrypt before storing.
- Validation uses `class-validator` on the backend and `zod` on the frontend.

---

## Troubleshooting
- If CORS issues appear, verify `CORS_ORIGIN` (backend) matches your frontend URL (e.g., `http://localhost:5173`).
- Ensure MongoDB is running and accessible by the backend.
- On Linux, make sure ports 3000 (backend) and 5173 (frontend) are not blocked by firewall.
