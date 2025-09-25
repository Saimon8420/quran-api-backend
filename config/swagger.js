// config/swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Al-Quran Cloud API Backend",
      version: "1.0.0",
      description:
        "Proxy backend for https://alquran.cloud/api — with search, audio, and caching.",
      contact: {
        name: "Md. Latiful Kabir",
        url: "https://github.com/Saimon8420/quran-api-backend",
      },
    },
    servers: [
      { url: "http://localhost:5000/api/quran", description: "Local" },
      {
        url: "https://your-app.onrender.com/api/quran",
        description: "Production",
      },
    ],
  },
  apis: ["./routes/quran.routes.js"],
};

module.exports = swaggerJsdoc(options);
