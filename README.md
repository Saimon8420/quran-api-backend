# 🌙 Al-Quran API Backend

A lightweight, production-ready **Node.js + Express.js** backend that proxies and enhances the [Al-Quran Cloud API](https://alquran.cloud/api). This service provides access to the Holy Quran in Arabic, translations, audio recitations, metadata, and more — with added features like **search**, **rate limiting**, and **Redis caching**.

> 📖 **Powered by**: [Al-Quran.cloud](https://alquran.cloud) — a free, open, and community-driven Quran API.

---

## 🌟 Features

- ✅ Full support for all official [Al-Quran.cloud endpoints](https://alquran.cloud/api)
- 🔍 **Search** in any text-based translation (e.g., English, Urdu, Indonesian)
- 🎧 **Audio recitation** support (Mishary Alafasy, Abdul Basit, and more)
- ⚡ **Redis caching** (optional) for faster responses
- 🛡️ **Rate limiting** (100 requests / 15 minutes per IP)
- 📦 Easy to deploy on free platforms (Render, Railway)
- 🧼 Clean, modular Express.js architecture

---

## 📚 Endpoints

All routes are prefixed with `/api/quran`.

| Method | Endpoint                    | Description                                              |
| ------ | --------------------------- | -------------------------------------------------------- |
| `GET`  | `/meta`                     | Quran metadata (surah count, juz count, etc.)            |
| `GET`  | `/editions`                 | List all available editions (translations & reciters)    |
| `GET`  | `/surahs`                   | List all 114 Surahs with metadata                        |
| `GET`  | `/surah/:number`            | Get full Surah (default: Arabic Uthmani)                 |
| `GET`  | `/verse/:surah/:ayah`       | Get a specific verse                                     |
| `GET`  | `/juz/:number`              | Get a Juz (1–30)                                         |
| `GET`  | `/manzil/:number`           | Get a Manzil (1–7)                                       |
| `GET`  | `/ruku/:number`             | Get a Ruku (1–556)                                       |
| `GET`  | `/page/:number`             | Get a Madani Mushaf page (1–604)                         |
| `GET`  | `/hizb/:number`             | Get a Hizb Quarter (1–240)                               |
| `GET`  | `/sajda`                    | Get all 15 Sajda verses                                  |
| `GET`  | `/search`                   | Search text editions (requires `?query=...&edition=...`) |
| `GET`  | `/audio/surah/:number`      | Get audio for a Surah (`?reciter=ar.alafasy`)            |
| `GET`  | `/audio/verse/:surah/:ayah` | Get audio for a single verse                             |

> 💡 **Default edition**: `quran-uthmani` (Arabic)  
> 💡 **Common editions**: `en.sahih`, `en.pickthall`, `ur.jalandhry`, `id.indonesian`, `ar.alafasy` (audio)

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/quran-api-backend.git
cd quran-api-backend
```
