const prophetNames = [
    "Adam", "Idris", "Nuh", "Hud", "Saleh", "Ibrahim", "Lut", "Ismail", 
    "Ishaq", "Yaqub", "Yusuf", "Shu'aib", "Ayyub", "Dhul-Kifl", "Musa", 
    "Harun", "Dawud", "Sulaiman", "Ilyas", "Alyasa", "Yunus", "Zakariya", 
    "Yahya", "Isa", "Muhammad"
];

const prophetsGrid = document.getElementById('prophetsGrid');
const searchInput = document.querySelector('.search-input');
const brand = document.querySelector('.brand');

function createProphetButton(name) {
    const button = document.createElement('button');
    button.classList.add('prophet-btn');
    button.textContent = name;
    button.addEventListener('click', () => {
        showProphetDetails(name);
    });
    return button;
}

function showProphetDetails(name) {
    alert(`Detail Nabi ${name}`);
}

function renderProphets(names) {
    prophetsGrid.innerHTML = '';
    names.forEach(name => {
        const prophetButton = createProphetButton(name);
        prophetsGrid.appendChild(prophetButton);
    });
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProphets = prophetNames.filter(name => 
        name.toLowerCase().includes(searchTerm)
    );
    renderProphets(filteredProphets);
});

// Initial render
renderProphets(prophetNames);

function navigateHome() {
    window.location.href = '../isihtml/index.html';
}

// Fungsi untuk navigasi ke halaman Profile
function navigateProfile() {
    window.location.href = '../beranda/profile.html';
}