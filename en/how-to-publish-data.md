---
layout: documentation
permalink: /en/how-to-publish-data
title: How to publish data - Data Aggregator
description: For Swiss Natural History institutions
sideNavigation: sideNavigation.tutorials
toc: true
---
# How to publish data - Data Aggregator
In order to publish your dataset/collection on the SVNHC portal, you need to first prepare a tsv file (Comma-separated values file) with your data (see [Prepare my data](#prepare-my-data) here below). After this important step, you are ready to upload your data in the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/){:target="_blank"} (see [upload my data](#upload-my-data) here below). Then, when done with the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset/collection is ready to be [validated](#validate-my-data) and [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SVNHC portal, in the [Occurrence data section](https://svnhc.hp.gbif-staging.org/occurrence/search){:target="_blank"}.

# Checklist -to do before starting the Data Aggregator
✅ My institution is **registered on [GrSciColl](https://scientific-collections.gbif.org/institution/search){:target="_blank"}**.

> Example: [Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

✅ My institution has **at least one collection registered on [GrSciColl](https://scientific-collections.gbif.org/collection/search){:target="_blank"}**.

> Example: [Herbarium - General collection](https://scientific-collections.gbif.org/collection/836af357-06e8-4a4f-9511-c3d33155f2b5){:target="_blank"}

✅ My dataset has all **mandatory fields** (attributes) to ensure [minimal encoding](https://svnhc.hp.gbif-staging.org/en/data-aggregator#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"} on the Data Aggregator
- scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
- catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

✅ My ready-for-upload dataset file is an **UTF-8 encoded TSV file** with **Darwin Core standardised columns and cell content**. --> [I need help with that](https://svnhc.hp.gbif-staging.org/en/data-aggregator#but-my-databasedataset-is-not-formatted-in-darwin-core-do-i-have-to-change-everything){:target="_blank"}

# Prepare my data
Please check out our [FAQs](https://svnhc.hp.gbif-staging.org/en/data-aggregator/#faqs){:target="_blank"} on how to prepare your dataset/collection for the upload in the Data Aggregator.

<div style="text-align: center; margin-top: 50px; border: 1px solid #ccc; padding: 20px;">
  <p><u>What you are expected to have at the end of this step:</u></p>
  <p>✅ 1 TSV file (.tsv) with your data arranged as <strong>one line = one occurrence/specimen</strong>, <strong>one column = one attribute</strong>, and <strong>no empty lines</strong></p>
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tr>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:catalogNumber" target="_blank">catalogNumber</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:scientificName" target="_blank">scientificName</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:eventDate" target="_blank">...</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:eventDate" target="_blank">stateProvince</a></th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">Geneve</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
     <td style="border: 1px solid black; padding: 5px;">Vaud</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-9999999</td>
    <td style="border: 1px solid black; padding: 5px;"><i>Serratula tinctoria</i> L. subsp. <i>tinctoria</i></td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">Ticino</td>
  </tr>

  </table> <p> ⚠️ empty cells are tolerated, but if possible, please fill them out with "n.a." ⚠️</p>
</div>

# Upload my data
1. Go to the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/){:target="_blank"}.
  - You can change the language of the website on the top right corner of the window (Available languages: English, Français, Deutsch).
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

## Map my data
The mappings window (Step 2 of 3) has two parts:
  - Required attributes: mandatory attributes that have to be mapped in order to go to the next step. At the moment, only two attributes are mandatory in the Data Aggregator (scientificName and catalogNumber).
  - Additional columns: the other attributes present in your dataset. The number depends on the number of columns in your imported file.

6. For the Required attributes, select in the drop-down menu **Filter columns...** the corresponding field in your imported file of each required attribute.
  - By typing the beginning of your field names, you can find them more easily.
  - If unsure of the correspondence between the attributes and your field names, consult this [page](https://svnhc.hp.gbif-staging.org/en/data-aggregator/#where-can-i-find-the-darwin-core-terms-description).
7. For the Additional columns, either click on **+ Add all** or on the attribute names (with grey background) to map your fields with the additional attributes.
  - The added attributes appear at the bottom of the Mappings window.
  1. Repeat these steps until all of the fields you want to import are mapped.
    - Not all of your fields may be mandatory for GBIF. Find [here](https://svnhc.hp.gbif-staging.org/en/data-aggregator/#which-fields-are-requiredmandatory-optional-and-not-needed) a list with the required and optional fields guaranteeing the highest data quality.
  2. When satisfied with your mapping, click on **Update mapping**

8. (Step 3 of 3) The last step is a summary window on which you can check your file name and size, creation date, the number of rows, and the mapped and unmapped fields.
  1. When satisfied, click on **Run import**.
    - The window displayed is now the Imports tab, where you can see all your imports for a given collection at all times as well as the original imported files for each import.
    - A progression bar appears during the import process and disappears when finished.
    - If the import worked, the State is **✅ Imported**
9. Click on **Records** to see your imported records.
        
<div style="text-align: center; margin-top: 50px; border: 1px solid #ccc; padding: 20px;">
  <p>What you are expected to have at the end of this step:</p>
  <p>✅ A certain amount of imported records shown in the <strong>Records</strong> tab of your collection page. If it was your first import in this collection, then the <strong>Not encoded</strong> percentage is 100%.</p>
</div>

# Encode my data
Click on **Encode**

# Validate my data
Click on **Publish**

# Publish my data
Clic on **Publish**
