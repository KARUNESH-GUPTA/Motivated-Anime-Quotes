// AnimeVerse Ultimate - Electric JavaScript Application

// Character Database with Must & Top Priority Characters
const charactersDatabase = [
    // Must & Top Priority Characters
    {
        id: "chizuru-mizuhara",
        name: "Chizuru Mizuhara",
        anime: "Rent-a-Girlfriend",
        theme: "crimson-electric",
        priority: "must-top",
        song: "Centimeter",
        quotes: [
            "I'll become the actress of my dreams!",
            "This is just my job, nothing more.",
            "I won't give up on my grandmother's dream.",
            "Acting is everything to me!"
        ],
        description: "Beautiful rental girlfriend pursuing her acting dreams with determination and grace",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1755102097/pplx_project_search_images/dc409df4b3f1e092197aab50b5a28db3580750fa.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1755102097/pplx_project_search_images/dc409df4b3f1e092197aab50b5a28db3580750fa.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/c6cc10bb458d7c0e5b4ebacfb873fcb7151ca41c.png"
        ]
    },
    {
        id: "sung-jinwoo",
        name: "Sung Jin-Woo",
        anime: "Solo Leveling",
        theme: "shadow-monarch",
        priority: "must-top",
        song: "ReawakeR",
        quotes: [
            "I am the Shadow Monarch!",
            "Arise, my shadows!",
            "The weak have no choice but to become strong.",
            "I'll protect everyone I care about!"
        ],
        description: "From E-rank hunter to the ultimate Shadow Monarch, defying all limits",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/2a6e3bd4f1dd38786e5d30c3c5e2a335648a47e0.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/2a6e3bd4f1dd38786e5d30c3c5e2a335648a47e0.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/10686e142fb2f0d16680ca6c05f873e627b8f39a.png"
        ]
    },
    {
        id: "mahiru-shiina",
        name: "Mahiru Shiina",
        anime: "The Angel Next Door Spoils Me Rotten",
        theme: "angel-white",
        priority: "must-top",
        song: "Gift",
        quotes: [
            "Sometimes small kindnesses change everything",
            "I'm not an angel, just Mahiru",
            "Taking care of you has become a habit",
            "I want to make you smile"
        ],
        description: "The school's perfect angel who shows unexpected kindness and warmth",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756236523/pplx_project_search_images/77069e2844dfcfbd69ea5d6937dc32d763454275.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756236523/pplx_project_search_images/77069e2844dfcfbd69ea5d6937dc32d763454275.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/6740a29b797e5efd28f254d942a2e83cc2349c1f.png"
        ]
    },
    {
        id: "siesta",
        name: "Siesta",
        anime: "The Detective is Already Dead",
        theme: "detective-mystery",
        priority: "must-top",
        song: "Koko de Ikiteru",
        quotes: [
            "I am a legendary detective!",
            "The detective is already dead",
            "I'll solve this case before it happens",
            "Mystery is my middle name!"
        ],
        description: "Legendary detective with a mysterious past and incredible deduction skills",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/6c709b7017adc692529978e2de8201f52ed1dc28.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276564/pplx_project_search_images/6c709b7017adc692529978e2de8201f52ed1dc28.png"
        ]
    },
    {
        id: "alya-kujou",
        name: "Alisa Mikhailovna Kujou",
        anime: "Alya Sometimes Hides Her Feelings in Russian",
        theme: "russian-silver",
        priority: "must-top",
        song: "Russian Heart",
        quotes: [
            "Ты такой милый... (You're so cute...)",
            "I don't understand what you're saying",
            "Why do you always act so lazy?",
            "Baka... you're so dense!"
        ],
        description: "Half-Russian beauty hiding her true feelings behind a cold exterior",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756128560/pplx_project_search_images/1d8dcc9b22e1369e6e80e65cd6893a23a5d2c054.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756128560/pplx_project_search_images/1d8dcc9b22e1369e6e80e65cd6893a23a5d2c054.png"
        ]
    },
    {
        id: "tanjiro-kamado",
        name: "Tanjiro Kamado",
        anime: "Demon Slayer",
        theme: "water-flame",
        priority: "must-top",
        song: "Gurenge",
        quotes: [
            "I'll turn Nezuko back into a human!",
            "I won't let anyone else die!",
            "The bond between Nezuko and me cannot be severed!",
            "I'll cut through anything to protect my family!"
        ],
        description: "Kind-hearted demon slayer with unwavering determination to save his sister",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png"
        ]
    },
    {
        id: "naruto-uzumaki",
        name: "Naruto Uzumaki",
        anime: "Naruto",
        theme: "orange-hokage",
        priority: "must-top",
        song: "Blue Bird",
        quotes: [
            "Dattebayo! I'll become Hokage!",
            "I never go back on my word!",
            "I'll bring Sasuke back, no matter what!",
            "Believe it! That's my ninja way!"
        ],
        description: "Determined ninja who became Hokage through sheer willpower and friendship",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png"
        ]
    },
    {
        id: "nagi-umino",
        name: "Nagi Umino",
        anime: "A Couple of Cuckoos",
        theme: "study-genius",
        priority: "must-top",
        song: "Study Love",
        quotes: [
            "I'll study hard for my future!",
            "Grades are everything to me",
            "This engagement is just a misunderstanding",
            "Academic excellence is my goal!"
        ],
        description: "Brilliant academic prodigy caught in a complicated engagement situation",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/44c0605af8631aa9307f5a0e832c5f8fe6a669c3.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/44c0605af8631aa9307f5a0e832c5f8fe6a669c3.png"
        ]
    },
    {
        id: "erika-amano",
        name: "Erika Amano",
        anime: "A Couple of Cuckoos",
        theme: "influencer-pink",
        priority: "must-top",
        song: "Social Media Star",
        quotes: [
            "I'm a social media influencer!",
            "This is going on my Instagram!",
            "You don't know anything about the real world",
            "I'm living my best life!"
        ],
        description: "Wealthy social media influencer learning about real life and genuine connections",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/a93bbf8142a0cbacffc20b5ccc1683650dead95e.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/a93bbf8142a0cbacffc20b5ccc1683650dead95e.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/9808df977efcfabb69bbcf64216b82140eeeb9a2.png"
        ]
    },
    // Additional Popular Characters
    {
        id: "subaru-natsuki",
        name: "Subaru Natsuki",
        anime: "Re:Zero",
        theme: "time-loop",
        priority: "popular",
        song: "Return by Death",
        quotes: [
            "I'll save everyone!",
            "I love Emilia",
            "Return by Death!",
            "I won't give up, no matter how many times I die!"
        ],
        description: "Time-looping hero who never gives up despite facing endless suffering",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png"
        ]
    },
    {
        id: "rimuru-tempest",
        name: "Rimuru Tempest",
        anime: "That Time I Got Reincarnated as a Slime",
        theme: "slime-evolution",
        priority: "popular",
        song: "Slime Evolution",
        quotes: [
            "Let's build a nation where everyone can live happily!",
            "I'm just a slime who wants peace",
            "Great Sage, analyze this!",
            "Friendship transcends species!"
        ],
        description: "Overpowered slime building a monster nation with kindness and wisdom",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png"
        ]
    },
    {
        id: "anya-forger",
        name: "Anya Forger",
        anime: "Spy x Family",
        theme: "spy-family",
        priority: "popular",
        song: "Family Secret",
        quotes: [
            "Waku waku! (Exciting!)",
            "Papa is a spy, Mama is an assassin!",
            "Anya can read minds!",
            "Family is the best!"
        ],
        description: "Telepathic child bringing together a spy family with pure innocence",
        heroImage: "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png",
        galleryImages: [
            "https://pplx-res.cloudinary.com/image/upload/v1756276590/pplx_project_search_images/384e54fcc57c8ad5fd645971328757b6e3a5f224.png"
        ]
    }
];

