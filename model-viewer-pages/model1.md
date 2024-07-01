---
layout: default
---

<!-- Inclusion of the model-viewer library -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<!-- Model Viewer Component -->
<model-viewer src="https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf"
              shadow-intensity="1" 
              camera-controls="" 
              touch-action="none" 
              interaction-prompt-threshold="500" 
              auto-rotate="" 
              class="js-scan-viewer" 
              ar-status="not-presenting" 
              style="width: 100%; max-width: 100vw; height: 100hv; border: 1px solid #ccc; background-color: #fff;"></model-viewer>

<script>
function getFileNameFromSrc(src) {
    const parts = src.split('/');
    const fileName = parts[parts.length - 1].split('.')[0];
    return fileName;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modelViewer = document.querySelector('model-viewer');
    const src = modelViewer.getAttribute('src');
    const fileName = getFileNameFromSrc(src);

    // Assuming your base URL is something like https://example.com/page/
    const baseUrl = window.location.origin + window.location.pathname;
    const newUrl = `${baseUrl}?model=${fileName}`;

    window.history.replaceState(null, null, newUrl);
});
</script>
