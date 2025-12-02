---
layout: documentation
permalink: /en/publishing-with-dagi
title: DAGI Guide
description: Guide for publishing data through the Swiss Data Aggregator (DAGI)
sideNavigation: sideNavigation.tutorials
toc: true
---

<head>
  <!-- Lightbox2 CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>

  <!-- Zoom.js CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/css/zoom.min.css">

  <!-- Zoom.js JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/js/zoom.min.js"></script>

</head>

# How to publish data using the Data Aggregator DAGI

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
  <p>ℹ️ A new version of DAGI has recently been released, providing bug fixes and feature improvements.</p>
  <p align="right">Last update: 04.12.2025</p>
</div>

**In order to publish your data on [GBIF.org](https://www.gbif.org/){:target="_blank"} and have it displayed on the SwissNatColl hosted portal**, you first need to prepare an import file containing all data you intend to publish (see [Prepare my data](#prepare-my-data) here below).

Once your file is prepared, you can [log in](#log-in) and [import your data](#import-my-data) in the [Data Aggregator (DAGI) web app](https://dagi.gbif.ch/sign-in){:target="_blank"}. Then, when done with the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset is ready to be [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SwissNatColl portal, in the [Occurrence data section](/occurrence/search){:target="_blank"}.

In parallel, you may benefit from the Infospecies data centers experts by [sending them your swiss data for validation](#validate-my-data). Each record sent will be carefully reviewed by the staff of the center concerned and a feedback will be available on DAGI after this process.

<figure class="has-text-centered">
  <a href="/assets/images/GraphsDiagrams/DAGI_dataflow_v4.png" data-lightbox="image-1" 
     data-title='Anne Morel / SwissNatColl Team'>
    <img src="/assets/images/GraphsDiagrams/DAGI_dataflow_v4.png" 
         alt="DAGI Data Flow" 
         style="max-width: 100%; height: auto; cursor: zoom-in;" />
  </a>
  <figcaption>DAGI Data flow</figcaption>
</figure>


## Checklist - to do before logging in the Data Aggregator DAGI

<br>✅ My **institution** is **registered on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}**.

> Example: [Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

⚠️ If your institution is not registered on GRSciColl, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).

<br>✅ My **collection** is **registered in my institution on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"}**.

> Example: [Herbarium – De Candolle's Prodromus](https://scientific-collections.gbif.org/collection/8d09b714-dbb5-4dda-976f-f2f804421f02){:target="_blank"}

⚠️ If your collection is not registered on GRSciColl or it needs adjustments, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).


<br>✅ **At least [one _Collection Administrator_ of my institution](/en/data-aggregator-faqs#what-are-the-different-roles-of-the-user-profile-on-the-data-aggregator){:target="_blank"}** is already **registered in DAGI**.

⚠️ If your institution does not yet have a Collection Administrator, please send a request email to [dagi@gbif.ch](mailto:dagi@gbif.ch) with your full name, institution role, institution email and institution name.

<br>✅ My import file has all **mandatory fields** (attributes) **correctly filled** to ensure successful import in DAGI.
> - scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
> - catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

<br>✅ My import file is an **UTF-8 encoded csv or text file with comma or tab separation** and **[Darwin Core standardised columns and cell content](/en/data-dwc#where-can-i-find-the-darwin-core-terms-description){:target="_blank"}**.
> catalogNumber     scientificName     eventDate     recordedBy     ...<br>
> XXX-123456789     Poa annua L.     2024-10-09     Weber Morgan     ...<br>
> ...      ...     ...      ...     ...<br>
> XXX-234567890     Poa annua L.     2024-10-08     Weber Morgan     ...

⚠️ Darwin Core headers are not mandatory in the import file, but it allows you to benefit from the auto-mapping, or else you will have to do the mapping manually for each field in your import file.

<br>✅ My import file has a **maximum size of 800 MB (= 800 Mo)**.

<br>

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
<strong>👌 You can do as many data imports as you want</strong>.<br> The Data Aggregator tracks all imported files, even if they contain the same data. <strong>If your catalogNumber remains unchanged, each new import will update the corresponding existing data</strong>.
</div>

<br>

---


## Prepare my data

1. Focus on **the most important fields** first ([Mandatory fields](/en/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"}, [MIDS fields](/en/data-aggregator-faqs#additional-fields-increasing-data-quality-in-the-data-aggregator-mids){:target="_blank"}) and then proceed with the ones you think are **important/interesting to be made publicly available**.
   - You don't need to import your entire database into the Aggregator. Some of your fields are purely internal management. <br>
2. Make sure the [fields that require specific predefined values in DAGI](/en/data-aggregator-faqs#fields-in-the-data-aggregator-with-special-values-required){:target="_blank"} are filled in correctly.
3. Check that your file does not have
   - catalogNumber duplicates
   - empty scientificName or catalogNumber cells
   - duplicate headers or unnamed columns
   - any unwanted space after a header
  
⚠️ There are fields that are not available for mapping because they are added by DAGI automatically : _institutionCode_, _institutionID_, _collectionCode_, _collectionID_ and _datasetID_. These attributes are based on GRSciColl and GBIF.


Please refer to our [FAQs](/en/data-aggregator-faqs){:target="_blank"} for more details on preparing your data for import into DAGI.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ 1 .csv or tab-separated .txt file of a maximum size of 800 MB (= 800 Mo), containing your data arranged as <strong>each line is one catalogNumber of an occurrence/specimen, each column is one attribute</strong>, and <strong>there are no empty lines</strong>.</p>.
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
    <td style="text-align: left; border: 1px solid black; padding: 10px;">Geneva</td>
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
  <p> ⚠️ Leave <strong>uninformed cells EMPTY</strong>. Remove all "n.a.", "NA", "N/A", "unknown", "indet.", etc. values from your file or you may receive an error message during import.</p>
</div>


## Log in
1. Go to the [Data Aggregator DAGI website](https://dagi.gbif.ch/sign-in){:target="_blank"}.
2. Insert your login details in the corresponding fields.
  - Immediately after signing in, you will be requested to accept [DAGI's terms of use](https://infofauna-support.atlassian.net/wiki/spaces/II/pages/18972887/Relancer+le+script+de+transfert+des+donn+es+InfoSpecies+sur+le+bucket){:target="_blank"}
  - When signed in, you have access to your institution page of DAGI, which can be seen only by the users registered in your institution.

There are two different views on your institution page:

  - **[Datasets](#datasets-view)**: displays all the **datasets** of your institution already added in DAGI.
  - **[Administration](#administration-view)**: ⚠️visible only to _Collection Administrators_⚠️, displays all **users** already added to your institution.

There are also two icons opening pages on the SwissNatColl portal with support material to help you using DAGI.

  - **[Guide](#guide)**: opens the *How to publish data with the Data Aggregator* **page** on the SwissNatColl hosted portal (this page)
  - **[Tutorials](#tutorials)**: opens the *Tutorial sessions for the Data Aggregator users* **page** on the SwissNatColl hosted portal

The terms of use you just accepted are at all times available by clicking on the last icon.

  - **[Terms&Conditions](#terms--conditions)**: opens the *Terms of use* **page** on the SwissNatColl hosted portal

## Add a new dataset

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Administrator</i> role can add, edit and delete datasets. The steps described in this section are unavailable for users with only the <i>Data Digitizer</i> role.
</div>

1. Go to the [Datasets view](#datasets-view) of your institution page by clicking on the **🪟Datasets** icon on the left side of the page.
  - On this page, you can see all the datasets of your institution that have already been added in DAGI. The names of the datasets are based on the [GRSciColl collection names](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"}.
  - You can order the dataset list by clicking on the **columns titles** (_Name_, _Code_, _State_, _Institution Code_, _Institution_, _Records count / est._ and _Updated At_, see the [Datasets view paragraph](#datasets-view){:target="_blank"} for a precise description). By clicking twice or more, you can order them in an ascending or descending order.
  - The State column informs you of the process step currently running (_Importing_, _Encoding_, _Publishing_). Unless the State of a dataset is on "🕒Ready", no other action can be started until the current one is executed. Depending on the number of records, it can take up to a few hours.
2. If your Datasets view is empty, click either on the **+ New dataset** button in the center of the window or on **🪟New dataset** on the top-right corner of the window (it does the same thing at this point).
3. If your Datasets view already has datasets, click on the **🪟New dataset** button in the top right corner of the window.

--- A pop-up window titled _New Dataset_ has opened. ---

1. Select the type of your data. ⚠️**Mandatory**
    - Available types: Zoology, Botany, Paleontology
2. Select the corresponding GRSciColl Collection of your institution. ⚠️**Mandatory**
    - If the GRSciColl collection has already been added on DAGI, it is not present anymore in the drop-down list of this pop-up window. You can find it on the Datasets view.
3. Add a description of the dataset. ℹ️optional
4. Click on **Create dataset**
    - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**.
    - If you want to edit a dataset, click on the 📝Edit icon of the dataset (far right-side of dataset line in the Datasets view)
    - If you want to delete a dataset, please take contact with us at [dagi@gbif.ch](mailto:dagi@gbif.ch), so we can advise you accordingly.
5. The pop-up window closes itself and you are now on the page of the dataset you just added.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of this step:</strong></p>
  <p>✅ A new dataset in the <strong>Datasets view</strong> of your institution</p>
</div>


## Import my data

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Data Digitizer</i> can do the following steps, from the import to the image upload. The steps described from here on are unavailable to users with only the <i>Collection Administrator</i> role.
</div>

1. Go to the [Datasets view](#datasets-view) of your institution page by clicking on **Datasets** on the left side of the page.
2. Click on the dataset name in which you want to import your data.
  - For each dataset in DAGI, you have 7 tabs, in a grey bar on top of the dataset page (_Records_, _Imports_, _Exports_, _Publications_,  _Validations_, _Image Upload_, _Published Records_) (see the [Dataset page paragraph](#dataset-page) for a precise description).
  - The tab **Records** displays the imported **records** available in the dataset.
  - The tab **Imports** displays all the **files** that have been imported.
  - The tab **Exports** displays all the **files** that have been exported.
  - The tab **Publications** displays all the **files** that have been published on GBIF.org.
  - The tab **Validations** displays all the **files** that have been sent for validation to an Info Species data center.
  - The tab **Image Upload** displays all the **files** with images that have been uploaded.
  - The tab **Published Records** displays all the **records** that have been already published.
3. If your dataset is empty, click either on the **+ Import** button in the center of the window, or the **📤Import data** button in the top-right corner of the window (it does the same thing at this point).
4. If your dataset already has records and you want to add new records or update the existing ones, click on the **📤Import data** button in the top-right corner of the window.

--- A three-steps pop-up window _Import records_ has opened. ---

1. (Step 1️⃣ of 3️⃣) Click on **Choose a file** to select your prepared .csv/.txt file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple bar is full.
3. Click on **Next**

### Map my data

The mappings window (Step 2️⃣ of 3️⃣) has three parts:
<div>
  <table style="border-collapse: collapse; border: 1px white">
      <tr>
          <td style="text-align: left; vertical-align: top"><i>Quick Start</i></td>
          <td>if your file headers are exactly the same as the DAGI attributes, the mapping can be automatically performed by <strong>✨Try auto-mapping</strong>. The second button <strong>🔄️Load existing mapping</strong> can be used after the first mapping. It maps your fields the same way you mapped them previously (as long as your file headers do not change).</td>
      </tr>
      <tr>
          <td style="text-align: left; vertical-align: top"><i>Required attributes</i></td>
          <td>mandatory attributes that have to be mapped in order to go to the next step. Two attributes are mandatory in DAGI: <a href="https://dwc.tdwg.org/terms/#dwc:scientificName">scientificName</a> and <a href="https://dwc.tdwg.org/terms/#dwc:catalogNumber">catalogNumber</a>.</td>
      </tr>
      <tr>
          <td style="text-align: left; vertical-align: top"><i>Additional columns</i></td>
          <td>the other columns present in your import file. The button <strong>➕Add all</strong> is available for clicking. It adds all of your columns at once. Then you can select the corresponding DAGI attribute for each of them. You can also click directly on the <strong>grey area with the column name</strong> to add them one by one on top of the list of already mapped columns.</td>
      </tr>
  </table>
</div>


1. If your file headers exactly match the DAGI attributes, click on **✨Try auto-mapping**.
2. If you already did a mapping of a previous file, click on **🔄️Load existing mapping** and simply check the mapping before clicking on **Update mapping**.
3. If it is your first mapping and your file headers are different than the DAGI attributes, do first the _Required attributes_ by clicking on the drop-down menu **Select a column** on the right side of the attribute names. You can then select the corresponding header in your imported file.
  - By typing the beginning of your file header in the search bar, you can find it more easily.
  - If unsure of the correspondence between the attributes and your file headers, consult the Darwin Core FAQs section [Where can I find the Darwin Core terms description?](/en/data-dwc#where-can-i-find-the-darwin-core-terms-description){:target="_blank"}.
4. For the Additional columns, either click on **➕ Add all** or add them one by one by clicking on the attribute names (with grey background) to map your headers with the DAGI attributes.
  - The added attributes appear at the top of the Additional columns list when added one by one, and at the bottom of the list when added with ➕ Add all.
  - The unmapped headers of your file are listed on top of the Additional columns list with a grey background. It is not mandatory to map all of your file headers.
5. Repeat these steps until all of the headers you want to import are mapped.
  - If you can't find a DAGI attribute corresponding to one or more of your headers, you have the possibility to map it as a "Custom Attribute". ⚠️ Custom Attributes can't be encoded nor published on GBIF but may be available for other features in DAGI (e.g. Validation process)
<br>
6. When satisfied with your mapping, click on **Update mapping**.
<br>
7. (Step 3️⃣ of 3️⃣) The last step is a summary window on which you can check your file name and size, creation date, the number of rows, and the mapped and unmapped columns.
  - If you want to keep a trace of your mapping, you can select the whole summary window and copy-paste it on your computer. This might also help you keep track of the correspondence between your database file headers and the attributes of DAGI.
8. When satisfied, click on **Run import**.
  - The page displayed is now the Imports tab, where you can see all your imported files for a given dataset at all times. By clicking on the blue icon (📥*xyz.x Mbyte*), you can download your imported file.
  - A progression bar appears during the import process and disappears when finished. ⚠️ Depending on the size of your imported dataset, this step can take a few hours to be completed ⚠️ Closing your browser has no impact on the process, you can come back later to check the import state.
  - If the import worked, the State is **✅ Imported**
  - If the import did not work, the State is **❌ Failed**, you can check our [Error messages page](/en/dagi-error-messages#the-import-failed){:target="_blank"} for a precise description on what to do.
9. Click on the **Records** tab to see your imported records.
        
<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of the Importing step:</strong></p>
  <p>✅ Your imported records shown in the <strong>Records</strong> tab of your dataset page.</p>
</div>

## Encode my data

1. If you want to encode only a certain set of your data, use the **[available filters](#filters)**.
2. Click on **🧩Encode**.
  - A pop-up window titled _Encoding Summary_ opens with a short summary of what the encoding does. Briefly said, it uses some attributes as query values that are sent to available dictionaries of data (like GBIF API) to encode the provided values and enrich specific attributes with new values. It is extremely useful for taxonomic standardisation, georeferencing, species protection, etc. (see [What does the Encoding do? in the FAQs](/en/data-aggregator-faqs#what-does-the-encoding-do){:target="_blank"} for a precise description)
  - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**.
3. When satisfied with the set of records you want to encode, click on **Encode**.
  - A progression bar appears during the encoding process and disappears when launched. ⚠️ Depending on the number of your records, this step can take up to a day to be completed ⚠️ Closing your browser has no impact on the process, you can come back later to check the encoding state.
  - During the encoding, no other action can be started.
4. Check the percentage of encoded data on your Dataset page (see the second box called **Not encoded / Incomplete**) in the Quick-filters.
  - By clicking on any **record**, and then on the **Encodings tab** of the side-pane, you can check the encoding state of all catalogs used for encoding and enriching your data (e.g. geo_reverse, swiss_species, gbif_taxonomy, etc.).
  - If the status is "Incomplete", the record is "Not encoded". The reason is displayed when placing the mouse on the yellow **⚠️Incomplete** icon in the Encodings tab of the side-pane.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of the Encoding step:</strong></p>
  <p>✅ A <strong>percentage of <i>Not encoded / Incomplete</i> records that is lower than 100%</strong> in the second Quick-filter box displayed in the <strong>Records</strong> tab of your dataset page.</p>
  <p> if the percentage is still 100%, then it simply means that all of your records have an <i>Incomplete</i> Encoding status.</p>
  <p style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ If some of your records do not have the necessary information for the APIs queries, then the Encoding status will remain <i>Incomplete</i>. <strong>This does not prevent you from publishing or sending your records for validation</strong>.</p>
</div>

## Export my data

1. Click on **📥Export**.
  - A pop-up window titled _Export Records_ opens.
2. **Select your data headers** allows you to determine the column names of your export file. You can choose between your original headers, as imported in the [Import my data](#import-my-data) part, or the Darwin Core (DWC) Attributes, which includes all available attributes in DAGI.
  - You can select only one at a time. If you want both types, export the records twice.<br>
3. **Select the data layer** allows you to determine which data values you want to export. You can choose between your imported data (Raw), as imported in the [Import my data](#import-my-data) part, or the encoded data (Encoded), as encoded in the [Encode my data](#encode-my-data) part.
   - You can select only one at a time. If you want both types, export the records twice.<br>
4. Click on **Start export**.
  - The page view changes from the Records tab to the Exports tab where all of your exported files are listed.
  - A progression bar appears during the export process and disappears when finished.<br>
5. Click on the **blue icon** (📥*xyz.x MB*) of your export file in the _Size_ column.
  - The file is now saved as a ZIP file on your computer (usually in the Downloads folder or on your Desktop).<br>
6. Go to the ZIP file on your computer and extract the CSV file it contains.
  - A unique file name for this CSV file has been generated by DAGI.
  - Your data content is separated by commas.
  - The file is encoded in UTF-8. To facilitate the opening of the file, we recommend you use the _Get Data from a CSV file_ method directly in Excel. This way the UTF-8 format is set properly.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of the Exporting step:</strong></p>
  <p>✅ A <strong>ZIP file containing a CSV file</strong> with all your exported records.</p>
</div>


## Upload images

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ Only images that can be linked to an <strong>existing record</strong> in your DAGI dataset can be uploaded.<br>
  ⚠️ This feature is <strong>NOT for high definition images</strong>, but for enhancing the visibility of collections who don't have a publicly available image deposit website.
</div>

<br>

{: .box }
**If your images are already available online, simply add the url in the attribute [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target="_blank"}.**

<br>

1. Prepare a ZIP file containing your specimen images.
- file name = **catalogNumber**
- for records with several images, use the same file name but with an additional "_1", "_2", "_3", etc.
- file format = **JPG, JPEG, PNG, BMP, TIFF, SVG or WEBP**
- maximum file size = **5 MB** (Mo)
- maximum ZIP file size = **200 MB** (Mo)

2. Click on the **Image Upload** tab in the grey tab band of your dataset, then on **➕ Upload Images** in the middle of the page or on **📤Upload Images** in the top-right corner of the page.

--- A three-steps pop-up window _Upload Images_ has opened. ---

1. (Step 1️⃣ of 3️⃣) Click on **Choose a file** to select your prepared ZIP file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple bar is full.
3. Click on **Next**
4. (Step 2️⃣ of 3️⃣) The *catalogNumber* is automatically selected as a **Mapping Identifier**.
5. Click on **Update mapping**
6. (Step 3️⃣ of 3️⃣) The last step is a summary window on which you can check your file name and size, creation date, the number of invalid files, and the mapped identifier.
7. Click on **Run Mapping** (if available).
<br>  - ⚠️ The State of your Image Upload might be currently on ⚙️Extracting. This means that the Mapping can't be run yet, even by clicking on it. As soon as the extraction is finished, you will need to come back and click (again) on **Run Mapping**. You can close your DAGI page in the meantime, or start the upload of another ZIP file.
9. You can check the status of your Image Upload
- **Finished** : All of your images could be mapped with a record in your dataset. By clicking on the green **✅Finished** icon, a side-panel opens with the details of your Image Upload. In the Logfile section, you can click on the **📥*xyz.x MB* icon** which downloads a csv with the list of all the pictures of your ZIP file and the mapping status and attribute.
- **Incomplete** : All or a part of your images remained unmapped. This could be due to the name of the files and the values of the attribute you selected for the mapping. By clicking on the yellow **⚠️Incomplete** icon, a side-panel opens with the details of your Image Upload. In the Logfile section, you can click on the **📥*xyz.x MB* icon** which downloads a csv with the list of all the pictures of your ZIP file and the mapping status and attribute.
- **Mapping failed** : None of your images could be mapped. By clicking on the red **❌Mapping failed** icon, a side-panel opens with the details of your Image Upload. However there is no logfile. The failure could be due to the name of the files and the values of the attribute you selected for the mapping. If the problem persists after multiple trials, do not hesitate to contact us.

Now, in the **Records tab** of your Dataset, the records with an image have a green 📷camera icon, and you can see the image when opening the side-panel of a record (only the first image is displayed if multiple images have been mapped to the same record). The link to the DAGI Media Store has been added in the attribute *[associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target="_blank"}*. When publishing your data, the image will also be displayed on the GBIF occurrence page of your specimen.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of the Image Upload step:</strong></p>
  <p>✅ A green 📷camera icon on the left side of your records in the <strong>Records tab</strong> of your dataset</p>
  <p>✅ An image displayed in the <strong>top half of the side-panel</strong> of a selected record</p>
</div>


## Publish my data

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Administrator</i> role can publish records on GBIForg. The steps described in this section are unavailable for users with only the <i>Data Digitizer</i> role.
</div>

🔸 If you want to publish the Import layer version of your data, select **📤Import Layer** in the Layers setting.
🔸 If you want to publish the Encoded layer version of your data, select **📤Encoded Layer** in the Layers setting.
🔸 If you want to publish a selected set of your data, select the **Filters** you want to apply.
🔸 If you want to publish your entire dataset, clear all filters in the **🎚️Filters** and click on the **All records** box of the Quick-filters. The Encoded layer is set by default.

1. Click on **🌐Publish**.

--- A three-steps pop-up window _Publication of Records_ has opened. ---

1. (Step 1️⃣ of 3️⃣) Publication of Records
- The text informs you of the number of records you are about to publish and if you need to create a new dataset. ⚠️If you selected more records than the number displayed in this part, please check the [Error messages page](/en/dagi-error-messages#unpublished-records){:target="_blank"} for a precise description on why.
- For the first publication of your DAGI dataset, the option to **Create new dataset** is automatically set.
- For the following publications of your DAGI dataset, the hyperlink to the existing dataset is provided.<br><br>
2. Click on **Next**.
3. (Step 2️⃣ of 3️⃣) Target Dataset
- The text informs you on the metadata information of your GBIF dataset.
   - The first part _Dataset_ is about the title of your dataset, the Publisher and the Authors.
   - The second part _Institution_ is about your institution name, code and address, as well as the official contacts registered on GRSciColl.
   - The third part _Intellectual property rights_ is about the license you want to apply to your data : [CC0](http://creativecommons.org/publicdomain/zero/1.0/legalcode){:target="_blank"}, [CC BY](http://creativecommons.org/licenses/by/4.0/legalcode){:target="_blank"} or [CC BY-NC](http://creativecommons.org/licenses/by-nc/4.0/legalcode){:target="_blank"}.<br><br>

{: .box }
**CC0** : No copyright, the work is placed in the public domain.<br>
**CC BY** : users may distribute, adapt, translate, build upon the work as long as they credit the authors for the original creation.<br>
**CC BY-NC** : users may reuse and adapt the work as long as it is not for commercial purposes. Credit to the authors is mandatory.
<br>

4. Click on **Next**.
5. (Step 3️⃣ of 3️⃣) Publication summary
- The last step is a summary window on which you can check the settings of Step 1️⃣, as well as the application of the publication rules.
   - The publication rules are applied to specimens collected in Switzerland whose taxa are registered in the InfoSpecies data centers. The coordinates associated to such records are rounded as to not publish the exact location. If the data is ambiguous, DAGI prevents the publication and requests the user to check the unpublished records.
   - The publication on GBIF is irreversible from DAGI.<br><br>
6. **Tick the box** to confirm that you accept the [terms of use](/en/terms/){:target="_blank"} and full responsibility for the publication.
   - Note that your institution, as data owner and provider, is fully entitled for the quality of the data published through the Data Aggregator and to GBIF. Errors in your published datasets are your responsibility and yours only.<br><br>
7. Click on **Publish**.
- A progression bar appears during the publishing process and disappears when launched.
- The Publication status of your records have changed to _🌐In Publication_. It will be set to _✅Published_ after two hours. If the status turns to _❌Failed_, please check the [Error messages page](/en/dagi-error-messages#the-publication-failed){:target="_blank"} for a precise description on what to do.
- You can access the DarwinCore-Archive generated for the publication in the **Publications** tab and download it by clicking on the blue icon (📥*xyz.x kbyte*)<br>

- By clicking on **Show on GBIF ↗️** (purple text in the top-left corner of your dataset page and visible in all tabs), you can access your GBIF dataset. It might take some time for all the occurrences to appear, sometimes a few minutes or up to a day.
   - ⚠️Do not delete a DAGI dataset after publishing on GBIF or it might create unwanted duplicates.⚠️

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you expect to have at the end of the Publishing step:</strong></p>
  <p>✅ A <strong>purple hyperlink <em>Show on GBIF ↗️</em></strong> below the dataset title of the Dataset view <strong>linking to the published dataset on GBIF with your published records</strong></p>
  <p>✅ A <strong>gbifID</strong>, <strong>datasetID</strong> and <strong>gbifDOI</strong> added now to all of your published records in the Import layer, category <i>Others</i> of the side panel</p>
</div>

## Validate my data

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
✅ This is a brand new module available on DAGI. To know more about the background and context of this topic, please refer to our support material.
</div>

1. Click on **☑️Validate**.
  - A pop-up window titled _Validation summary_ opens with a short summary of what the validation entails.
  - Note that only the Swiss specimens of species under the scope of InfoSpecies will be reviewed. Records coming from other countries or of other species will be ignored, as well as fossil specimens.
  - Each record has been assigned to its corresponding data center during the Encoding step. The records are grouped by data center and sent per e-mail in a single file.
2. Click on **Validate**.
  - A progression bar appears during the initiation of the validation process and disappears when launched. It might take some time for the validation file to be compiled. You can check their state in the **Validations tab**.
  - When all validation files have been compiled and sent, the Validation status of your records change to ⚙️Requested.
  - You can access the CSVs generated for the validation in the **Validations tab** and download them by clicking on the blue icon (📥*xyz.x kbyte*)<br>

### Get validation feedback

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ This part is still under development and might not be available before the first quarter of 2026. You will be informed officially when everything is ready.
</div>

After the validation process done on the data centers side, the records on DAGI are enriched on the _Validation layer_ with the validated data coming from the Info Species data centers. The _Collection Administrator_ of a dataset with validated records is informed by e-mail. In the case of not-validated records, a similar e-mail is sent and the feedback is displayed in the side-pane of the records.
1. Click on a record to open the side-pane on the right side of your browser window.
   - If the record is **Not Validated**, the feedback is displayed in the top part of the side-pane (**Info Species Feedback**).
   - If the record is **Validated**, the validated values are displayed with each attributes in the bottom part of the side-pane.
2. If you want to publish the validated values, first [export](/export-my-data) the records and do the necessary changes directly in your database. After then only can you import these new data into DAGI and publish them.

> The validation process does not prevent the publication on GBIF, and it is not planned to publish the validated values as is. The source of truth is and remain the institution database.


<br>
<br>

# How to navigate in DAGI

When [logging](#log-in) in the Data Aggregator, the platform opens on the [Datasets view](#datasets-view).

In the top-right corner of the page, you can see your login name, the button to log out and the button to choose between light/dark/computer themes. The platform is available only in English.

## Datasets view

<figure class="has-text-centered">
  <a href="/assets/images/GraphsDiagrams/DAGI_ViewDatasetsCJBG.png" data-lightbox="image-2" 
     data-title='Anne Morel / SwissNatColl Team'>
    <img src="/assets/images/GraphsDiagrams/DAGI_ViewDatasetsCJBG.png" 
         alt="DAGI Datasets view with datasets" 
         style="max-width: 100%; height: auto; cursor: zoom-in;" />
  </a>
  <figcaption>DAGI Datasets view with datasets</figcaption>
</figure>

The datasets displayed here are the ones that have been added by a _Collection Administrator_ of your institution. You can only see the datasets of the institution you have been registered to upon creation of your user's profile. The datasets are organised by default by order of creation. If you wish to order them differently, you can click on any of the available headers and order them in an ascending or descending order:
- *Name*: name of your dataset as stated on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"} (collection name).
- *Code*: code of your dataset as stated on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"} (collectionCode).
- *State*: is green (🕒Ready) when the previous action launched is finished and a new one can be started (Actions : [📤import](#import-my-data), [📥export](#export-my-data),  [🧩encode](#encode-my-data), [🌐publish](#publish-my-data) and [✅validate](#validate-my-data)).
- *Institution Code*: code of your institution as stated on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} (institutionCode).
- *Institution*: name of your institution as stated on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} (institution name).
- *Progress*: progress bar linked to the number of records already imported and the total number of specimens stated on your collection page on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}.
- *Records count / est.*: numerical display of the _Progress_, with first the number of records currently present in the dataset on DAGI and second the total number of specimens stated on the collection page on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}.
- *Updated At*: timestamp of the last action executed on the dataset.

Only the _Collection Administrators_ can add (🪟New dataset) and edit (📝) datasets in the Datasets view. The deletion of datasets is available only for the platform admins.


### Dataset page

By clicking on the Name of a dataset (in purple in the Datasets view) the Dataset page opens on the Records tab. There are currently seven available tabs in a grey bar on top of the page, below the title of the dataset.

- The **Records tab** :<br> View on all imported **records** of the dataset with a selection of important attributes (*Picture availability*, *IUCN tag*, *Typus*, *scientificName*, *verbatimIdentification*, *occurrenceID*, *catalogNumber*, *recordedBy*, *identifiedBy*, *eventDate*, *stateProvince & countryCode*, *verbatimElevation*, *decimalLatitude & decimalLongitude*), the current state of the available actions (*Encoding*, *Publication status*, *Validation status*), the registration status in an Info Species data center (*Swiss Registry*), the *MIDS level* and the *timestamp of the last update of the record*. <br><br>- The tab is divided into two main sections: The **filters** on top (*Quick filters*, *Search bar*, *selected Layer*, *Value filters*) and the **table of records** below.<br><br>- The table of records displays a default set of 15 records  at a time. You can scroll through the records and adjust the number of entries displayed using the navigation tools at the bottom.<br><br>- A summary also appears at the bottom, indicating the current view. For example: _Showing 1 to 15 of 2503 entries_ —meaning that 15 records are currently displayed, starting from the first entry, out of a total of 2503 selected records.<br><br>

- The **Imports tab** :<br> View on all imported **files** of the dataset with a selection of important metadata (*State*, *File*, *Size*, *Created at*, *Created by*, *Started at*, *Started by*, *Records*).<br><br> - The State is either blue (⚙️*In Progress*), green (✅*Imported*), red (❌*Failed*) or grey (🕰️*Pending*).<br> 🔸When the state is _In Progress_, no other action can be started. You need to wait until it is finished. <br> 🔸When the state is _Imported_, by clicking on the green ✅*Imported* icon, a side-pane opens on the right of the window and provides information about the file itself, the mapping saved and the unmapped columns.<br> 🔸When the state is _Failed_, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure. Check our [Error messages page](/en/dagi-error-messages#the-import-failed){:target="_blank"} for a more precise description.<br> 🔸When the state is _Pending_, by clicking on the grey 🕰️*Pending* icon, a side-pane opens on the right of the window and provides information on the pending status. By clicking on the 📝*Edit* button in the Mapping section, the mapping pop-up window opens and allows you to proceed further with the import.<br><br> **All imported files, even the failed ones, are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon (📥*xyz.x Mbyte*).<br><br>

- The **Exports tab** :<br> View on all exported **files** of the dataset with a selection of important metadata (*State*, *File*, *Size*, *Started at*, *Started by* and *Records*).<br><br> - The State is either blue (⚙️*In progress*), green (✅*Exported*) or red (❌*Failed*).<br>🔸When the state is Exported, by clicking on the green ✅*Exported* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All exported files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon (📥*xyz.x Mbyte*).<br><br>

- The **Publications tab** :<br> View on all published **files** of the dataset with a selection of important metadata (*State*, *File*, *Size*, *Started at*, *Started by* and *Records*).<br><br> The State is either blue (⚙️*In Publication*), green (✅*Done*) or red (❌*Failed*).<br>🔸When the state is Done, by clicking on the green ✅*Done* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All published files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon (📥*xyz.x Mbyte*).<br><br>

- The **Validations tab** :<br> View on all of the **files** of the dataset that were sent for validation. ⚠️ This feature is not yet active nor fully developed.

<!-- with a selection of important metadata (*State of the publication/validation*, *Channel concerned*, *File name*, *Size*, *timestamp of the publication*, and *number of records exported in the file*).<br><br> The State is either blue (⚙️*In Publication*), green (✅*Done*) or red (❌*Failed*).<br>🔸When the state is Done, by clicking on the green ✅*Done* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All published/sent for validation files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon (📥*xyz.x Mbyte*).<br><br> -->

- The **Image Upload tab**:<br> View on all uploaded ZIP **files** with images. The metadata provided in this tab is more comprehensive compared to the others, as it includes not only the *State*, *File*, *Created at*, *Created by*, *Started at* and *Started by*, but also the **number of mapped**, **unmapped**, and **invalid images** associated with each file, as well as the *Mapping identifier*.<br><br> The State is either blue (⚙️In progress), green (✅Finished) or yellow (ℹ️Incomplete).<br> 🔸When the state is Incomplete, by clicking on the yellow ℹ️*Incomplete* icon, a side-pane opens on the right of the window and provides results information on how many images where mapped, unmapped or invalid. By clicking on the blue icon (📥*xyz.x Mbyte*) of the Logfile section (bottom of the side-pane), a csv file is downloaded with the list of all images in the ZIP file and their matched attribute values.<br><br> **All uploaded files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon (📥*xyz.x Mbyte*).<br><br>

- The **Published Records tab**:<br> View on all published **records**. This tab has no action or feature other than displaying the full list of the published records at the time of their last publication. A selection of attributes, *Typus*, *scientificName*, *verbatimIdentification*, *occurrenceID*, *catalogNumber*, *recordedBy*, *IdentifiedBy*, *eventDate*, *stateProvince*, *countryCode*, *verbatimElevation*, *decimalLatitude/decimalLongitude*, as well as some publication metadata, *Updated at*, *Published by*, *Publication Id*, are displayed to provide an overview on the published records.


#### Filters

The available filters are grouped into 4 categories. It is possible to select as many as you want. The total number of filtered records is displayed live in the purple **Show ... records** button at the bottom of the pop-up window.

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed;">
    <colgroup>
      <col style="width: 15%;">   <!-- Category -->
      <col style="width: 28%;">   <!-- Title -->
      <col style="width: 27%;">   <!-- Type -->
      <col style="width: 30%;">   <!-- Source attribute -->
    </colgroup>
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }};">Category</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }};">Title</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.exampleValues.background }};">Type</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }};">Source attribute</th>
    </tr>
    <tr>
      <td rowspan="4" style="border: 1px solid black; padding: 5px; vertical-align: top;">Taxonomy</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Scientific Name</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔍search bar<br>no auto-complete<br>partial entry recognition</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>scientificName</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Kingdom</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">☑️check boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>kingdom</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Phylum</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔽drop-down menu</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>phylum</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Family</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔽drop-down menu</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>family</em> (unique values)</td>
    </tr>
    <tr>
      <td rowspan="3" style="border: 1px solid black; padding: 5px; vertical-align: top;">Date</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Last modified</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">📅date interval selection</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>Updated At</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Year of event</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">📅year interval selection</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>year</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Event Date</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>eventDate</em></td>
    </tr>
    <tr>
      <td rowspan="7" style="border: 1px solid black; padding: 5px; vertical-align: top;">Location</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Continent</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">☑️check boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>continent</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Country</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔽drop-down menu</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>country</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>State Province</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔽drop-down menu</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>stateProvince</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Locality</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔍search bar<br>no auto-complete<br>partial entry recognition</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>locality</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Decimal Coordinates</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>decimalLatitude</em><br><em>decimalLongitude</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Swiss 95 Coordinates</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>swissCoordinatesLv95_E</em><br><em>swissCoordinatesLv95_N</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Swiss 03 Coordinates</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>swissCoordinatesLv03_E</em><br><em>swissCoordinatesLv03_N</em></td>
    </tr>
    <tr>
      <td rowspan="6" style="border: 1px solid black; padding: 5px; vertical-align: top;">Other</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>IUCN Red List</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>iucnredlistcategory</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Mids Level</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">❎selection boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><a href="en/data-aggregator-faqs#additional-fields-increasing-data-quality-in-the-data-aggregator-mids" target="_blank">MIDS attributes</a></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Recorded by</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">🔍search bar<br>no auto-complete<br>partial entry recognition</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>recordedBy</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Type status</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">☑️check boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>typeStatus</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Material Sample Type</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">☑️check boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>materialSampleType</em> (unique values)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><strong>Preparations</strong></td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;">☑️check boxes</td>
      <td style="border: 1px solid black; padding: 5px; vertical-align: top;"><em>preparations</em> (unique values)</td>
    </tr>
  </table>
</div>

## Administration view

<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Administrator</i> role can access this view.
</div>

The Administration view displays **all users already added to your institution**. You can only see the users of your institution. The users are organised by default by order of creation. If you wish to order them differently, you can click on the *Email*, *First name*, *Last name* and *Phone* headers and order them in an ascending or descending order.

### Roles and tasks

The *Roles* column informs you on the role/s attributed to each user:
- **_Data Digitizer_** (executor role)
  - can view and access the datasets of their institution
  - can [import](#import-my-data), [map](#map-my-data), [encode](#encode-my-data), [export](#export-my-data), [upload images](#upload-images) and [send for validation](#validate-my-data) the records in the datasets of their institution
- **_Collection Administrator_** (manager role)
  - can view, add, edit and remove users of their institution
  - can view, [add](#add-a-new-dataset] and edit datasets of their institution
  - can [publish](#publish-my-data) datasets on GBIF.org
 
<br>

| Tasks | _Collection Administrator_ | _Data Digitizer_ |
| ----- | ------------------ | -------------------- |
| **Users** -view/add/edit/remove | ✅ | ❌ |
| **Datasets** -view | ✅ | ✅ |
| **Datasets** -add/edit | ✅ | ❌ |
| **Records** -import/encode/export/upload images/send for validation | ❌ | ✅ |
| **Records** -filter | ✅ | ✅ |
| **Records** -publish | ✅ | ❌ |
| **Records** -download files | ✅ | ✅ |

<br>
<div style="padding: 15px; border: 1px solid transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ As the Publication of records on GBIF involves the public responsibility of the institution, we decided to change the users available tasks so that only the _Collection Administrator_ (curators, institution staff member responsible of a collection) can do this important step.
</div>
<br>

For each user, it is possible to edit the profile (📝) and delete it (🗑️).

We consider that the _Collection Administrator_ is fully responsible for the management of their institution page on DAGI. There is no need to ask for permission to add new users.

### Add a new user

1. Go to the **Administration view** of your institution page by clicking on **🛠️Administration** on the left side of the page.
2. Click on **👤➕ Add User** (top-right corner of the page).
3. Enter the corresponding information in the *First name*, *Last name*, *E-Mail* (⚠️Mandatory⚠️) and *Phone* (💡optional💡) fields. The institution is automatically set and can't be changed
4. Enter a custom password or click on **Generate Password**.<br>
       ⚠️*Currently there are no user management, so do not forget to copy the password (by clicking on the 👁️‍🗨️ icon) and send it manually to the person concerned. The password of a user is available for display only during the creation steps. It is hidden afterwards.*
5. Click on **Next**.
6. Click on the toggle switch/es corresponding to the role/s you want to attribute to the new user (see the [Roles and tasks](#roles-and-tasks) section for the definitions).
7. Click on **Next**.
8. Check the Summary step and if satisfied, click on **Create user**. The new user is added on top of the list and is moved at the bottom of the list when refreshing the page.

## External links

### Guide

By clicking on **📖Guide**, a new tab is opened on the step-by-step page on how to publish data with DAGI (this page) of the SwissNatColl hosted portal. In order to facilitate the experience of our users, we check regularly the accuracy of the information given here, and update it with the new functionalities added by the development team. **Do not hesitate to [contact us](mailto:dagi@gbif.ch) if you see anything that is missing or unclear.** The purpose of this support material is to serve the users' needs.

### Tutorials

By clicking on **📹Tutorials**, a new tab is opened on the [tutorial sessions page](/en/tutorial-sessions){:target="_blank"} of the SwissNatColl hosted portal. This is where we inform you of the next live tutorial ZOOM sessions, in which you can ask your questions directly to Anne Morel, your contact person, who is acting as a bridge between you and the development team of DAGI.

On this page are also listed all the text material, use-case material and Powerpoint presentations, prepared to help you in your use of DAGI and other related subjects, such as data preparation and Darwin Core.

### Terms & Conditions

By clicking on **📄Terms&Conditions**, a new tab is opened on the [terms of use page](/en/terms/){:target="_blank"} of the SwissNatColl hosted portal. This page sets the agreements and disclaimers relating to access and use of the Data Aggregator DAGI to mobilise biodiversity Data available in Switzerland. By accessing the Data Aggregator DAGI, each user was requested to accept to comply to the terms. This acceptation is renewed everytime a _Collection Administrator_ publishes a dataset on GBIF.org.


{% include back-to-top.html %}