// Language Translation System
const translations = {
    en: {
        welcome: "AnimeVerse Ultimate",
        heroTitle: "Welcome to the Electric Anime Universe",
        search: "Search characters...",
        theme: "Theme",
        language: "Language",
        profile: "Profile",
        quotes: "Electric Quotes",
        gallery: "Visual Gallery",
        music: "Theme Music",
        mustTop: "Must & Top Characters",
        allCharacters: "Complete Character Universe",
        nowPlaying: "Now Playing",
        backToHome: "Back to Universe"
    },
    hi: {
        welcome: "एनीमे वर्स अल्टीमेट",
        heroTitle: "इलेक्ट्रिक एनीमे यूनिवर्स में आपका स्वागत है",
        search: "पात्रों को खोजें...",
        theme: "थीम",
        language: "भाषा",
        profile: "प्रोफ़ाइल",
        quotes: "इलेक्ट्रिक उद्धरण",
        gallery: "विज़ुअल गैलरी",
        music: "विषयगत संगीत",
        mustTop: "जरूरी और टॉप पात्र",
        allCharacters: "पूर्ण चरित्र ब्रह्मांड",
        nowPlaying: "अभी चल रहा है",
        backToHome: "ब्रह्मांड में वापस"
    },
    ja: {
        welcome: "アニメバースアルティメット",
        heroTitle: "エレクトリックアニメユニバースへようこそ",
        search: "キャラクターを検索...",
        theme: "テーマ",
        language: "言語",
        profile: "プロフィール",
        quotes: "エレクトリック名言",
        gallery: "ビジュアルギャラリー",
        music: "テーマミュージック",
        mustTop: "必須＆トップキャラクター",
        allCharacters: "完全キャラクターユニバース",
        nowPlaying: "再生中",
        backToHome: "ユニバースに戻る"
    },
    ko: {
        welcome: "애니메버스 얼티밋",
        heroTitle: "일렉트릭 애니메 유니버스에 오신 것을 환영합니다",
        search: "캐릭터 검색...",
        theme: "테마",
        language: "언어",
        profile: "프로필",
        quotes: "일렉트릭 명언",
        gallery: "비주얼 갤러리",
        music: "테마 음악",
        mustTop: "필수 & 탑 캐릭터",
        allCharacters: "완전한 캐릭터 유니버스",
        nowPlaying: "재생 중",
        backToHome: "유니버스로 돌아가기"
    },
    es: {
        welcome: "AnimeVerse Ultimate",
        heroTitle: "Bienvenido al Universo Anime Eléctrico",
        search: "Buscar personajes...",
        theme: "Tema",
        language: "Idioma",
        profile: "Perfil",
        quotes: "Citas Eléctricas",
        gallery: "Galería Visual",
        music: "Música Temática",
        mustTop: "Personajes Obligatorios y Principales",
        allCharacters: "Universo Completo de Personajes",
        nowPlaying: "Reproduciendo Ahora",
        backToHome: "Volver al Universo"
    },
    fr: {
        welcome: "AnimeVerse Ultimate",
        heroTitle: "Bienvenue dans l'Univers Anime Électrique",
        search: "Rechercher des personnages...",
        theme: "Thème",
        language: "Langue",
        profile: "Profil",
        quotes: "Citations Électriques",
        gallery: "Galerie Visuelle",
        music: "Musique Thématique",
        mustTop: "Personnages Incontournables",
        allCharacters: "Univers Complet des Personnages",
        nowPlaying: "En Cours de Lecture",
        backToHome: "Retour à l'Univers"
    }
};

