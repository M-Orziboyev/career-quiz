const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const db = require("./db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Natijalarni saqlash API
app.post("/api/save_results", (req, res) => {
    const body = req.body || {};
    const timestamp = body.timestamp || new Date().toISOString();
    const user = body.user || {};
    const results = body.results || [];

    const name = user.name || null;
    const level = user.level || null;

    // Domenlar bo'yicha foizlarni ajratib olamiz
    // results: [{domain, pct, score}, ...]
    let frontendPct = 0;
    let backendPct = 0;
    let dataPct = 0;
    let mobilePct = 0;

    results.forEach((r) => {
        switch (r.domain) {
            case "frontend":
                frontendPct = r.pct;
                break;
            case "backend":
                backendPct = r.pct;
                break;
            case "data":
                dataPct = r.pct;
                break;
            case "mobile":
                mobilePct = r.pct;
                break;
            default:
                break;
        }
    });

    const rawJson = JSON.stringify({ user, results });

    try {
        const stmt = db.prepare(`
            INSERT INTO results (
            timestamp, name, level,
            frontend_pct, backend_pct, data_pct, mobile_pct,
            raw_json
        ) VALUES ()
    `);

        stmt.run(
            timestamp,
            name,
            level,
            frontendPct,
            backendPct,
            dataPct,
            mobilePct,
            rawJson
        );

        return res.json({ ok: true });
    } catch (err) {
        console.error("Natijani DBga yozishda xato:", err);
        return res.status(500).json({ ok: false });
    }
});
// ✅ Umumiy statistika API
app.get("/api/stats", (req, res) => {
    try {
        // Umumiy foydalanuvchilar soni
        const totalRow = db.prepare(`SELECT COUNT(*) as count FROM results`).get();
        const totalUsers = totalRow.count || 0;

        if (totalUsers === 0) {
            return res.json({
                totalUsers: 0,
                domains: [],
            });
        }

        // Har bir domen bo'yicha o'rtacha foiz va nechta yozuvda qatnashganini chiqarish
        // Eslatma: bu yerda har yozuvda 0 bo'lsa ham bor, lekin o'rtacha hisoblash uchun normal
        const rows = db.prepare(`
            SELECT
        AVG(frontend_pct) AS frontend_avg,
            AVG(backend_pct)  AS backend_avg,
            AVG(data_pct)     AS data_avg,
            AVG(mobile_pct)   AS mobile_avg,
        COUNT(*)          AS cnt
        FROM results`
    ).get();

        // Domen bo'yicha struktura tayyorlaymiz
        const domains = [
            { domain: "frontend", averagePct: Math.round(rows.frontend_avg || 0), answersCount: rows.cnt },
            { domain: "backend",  averagePct: Math.round(rows.backend_avg || 0),  answersCount: rows.cnt },
            { domain: "data",     averagePct: Math.round(rows.data_avg || 0),     answersCount: rows.cnt },
            { domain: "mobile",   averagePct: Math.round(rows.mobile_avg || 0),   answersCount: rows.cnt },
        ];

        // 0 bo'lganlarini xohlasing filtrlasak ham bo'ladi:
        const filtered = domains.filter(d => d.averagePct > 0);

        // Katta foizdan kichigiga tartiblaymiz
        filtered.sort((a, b) => b.averagePct - a.averagePct);

        return res.json({
            totalUsers,
            domains: filtered,
        });
    } catch (err) {
        console.error("Statistikani DBdan o'qishda xato:", err);
        return res.status(500).json({ ok: false });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT});`)
})
