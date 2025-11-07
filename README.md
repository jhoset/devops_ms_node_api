# DevOps MS Node API

Simple Node.js and Express API created for the DevOps Engineer Diploma.

## Description

This API exposes a single endpoint `/hello` that returns a personalized greeting using a query parameter.  
It can be run locally or inside a Docker container.

## How to run locally

```bash
# Install dependencies
npm install

# Start the app
npm run dev

```

Then open your browser and test:

http://localhost:3000/
→ returns { "message": "API devops_ms_node_api OK" }

http://localhost:3000/hello?name=Jhoset
→ returns { "message": "Hello, Jhoset! Welcome to the DevOps API 👋" }


## Run with Docker

```bash
# Build the Docker image
docker build -t devops_ms_node_api .

# Run the container
docker run -d -p 3000:3000 devops_ms_node_api
```

## Run with Docker Compose
If you have a `docker-compose.yml` file, you can start the service with:
```bash
   docker-compose up -d
```
And stop it with:
```bash
   docker-compose down
```


## Project Structure
```
src/
 ├─ app.js        # Express app (routes and logic)
 └─ server.js     # Starts the server
```

## Autor
- Created by Jhoset Nina 
- DevOps Engineer Diploma - 2025