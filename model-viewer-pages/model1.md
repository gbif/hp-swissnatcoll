---
layout: default
---

<!-- Inclusion of the model-viewer library -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<!-- Model Viewer Component -->
<model-viewer id="dynamic-model-viewer"
              src=""
              shadow-intensity="1" 
              camera-controls="" 
              touch-action="none" 
              interaction-prompt-threshold="500" 
              auto-rotate="" 
              class="js-scan-viewer" 
              ar-status="not-presenting" 
              style="width: 100%; max-width: 100vw; height: 95vh; border: 1px solid #ccc; background-color: #fff;"></model-viewer>

<script>
function getModelNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('model');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modelName = getModelNameFromURL();
    if (modelName) {
        const modelViewer = document.getElementById('dynamic-model-viewer');
        const modelSrc = `${modelName}.gltf`;
        modelViewer.setAttribute('src', modelSrc);
    }
});
</script>
