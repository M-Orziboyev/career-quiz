// Domen turlari
const DOMAINS = ["frontend", "backend", "data", "mobile"];

const DOMAIN_LABELS = {
    frontend: "Frontend (UI, React, HTML/CSS)",
    backend: "Backend (server, API, database)",
    data: "Data / AI (ma'lumot tahlili, ML)",
    mobile: "Mobile (mobil ilovalar)",
};

// Savollar
const QUESTIONS = [
        {
            text: "Qaysi turdagi ish sizga ko'proq yoqadi?",
            options: [
                {label: "Sayt dizayni, UI, animatsiyalar", weights: {frontend: 3}},
                {label: "Server, API, ma'lumotlar bilan ishlash", weights: {backend: 3}},
                {label: "Ma'lumot tahlili, grafiklar, statistikalar", weights: {data: 3}},
                {label: "Mobil ilovalar, Android/iOS", weights: {mobile: 3}},
            ],
        },
        {
            text: "Maktab/kollejdagi qaysi fan sizga yaqinroq?",
            options: [
                {label: "Chizmachilik, dizayn, san'at", weights: {frontend: 2}},
                {label: "Informatika, algoritmlar", weights: {backend: 2}},
                {label: "Matematika, statistika", weights: {data: 2}},
                {label: "Informatika + gadjetlar bilan tajriba qilish", weights: {mobile: 2}},
            ],
        },
        {
            text: "Qaysi loyihada ishlashni ko'proq xohlaysiz?",
            options: [
                {label: "Landing page va admin panel dizayni", weights: {frontend: 3}},
                {label: "To'lov tizimi, autentifikatsiya, back office", weights: {backend: 3}},
                {label: "Rekomendatsiya tizimi, prediktsiya model", weights: {data: 3}},
                {label: "Online do'konning mobil ilovasi", weights: {mobile: 3}},
            ],
        },
        {
            text: "Qaysi texnologiyalar ro'yxati sizni ko'proq qiziqtiradi?",
            options: [
                {label: "HTML, CSS, JavaScript, React", weights: {frontend: 3}},
                {label: "Node.js, Express, SQL yoki MongoDB", weights: {backend: 3}},
                {label: "Python, Pandas, Jupyter, ML", weights: {data: 3}},
                {label: "Flutter, React Native, Kotlin/Swift", weights: {mobile: 3}},
            ],
        },
        {
            text: "Bir kun davomida kompyuterda nima qilganingizni tasavvur qiling. Qaysi vazifa yoqadi?",
            options: [
                {label: "Figma/Front-end kod orqali dizaynni jonlantirish", weights: {frontend: 3}},
                {label: "API yozish, Postman’da test qilish", weights: {backend: 3}},
                {label: "Excel/Jupyter’da ma’lumotlarni analiz qilish", weights: {data: 3}},
                {label: "Emulatorda mobil ilova test qilish", weights: {mobile: 3}},
            ],
        },
        {
            text: "Qaysi ko'nikmani birinchi bo'lib kuchli darajaga olib chiqishni xohlaysiz?",
            options: [
                {label: "UI/UX dizayn, responsiv layout", weights: {frontend: 3}},
                {label: "API loyihalash va ma’lumotlar bazasi", weights: {backend: 3}},
                {label: "Data tahlili va ML asosi", weights: {data: 3}},
                {label: "Platformalararo mobil development", weights: {mobile: 3}},
            ],
        },
        {
            text: "Qaysi ish uslubi sizga mosroq?",
            options: [
                {label: "Brauzer devtools bilan UI-ni chiroyli qilish", weights: {frontend: 3}},
                {label: "Terminalda serverni boshqarish, log o‘qish", weights: {backend: 3}},
                {label: "Notebookda kod + izohlar bilan tajriba qilish", weights: {data: 3}},
                {label: "Telefon va emulatorda test qilish", weights: {mobile: 3}},
            ],
        },
        {
            text: "Muammo bo'lganda qaysi turdagi bug sizni qiziqtiradi?",
            options: [
                {label: "UI noto'g'ri chiqishi, responsiv muammolar", weights: {frontend: 3}},
                {label: "Server error, 500, autentifikatsiya xatolari", weights: {backend: 3}},
                {label: "Noto'g'ri hisoblangan statistika yoki grafika", weights: {data: 3}},
                {label: "Ilova sekinligi yoki crash bo'lishi", weights: {mobile: 3}},
            ],
        },
        {
            text: "Kelajakda qaysi lavozim sizni ilhomlantiradi?",
            options: [
                {label: "Frontend developer / UI engineer", weights: {frontend: 3}},
                {label: "Backend developer / API engineer", weights: {backend: 3}},
                {label: "Data scientist / ML engineer", weights: {data: 3}},
                {label: "Mobile developer", weights: {mobile: 3}},
            ],
        },
        {
            text: "Qaysi turdagi kontentdan tezroq o'rganyapsiz?",


            options: [
                {label: "UI yozishni ko'rsatadigan front-end kurslar", weights: {frontend: 2}},
                {label: "Backend arxitekturasi va patternlar haqida videolar", weights: {backend: 2}},
                {label: "Data tahlili va ML tajriba videolari", weights: {data: 2}},
                {label: "Mobil ilova yozish bo‘yicha bootcamp’lar", weights: {mobile: 2}},
            ],
        },
        {
            text: "Qaysi vositani ko'proq ishlatishni xohlaysiz?",
            options:
                [
                    {label: "Figma, Chrome DevTools", weights: {frontend: 2}},
                    {label: "Postman, DB client (pgAdmin, Mongo Compass)", weights: {backend: 2}},
                    {label: "Jupyter, VSCode + Python extensions", weights: {data: 2}},
                    {label: "Android Studio yoki Xcode", weights: {mobile: 2}},
                ],
        }
        ,
        {
            text: "Qaysi tipdagi muammolar sizni ko'proq qiziqtiradi?",
            options:
                [
                    {label: "Foydalanuvchiga qulay interfeys yaratish", weights: {frontend: 3}},
                    {label: "Ko'p foydalanuvchili, barqaror server yozish", weights: {backend: 3}},
                    {label: "Katta ma’lumotdan foydali xulosalar chiqarish", weights: {data: 3}},
                    {label: "Offline ham ishlaydigan mobil app yaratish", weights: {mobile: 3}},
                ],
        }
        ,
        {
            text: "Agar sizga 1 oylik kichik loyihani bersa, qaysi yo'nalishni tanlaysiz?",
            options:
                [
                    {label: "Figma’dan dizayn olib, front-end qilib chiqish", weights: {frontend: 3}},
                    {label: "Authentication + REST API backend yozish", weights: {backend: 3}},
                    {label: "Data set olib, vizualizatsiya va model qilish", weights: {data: 3}},
                    {label: "Oddiy todo yoki chat mobil ilova yozish", weights: {mobile: 3}},
                ],
        }
        ,
        {
            text: "Qaysi jamoada o'zingizni tasavvur qilasiz?",
            options:
                [
                    {label: "Dizayner va product bilan yaqin ishlaydigan front-end jamoa", weights: {frontend: 3}},
                    {
                        label: "Server, integratsiya va xavfsizlik bilan shug'ullanuvchi backend jamoa",
                        weights: {backend: 3}
                    },
                    {label: "Analitiklar, data engineer va ML bo'yicha jamoa", weights: {data: 3}},
                    {label: "Mobil tajriba va UX test qiladigan jamoa", weights: {mobile: 3}},
                ],
        }
        ,
        {
            text: "Bepul vaqt bo'lsa, qaysi contentni ko'proq tomosha qilasiz deb o'ylaysiz?",
            options:
                [
                    {label: "Front-end challenge, CSS battle, UI clone videolari", weights: {frontend: 2}},
                    {label: "Server arxitekturasi, scalable system videolari", weights: {backend: 2}},
                    {label: "Data science case study va Kaggle videolari", weights: {data: 2}},
                    {label: "Mobil app review, UX breakdown videolari", weights: {mobile: 2}},
                ],
        }
        ,
    ]
