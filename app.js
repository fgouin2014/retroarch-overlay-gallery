document.addEventListener('DOMContentLoaded', () => {
    const galleryList = document.getElementById('gallery-list');
    const searchInput = document.getElementById('overlay-search');
    const deviceFrame = document.getElementById('device-frame');
    const overlayImg = document.getElementById('overlay-img');
    const cfgDisplay = document.getElementById('cfg-display');
    const currentName = document.getElementById('current-name');

    const modeSelect = document.getElementById('mode-select');
    const inputZoom = document.getElementById('input-zoom');
    const inputOffset = document.getElementById('input-offset');
    const zoomVal = document.getElementById('zoom-val');
    const offsetVal = document.getElementById('offset-val');
    const btnReset = document.getElementById('reset-adjustments');

    let activeModeIndex = 0;
    let allOverlays = [];
    let activeOverlay = null;

    // Manual adjustments state
    let adjustments = {
        zoom: 100,
        offset: 0
    };

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

        // Adjustments section toggle
        const adjToggle = document.getElementById('adjustments-toggle');
        const adjSection = document.querySelector('.adjustments-section');
        if (adjToggle && adjSection) {
            adjToggle.addEventListener('click', () => {
                adjSection.classList.toggle('collapsed');
            });
        }

        // Adjustment listeners
        inputZoom.addEventListener('input', (e) => {
            adjustments.zoom = parseInt(e.target.value);
            zoomVal.textContent = adjustments.zoom;
            saveAdjustments();
            updatePreview();
        });

        inputOffset.addEventListener('input', (e) => {
            adjustments.offset = parseInt(e.target.value);
            offsetVal.textContent = adjustments.offset;
            saveAdjustments();
            updatePreview();
        });

        btnReset.addEventListener('click', () => {
            adjustments.zoom = 100;
            adjustments.offset = 0;
            updateUIControls();
            saveAdjustments();
            updatePreview();
        });
    }

    function saveAdjustments() {
        if (!activeOverlay) return;
        const key = `adj_${activeOverlay.path}`;
        localStorage.setItem(key, JSON.stringify(adjustments));
    }

    function loadAdjustments() {
        if (!activeOverlay) return;
        const key = `adj_${activeOverlay.path}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            adjustments = JSON.parse(saved);
        } else {
            adjustments = { zoom: 100, offset: 0 };
        }
        updateUIControls();
    }

    function updateUIControls() {
        inputZoom.value = adjustments.zoom;
        zoomVal.textContent = adjustments.zoom;
        inputOffset.value = adjustments.offset;
        offsetVal.textContent = adjustments.offset;
    }

    function renderGallery(items) {
        galleryList.innerHTML = '';

        // Group by category
        const groups = {};
        items.forEach(item => {
            const cat = item.category || 'Standard';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(item);
        });

        // Sort categories (Standard first, then Extras)
        const sortedCats = Object.keys(groups).sort((a, b) => {
            if (a === 'Standard') return -1;
            if (b === 'Standard') return 1;
            return a.localeCompare(b);
        });

        sortedCats.forEach(cat => {
            // Category header
            const header = document.createElement('div');
            header.className = 'gallery-category';
            header.textContent = cat;
            galleryList.appendChild(header);

            groups[cat].forEach(item => {
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
        });
    }

    async function selectOverlay(item) {
        activeOverlay = item;
        currentName.textContent = item.name;
        activeModeIndex = 0; // Reset to first mode

        loadAdjustments();

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
            // Reset aspect ratio to let CSS classes take over
            deviceFrame.style.aspectRatio = '';
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

            // Apply manual adjustments (Zoom & Position)
            // Combined with viewport if it exists, or base defaults
            const currentScale = adjustments.zoom / 100;
            const currentOffset = adjustments.offset;

            // If we have viewport, we modify it with adjustments
            if (gameBg.style.top) {
                // Adjusting a viewport-defined position
                const baseTop = parseFloat(gameBg.style.top);
                const baseHeight = parseFloat(gameBg.style.height);

                gameBg.style.height = `${baseHeight * currentScale}%`;
                gameBg.style.width = `${parseFloat(gameBg.style.width) * currentScale}%`;
                gameBg.style.top = `${baseTop + currentOffset}%`;
            } else {
                // Adjusting the CSS-default position
                // For portrait, CSS says top: 2%, width: 95%, height: 75%
                // For landscape, CSS says top: 50%, left: 50%, width: 90%
                if (orientation === 'portrait') {
                    gameBg.style.top = `${2 + currentOffset}%`;
                    gameBg.style.height = `${75 * currentScale}%`;
                    gameBg.style.width = `${95 * currentScale}%`;
                } else {
                    gameBg.style.top = `${50 + currentOffset}%`;
                    gameBg.style.height = `${90 * currentScale}%`;
                    gameBg.style.width = `${90 * currentScale}%`;
                }
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
