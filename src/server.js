const app = require("./app");

// Port configuration (use environment variable for Docker or cloud deployment)
const PORT = process.env.PORT || 3000;

// Start the HTTP server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