;
let currentIndex = 0;
// Har bir savol uchun tanlangan option index (yoki null)
let answers = new Array(QUESTIONS.length).fill(null);
let userInfo = {
    name: "",
    level: "newbie",
};
// DOM elementlar
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const nameInput = document.getElementById("name-input");
const levelSelect = document.getElementById("level-select");

const statsBtn = document.getElementById("stats-btn");
const statsPanel = document.getElementById("stats-panel");
const statsSummary = document.getElementById("stats-summary");
const statsContainer = document.getElementById("stats-container");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

const resultsContainer = document.getElementById("results-container");

// Boshlash
startBtn.addEventListener("click", () => {
    const name = (nameInput.value || "").trim();
    const level = levelSelect.value || "newbie";

    if (!name) {
        alert("Iltimos, ismingizni kiriting.");
        nameInput.focus();
        return;
    }

    userInfo.name = name;
    userInfo.level = level;

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestion();
});

// Ortga
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
});

// Keyingi
nextBtn.addEventListener("click", () => {
    // Hech narsa tanlanmagan bo'lsa, hech narsa qilmaymiz
    if (answers[currentIndex] === null) {
        alert("Iltimos, variantni tanlang.");
        return;
    }

    // Oxirgi savol bo'lsa, natijani hisoblaymiz
    if (currentIndex === QUESTIONS.length - 1) {
        showResults();
    } else {
        currentIndex++;
        renderQuestion();
    }
});

