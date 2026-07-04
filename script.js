// ==========================================
// 1. FLOTA RADIOWOZÓW LSPD
// ==========================================
const policeFleet = {
    B: [
        { name: "Dominator GT (Klasa B)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522694700270751794/Zrzut_ekranu_2026-07-03_220256.png?ex=6a496772&is=6a4815f2&hm=475c5379c81ddedf13b39703fc8548129adcb68c3e88efbe5751cf30dd643f7f&" },
        { name: "Tavros (Klasa B)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522837515487154196/Zrzut_ekranu_2026-07-04_073152.png?ex=6a49ec74&is=6a489af4&hm=0d7f2cad7b134768429d0ed987558ac22a0c3119c795bfff2febc82ddb5544ee&" },
    ],
    C: [
        { name: "Merit PPV (Klasa C)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522694513188012202/Zrzut_ekranu_2026-07-03_220227.png?ex=6a496746&is=6a4815c6&hm=d11e0c267cf2bf4aadafdb8ebd5381eb0c47056bdad84a1e166793f3137d38e9&" },
        { name: "Aleutian (Klasa C)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522836653574455367/Zrzut_ekranu_2026-07-03_220349.png?ex=6a49eba7&is=6a489a27&hm=5e185a053428c4e22a6d8db173dac3e93472d0f308825b9cdf3958e7a5077839&" },
    ],
    D: [
        { name: "Vapid Stanier (Klasa D)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522694812552269965/Zrzut_ekranu_2026-07-03_220323.png?ex=6a49678d&is=6a48160d&hm=86be081e89cfbb7865edaf7990a9fd3f1b885119494a44ac0f547821e78cdd62&" },
        { name: "Regent (Klasa D)", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522836877416333492/Zrzut_ekranu_2026-07-04_072957.png?ex=6a49ebdc&is=6a489a5c&hm=cb95e2ebbc644b4b9f5c35eefb4adcdeb6249e9a719e07735112ab70cf26a7ae&" },
    ]
};

// ==========================================
// 2. BAZA SAMOCHODÓW - BAZA Z NAPADÓW
// ==========================================
const heistVehicles = [
    { name: "Pegassi Toros", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522826247871402105/Zrzut_ekranu_2026-07-04_064720.png?ex=6a49e1f6&is=6a489076&hm=3ed3c597c79e71aff191d9c8fe29cf70da6d1c0e55bb392ac51ff45ef83cdc3e&" },
    { name: "Annis ZR350", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522826139435925584/Zrzut_ekranu_2026-07-04_064658.png?ex=6a49e1dc&is=6a48905c&hm=275fe4ffd3fe71f1a0e9a4ff1c4edcff57b2b37437ebc492623024accaeac978&" },
    { name: "Toundra Panthere", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522825887064789012/Zrzut_ekranu_2026-07-04_064619.png?ex=6a49e1a0&is=6a489020&hm=3b9227623ca943f37d8a3fbdc552f4eb1d3c60d8ba719c1c4ee9803056db86f7&" },
    { name: "Grotti Furia", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522825557664993300/Zrzut_ekranu_2026-07-04_064500.png?ex=6a49e151&is=6a488fd1&hm=891a8acb5e48a2ca94644fbfb5348fd22f2bcfd340fe21901fab2f8109382a3d&" },
    { name: "Obey 8F Drafter", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522825386885644321/Zrzut_ekranu_2026-07-04_064419.png?ex=6a49e128&is=6a488fa8&hm=205b0e7378bf9f368bd32de91a6d8a7cfdd32d00eaae3a0031238431d9ce7b40&" },
    { name: "Pfister Comet S2 Cabrio", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522825216038797422/Zrzut_ekranu_2026-07-04_064336.png?ex=6a49e100&is=6a488f80&hm=577eca65fe007fdef8d0066f27b28f77f16b47663df5225074724b0c0cc173f0&" },
    { name: "Pfister Comet S2", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522825071293370428/Zrzut_ekranu_2026-07-04_064302.png?ex=6a49e0dd&is=6a488f5d&hm=99b6d23fa481b746f8aedace9c9159e8a39acd91b5407bc890a22bde847c9b48&" },
    { name: "Lampadati Cinquemila", class: "B", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522824730988642464/Zrzut_ekranu_2026-07-04_064137.png?ex=6a49e08c&is=6a488f0c&hm=ff60485c8c87bd7b5f11d583d08a46fc2a18f71c9e555aa367ee63f86ed8650f&" },
    { name: "Pfister Comet", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522625893393236008/Zrzut_ekranu_2026-07-03_173015.png?ex=6a49275e&is=6a47d5de&hm=14d6ae4341c91cd20497793026b7d93016dbf1f97627ec9d89b39c09ac104eb0&" },
    { name: "Annis Elegy RH8", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522628999229079654/Zrzut_ekranu_2026-07-03_174353.png?ex=6a492a42&is=6a47d8c2&hm=bab96f0c90afa3a2da23180a26c676ba432ded7508596aaf87885d3dc08d1c2c&" },
    { name: "Obey Argento 2F", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522689871951429813/Zrzut_ekranu_2026-07-03_213001.png?ex=6a4962f3&is=6a481173&hm=1ea8391ce6f7bd3ff8484daf38de2882161de24a8eaca109b361a686858c0120&" },
    { name: "Bravado Banshee S", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522690065657106432/Zrzut_ekranu_2026-07-03_213011.png?ex=6a496321&is=6a4811a1&hm=16942411d7cc4dff36f945f172f009055df6bc96b730aa5460a11f070f748a92&" },
    { name: "BF Club XR", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522690437951782952/Zrzut_ekranu_2026-07-03_213020.png?ex=6a49637a&is=6a4811fa&hm=c34635d0894ba8409a4438812f05569484b1d4f18e2911dd0043fb3d4deafeea&" },
    { name: "Pfister Comet Classic", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522690602615963678/Zrzut_ekranu_2026-07-03_213029.png?ex=6a4963a1&is=6a481221&hm=10fdb305834959e20ad46ca08846212de861779fd68bcd6982f57d834786d451&" },
    { name: "Pfister Comet S1 Turbo", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522691277068435628/Zrzut_ekranu_2026-07-03_213038.png?ex=6a496442&is=6a4812c2&hm=4ea4201116dfefb260f91924ee2d5bff4a0cb753dfde4bfc4908bc0fff4e62be&" },
    { name: "Annis Mochi", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522691441434955786/Zrzut_ekranu_2026-07-03_213046.png?ex=6a496469&is=6a4812e9&hm=f77f79bfcbf4c392c30410dadfceaa62e9c8bd043edbb096faf82931ee5d21e9&" },
    { name: "Grotti Turismo 300GT", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522691582334341130/Zrzut_ekranu_2026-07-03_213111.png?ex=6a49648b&is=6a48130b&hm=0e55cdf8ff5146ccf614e9e02ca06610d691ba9c4721cb324c8aded174bb5a57&" },
    { name: "Grotti Turismo 300GT Spider", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522691892498923700/Zrzut_ekranu_2026-07-03_213119.png?ex=6a4964d5&is=6a481355&hm=4145e7f79a743c7ac60f1a0aef578459459a930688fc48bbc2e752ac2691c7f6&" },
    { name: "Bravado Banshee S", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522690065657106432/Zrzut_ekranu_2026-07-03_213011.png?ex=6a496321&is=6a4811a1&hm=16942411d7cc4dff36f945f172f009055df6bc96b730aa5460a11f070f748a92&" },
    { name: "BF Club XR", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522690437951782952/Zrzut_ekranu_2026-07-03_213020.png?ex=6a49637a&is=6a4811fa&hm=c34635d0894ba8409a4438812f05569484b1d4f18e2911dd0043fb3d4deafeea&" },
    { name: "Gallivanter Baller LE", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522822221251215380/Zrzut_ekranu_2026-07-03_211357.png?ex=6a49de36&is=6a488cb6&hm=aee5ce2e0e6247002876a2cf393a920f5e01b54b96ddfd7c171040ccdb468e41&" },
    { name: "Pfister Comet SR", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522822916901699624/Zrzut_ekranu_2026-07-04_063428.png?ex=6a49dedc&is=6a488d5c&hm=997f80e3d4105b377e7ceb1badc891c1978135be544d3655265b3e88ad5f2e29&" },
    { name: "Benefactor Dubsta", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522823131692007464/Zrzut_ekranu_2026-07-04_063515.png?ex=6a49df0f&is=6a488d8f&hm=47bc5689ba2644bff2dc7beeef9ee1fd54357f2cbe02d566e099e837a51c6034&" },
    { name: "Benefactor Feltzer", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522823412618367036/Zrzut_ekranu_2026-07-04_063615.png?ex=6a49df52&is=6a488dd2&hm=6fda418a87fcbbc474f8fd414084837f95237c64595bf6bc02f3c90e49d92552&" },
    { name: "Pfister Neon", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522823678142714018/Zrzut_ekranu_2026-07-04_063731.png?ex=6a49df91&is=6a488e11&hm=e2bdf9a97faab6ff8ae5810e97f369cd06b784f60f29306fc5e02fa3b50e952a&" },
    { name: "Enus Paragon R", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522823840109957190/Zrzut_ekranu_2026-07-04_063812.png?ex=6a49dfb8&is=6a488e38&hm=245ebf9ac676bed839428e4aeab2da794184e8cbfb05629ad96bdd20796cddc5&" },
    { name: "Pegassi Reaper", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522824050341183599/Zrzut_ekranu_2026-07-04_063901.png?ex=6a49dfea&is=6a488e6a&hm=5922fd2c899f95634b5949eae04ed15bee6c39ff8d7bf58a8f78a013b8fbbda2&" },
    { name: "Karin Sultan", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522824218104959117/Zrzut_ekranu_2026-07-04_063941.png?ex=6a49e012&is=6a488e92&hm=e0e1329597ffd9bcafaefc5d450a31b368cf37f15999f53af3ff4044525ff930&" },
    { name: "Declasse Vamos", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522824377509613658/Zrzut_ekranu_2026-07-04_064018.png?ex=6a49e038&is=6a488eb8&hm=c75b870eaf256fb551d0422e9080ed17ffdb6bb78a9af71589bccf8b88697888&" },
    { name: "Rune Cheburek", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522630622634311850/Zrzut_ekranu_2026-07-03_175019.png?ex=6a492bc5&is=6a47da45&hm=8e67c3dda7ab1edb646de0e1882b2ec0c4713d5f4bedba0c44422e51dc2470d3&" },
    { name: "Grotti Brioso Fulmine", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522688599525691565/Zrzut_ekranu_2026-07-03_212835.png?ex=6a4961c4&is=6a481044&hm=a16f1066a3313d7900d0ed0e693449599ecc028c43c3f7132d656544e658529c&" },
    { name: "Annis Elegy RH2", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522688736737886218/Zrzut_ekranu_2026-07-03_212846.png?ex=6a4961e5&is=6a481065&hm=d1948b3d9d91ebaeb55ada8cd4610484961a64b8d8ecb9e9c1927be8886f9a15&" },
    { name: "Coil Eon", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522688909396541631/Zrzut_ekranu_2026-07-03_212857.png?ex=6a49620e&is=6a48108e&hm=2878f1f576cbb7ffed9603760a18100036f8a2fc3e18df09cb651bd40438f324&" },
    { name: "Dundreary Hades", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522689049398214666/Zrzut_ekranu_2026-07-03_212912.png?ex=6a49622f&is=6a4810af&hm=3aec4eab0421586b8733048a446663e43ef10ec2ca2d58ba579dcf441242b203&" },
    { name: "Declasse Impaler LE", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522689339438399529/Zrzut_ekranu_2026-07-03_212923.png?ex=6a496274&is=6a4810f4&hm=8455f28b22a3c696e3fb348eb23e75541650e252e1b31da61df1dabacbd3f90f&" },
    { name: "Lampadati Komoda GT", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522689527670636745/Zrzut_ekranu_2026-07-03_212934.png?ex=6a4962a1&is=6a481121&hm=a039d5cb0bf309bd16291e1c58659d76ae22dc82d0b5e2457f053be9c15d85df&" },
    { name: "Annis Rumina", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522689688950014022/Zrzut_ekranu_2026-07-03_212945.png?ex=6a4962c8&is=6a481148&hm=451aad9ce02fbc99fe5cafa89566fb7f297fde396b63cbffe678cd12208ee6e9&" },
    { name: "Albany Alpha", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522819433058406450/Zrzut_ekranu_2026-07-03_211236.png?ex=6a49db9d&is=6a488a1d&hm=9675c9087f214ab76116602b07744a09fab6610b4189a41df6c70b8b880ce32c&" },
    { name: "Maxwell Asbo", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522819877658820648/Zrzut_ekranu_2026-07-03_211248.png?ex=6a49dc07&is=6a488a87&hm=81b45825ba0e5f521c5c719cffa64c323d2d8d71647ba4846707b8e16c55405f&" },
    { name: "Declasse Asea", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820037566791811/Zrzut_ekranu_2026-07-03_211255.png?ex=6a49dc2d&is=6a488aad&hm=bcf91ae76829228723be2772d55720b209f90808115c5abeb678167fe6292357&" },
    { name: "Karin Asterope", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820183327244289/Zrzut_ekranu_2026-07-03_211300.png?ex=6a49dc50&is=6a488ad0&hm=07a9908bd046c9c445b520f97fe7d0eae9c0429c25f7e6d00afe0e0e47981c2d&" },
    { name: "Gallivanter Baller", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820352689049622/Zrzut_ekranu_2026-07-03_211319.png?ex=6a49dc78&is=6a488af8&hm=5ba5b1824398d76742b1524d7f8fddced33892c8df13b7c8b8c7146ab1c07428&" },
    { name: "Bravado Banshee", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820511267029082/Zrzut_ekranu_2026-07-03_211405.png?ex=6a49dc9e&is=6a488b1e&hm=8a187766baab074c0c614b4cc396926a1851ebd7955a55f12da1b0a977ea3622&" },
    { name: "Enus Cognoscenti Cabrio", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820728724914236/Zrzut_ekranu_2026-07-03_211535.png?ex=6a49dcd2&is=6a488b52&hm=7f15d0a80e9f4254fb675aca40c02d037592bb2851c6d471101aac0c2a0a77c3&" },
    { name: "Dewbauchee Exemplar", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522820970660888576/Zrzut_ekranu_2026-07-03_211559.png?ex=6a49dd0c&is=6a488b8c&hm=29e2f9a8f9970fbb65f2b15b5cd97d1eb9f9be5127881375e5879e9ed808158b&" },
    { name: "Lampadati Felon", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522821118765961276/Zrzut_ekranu_2026-07-03_211617.png?ex=6a49dd2f&is=6a488baf&hm=c7a4a11556c4eea328147c260651ae9ccef9f16cd348a03815b895ed26b06876&" },
    { name: "Cheval Fugitive", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522821410366685345/Zrzut_ekranu_2026-07-03_211638.png?ex=6a49dd74&is=6a488bf4&hm=b2a8d86b802fa55eceab60ea20d9ed25694be069376c2f202d37f990a9ae37f5&" },
    { name: "Karin Vivanite", class: "D", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522821737807478904/Zrzut_ekranu_2026-07-03_211721.png?ex=6a49ddc2&is=6a488c42&hm=3b3cbfe386a1fd35f7af30c39f0923f01f8f9f20f4dc413f15b3917b29aa8591&" },
    
];

// ==========================================
// 3. OSOBNA BAZA SAMOCHODÓW - Z TRACKERA (Inne modyfikacje/klasy)
// ==========================================
const trackerVehicles = [
    { name: "Itali GTB", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522830304300240997/Zrzut_ekranu_2026-07-04_070343.png?ex=6a49e5bd&is=6a48943d&hm=fa6345964346c2128b203e64ab0e16a2031b85ceb5c8e9b0021f6e68e72b5114&" },
    { name: "Turismo Omaggio", class: "C", img: "https://cdn.discordapp.com/attachments/1387667672011116605/1522830690356559964/Zrzut_ekranu_2026-07-04_070522.png?ex=6a49e619&is=6a489499&hm=3e06b083876899724a01ee36dcf1d04f4114912b12ecb349f38b89f88b604567&" },
    { name: "Futo Hatchback [Tracker]", class: "B", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400" }
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