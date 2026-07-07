// ==========================================
// 1. FLOTA RADIOWOZÓW LSPD (Słownik referencyjny)
// Przechowujemy tu tylko dane techniczne radiowozów (zdjęcia).
// Dzięki temu nie musisz powtarzać linków do zdjęć poniżej.
// ==========================================
const policeFleet = {
    "Dominator GT": "https://zapodaj.net/images/4d163f25cb83e.png",
    "Tavros": "https://zapodaj.net/images/c2c3e7b5c9239.png",
    "VSTR": "https://zapodaj.net/images/f8a6e8f5fecd7.png",
    "Scout": "https://zapodaj.net/images/299142484d4d5.png",
    "Merit PPV": "https://zapodaj.net/images/b031e19c2cdd3.png",
    "Aleutian": "https://zapodaj.net/images/980f9096f7827.png",
    "Dominator GSX": "https://zapodaj.net/images/0245e6b820474.png",
    "Vapid Stanier": "https://zapodaj.net/images/41a0d057bdc84.png",
    "Regent": "https://zapodaj.net/images/cd998aef9cb24.png"
};

// ==========================================
// 2. BAZA SAMOCHODÓW - BAZA Z NAPADÓW
// W polu 'police' wpisujesz dokładnie, które radiowozy mają wyjechać!
// ==========================================
const heistVehicles = [
    // KLASA B - Przykład: wyjeżdżają tylko Dominator GT i Tavros
    { name: "Pegassi Toros", class: "B", img: "https://zapodaj.net/images/d4fab46e3405a.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Annis ZR350", class: "B", img: "https://zapodaj.net/images/2eb9a12dabd78.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Toundra Panthere", class: "B", img: "https://zapodaj.net/images/a1f0d17ea489c.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Grotti Furia", class: "B", img: "https://zapodaj.net/images/1fec3557533cd.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Obey 8F Drafter", class: "B", img: "https://zapodaj.net/images/18768fc1b212d.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Pfister Comet S2 Cabrio", class: "B", img: "https://zapodaj.net/images/77ebf7f7f95fc.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Pfister Comet S2", class: "B", img: "https://zapodaj.net/images/7e24fd72252e1.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    { name: "Lampadati Cinquemila", class: "B", img: "https://zapodaj.net/images/93be132683918.png", police: ["Dominator GT", "Tavros", "VSTR", "Scout"] },
    
    // KLASA C - Przykład: wyjeżdżają Merit PPV i Aleutian
    { name: "Pfister Comet", class: "C", img: "https://zapodaj.net/images/1e4e7363e7a89.png", police: ["Merit PPV", "Aleutian"] },
    { name: "Annis Elegy RH8", class: "C", img: "https://zapodaj.net/images/0af9a9e4e241a.png", police: ["Merit PPV", "Dominator GSX"] },
    { name: "Obey Argento 2F", class: "C", img: "https://zapodaj.net/images/6ef661f86ecc4.png", police: ["Aleutian"] },
    { name: "Pfister Comet Classic", class: "C", img: "https://zapodaj.net/images/7f3e900c475ee.png", police: ["Dominator GSX"] },
    { name: "Pfister Comet S1 Turbo", class: "C", img: "https://zapodaj.net/images/bb6ac83faa6ed.png", police: ["Merit PPV"] },
    { name: "Annis Mochi", class: "C", img: "https://zapodaj.net/images/7d2ad2d9d9cef.png", police: ["Merit PPV", "Aleutian"] },
    { name: "Grotti Turismo 300GT", class: "C", img: "https://zapodaj.net/images/992aac6f3f1b0.png", police: ["Dominator GSX"] },
    { name: "Grotti Turismo 300GT Spider", class: "C", img: "https://zapodaj.net/images/e7357a5ab16dc.png", police: ["Merit PPV", "Aleutian"] },
    { name: "Bravado Banshee S", class: "C", img: "https://zapodaj.net/images/e7e83ef085684.png", police: ["Merit PPV"] },
    { name: "BF Club XR", class: "C", img: "https://zapodaj.net/images/fe269007a252f.png", police: ["Aleutian"] },
    { name: "Gallivanter Baller LE", class: "C", img: "https://zapodaj.net/images/3eb70767c20eb.png", police: ["Aleutian", "Merit PPV"] },
    { name: "Pfister Comet SR", class: "C", img: "https://zapodaj.net/images/88e86103b379f.png", police: ["Merit PPV"] },
    { name: "Benefactor Dubsta", class: "C", img: "https://zapodaj.net/images/aaff7580a7517.png", police: ["Aleutian"] },
    { name: "Benefactor Feltzer", class: "C", img: "https://zapodaj.net/images/fd25718a51ff9.png", police: ["Merit PPV"] },
    { name: "Pfister Neon", class: "C", img: "https://zapodaj.net/images/cef5754cadab7.png", police: ["Dominator GSX"] },
    { name: "Enus Paragon R", class: "C", img: "https://zapodaj.net/images/2660cd9998fcb.png", police: ["Merit PPV", "Aleutian"] },
    { name: "Pegassi Reaper", class: "C", img: "https://zapodaj.net/images/02234e8b8ed9a.png", police: ["Merit PPV", "Dominator GSX"] },
    { name: "Karin Sultan", class: "C", img: "https://zapodaj.net/images/2a37bd5e0d145.png", police: ["Merit PPV", "Aleutian"] },
    { name: "Declasse Vamos", class: "C", img: "https://zapodaj.net/images/4e7f8cc743adf.png", police: ["Merit PPV"] },
    
    // KLASA D - Przykład: wyjeżdżają Vapid Stanier i Regent
    { name: "Rune Cheburek", class: "D", img: "https://zapodaj.net/images/d298eab449b29.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Grotti Brioso Fulmine", class: "D", img: "https://zapodaj.net/images/32ba109394ff7.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Annis Elegy RH2", class: "D", img: "https://zapodaj.net/images/fa940e9767479.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Coil Eon", class: "D", img: "https://zapodaj.net/images/8eff37ff3ce32.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Dundreary Hades", class: "D", img: "https://zapodaj.net/images/005596cdd2ae0.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Declasse Impaler LE", class: "D", img: "https://zapodaj.net/images/f22c863c2ccbf.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Lampadati Komoda GT", class: "D", img: "https://zapodaj.net/images/ab8654ac35547.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Annis Rumina", class: "D", img: "https://zapodaj.net/images/d78b13b768099.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Albany Alpha", class: "D", img: "https://zapodaj.net/images/de48569fb54f6.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Maxwell Asbo", class: "D", img: "https://zapodaj.net/images/2f214a7e468d3.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Declasse Asea", class: "D", img: "https://zapodaj.net/images/c5dc8edfd4664.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Karin Asterope", class: "D", img: "https://zapodaj.net/images/daf177aed8d34.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Gallivanter Baller", class: "D", img: "https://zapodaj.net/images/7e4b3e345243f.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Bravado Banshee", class: "D", img: "https://zapodaj.net/images/d9b7abc2cb026.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Enus Cognoscenti Cabrio", class: "D", img: "https://zapodaj.net/images/af3d422497700.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Dewbauchee Exemplar", class: "D", img: "https://zapodaj.net/images/07cec3df87257.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Lampadati Felon", class: "D", img: "https://zapodaj.net/images/397e4e464b134.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Cheval Fugitive", class: "D", img: "https://zapodaj.net/images/6a5abf3ef7cdb.png", police: ["Vapid Stanier", "Regent"] },
    { name: "Karin Vivanite", class: "D", img: "https://zapodaj.net/images/b089e63ebfb7e.png", police: ["Vapid Stanier", "Regent"] }
];

// ==========================================
// 3. OSOBNA BAZA SAMOCHODÓW - Z TRACKERA
// ==========================================
const trackerVehicles = [
    // Dla aut z trackera też możesz przypisać unikalny zestaw, np. tylko szybkie fury z Klasy B
    { name: "Itali GTB", class: "A", img: "https://zapodaj.net/images/84a381640b3f0.png", police: ["Tavros", "VSTR", "Scout"] },
    { name: "Turismo Omaggio", class: "A", img: "https://zapodaj.net/images/8b9ce5efc7a95.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Calico", class: "A", img: "https://zapodaj.net/images/9280100574720.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Vectre", class: "A", img: "https://zapodaj.net/images/76214c06ff415.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Turismo", class: "A", img: "https://zapodaj.net/images/c93d24b54aed3.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Jugular", class: "A", img: "https://zapodaj.net/images/cb64fca0338ed.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Gauntlet", class: "A", img: "https://zapodaj.net/images/c196f31ddb5fa.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Ellie", class: "A", img: "https://zapodaj.net/images/da727980ee0d5.png", police: ["Dominator GT", "Tavros", "Scout"] },
    { name: "Penumbra", class: "A", img: "https://zapodaj.net/images/7f1b6c86bf540.png", police: ["Dominator GT", "Tavros", "Scout"] },
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

// NOWA LOGIKA DOPASOWANIA PRECYZYJNEGO
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

    policeDisplay.innerHTML = '';

    // Pobieramy tablicę spersonalizowanych radiowozów przypisanych bezpośrednio do wybranego auta
    const assignedPolice = vehicle.police || [];

    assignedPolice.forEach(copCarName => {
        // Pobieramy link do zdjęcia ze słownika na górze na podstawie nazwy radiowozu
        const imgUrl = policeFleet[copCarName] || "";
        
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <h4>${copCarName}</h4>
            <img src="${imgUrl}" alt="${copCarName}" onerror="this.src='https://placehold.co/400x250?text=Blad+Zdjecia'">
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
