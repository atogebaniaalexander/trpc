# tRPC Example Project

A simple example project demonstrating tRPC implementation with TypeScript, featuring a basic user management system.

## Project Structure
- `client/` - tRPC client implementation
- `server/` - tRPC server with user management endpoints
- `server/db.ts` - In-memory database implementation
- `server/trpc.ts` - tRPC server configuration

## Features
- User CRUD operations
- Type-safe API using tRPC
- In-memory database storage
- HTTP server implementation

## Prerequisites
- Node.js 16 or higher
- npm 7 or higher

## Installation
```sh
npm install
```

## Running the Project
### Start the Server
```sh
npm run dev
```

### Test the Server
```sh
npm run test
```

The server will run on `http://localhost:3000`


## API Endpoints
| Endpoint | Description |
|----------|-------------|
| `userList` | Get all users |
| `userById` | Get user by ID |
| `userCreate` | Create a new user |
| `userUpdate` | Update existing user |
| `userDelete` | Delete a user |

## Technologies Used
- tRPC v11
- TypeScript 5.x
- Node.js
- Zod for validation


## Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`


## Type Safety
This project leverages tRPC's end-to-end type safety features. The API types are automatically inferred from the server implementation to the client.


