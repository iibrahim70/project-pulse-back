import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  // Constructing server status object
  const serverStatus = {
    status: "running",
    message: "Project Pulse Mock API is operational and running smoothly.",
    timestamp: new Date().toISOString(),
    version: "v1.0.1",
    uptime: process.uptime(),
    author: "Ibrahim Khalil",
    contact: {
      email: "iibrahiim.dev@gmail.com",
      website: "https://iibrahim-dev.netlify.app/",
    },
  };

  res.json(serverStatus);
});

// Authentication route
app.post("/api/login", (req, res) => {
  try {
    const { userName, password } = req.body;

    // Check if username and password are correct
    if (userName === "admin" && password === "password") {
      // Mock response for successful login
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      // Mock response for unsuccessful login
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    // Error handling if something goes wrong
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Project Pulse Is Running On Port ${PORT}`);
});
