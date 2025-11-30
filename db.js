const Database = require("better-sqlite3");
const path = require("path");

// quiz.db faylini project root ichida saqlaymiz
const dbPath = path.join(__dirname, "quiz.db");
const db = new Database(dbPath);

// Jadval yaratish (agar bo'lmasa)
db.exec(
    `CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    name TEXT,
    level TEXT,
    frontend_pct INTEGER,
    backend_pct INTEGER,
    data_pct INTEGER,
    mobile_pct INTEGER,
    raw_json TEXT)`
)

module.exports = db;