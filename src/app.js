const express = require("express");

const app = express();

// Middleware to parse JSON requests (useful for POST/PUT in the future)
app.use(express.json());

/**
 * Health check endpoint to verify the API is running.
 * GET /
 */
app.get("/", (req, res) => {
    res.json({message: "API devops_ms_node_api OK"});
});

/**
 * Greeting endpoint that receives a query parameter:
 *   GET /hello?name=Jhoset
 *
 * If 'name' is not provided, returns a 400 Bad Request error.
 */
app.get("/hello", (req, res) => {
    const {name} = req.query; // Extract the query parameter

    if (!name) {
        return res.status(400).json({
            error:
                "You must provide the 'name' query parameter. Example: /hello?name=Jhoset",
        });
    }

    res.json({
        message: `Hello, ${name}! \n Welcome to the NodeJs API 👋`,
    });
});

// Export the Express app to be used by the server
module.exports = app;
