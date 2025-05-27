# User Service
This microservice handles user registration, login, and authentication using JWT.

## API Endpoints
- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Login and get JWT
- `GET /api/users/me` – Get authenticated user (token required)

## Technologies
- Node.js
- Express
- MongoDB
- JWT
- bcrypt