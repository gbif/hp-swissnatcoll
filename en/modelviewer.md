---
layout: compose
title: Model Viewer
description: Interactive 3D models
background: /assets/images/placeholders/hylaeus_nigritus_20230714.png
imageLicense: |
  © 2023 The Biocommunication Group - ETH Zurich
height: 50vh
composition:
- type: heroImage
- type: floatingText
  data: floatingText.3Dinsects
- type: pageMarkdown
---

# Infos on model viewer

Insects360 is a collaborative project developed by the Biocommunication Group, the Entomological Collection of ETH Zurich, and the SimplyScience Foundation. Its mission is to raise awareness and promote understanding of insects and their role in the world through the use of 3D models and captivating scientific narratives created by experts in the entomological field.

In addition to its informative content, Insects360 offers educational resources in German specifically tailored for Swiss schools. The website believes that knowledge is a key driver in fostering appreciation for these incredible creatures and their vital role in the world.

Insects360 invites visitors on an educational journey to explore the realm of insects, unlocking their secrets and showcasing their beauty in ways that inspire curiosity and admiration.

The website is expanding, and over the next two years, it will introduce new topics, each offering a unique perspective on insects. Visitors can register via the contact form to be informed as soon as new content is available.

published on: 7/13/2023  
written by: Christian Felsner  
Source: [BIOCOMM Research Group](https://biocommunication.org/en/insects360/3d-scans/)

<!-- Drop-down menu to select the model -->
<label for="model-selector">Choose a model:</label>
<select id="model-selector" onchange="updateModel()">
    <option value="">Select a model</option>
    <option value="model1">Model 1</option>
    <option value="model2">Model 2</option>
    <option value="model3">Model 3</option>
    <!-- Add more options as needed -->
</select>

<!-- Display extracted data -->
<div id="model-data">
    <p><strong>Scientific Name:</strong> <span id="scientificName"></span></p>
    <p><strong>Catalog Number:</strong> <span id="catalogNumber"></span></p>
    <p><strong>Dataset Name:</strong> <span id="datasetName"></span></p>
    <p><strong>Recorded By:</strong> <span id="recordedBy"></span></p>
    <p><strong>Year:</strong> <span id="year"></span></p>
    <p><strong>Country Code:</strong> <span id="countryCode"></span></p>
</div>

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
              style="width: 100%; max-width: 100vw; height: 50vh; border: 1px solid #ccc; background-color: #fff;"></model-viewer>
_If the model is not showing in the window, you may need to add a CORS origin extension on your navigator (Chrome, Edge, Firefox, etc..)._

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
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('scientificName').textContent = data.scientificName;
            document.getElementById('catalogNumber').textContent = data.catalogNumber;
            document.getElementById('datasetName').textContent = data.datasetName;
            document.getElementById('recordedBy').textContent = data.recordedBy;
            document.getElementById('year').textContent = data.year;
            document.getElementById('countryCode').textContent = data.countryCode;
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