// Qayta boshlash
restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

statsBtn.addEventListener("click", () => {
    loadStats();
})

// Savolni render qilish
function renderQuestion() {
    const q = QUESTIONS[currentIndex];

    // Progress
    progressText.textContent = `Savol ${currentIndex + 1} / ${QUESTIONS.length};`
    const percent = ((currentIndex + 1) / QUESTIONS.length) * 100;
    progressFill.style.width = `${percent}%`

    // Savol matni
    questionText.textContent = q.text;
// Variantlar
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, idx) => {
        const card = document.createElement("label");
        card.className = "option-card";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = "idx";

        if (answers[currentIndex] === idx) {
            input.checked = true;
        }

        input.addEventListener("change", () => {
            answers[currentIndex] = idx;
        });

        const span = document.createElement("span");
        span.textContent = opt.label;

        card.appendChild(input);
        card.appendChild(span);
        optionsContainer.appendChild(card);
    });

// Tugmalar holati
    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent =
        currentIndex === QUESTIONS.length - 1 ? "Natijani ko'rish" : "Keyingi";
}

// Natijani hisoblash
function showResults() {
    // Domen bo'yicha ballar
    const scores = {};
    DOMAINS.forEach((d) => (scores[d] = 0));

    QUESTIONS.forEach((q, qIndex) => {
        const selectedIdx = answers[qIndex];
        if (selectedIdx === null) return;
        const opt = q.options[selectedIdx];
        Object.entries(opt.weights).forEach(([domain, weight]) => {
            scores[domain] += weight;
        });
    });

    const total = Object.values(scores).reduce((sum, v) => sum + v, 0) || 1;

    // Domen + foizlar ro'yxati
    const results = DOMAINS.map((d) => ({
        domain: d,
        score: scores[d],
        pct: Math.round((scores[d] * 100) / total),
    })).sort((a, b) => b.pct - a.pct);

    // UI
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    const name = userInfo.name || "Siz";
    resultsContainer.innerHTML = "";
    const headerText = document.createElement("p");
    headerText.style.fontSize = "14px";
    headerText.style.marginBottom = "10px";

    const topDomain = results[0]?.domain;
    let topLabel = topDomain ? DOMAIN_LABELS[topDomain] : "";
    headerText.textContent = `${name}, sizning javoblaringiz bo‘yicha eng yaqin yo‘nalish: ${topLabel}. Quyidabarcha yo‘nalishlar  bo‘yicha foizlar:`;

    resultsContainer.appendChild(headerText);
    resultsContainer.innerHTML = "";

    results.forEach((r) => {
        if (r.score === 0) return; // umuman ball bo'lmasa, ko'rsatmasak ham bo'ladi

        const item = document.createElement("div");
        item.className = "result-item";

        const header = document.createElement("div");
        header.className = "result-header";
        header.innerHTML = `
            <span>${DOMAIN_LABELS[r.domain]}</span>
        <span>${r.pct}%</span>
        `;

        const barBg = document.createElement("div");
        barBg.className = "result-bar-bg";

        const barFill = document.createElement("div");
        barFill.className = "result-bar-fill";
        barFill.style.width = `${r.pct}%`;

        barBg.appendChild(barFill);
        item.appendChild(header);
        item.appendChild(barBg);

        const advice = document.createElement("p");
        advice.style.fontSize = "13px";
        advice.style.color = "#555";
        advice.textContent = getAdvice(r.domain);
        item.appendChild(advice);

        resultsContainer.appendChild(item);
    });
    saveResults(results)
}

