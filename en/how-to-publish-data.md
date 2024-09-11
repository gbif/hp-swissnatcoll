---
layout: documentation
permalink: /en/how-to-publish-data
title: How to publish data with the Data Aggregator
description: For Swiss Natural History institutions
sideNavigation: sideNavigation.tutorials
toc: true
---
# How to publish data with the Data Aggregator
In order to publish your dataset/collection on [GBIF.org](https://www.gbif.org/){:target="_blank"} and have it displayed on the SwissNatColl portal, you need to first prepare a file with your data (see [Prepare my data](#prepare-my-data) here below). After this important step, you are ready to [log in](#log-in) and [upload your data](#upload-my-data) in the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/sign-in){:target="_blank"}. Then, when done with the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset/collection is ready to be [sent for validation](#approve-my-data) to Infospecies experts and [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SwissNatColl portal, in the [Occurrence data](/occurrence/search){:target="_blank"} section.

# Checklist -to do before logging in the Data Aggregator
✅ My institution is **registered on [GrSciColl](https://scientific-collections.gbif.org/institution/search){:target="_blank"}**.

> Example: [Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

⚠️ If your institution is not registered on GRSciColl, please contact [GBIF Swiss Node](mailto:contact@gbif.ch)

✅ My institution has **at least one collection registered on [GrSciColl](https://scientific-collections.gbif.org/collection/search){:target="_blank"}**.

> Example: [Herbier De Candolle](https://scientific-collections.gbif.org/collection/8d09b714-dbb5-4dda-976f-f2f804421f02){:target="_blank"}

✅ My institution has **at least one user profile with the [Collection Digitizer](#what-are-the-different-roles-of-the-user-profile-on-the-data-aggregator){:target="_blank"} role**

> - Collection Digitizer
> - Data Administrator

✅ My dataset has all **mandatory fields** (attributes) to ensure [minimal encoding](/en/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"} on the Data Aggregator
> - scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
> - catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

✅ My ready-for-upload dataset file is an **UTF-8 encoded tab-separated values file** with **[Darwin Core standardised columns and cell content](/en/data-aggregator-faqs#where-can-i-find-the-darwin-core-terms-description){:target="_blank"}**

✅ My ready-for-upload dataset file has a **maximum size of 20 Mbyte (= 20 Mo)**.

<br>

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
<strong>ℹ️ You can perform as many data imports as you like</strong> as long as your data isn't published on GBIF. The Data Aggregator tracks all imported files, even if they contain the same data. <strong>If your catalogNumber values remain unchanged</strong>, each new import will update the corresponding existing data.
</div>

<br>

---


# Prepare my data

1. You don't need to upload your entire database into the Aggregator. Some of your fields are purely internal management.
   - Focus on the most important fields first ([Mandatory fields](https://swissnatcoll.hp.gbif-staging.org/en/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"}, [MIDS fields](https://swissnatcoll.hp.gbif-staging.org/en/data-aggregator-faqs#additional-fields-increasing-data-quality-in-the-data-aggregator-mids){:target="_blank"}) and then proceed with the ones you think are important/interesting.
2. Check that your file does not have
   - catalogNumber duplicate
   - "N/A"
   - Special symbols ($, ç, ö, #, %, etc.)


Please check out our [FAQs](/en/data-aggregator-faqs){:target="_blank"} for more details on how to prepare your dataset/collection for the upload in the Data Aggregator.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ 1 csv or tab-separated values file (.tab or .txt) of a maximum size of 20 Mbyte/Mo, with your data arranged as <strong>one line is one occurrence/specimen</strong>, <strong>one column is one attribute</strong>, and <strong>no empty lines</strong></p>.
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tr>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">...</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">country</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">stateProvince</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightgreen.background }};">...</th>

  </tr>
  <tr>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">XXX-0123456</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Geneve</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
  </tr>
  <tr>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">XXX-7891011</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Vaud</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
  </tr>
  <tr>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
  </tr>
  <tr>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">XXX-9999998</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>Serratula tinctoria</i> L. subsp. <i>tinctoria</i></td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;"></td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
  </tr>
  <tr>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">XXX-9999999</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>Serratula tinctoria</i> L. subsp. <i>tinctoria</i></td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Ticino</td>
    <td style="text-align: left; border: 1px solid black; padding: 10px;">...</td>
  </tr>

  </table>
  <p> ⚠️ empty cells are better than cells with "n.a." values ⚠️</p>
  <p> ⚠️  avoid special symbols (#, ö, é, ...) at all costs ⚠️</p>
</div>

# Log in


# Upload my data
1. Go to the [Data Aggregator website](https://staging.aggregator.scnat.zebbra.ch/sign-in){:target="_blank"}.
2. Insert your login details in the corresponding field.
  - After signing in you arrive on the Dashboard page of the Aggregator (it is yet empty, but soon information will be put on it).
  - You can change the language of the website on the top right corner of the window (Available languages: English, Français, Deutsch). But at the moment, English is the main language. The rest has not been translated yet.
2. Click on **Collections** on the left side of the window.
  - On this page, you can see all the collections that have already been uploaded in the Data Aggregator. The name of the collections are based on the [GrSciColl collection names](https://scientific-collections.gbif.org/collection/search){:target="_blank"}.
  - You can order the collection list by clicking on the columns titel (e.g. Name, Code, Progress, Records count / est. and Updated At). By clicking twice or more, you can order it in an ascending or descending order
3. If you want to update an existing collection, go directly to step 12.
4. If you want to create a new collection that is not yet on this page, go to the next step.
5. Click on **New collection** on the right side of the window.
6. Select the type of your data. ⚠️**Mandatory**⚠️
    - Available types: Zoology, Botany, Geology, Paleontology
7. Select the corresponding GrSciColl Collection of your institution. ⚠️**Mandatory**⚠️
    - If the GrSciColl collection has already been used in another upload, it is not present anymore on the drop-down list of this window. You can find it on the Collections page (see step 2.).
    - You can filter the suggested collections by writing your institution code (e.g. G, BERN, NMLU, etc.). This reduces the suggested list to only your registered collections.
8. Add a description of the collection. 💡optional💡
9. Click on **Create collection**
    - If not ordered (see step 2., second sublist item), your newly created collection is added at the end of the list. If you want to find it quickly, you may click on the column titel **Updated at** and order it in a descending order (Newest to Latest).
10. Click on the collection name.
  - For each collection on the Data Aggregator, you have 4 tabs which will be used through the whole process (Records, Imports, Exports, Publications, and Approvals)
11. If your collection is empty, click either on the **+ Import** button in the center of the page, or the **Import dataset** button in the top-right corner (it does the same thing at this point).
12. If your collection already has records and you want to add new records or update the existing ones, click on the **Import dataset** button in the top-right corner.

--- A three-steps window has opened. ---

1. (Step 1 of 3) Click on **Choose a file** to select your prepared .tab file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple line is full.
3. Click on **Upload file**

## Map my data
The mappings window (Step 2 of 3) has two parts:
  - Required attributes: mandatory attributes that have to be mapped in order to go to the next step. At the moment, only two attributes are mandatory in the Data Aggregator (scientificName and catalogNumber).
  - Additional columns: the other attributes present in your dataset. The number depends on the number of columns in your imported file.

1. For the Required attributes, select in the drop-down menu **Filter columns...** the corresponding field in your imported file of each required attribute.
  - By typing the beginning of your field names, you can find them more easily.
  - If unsure of the correspondence between the attributes and your field names, consult this [page](/en/data-aggregator-faqs/#where-can-i-find-the-darwin-core-terms-description).
2. For the Additional columns, either click on **+ Add all** or on the attribute names (with grey background) to map your fields with the additional attributes.
  - The added attributes appear at the bottom of the Mappings window.
3. Repeat these steps until all of the fields you want to import are mapped.
  - Not all of your fields may be mandatory for GBIF. Find [here](/en/data-aggregator-faqs#which-fields-are-requiredmandatory){:target="_blank"} a list with the required and optional fields guaranteeing the highest data quality.
  - If you can't find a Darwin Core term corresponding to one or more of your fields, you have the possibility to map it as an "Extra Attribute".

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">⚠️ August 2024: <strong>Currently all Extra Attributes are lost after the Mapping.</strong> They are not displayed on the Records view page and can't be exported. But they are still present in the uploaded files which had them in the Imports view page.
</div>

4. When satisfied with your mapping, click on **Update mapping**.

5. (Step 3 of 3) The last step is a summary window on which you can check your file name and size, creation date, the number of rows, and the mapped and unmapped fields.
6. When satisfied, click on **Run import**.
  - The window displayed is now the Imports tab, where you can see all your imports for a given collection at all times as well as the original imported files for each import.
  - A progression bar appears during the import process and disappears when finished. ⚠️ Depending on the size of your imported dataset, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the import state.
  - If the import worked, the State is **✅ Imported**
7. Click on **Records** to see your imported records.
        
<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ A certain amount of imported records shown in the <strong>Records</strong> tab of your collection page. If it was your first import in this collection, then the <strong>Not encoded</strong> percentage is 100%.</p>
</div>

# Encode my data
1. Click on **Encode**.
  - A window opens for confirmation check.
2. Click on **Yes, encode**.
  - A progression bar appears during the encoding process and disappears when finished. ⚠️ Depending on the number of your records, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the encoding state.
3. Check the percentage of encoded data on your Collection page.
  - Below the grey band with Records - Imports - Exports - Publication and Approvals, there are two boxes displaying first the total number of records (*All records*) and second the percentage and number of un-encoded records (*Not encoded*).
  - By clicking on any **record**, and then on the **Record encodings** drop-down list, you can check the encoding state of all catalogs used for encoding and enriching your data (e.g. geo_reverse, swiss_species, gbif_taxonomy, etc.).
      - if the status is "Incomplete", the record is "Not encoded". The reason is displayed when passing over the "Incomplete" logo with the mouse.

# Approve my data
1. Click on **Approve**.
  - A window opens for confirmation check.
2. Click on **Yes, approve**.
  - A progression bar appears during the approval process and disappears when finished.
3. Check the Approval status of your records on your Collection page.


# Publish my data
1. Click on **Publish**.
   - A window opens for confirmation check.
2. Click on **Yes, publish**
    - A progression bar appears during the publishing process and disappears when finished.
3. Check the Publication status of your records on your Collection page.


# Export my data
1. Click on **Export**.
  - Select the headers of the export file you want to generate (either your original headers, as imported in the [Upload my data](/en/how-to-publish-data#upload-my-data) part, or the DWC Attributes, as mapped in the [Map my data](/en/how-to-publish-data#map-my-data) part. You can select only one at a time. If you want both, export the records twice.
  - Select the data layer you want to export (either your original data, as imported in the [Upload my data](/en/how-to-publish-data#upload-my-data) part, or the encoded data, as encoded in the [Encode my data](/en/how-to-publish-data#encode-my-data) part. You can select only one at a time. If you want both, export the records twice.
2. Click on **Start export**.
  - The page view changes from "Records view" to "Exports view" where all of your exported files are listed.
  - A progression bar appears during the export process and disappears when finished.
3. Click on the **blue icon** of your export file in the *Size* column.
  - The file is now saved as a .zip file on your computer (usually in the Dowloads folder or on your Desktop).
4. Go to the zip file on your computer and extract the CSV file it contains.
  - A unique file name for this CSV file has been generated by the Data Aggregator.
  - Your data content is separated by commas.


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Back to Top Button</title>
  <style>
    /* Style for the Back to Top Button */
    #back-to-top {
      position: fixed;
      bottom: 40px;
      right: 120px;
      display: none;
      background-color: #fa5e97;
      color: white;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      z-index: 1000;
      width: 70px; /* Width for the rectangle */
      height: 50px; /* Height for the rectangle */
      line-height: 40px;
    }

    #back-to-top:hover {
      background-color: #fa5e97;
    }
  </style>
</head>

<body>

  <!-- Back to Top Button -->
  <a id="back-to-top" href="#" title="Back to top">Up</a>

  <script>
    // Show or hide the button when scrolling
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var backToTopButton = document.getElementById("back-to-top");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }

    // Scroll to the top when the button is clicked
    document.getElementById("back-to-top").addEventListener("click", function(event) {
      event.preventDefault();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  </script>

</body>
</html>
