---
layout: compose
permalink: /en/threeDmodels
composition:
- type: pageMarkdown
---
# 3D Specimen Viewer

Explore high-quality 3D models of various insect specimens. Use the drop-down menu below to select and view different models.

## Choose a Specimen to View

<label for="model-selector"><strong>Specimens available:</strong></label>
<select id="model-selector" onchange="updateModel()">
    <option value="">---Select a model---</option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_16_Cave_beetle.glb?v=1736014842">🪲 <em>Anthroherpon cylindricolle thoracicum</em></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_FK_17_Temnorhinus_strabus_20241115.glb?v=1736014250">🪲 <i>Temnorhinus strabus</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_CF_23_V2_Scarabaeus_sacera_20241223.glb?v=1736009564">🪲 <i>Scarabaeus sacer</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_14_Taurhina_longiceps_20241107.glb?v=1731354432">🪲 <i>Taurhina longiceps</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_CF_07_Agrilus_pianipennis_20240709.glb?v=1731351398">🪲 <i>Agrilus planipennis</i></option>
    <option value="https://biocommunication.org/filesystems/scans/Carabus-cgj-20230823.gltf?v=1697467520">🪲 <i>Carabus montivagus</i></option>
    <option value="https://biocommunication.org/filesystems/scans/Cicindela-cgj-20230823.gltf?v=1697467519">🪲 <i>Cicindela andriana</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_11_Omophron_obliteratum_utense20241029.glb?v=1731353967">🪲 <i>Omophron obliteratum</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_10_Gnathocera_flavovirens_20241029.glb?v=1731354819">🪲 <i>Gnathocera flavovirens</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_FK_25_Macroglossum_stellatarum_20241115.glb?v=1736011723">🦋 <i>Macroglossum stellatarum</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_SB_18_Cupido_argiades.glb?v=1736011093">🦋 <i>Cupido argiades</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_22_Synanthedon_culiciformis_20241223.glb?v=1736009168">🦋 <i>Synanthedon culiciformis</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_AS_27_Tortricidae_Phaloniinae.glb?v=1736008455">🦋 <i>Agapeta zoegana</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_15_Scaptodrosophila_deflexa.glb?v=1736026991">🪰 <i>Scaptodrosophila deflexa</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_FK_21_Temnostoma_vespiforme.glb?v=1736013948">🪰 <i>Temnostoma vespiforme</i></option>
    <option value="https://biocommunication.org/filesystems/scans/Mosquito-cgj-20240211.gltf?v=1704981158">🦟 <i>Aedes aegypti</i></option>
    <option value="https://biocommunication.org/filesystems/scans/Muse%CC%81e-dhistoire-post-naturelle_CF_CF_08_Anopheles_20241008.glb?v=1731355350">🦟 _Anopheles stephensi_</option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_12_Tephritis_mariannae_20241106.glb?v=1731354336">🪰 <i>Tephritis mariannae</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_CF_05_Hermetia_Larva_20240309.glb?v=1731352127">🪰 <i>Hermetia illucens, larva</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_CF_06_Hermetia_20241030.glb?v=1731353334">🪰 <i>Hermetia illucens, adult</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_SB_13_Tipula_saginata_20241101.glb?v=1736878979">🦟 <i>Tipula saginata</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_CF_CF_08_Chrysis_splendidula_20241224.glb?v=1736010409">🐝 <i>Chrysis splendidula</i></option>
    <option value="https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf?v=1697467521">🐝 <i>Hylaeus nigritus</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_26_Coenagrion_hastulatum_20241223.glb?v=1736010013">🦗 <i>Coenagrion hastulatum</i></option>
    <option value="https://biocommunication.org/filesystems/scans/AGORA_FK_FK_24_Epacromius_tergestinus_20241203.glb?v=1736013276">🦗 <i>Epacromius tergestinus</i></option>
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
