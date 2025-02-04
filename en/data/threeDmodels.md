---
layout: compose
permalink: /en/threeDmodels
composition:
- type: pageMarkdown
---
# 3D Specimen Viewer

Explore high-quality 3D models of various insect specimens. Use the drop-down menu below to select and view different models.

## Choose a Specimen to View

<label for="model-selector">**Specimens available:**</label>
<select id="model-selector" onchange="updateModel()">
    <option value="">---Select a model---</option>
    <option value="https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823">🐝 Hylaeus nigritus</option>
    <option value="https://biocommunication.org/filesystems/scans/Mosquito-cgj-20240211">🦟 Anopheles gambiae</option>
    <option value="https://biocommunication.org/filesystems/scans/Carabus-cgj-20230823">🪲 Carabus montivagus</option>
    <option value="https://biocommunication.org/filesystems/scans/Cicindela-cgj-20230823">🪲 Cicindela andriana</option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_15_Scaptodrosophila_deflexa.glb?v=1736026991">🪰 Scaptodrosophila deflexa</option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_16_Cave_beetle.glb?v=1736014842">🦗Anthroherpon cylindricolle thoracicum</option>
</select>

## 3D Model Viewer

<model-viewer id="dynamic-model-viewer"
              src=""
              shadow-intensity="1" 
              camera-controls="" 
              touch-action="none" 
              interaction-prompt-threshold="500" 
              auto-rotate="" 
              class="js-scan-viewer" 
              ar-status="not-presenting" 
              style="width: 100%; max-width: 100vw; height: 50vh; border: 1px solid #ccc; background-color: #fff;">
</model-viewer>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

*If the model is not showing in the window, you may need to add a CORS origin extension on your browser (Chrome, Edge, Firefox, etc.).*

---

## Specimen Details

Below are the details of the currently selected specimen

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ The details currently displayed are an example, these are not the corresponding data, except for the source of the model.
</div>

- **Scientific Name:** <span id="scientificName"></span>
- **Catalog Number:** <span id="catalogNumber"></span>
- **Dataset Name:** <span id="datasetName"></span>
- **Recorded By:** <span id="recordedBy"></span>
- **Year:** <span id="year"></span>
- **Country Code:** <span id="countryCode"></span>
- **SwissNatColl Occurrence Page:** [View on SwissNatColl Data](/occurrence/search?entity=3777522425)
- **GBIF Occurrence Page:** [<span id="gbifLink">View on GBIF</span>](#)
- **Source of the model:** [Insects360 - Biocomm Research Group](https://biocommunication.org/en/insects360/3d-scans/hylaeus-nigritus/)

<script>
function getModelNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('model');
}

function updateModel() {
    const modelSelector = document.getElementById('model-selector');
    const selectedModel = modelSelector.value;
    if (selectedModel) {
        const newUrl = `${window.location.pathname}?model=${selectedModel}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        const modelViewer = document.getElementById('dynamic-model-viewer');
        const modelSrc = `${selectedModel}.gltf`;
        modelViewer.setAttribute('src', modelSrc);
    }
}

function fetchModelData() {
    const apiUrl = 'https://api.gbif.org/v1/occurrence/3777522425/fragment';
    const gbifBaseUrl = 'https://www.gbif.org/en/occurrence/';

    const occurrenceId = apiUrl.split('/')[5];
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('scientificName').textContent = data.scientificName;
            document.getElementById('catalogNumber').textContent = data.catalogNumber;
            document.getElementById('datasetName').textContent = data.datasetName;
            document.getElementById('recordedBy').textContent = data.recordedBy;
            document.getElementById('year').textContent = data.year;
            document.getElementById('countryCode').textContent = data.countryCode;
            document.getElementById('gbifLink').href = `${gbifBaseUrl}${occurrenceId}`;
        })
        .catch(error => console.error('Error fetching model data:', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modelName = getModelNameFromURL();
    if (modelName) {
        const modelViewer = document.getElementById('dynamic-model-viewer');
        const modelSrc = `${modelName}.gltf`;
        modelViewer.setAttribute('src', modelSrc);
        document.getElementById('model-selector').value = modelName;
    }
    fetchModelData();
});
</script>
