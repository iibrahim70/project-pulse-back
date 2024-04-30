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

// Start server
app.listen(PORT, () => {
  console.log(`Car Craze Is Running On Port ${PORT}`);
});
