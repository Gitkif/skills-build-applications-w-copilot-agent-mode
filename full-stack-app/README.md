# Full Stack Application

This project is a full stack application that consists of a client-side React application and a server-side Node.js application. 

## Project Structure

```
full-stack-app
├── client                # Client-side application
│   ├── src               # Source files for the React app
│   ├── package.json      # Client dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for client
│   └── public            # Public assets for the React app
├── server                # Server-side application
│   ├── src               # Source files for the Node.js app
│   ├── package.json      # Server dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for server
│   └── .env              # Environment variables for the server
├── docker-compose.yml    # Docker configuration for the application
└── .gitignore            # Files to ignore in version control
```

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- Docker (if using Docker)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd full-stack-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application

#### Using Docker

1. Run the following command in the root directory:
   ```
   docker-compose up
   ```

#### Without Docker

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

### Usage

- The client application will be available at `http://localhost:3000`.
- The server API will be available at `http://localhost:5000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.