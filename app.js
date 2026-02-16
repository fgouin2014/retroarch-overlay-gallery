document.addEventListener('DOMContentLoaded', () => {
    const galleryList = document.getElementById('gallery-list');
    const searchInput = document.getElementById('overlay-search');
    const btnPortrait = document.getElementById('btn-portrait');
    const btnLandscape = document.getElementById('btn-landscape');
    const deviceFrame = document.getElementById('device-frame');
    const overlayImg = document.getElementById('overlay-img');
    const cfgDisplay = document.getElementById('cfg-display');
    const currentName = document.getElementById('current-name');

    let allOverlays = [];
    let activeOverlay = null;
    let orientation = 'portrait';

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

        // Update selection in UI
        document.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.toggle('active', el.querySelector('h4').textContent === item.name);
        });

        // Use embedded CFG content to avoid CORS errors locally
        cfgDisplay.textContent = item.content || 'Aucune donnée disponible dans ce fichier .cfg';

        updatePreview();
    }

    function updatePreview() {
        if (!activeOverlay) return;

        const imgName = orientation === 'portrait' ? activeOverlay.portrait : activeOverlay.landscape;

        if (imgName) {
            // Find the directory of the .cfg to resolve relative image path
            const cfgDir = activeOverlay.path.substring(0, activeOverlay.path.lastIndexOf('/'));
            const fullPath = cfgDir ? `${cfgDir}/${imgName}` : imgName;

            overlayImg.src = fullPath;
            overlayImg.style.display = 'block';
        } else {
            overlayImg.style.display = 'none';
        }

        deviceFrame.className = `device-frame ${orientation}`;
        btnPortrait.classList.toggle('active', orientation === 'portrait');
        btnLandscape.classList.toggle('active', orientation === 'landscape');
    }

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allOverlays.filter(o =>
            o.name.toLowerCase().includes(term) ||
            o.path.toLowerCase().includes(term)
        );
        renderGallery(filtered);
    });

    btnPortrait.addEventListener('click', () => {
        orientation = 'portrait';
        updatePreview();
    });

    btnLandscape.addEventListener('click', () => {
        orientation = 'landscape';
        updatePreview();
    });

    init();
});
