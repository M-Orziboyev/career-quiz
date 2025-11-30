const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Natijalarni saqlash API
app.post("/api/save_results", (req, res) => {
    const data = req.body || {};
    const line = JSON.stringify(data) + "\n";

    const filePath = path.join(__dirname, "results.log");

    fs.appendFile(filePath, line, (err) => {
        if (err) {
            console.error("Natijani faylga yozishda xato:", err);
            return res.status(500).json({ ok: false });
        }
        return res.json({ ok: true });
    });
});

// ✅ Umumiy statistika API
app.get("/api/stats", (req, res) => {
    const filePath = path.join(__dirname, "results.log");

    // Fayl bo'lmasa, bo'sh statistika qaytaramiz
    if (!fs.existsSync(filePath)) {
        return res.json({
            totalUsers: 0,
            domains: [],
        });
    }

    fs.readFile(filePath, "utf8", (err, content) => {
        if (err) {
            console.error("Statistikani o'qishda xato:", err);
            return res.status(500).json({ ok: false });
        }

        const lines = content.split("\n").filter((l) => l.trim().length > 0);

        let totalUsers = 0;
        const domainStats = {}; // {frontend: {sumPct: x, count: y}, ...}

        lines.forEach((line) => {
            try {
                const obj = JSON.parse(line);
                const results = obj.results || [];
                if (!Array.isArray(results) || results.length === 0) return;

                totalUsers += 1;

                results.forEach((r) => {
                    const d = r.domain;
                    const pct = Number(r.pct) || 0;

                    if (!domainStats[d]) {
                        domainStats[d] = { sumPct: 0, count: 0 };
                    }
                    domainStats[d].sumPct += pct;
                    domainStats[d].count += 1;
                });
            } catch (e) {
                console.error("JSON parse error:", e);
            }
        });

        const domains = Object.entries(domainStats).map(([domain, stat]) => {
            const avg = stat.count > 0 ? Math.round(stat.sumPct / stat.count) : 0;
            return {
                domain,
                averagePct: avg,
                answersCount: stat.count,
            };
        });

        // Katta foizdan kichigiga qarab sort
        domains.sort((a, b) => b.averagePct - a.averagePct);

        res.json({
            totalUsers,
            domains,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT});`)
})