// Application State
let currentLanguage = localStorage.getItem('animeverse-language') || 'en';
let currentTheme = localStorage.getItem('animeverse-theme') || 'dark';
let filteredCharacters = [...charactersDatabase];
let currentCharacter = null;
let isProfileMusicPlaying = false;

// DOM Elements Cache
const elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize immediately without loading screen
    try {
        initializeApp();
        console.log('AnimeVerse Ultimate initialized successfully!');
    } catch (error) {
        console.error('Error initializing app:', error);
        // Fallback initialization
        setTimeout(initializeApp, 100);
    }
});

function initializeApp() {
    try {
        cacheElements();
        setupEventListeners();
        loadUserPreferences();
        renderCharacters();
        updateLanguage();
        addElectricEffects();
        hideLoadingScreen();
        showHomepage();
    } catch (error) {
        console.error('Error in initializeApp:', error);
    }
}

function cacheElements() {
    elements.loadingScreen = document.getElementById('loadingScreen');
    elements.homepage = document.getElementById('homepage');
    elements.characterPage = document.getElementById('characterPage');
    elements.profilePage = document.getElementById('profilePage');
    elements.searchInput = document.getElementById('searchInput');
    elements.clearSearch = document.getElementById('clearSearch');
    elements.languageSelect = document.getElementById('languageSelect');
    elements.themeToggle = document.getElementById('themeToggle');
    elements.profileBtn = document.getElementById('profileBtn');
    elements.backBtn = document.getElementById('backBtn');
    elements.profileBackBtn = document.getElementById('profileBackBtn');
    elements.priorityGrid = document.getElementById('priorityGrid');
    elements.charactersContainer = document.getElementById('charactersContainer');
    elements.characterHeroImage = document.getElementById('characterHeroImage');
    elements.characterName = document.getElementById('characterName');
    elements.characterAnime = document.getElementById('characterAnime');
    elements.characterDescription = document.getElementById('characterDescription');
    elements.songTitle = document.getElementById('songTitle');
    elements.quotesContainer = document.getElementById('quotesContainer');
    elements.galleryContainer = document.getElementById('galleryContainer');
    elements.playPauseBtn = document.getElementById('playPauseBtn');
    elements.volumeBtn = document.getElementById('volumeBtn');
    elements.profileMusicToggle = document.getElementById('profileMusicToggle');
    elements.imageModal = document.getElementById('imageModal');
    elements.modalImage = document.getElementById('modalImage');
    elements.closeImageModal = document.getElementById('closeImageModal');
}

