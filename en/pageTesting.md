---
layout: compose
permalink: /pageTesting
background: "{{ site.data.images.puccinia‎.src }}"
imageLicense: "{{ site.data.images.puccinia‎.caption }}"
title: How to publish data - Data Aggregator
description: For Swiss Natural History institutions
height: 50vh
composition:
- type: pageMarkdown
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Popup Example</title>
</head>

# Upload my data

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;">1. Go to the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/){:target="_blank"}. <br><br>- You can change the language of the website on the top right corner of the window (Available languages: English, Français, Deutsch).
  </div>
  <div style="flex: 1;">
    <p style="float: right; margin-left: 10px;">
      <img src="https://raw.githubusercontent.com/gbif/hp-svnhc/master/assets/images/inline_Illustrations/DataAggr-languages.png" alt="DA-languages" width="100">
    </p>
  </div>
</div>

  
1. Go to the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/){:target="_blank"}.
  - You can <button id="openPopup">change the language</button> of the website on the top right corner of the window (Available languages: English, Français, Deutsch). At the moment, only Englisch and Deutsch are available.

<div id="popup" class="popup">
    <span id="closePopup" class="close">&times;</span>
    <div class="content">
        <!-- Replace the source with your GIF or video URL -->
        <img src="https://github.com/gbif/hp-svnhc/blob/master/assets/gif/20240807_LanguagesChange.gif" alt="GIF" id="gif" style="display: block;">
        <video id="video" style="display: none;" width="320" height="240" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Your browser does not support the video tag.
        </video>
    </div>
</div>
<script src="script.js"></script>

2. Click on **Collections** on the left side of the window.
  - On this page, you can see all the collections that have already been uploaded in the Data Aggregator. The name of the collections are based on the [GrSciColl collection names](https://scientific-collections.gbif.org/collection/search){:target="_blank"}.
  - You can order the collection list by clicking on the columns titel (e.g. Name, Code, Progress, Records count / est. and Updated At). By clicking twice or more, you can order it in an ascending or descending order
  1. If you want to update an existing collection, go directly to step 4.
  2. If you want to create a new collection that is not yet on this page, go to the next step.

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
