const express = require("express");
const axios = require("axios");
const router = express.Router();

require("dotenv").config();

const BASE_URL = process.env.QURAN_BASE_URL;

// Helper: fetch with optional caching
const fetchData = async (req, res, endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    res.json(response.data);
  } catch (error) {
    console.error(`API Error for ${endpoint}:`, error.message);
    res.status(500).json({ error: "Failed to fetch from Al-Quran Cloud API" });
  }
};

// --- All Endpoints from alquran.cloud ---

/**
 * @swagger
 * /meta:
 *   get:
 *     summary: Get Quran metadata
 *     tags: [Quran]
 *     responses:
 *       200:
 *         description: Metadata object
 */
router.get("/meta", (req, res) => fetchData(req, res, "/meta"));

/**
 * @swagger
 * /editions:
 *   get:
 *     summary: List all editions (translations & reciters)
 *     tags: [Quran]
 *     responses:
 *       200:
 *         description: Array of editions
 */
router.get("/editions", (req, res) => fetchData(req, res, "/edition"));

/**
 * @swagger
 * /surahs:
 *   get:
 *     summary: Get list of all 114 Surahs
 *     tags: [Quran]
 *     responses:
 *       200:
 *         description: Surah list
 */
router.get("/surahs", (req, res) => fetchData(req, res, "/surah"));

/**
 * @swagger
 * /surah/{number}:
 *   get:
 *     summary: Get full Surah
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 114 }
 *       - in: query
 *         name: edition
 *         schema: { type: string, example: 'quran-uthmani' }
 *     responses:
 *       200:
 *         description: Surah data
 */
router.get("/surah/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/surah/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /verse/{surah}/{ayah}:
 *   get:
 *     summary: Get a specific verse
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: surah
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 114 }
 *       - in: path
 *         name: ayah
 *         required: true
 *         schema: { type: integer, minimum: 1 }
 *       - in: query
 *         name: edition
 *         schema: { type: string, example: 'en.sahih' }
 *     responses:
 *       200:
 *         description: Verse data
 */
router.get("/verse/:surah/:ayah", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(
    req,
    res,
    `/ayah/${req.params.surah}:${req.params.ayah}/${edition}`
  );
});

/**
 * @swagger
 * /juz/{number}:
 *   get:
 *     summary: Get a Juz (1–30)
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 30 }
 *       - in: query
 *         name: edition
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Juz data
 */
router.get("/juz/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/juz/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /manzil/{number}:
 *   get:
 *     summary: Get a Manzil (1–7)
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 7 }
 *       - in: query
 *         name: edition
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Manzil data
 */
router.get("/manzil/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/manzil/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /ruku/{number}:
 *   get:
 *     summary: Get a Ruku (1–556)
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 556 }
 *       - in: query
 *         name: edition
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Ruku data
 */
router.get("/ruku/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/ruku/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /page/{number}:
 *   get:
 *     summary: Get a Madani Mushaf page (1–604)
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 604 }
 *       - in: query
 *         name: edition
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Page data
 */
router.get("/page/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/page/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /hizb/{number}:
 *   get:
 *     summary: Get a Hizb Quarter (1–240)
 *     tags: [Quran]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 240 }
 *       - in: query
 *         name: edition
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Hizb data
 */
router.get("/hizb/:number", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/hizbQuarter/${req.params.number}/${edition}`);
});

/**
 * @swagger
 * /sajda:
 *   get:
 *     summary: Get all 15 Sajda verses
 *     tags: [Quran]
 *     parameters:
 *       - in: query
 *         name: edition
 *         schema: { type: string, example: 'en.sahih' }
 *     responses:
 *       200:
 *         description: Sajda verses
 */
router.get("/sajda", (req, res) => {
  const edition = req.query.edition || "quran-uthmani";
  fetchData(req, res, `/sajda/${edition}`);
});

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search in text editions
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema: { type: string }
 *       - in: query
 *         name: edition
 *         schema: { type: string, example: 'en.sahih' }
 *     responses:
 *       200:
 *         description: Search results
 *       400:
 *         description: Missing query
 */
router.get("/search", (req, res) => {
  const { query, edition = "en.ahmedali" } = req.query;
  if (!query) {
    return res
      .status(400)
      .json({ error: 'Query parameter "query" is required' });
  }
  fetchData(req, res, `/search/${encodeURIComponent(query)}/all/${edition}`);
});

/**
 * @swagger
 * /audio/surah/{number}:
 *   get:
 *     summary: Get audio for a Surah
 *     tags: [Audio]
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *         schema: { type: integer, minimum: 1, maximum: 114 }
 *       - in: query
 *         name: reciter
 *         schema: { type: string, example: 'ar.alafasy' }
 *     responses:
 *       200:
 *         description: Surah with audio URLs
 */
router.get("/audio/surah/:number", (req, res) => {
  const reciter = req.query.reciter || "ar.alafasy";
  fetchData(req, res, `/surah/${req.params.number}/${reciter}`);
});

/**
 * @swagger
 * /audio/verse/{surah}/{ayah}:
 *   get:
 *     summary: Get audio for a single verse
 *     tags: [Audio]
 *     parameters:
 *       - in: path
 *         name: surah
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: ayah
 *         required: true
 *         schema: { type: integer }
 *       - in: query
 *         name: reciter
 *         schema: { type: string, example: 'ar.alafasy' }
 *     responses:
 *       200:
 *         description: Verse with audio URL
 */
router.get("/audio/verse/:surah/:ayah", (req, res) => {
  const reciter = req.query.reciter || "ar.alafasy";
  fetchData(
    req,
    res,
    `/ayah/${req.params.surah}:${req.params.ayah}/${reciter}`
  );
});

module.exports = router;
