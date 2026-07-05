// ==========================================
// 1. FLOTA RADIOWOZÓW LSPD
// ==========================================
const policeFleet = {
    A: [
        { name: "Dominator GT (Klasa B)", img: "https://zapodaj.net/images/4d163f25cb83e.png" },
        { name: "Tavros (Klasa B)", img: "https://zapodaj.net/images/c2c3e7b5c9239.png" },
        { name: "VSTR (Klasa B)", img: "" },
    ],
    
    B: [
        { name: "Dominator GT (Klasa B)", img: "https://zapodaj.net/images/4d163f25cb83e.png" },
        { name: "Tavros (Klasa B)", img: "https://zapodaj.net/images/c2c3e7b5c9239.png" },
        { name: "VSTR (Klasa B)", img: "" },
        { name: "Scout (Klasa B)", img: "" },
    ],
    C: [
        { name: "Merit PPV (Klasa C)", img: "https://zapodaj.net/images/b031e19c2cdd3.png" },
        { name: "Aleutian (Klasa C)", img: "https://zapodaj.net/images/980f9096f7827.png" },
        { name: "Dominator GSX (Klasa C)", img: "" },
    ],
    D: [
        { name: "Vapid Stanier (Klasa D)", img: "https://zapodaj.net/images/41a0d057bdc84.png" },
        { name: "Regent (Klasa D)", img: "https://zapodaj.net/images/cd998aef9cb24.png" },
    ]
};

