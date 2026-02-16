document.addEventListener('DOMContentLoaded', () => {
    const galleryList = document.getElementById('gallery-list');
    const searchInput = document.getElementById('overlay-search');
    const deviceFrame = document.getElementById('device-frame');
    const overlayImg = document.getElementById('overlay-img');
    const cfgDisplay = document.getElementById('cfg-display');
    const currentName = document.getElementById('current-name');

    const modeSelect = document.getElementById('mode-select');
    let activeModeIndex = 0;

    let allOverlays = [];
    let activeOverlay = null;

    async function init() {
        if (typeof OVERLAY_MANIFEST !== 'undefined') {
            allOverlays = OVERLAY_MANIFEST;
            renderGallery(allOverlays);
            if (allOverlays.length > 0) {
                selectOverlay(allOverlays[0]);
            }
        } else {
            galleryList.innerHTML = '<p class="error">Variable OVERLAY_MANIFEST non trouvée. Avez-vous lancé scan.py ?</p>';
        }

        // Add dropdown change listener
        modeSelect.addEventListener('change', (e) => {
            activeModeIndex = parseInt(e.target.value);
            updatePreview();
        });

        // About section toggle
        const aboutToggle = document.getElementById('about-toggle');
        const aboutSection = document.querySelector('.about-section');
        if (aboutToggle && aboutSection) {
            aboutToggle.addEventListener('click', () => {
                aboutSection.classList.toggle('collapsed');
            });
        }
    }

    function renderGallery(items) {
        galleryList.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            if (activeOverlay && activeOverlay.path === item.path) div.classList.add('active');

            div.innerHTML = `
                <h4>${item.name}</h4>
                <span>${item.path.split('/').pop()}</span>
            `;

            div.addEventListener('click', () => selectOverlay(item));
            galleryList.appendChild(div);
        });
    }

    async function selectOverlay(item) {
        activeOverlay = item;
        currentName.textContent = item.name;
        activeModeIndex = 0; // Reset to first mode

        // Update selection in UI
        document.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.toggle('active', el.querySelector('h4').textContent === item.name);
        });

        // Populate dropdown
        modeSelect.innerHTML = '';
        item.modes.forEach((mode, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = mode.name;
            modeSelect.appendChild(option);
        });
        modeSelect.value = 0;

        // Use embedded CFG content
        cfgDisplay.textContent = item.content || 'Aucune donnée disponible dans ce fichier .cfg';

        updatePreview();
    }

    function updatePreview() {
        if (!activeOverlay || !activeOverlay.modes[activeModeIndex]) return;

        const mode = activeOverlay.modes[activeModeIndex];
        const imgPath = mode.image;
        const orientation = mode.orientation || 'landscape';

        // Ensure visibility and correct source
        if (imgPath) {
            overlayImg.src = imgPath;
            overlayImg.style.visibility = 'visible';
            overlayImg.style.opacity = '1';
        } else {
            overlayImg.style.visibility = 'hidden';
        }

        const gameBg = document.querySelector('.game-bg');
        if (gameBg) {
            if (mode.viewport && mode.viewport.x !== null && mode.viewport.y !== null) {
                // Apply manual viewport
                gameBg.style.left = `${mode.viewport.x * 100}%`;
                gameBg.style.top = `${mode.viewport.y * 100}%`;
                gameBg.style.width = mode.viewport.w !== null ? `${mode.viewport.w * 100}%` : '80%';
                gameBg.style.height = mode.viewport.h !== null ? `${mode.viewport.h * 100}%` : '40%';
                gameBg.style.transform = 'translate(-50%, -50%)'; // Reset transform if needed
            } else {
                // Clear manual styles to let CSS classes take over
                gameBg.style.left = '';
                gameBg.style.top = '';
                gameBg.style.width = '';
                gameBg.style.height = '';
                gameBg.style.transform = '';
            }
        }

        deviceFrame.className = `device-frame ${orientation}`;
    }

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allOverlays.filter(o =>
            o.name.toLowerCase().includes(term) ||
            o.path.toLowerCase().includes(term)
        );
        renderGallery(filtered);
    });

    init();
});
