# ZERODHA Clone - MERN Stack Project Plan

## Project Overview
A minimal ZERODHA trading platform clone built with MERN stack. This will be a small-scale version focusing on core functionality rather than complete feature replication.

## Technology Stack
- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS3 or Tailwind CSS

## Project Structure
```
zerodha-clone/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context for state management
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── ...
├── server/              # Node/Express backend
│   ├── routes/          # API routes
│   │   ├── auth.js
│   │   ├── trades.js
│   │   └── dashboard.js
│   ├── models/          # MongoDB models
│   │   ├── User.js
│   │   ├── Trade.js
│   │   └── Portfolio.js
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth middleware, error handling
│   ├── .env
│   └── server.js
├── .gitignore
├── package.json (root)
└── warm.md              # Project planning document
```

## Key Features (MVP Scope)
1. **Authentication**: Login/signup with JWT tokens
2. **Dashboard**: Simple overview panel
3. **Trade View**: Display mock trade data
4. **User Profile**: Basic profile management

## Development Phases
### Phase 1: Setup & Backend
- Initialize React app
- Set up Node/Express server
- Create MongoDB connection
- Implement auth routes (register/login)
- Create JWT middleware

### Phase 2: Frontend
- Build Login/Register pages
- Create Dashboard component
- Implement routing

### Phase 3: Integration
- Connect frontend to backend APIs
- Add mock data display
- Basic styling

### Phase 4: Polish
- Error handling
- Loading states
- Responsive design

## Getting Started
```bash
# Install dependencies
npm install

# Server setup
cd server && npm install

# Client setup  
cd client && npm install

# Run development
npm run dev  # or separately: npm start (client) && node server.js
```

## Environment Variables (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```