function setupEventListeners() {
    try {
        // Search functionality
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', handleSearch);
        }
        if (elements.clearSearch) {
            elements.clearSearch.addEventListener('click', clearSearch);
        }
        
        // Navigation
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }
        if (elements.languageSelect) {
            elements.languageSelect.addEventListener('change', changeLanguage);
        }
        if (elements.profileBtn) {
            elements.profileBtn.addEventListener('click', showProfilePage);
        }
        if (elements.backBtn) {
            elements.backBtn.addEventListener('click', showHomepage);
        }
        if (elements.profileBackBtn) {
            elements.profileBackBtn.addEventListener('click', showHomepage);
        }
        
        // Music controls
        if (elements.playPauseBtn) {
            elements.playPauseBtn.addEventListener('click', toggleMusic);
        }
        if (elements.volumeBtn) {
            elements.volumeBtn.addEventListener('click', toggleVolume);
        }
        if (elements.profileMusicToggle) {
            elements.profileMusicToggle.addEventListener('click', toggleProfileMusic);
        }
        
        // Modal controls
        if (elements.closeImageModal) {
            elements.closeImageModal.addEventListener('click', closeImageModal);
        }
        if (elements.imageModal) {
            elements.imageModal.addEventListener('click', function(e) {
                if (e.target === elements.imageModal) {
                    closeImageModal();
                }
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);
        
        console.log('Event listeners set up successfully');
    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}

function loadUserPreferences() {
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    if (elements.languageSelect) {
        elements.languageSelect.value = currentLanguage;
    }
}

function hideLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.display = 'none';
    }
}

