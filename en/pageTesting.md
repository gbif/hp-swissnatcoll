---
layout: documentation
permalink: /pageTesting
background: "{{ site.data.images.puccinia‎.src }}"
imageLicense: "{{ site.data.images.puccinia‎.caption }}"
title: How to publish data - Data Aggregator
description: For Swiss Natural History institutions
height: 50vh
---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
    <title>How to publish data - Data Aggregator</title>
</head>

<body>

    <header>
        <h1>How to publish data - Data Aggregator</h1>
        <p>For Swiss Natural History institutions</p>
    </header>

    <section id="upload-data">
        <h2>Upload my data</h2>
        <ol>
            <li>
                Go to the <a href="https://staging.aggregator.scnat.zebbra.ch/" target="_blank">Data Aggregator website</a>.
                <ul>
                    <li>
                        You can 
                        <button id="openPopup" style="border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
                            onmouseover="this.style.color='#FA5E97';"
                            onmouseout="this.style.color='#333';">
                            change the language
                        </button> 
                        of the website on the top right corner of the window (Available languages: English, Français, Deutsch). At the moment, only English and Deutsch are available.
                    </li>
                </ul>
            </li>
            <li>
                Click on <strong>Collections</strong> on the left side of the window.
                <ul>
                    <li>
                        On this page, you can see all the collections that have already been uploaded in the Data Aggregator. The names of the collections are based on the <a href="https://scientific-collections.gbif.org/collection/search" target="_blank">GrSciColl collection names</a>.
                    </li>
                    <li>
                        You can order the collection list by clicking on the column titles (e.g. Name, Code, Progress, Records count/est., and Updated At). By clicking twice or more, you can order it in an ascending or descending order.
                    </li>
                    <li>If you want to update an existing collection, go directly to step 4.</li>
                    <li>If you want to create a new collection that is not yet on this page, go to the next step.</li>
                </ul>
            </li>
        </ol>
    </section>

    <!-- Popup Structure -->
    <div id="popup" class="popup">
        <span id="closePopup" class="close">&times;</span>
        <div class="content">
            <!-- Replace the source with your GIF URL -->
            <img src="/assets/gif/20240807_LanguagesChange.gif" alt="Language Change GIF" id="gif" style="display: block;">
        </div>
    </div>

    <script src="script.js"></script> <!-- Link to your JavaScript file -->

</body>

</html>

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.popup {
    display: none; /* Hidden by default */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;
    z-index: 1000;
}

.popup .content {
    padding: 20px;
    text-align: center;
}

.close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
    color: #333;
}

document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    // Show popup on button click
    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    // Hide popup on close button click
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Optional: Close popup when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


3. Click on **New collection** on the right side of the window.
  1. Select the type of your data. ⚠️**Mandatory**⚠️
    - Available types: Zoology, Botany, Geology, Paleontology
  2. Select the corresponding GrSciColl Collection of your institution. ⚠️**Mandatory**⚠️
    - If the GrSciColl collection has already been used in another upload, it is not present anymore on the drop-down list of this window. You can find it on the Collections page (see step 2.).
    - You can filter the suggested collections by writing your institution code (e.g. G, BERN, NMLU, etc.). This reduces the suggested list to only your registered collections.
  3. Add a description of the collection. 💡optional💡
  4. Click on **Create collection**
    - If not ordered (see step 2., second sublist item), your newly created collection is added at the end of the list. If you want to find it quickly, you may click on the column titel **Updated at** and order it in a descending order (Newest to Latest).

4. Click on the collection name.
  - For each collection on the Data Aggregator, you have 4 tabs which will be used through the whole process (Records, Imports, Exports, Publications, and Approvals)
  1. If your collection is empty, click either on the **+ Import** button in the center of the page, or the **Import dataset** button in the top-right corner (it does the same thing at this point).
  2. If your collection already has records and you want to add new records or update the existing ones, click on the **Import dataset** button in the top-right corner.

--- A three-steps window has opened. ---

5. (Step 1 of 3) Click on **Choose a file** to select your prepared TSV file or drag and drop it if you have a folder window opened on your screen.
  1. Wait until the purple line is full.
  2. Click on **Upload file**