// ==========================================
// 2. BAZA SAMOCHODÓW - BAZA Z NAPADÓW
// ==========================================
const heistVehicles = [
    { name: "Pegassi Toros", class: "B", img: "https://zapodaj.net/images/d4fab46e3405a.png" },
    { name: "Annis ZR350", class: "B", img: "https://zapodaj.net/images/2eb9a12dabd78.png" },
    { name: "Toundra Panthere", class: "B", img: "https://zapodaj.net/images/a1f0d17ea489c.png" },
    { name: "Grotti Furia", class: "B", img: "https://zapodaj.net/images/1fec3557533cd.png" },
    { name: "Obey 8F Drafter", class: "B", img: "https://zapodaj.net/images/18768fc1b212d.png" },
    { name: "Pfister Comet S2 Cabrio", class: "B", img: "https://zapodaj.net/images/77ebf7f7f95fc.png" },
    { name: "Pfister Comet S2", class: "B", img: "https://zapodaj.net/images/7e24fd72252e1.png" },
    { name: "Lampadati Cinquemila", class: "B", img: "https://zapodaj.net/images/93be132683918.png" },
    { name: "Pfister Comet", class: "C", img: "https://zapodaj.net/images/1e4e7363e7a89.png" },
    { name: "Annis Elegy RH8", class: "C", img: "https://zapodaj.net/images/0af9a9e4e241a.png" },
    { name: "Obey Argento 2F", class: "C", img: "https://zapodaj.net/images/6ef661f86ecc4.png" },
    { name: "Pfister Comet Classic", class: "C", img: "https://zapodaj.net/images/7f3e900c475ee.png" },
    { name: "Pfister Comet S1 Turbo", class: "C", img: "https://zapodaj.net/images/bb6ac83faa6ed.png" },
    { name: "Annis Mochi", class: "C", img: "https://zapodaj.net/images/7d2ad2d9d9cef.png" },
    { name: "Grotti Turismo 300GT", class: "C", img: "https://zapodaj.net/images/992aac6f3f1b0.png" },
    { name: "Grotti Turismo 300GT Spider", class: "C", img: "https://zapodaj.net/images/e7357a5ab16dc.png" },
    { name: "Bravado Banshee S", class: "C", img: "https://zapodaj.net/images/e7e83ef085684.png" },
    { name: "BF Club XR", class: "C", img: "https://zapodaj.net/images/fe269007a252f.png" },
    { name: "Gallivanter Baller LE", class: "C", img: "https://zapodaj.net/images/3eb70767c20eb.png" },
    { name: "Pfister Comet SR", class: "C", img: "https://zapodaj.net/images/88e86103b379f.png" },
    { name: "Benefactor Dubsta", class: "C", img: "https://zapodaj.net/images/aaff7580a7517.png" },
    { name: "Benefactor Feltzer", class: "C", img: "https://zapodaj.net/images/fd25718a51ff9.png" },
    { name: "Pfister Neon", class: "C", img: "https://zapodaj.net/images/cef5754cadab7.png" },
    { name: "Enus Paragon R", class: "C", img: "https://zapodaj.net/images/2660cd9998fcb.png" },
    { name: "Pegassi Reaper", class: "C", img: "https://zapodaj.net/images/02234e8b8ed9a.png" },
    { name: "Karin Sultan", class: "C", img: "https://zapodaj.net/images/2a37bd5e0d145.png" },
    { name: "Declasse Vamos", class: "C", img: "https://zapodaj.net/images/4e7f8cc743adf.png" },
    { name: "Rune Cheburek", class: "D", img: "https://zapodaj.net/images/d298eab449b29.png" },
    { name: "Grotti Brioso Fulmine", class: "D", img: "https://zapodaj.net/images/32ba109394ff7.png" },
    { name: "Annis Elegy RH2", class: "D", img: "https://zapodaj.net/images/fa940e9767479.png" },
    { name: "Coil Eon", class: "D", img: "https://zapodaj.net/images/8eff37ff3ce32.png" },
    { name: "Dundreary Hades", class: "D", img: "https://zapodaj.net/images/005596cdd2ae0.png" },
    { name: "Declasse Impaler LE", class: "D", img: "https://zapodaj.net/images/f22c863c2ccbf.png" },
    { name: "Lampadati Komoda GT", class: "D", img: "https://zapodaj.net/images/ab8654ac35547.png" },
    { name: "Annis Rumina", class: "D", img: "https://zapodaj.net/images/d78b13b768099.png" },
    { name: "Albany Alpha", class: "D", img: "https://zapodaj.net/images/de48569fb54f6.png" },
    { name: "Maxwell Asbo", class: "D", img: "https://zapodaj.net/images/2f214a7e468d3.png" },
    { name: "Declasse Asea", class: "D", img: "https://zapodaj.net/images/c5dc8edfd4664.png" },
    { name: "Karin Asterope", class: "D", img: "https://zapodaj.net/images/daf177aed8d34.png" },
    { name: "Gallivanter Baller", class: "D", img: "https://zapodaj.net/images/7e4b3e345243f.png" },
    { name: "Bravado Banshee", class: "D", img: "https://zapodaj.net/images/d9b7abc2cb026.png" },
    { name: "Enus Cognoscenti Cabrio", class: "D", img: "https://zapodaj.net/images/af3d422497700.png" },
    { name: "Dewbauchee Exemplar", class: "D", img: "https://zapodaj.net/images/07cec3df87257.png" },
    { name: "Lampadati Felon", class: "D", img: "https://zapodaj.net/images/397e4e464b134.png" },
    { name: "Cheval Fugitive", class: "D", img: "https://zapodaj.net/images/6a5abf3ef7cdb.png" },
    { name: "Karin Vivanite", class: "D", img: "https://zapodaj.net/images/b089e63ebfb7e.png" },
    
];

// ==========================================
// 3. OSOBNA BAZA SAMOCHODÓW - Z TRACKERA (Inne modyfikacje/klasy)
// ==========================================
const trackerVehicles = [
    { name: "Itali GTB", class: "A", img: "https://zapodaj.net/images/84a381640b3f0.png" },
    { name: "Turismo Omaggio", class: "A", img: "https://zapodaj.net/images/8b9ce5efc7a95.png" },
    
];

// Zmienna przechowująca aktualnie wybraną bazę danych (domyślnie napady)
let currentDatabase = heistVehicles;