function handleSearch() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredCharacters = [...charactersDatabase];
    } else {
        filteredCharacters = charactersDatabase.filter(character => 
            character.name.toLowerCase().includes(searchTerm) ||
            character.anime.toLowerCase().includes(searchTerm) ||
            character.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderCharacters();
    if (elements.clearSearch) {
        elements.clearSearch.classList.toggle('hidden', searchTerm === '');
    }
}

function clearSearch() {
    if (elements.searchInput) {
        elements.searchInput.value = '';
    }
    filteredCharacters = [...charactersDatabase];
    renderCharacters();
    if (elements.clearSearch) {
        elements.clearSearch.classList.add('hidden');
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    localStorage.setItem('animeverse-theme', currentTheme);
    
    // Add theme transition effect
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

function changeLanguage() {
    currentLanguage = elements.languageSelect.value;
    localStorage.setItem('animeverse-language', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

function renderCharacters() {
    renderPriorityCharacters();
    renderAllCharacters();
}

function renderPriorityCharacters() {
    const priorityCharacters = filteredCharacters.filter(char => char.priority === 'must-top');
    if (elements.priorityGrid) {
        elements.priorityGrid.innerHTML = '';
        
        priorityCharacters.forEach(character => {
            const card = createCharacterCard(character, 'priority');
            elements.priorityGrid.appendChild(card);
        });
    }
}

function renderAllCharacters() {
    if (elements.charactersContainer) {
        elements.charactersContainer.innerHTML = '';
        
        filteredCharacters.forEach(character => {
            const card = createCharacterCard(character, 'standard');
            elements.charactersContainer.appendChild(card);
        });
    }
}

function createCharacterCard(character, type) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.setAttribute('data-character-id', character.id);
    
    const emojis = ['✨', '🎵', '⚡', '🌟', '💫'];
    const randomEmojis = emojis.sort(() => Math.random() - 0.5).slice(0, 3);
    
    card.innerHTML = `
        <div class="floating-emojis">
            ${randomEmojis.map(emoji => `<span>${emoji}</span>`).join('')}
        </div>
        <img src="${character.heroImage}" alt="${character.name}" class="character-image" loading="lazy" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmI0NmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7Y2hhcmFjdGVyLm5hbWV9PC90ZXh0Pjwvc3ZnPg=='">
        <div class="character-info">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-anime">${character.anime}</p>
            <p class="character-description">${character.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => showCharacterPage(character));
    
    // Add electric hover effect
    card.addEventListener('mouseenter', addCardElectricEffect);
    card.addEventListener('mouseleave', removeCardElectricEffect);
    
    return card;
}

function addCardElectricEffect(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Create electric spark effect
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'electric-spark';
            spark.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #00ffff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 0 10px #00ffff;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                animation: sparkFade 0.8s ease-out forwards;
            `;
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (document.body.contains(spark)) {
                    document.body.removeChild(spark);
                }
            }, 800);
        }, i * 100);
    }
}

function removeCardElectricEffect(event) {
    // Remove any existing sparks
    const sparks = document.querySelectorAll('.electric-spark');
    sparks.forEach(spark => {
        if (document.body.contains(spark)) {
            document.body.removeChild(spark);
        }
    });
}

function showHomepage() {
    hideAllPages();
    if (elements.homepage) {
        elements.homepage.classList.add('active-page');
    }
    currentCharacter = null;
    stopAllMusic();
}

function showCharacterPage(character) {
    hideAllPages();
    if (elements.characterPage) {
        elements.characterPage.classList.add('active-page');
    }
    currentCharacter = character;
    
    // Update character information
    if (elements.characterHeroImage) {
        elements.characterHeroImage.src = character.heroImage;
        elements.characterHeroImage.alt = character.name;
    }
    if (elements.characterName) {
        elements.characterName.textContent = character.name;
    }
    if (elements.characterAnime) {
        elements.characterAnime.textContent = character.anime;
    }
    if (elements.characterDescription) {
        elements.characterDescription.textContent = character.description;
    }
    if (elements.songTitle) {
        elements.songTitle.textContent = character.song;
    }
    
    // Render quotes with typing effect
    renderCharacterQuotes(character.quotes);
    
    // Render gallery
    renderCharacterGallery(character.galleryImages, character.name);
    
    // Add character-specific background effects
    addCharacterEffects(character.theme);
    
    stopAllMusic();
}