function getAdvice(domain) {
    switch (domain) {
        case "frontend":
            return "Frontend uchun: HTML, CSS, JavaScript, keyin React o‘rganishni boshlang. Landing page va UI loyihalar qiling.";
        case "backend":
            return "Backend uchun: Node.js, Express, SQL yoki MongoDB, REST API mavzularini o‘rganing. Server loyihalar qiling.";
        case "data":
            return "Data/AI uchun: Python, Pandas, NumPy, statistik asoslar va boshlang‘ich ML kurslarini ko‘rish tavsiya etiladi.";
        case "mobile":
            return "Mobile uchun: Flutter yoki React Native’dan birini tanlab, kichik mobil app loyihalar qilishdan boshlang.";
        default:
            return "Tanlangan yo‘nalish bo‘yicha asosiy kurslar va kichik loyihalar bilan boshlang.";
    }
}

function saveResults(results) {
    fetch("/api/save_results", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            timestamp: new Date().toISOString(),
            user: userInfo,
            results,
        }),
    }).catch((err) => {
        console.error("Natijani saqlashda xato:", err);
    });
}

function loadStats() {
    fetch("/api/stats")
        .then((res) => res.json())
        .then((data) => {
            statsPanel.classList.remove("hidden");

            const totalUsers = data.totalUsers || 0;
            const domains = data.domains || [];

            if (totalUsers === 0) {
                statsSummary.textContent =
                    "Hozircha statistika yo‘q. Birinchi bo‘lib ushbu testni yakunlaganlardan birisiz 🙂";
                statsContainer.innerHTML = "";
                return;
            }

            statsSummary.textContent = `Umumiy respondentlar soni: ${totalUsers} ta .Har bir yo‘nalish bo‘yicha o‘rtacha foizlar quyidagicha:`;

            statsContainer.innerHTML = "";

            domains.forEach((d) => {
                const item = document.createElement("div");
                item.className = "stats-item";

                const header = document.createElement("div");
                header.className = "stats-header";
                header.innerHTML = `
                    <span>${DOMAIN_LABELS[d.domain] || d.domain}</span>
                    <span>${d.averagePct}% (javoblar: ${d.answersCount})</span>
                `;

                const barBg = document.createElement("div");
                barBg.className = "stats-bar-bg";

                const barFill = document.createElement("div");
                barFill.className = "stats-bar-fill";
                barFill.style.width = `${d.averagePct}%`;

                barBg.appendChild(barFill);
                item.appendChild(header);
                item.appendChild(barBg);

                statsContainer.appendChild(item);
            });
        })
        .catch((err) => {
            console.error("Statistikani yuklashda xato:", err);
            statsPanel.classList.remove("hidden");
            statsSummary.textContent =
                "Statistikani yuklashda xato yuz berdi. Keyinroq qayta urinib ko‘ring.";
            statsContainer.innerHTML = "";
        });
}