const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const quranRoutes = require("./routes/quran.routes");
const swaggerUi = require("swagger-ui-express");
const specs = require("./config/swagger");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// rate limiting: 100 requests per 1 minutes per IP

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: {
    error: "Too many requests from this IP. Please Try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors());
app.use(express.json());
app.use(limiter); // apply rate limiting to all routes

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/api/quran", quranRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Al-Quran API Backend (powered by alquran.cloud)",
    docs: "/api-docs",
    source: "https://alquran.cloud/api",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
  console.log(`📘 Docs:   http://localhost:${PORT}/api-docs`);
});