function renderCharacterQuotes(quotes) {
    if (elements.quotesContainer) {
        elements.quotesContainer.innerHTML = '';
        
        quotes.forEach((quote, index) => {
            const quoteElement = document.createElement('div');
            quoteElement.className = 'quote-item';
            quoteElement.textContent = quote;
            elements.quotesContainer.appendChild(quoteElement);
            
            // Add typing effect to first quote
            if (index === 0) {
                setTimeout(() => {
                    quoteElement.classList.add('typing-effect');
                }, 500);
            }
        });
    }
}

function renderCharacterGallery(images, characterName) {
    if (elements.galleryContainer) {
        elements.galleryContainer.innerHTML = '';
        
        images.forEach((imageUrl, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${characterName} - Image ${index + 1}`;
            img.loading = 'lazy';
            img.onerror = function() {
                this.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmI0NmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7Y2hhcmFjdGVyTmFtZX08L3RleHQ+PC9zdmc+`;
            };
            
            galleryItem.appendChild(img);
            elements.galleryContainer.appendChild(galleryItem);
            
            galleryItem.addEventListener('click', () => {
                openImageModal(imageUrl, `${characterName} - Image ${index + 1}`);
            });
        });
    }
}

function addCharacterEffects(theme) {
    const effects = document.createElement('div');
    effects.className = `character-effects ${theme}`;
    effects.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: -1;
    `;
    
    // Theme-specific effects
    switch(theme) {
        case 'shadow-monarch':
            effects.innerHTML = `
                <div style="position: absolute; width: 100%; height: 100%; background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.3), transparent);"></div>
            `;
            break;
        case 'angel-white':
            effects.innerHTML = `
                <div style="position: absolute; width: 100%; height: 100%; background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1), transparent);"></div>
            `;
            break;
        default:
            effects.innerHTML = `
                <div style="position: absolute; width: 100%; height: 100%; background: radial-gradient(ellipse at center, rgba(0, 255, 255, 0.2), transparent);"></div>
            `;
    }
    
    document.body.appendChild(effects);
    
    // Remove previous effects
    const oldEffects = document.querySelectorAll('.character-effects');
    oldEffects.forEach(effect => {
        if (effect !== effects) {
            document.body.removeChild(effect);
        }
    });
}

function showProfilePage() {
    hideAllPages();
    if (elements.profilePage) {
        elements.profilePage.classList.add('active-page');
    }
    currentCharacter = null;
    stopAllMusic();
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
}

function openImageModal(imageUrl, altText) {
    if (elements.modalImage && elements.imageModal) {
        elements.modalImage.src = imageUrl;
        elements.modalImage.alt = altText;
        elements.imageModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    if (elements.imageModal) {
        elements.imageModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function toggleMusic() {
    if (currentCharacter && elements.playPauseBtn) {
        const isPlaying = elements.playPauseBtn.textContent === '⏸️';
        elements.playPauseBtn.textContent = isPlaying ? '▶️' : '⏸️';
        
        // Simulate music playing (would connect to actual audio in real implementation)
        if (!isPlaying) {
            console.log(`Playing: ${currentCharacter.song}`);
            animateMusicVisualizer(true);
        } else {
            console.log('Music paused');
            animateMusicVisualizer(false);
        }
    }
}

function toggleVolume() {
    if (elements.volumeBtn) {
        const isMuted = elements.volumeBtn.textContent === '🔇';
        elements.volumeBtn.textContent = isMuted ? '🔊' : '🔇';
    }
}

function toggleProfileMusic() {
    isProfileMusicPlaying = !isProfileMusicPlaying;
    
    if (elements.profileMusicToggle) {
        if (isProfileMusicPlaying) {
            elements.profileMusicToggle.innerHTML = `
                <span class="music-icon">⏸️</span>
                <span class="music-text">Tower of God - Slump (Playing)</span>
                <div class="music-btn-glow"></div>
            `;
            console.log('Playing: Tower of God - Slump');
        } else {
            elements.profileMusicToggle.innerHTML = `
                <span class="music-icon">🎵</span>
                <span class="music-text">Tower of God - Slump</span>
                <div class="music-btn-glow"></div>
            `;
            console.log('Music stopped');
        }
    }
}

function animateMusicVisualizer(isPlaying) {
    const bars = document.querySelectorAll('.music-visualizer .bar');
    bars.forEach(bar => {
        if (isPlaying) {
            bar.style.animation = 'musicBar 1s ease-in-out infinite';
        } else {
            bar.style.animation = 'none';
        }
    });
}

function stopAllMusic() {
    if (elements.playPauseBtn) {
        elements.playPauseBtn.textContent = '▶️';
    }
    if (elements.volumeBtn) {
        elements.volumeBtn.textContent = '🔊';
    }
    animateMusicVisualizer(false);
}

function handleKeyboardShortcuts(event) {
    // ESC key
    if (event.key === 'Escape') {
        if (elements.imageModal && !elements.imageModal.classList.contains('hidden')) {
            closeImageModal();
        } else if (elements.homepage && !elements.homepage.classList.contains('active-page')) {
            showHomepage();
        }
    }
    
    // Ctrl/Cmd + K for search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        if (elements.searchInput) {
            elements.searchInput.focus();
        }
    }
    
    // Spacebar for music control
    if (event.code === 'Space' && currentCharacter && event.target.tagName !== 'INPUT') {
        event.preventDefault();
        toggleMusic();
    }
}

function addElectricEffects() {
    // Add CSS for spark animation
    const sparkStyles = document.createElement('style');
    sparkStyles.textContent = `
        @keyframes sparkFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(2); }
        }
        
        .electric-spark {
            animation: sparkFade 0.8s ease-out forwards;
        }
    `;
    document.head.appendChild(sparkStyles);
    
    // Add periodic lightning effects
    setInterval(createLightningEffect, 8000);
    
    // Add floating particles effect
    createFloatingParticles();
}

function createLightningEffect() {
    const lightning = document.createElement('div');
    lightning.style.cssText = `
        position: fixed;
        top: 0;
        left: ${Math.random() * 100}%;
        width: 2px;
        height: 100vh;
        background: linear-gradient(to bottom, #00ffff, transparent, #ff00ff, transparent);
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        animation: quickFlash 0.2s ease-in-out;
    `;
    
    const quickFlashKeyframes = `
        @keyframes quickFlash {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#quickFlashStyles')) {
        const quickFlashStyles = document.createElement('style');
        quickFlashStyles.id = 'quickFlashStyles';
        quickFlashStyles.textContent = quickFlashKeyframes;
        document.head.appendChild(quickFlashStyles);
    }
    
    document.body.appendChild(lightning);
    
    setTimeout(() => {
        if (document.body.contains(lightning)) {
            document.body.removeChild(lightning);
        }
    }, 200);
}

function createFloatingParticles() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${['#00ffff', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: ${Math.random() * 100}%;
                top: 100%;
                box-shadow: 0 0 10px currentColor;
                animation: floatUp 8s linear infinite;
            `;
            
            const floatUpKeyframes = `
                @keyframes floatUp {
                    0% { transform: translateY(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
            `;
            
            if (!document.querySelector('#floatUpStyles')) {
                const floatUpStyles = document.createElement('style');
                floatUpStyles.id = 'floatUpStyles';
                floatUpStyles.textContent = floatUpKeyframes;
                document.head.appendChild(floatUpStyles);
            }
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 8000);
        }, i * 2000);
    }
    
    // Repeat the cycle
    setTimeout(createFloatingParticles, 8000);
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', function(event) {
    console.error('Application error:', event.error);
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    // Clean up any intervals, timeouts, or event listeners
    document.querySelectorAll('.electric-spark, .character-effects').forEach(element => {
        if (document.body.contains(element)) {
            document.body.removeChild(element);
        }
    });
});