// UI Elements
const searchInput = document.getElementById('search-input');
const dropdown = document.getElementById('custom-dropdown');
const searchLabel = document.getElementById('search-label');
const hoverPreview = document.getElementById('hover-preview');
const hoverPreviewImg = document.getElementById('hover-preview-img');

const tabHeist = document.getElementById('tab-heist');
const tabTracker = document.getElementById('tab-tracker');

const suspectBox = document.getElementById('suspect-car');
const policeBox = document.getElementById('police-cars');
const suspectDisplay = document.getElementById('suspect-display');
const policeDisplay = document.getElementById('police-display');

// PRZEŁĄCZANIE ZAKŁADEK
tabHeist.addEventListener('click', () => {
    tabHeist.classList.add('active');
    tabTracker.classList.remove('active');
    document.body.classList.remove('tracker-mode');
    searchLabel.textContent = "🚨 WYBIERZ LUB WPISZ POJAZD Z NAPADU";
    currentDatabase = heistVehicles;
    resetSelection();
});

tabTracker.addEventListener('click', () => {
    tabTracker.classList.add('active');
    tabHeist.classList.remove('active');
    document.body.classList.add('tracker-mode');
    searchLabel.textContent = "📡 WYBIERZ LUB WPISZ POJAZD Z TRACKERA";
    currentDatabase = trackerVehicles;
    resetSelection();
});

function resetSelection() {
    searchInput.value = "";
    suspectBox.classList.add('hidden');
    policeBox.classList.add('hidden');
    dropdown.classList.add('hidden');
}

// LOGIKA RENDEROWANIA LISTY
function renderDropdown(filterText = "") {
    dropdown.innerHTML = "";
    
    const filtered = currentDatabase.filter(veh => 
        veh.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        dropdown.innerHTML = `<div class="dropdown-item" style="cursor:default; color:#666;">Brak takiego auta w tej bazie...</div>`;
        return;
    }

    filtered.forEach(vehicle => {
        const item = document.createElement('div');
        item.className = "dropdown-item";
        item.innerHTML = `<span>${vehicle.name}</span> <span class="item-class ${vehicle.class}">${vehicle.class}-KLASA</span>`;
        
        item.addEventListener('mouseenter', () => {
            hoverPreviewImg.src = vehicle.img;
            hoverPreview.classList.remove('hidden');
        });

        item.addEventListener('mousemove', (e) => {
            hoverPreview.style.top = e.clientY + "px";
            hoverPreview.style.left = e.clientX + "px";
        });

        item.addEventListener('mouseleave', () => {
            hoverPreview.classList.add('hidden');
        });

        item.addEventListener('click', () => {
            selectVehicle(vehicle);
            dropdown.classList.add('hidden');
            hoverPreview.classList.add('hidden');
        });

        dropdown.appendChild(item);
    });
}

function selectVehicle(vehicle) {
    searchInput.value = vehicle.name;

    suspectDisplay.innerHTML = `
        <div class="vehicle-card">
            <h4>${vehicle.name}</h4>
            <img src="${vehicle.img}" alt="${vehicle.name}" onerror="this.src='https://placehold.co/400x250?text=Blad+Zdjecia'">
            <div class="badge">KLASA ${vehicle.class}</div>
        </div>
    `;
    suspectBox.classList.remove('hidden');

    const matchingPolice = policeFleet[vehicle.class];
    policeDisplay.innerHTML = '';

    matchingPolice.forEach(copCar => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <h4>${copCar.name}</h4>
            <img src="${copCar.img}" alt="${copCar.name}" onerror="this.src='https://placehold.co/400x250?text=Blad+Zdjecia'">
        `;
        policeDisplay.appendChild(card);
    });
    policeBox.classList.remove('hidden');
}

// LISTENERS
searchInput.addEventListener('focus', () => {
    renderDropdown(searchInput.value);
    dropdown.classList.remove('hidden');
});

searchInput.addEventListener('input', (e) => {
    renderDropdown(e.target.value);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select-wrapper')) {
        dropdown.classList.add('hidden');
    }
});
