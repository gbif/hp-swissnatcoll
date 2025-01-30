---
layout: documentation
permalink: /en/how-to-publish-data
title: How to publish data with the Data Aggregator DAGI
description: For Swiss Natural History institutions
sideNavigation: sideNavigation.tutorials
toc: true
---
# How to publish data with the Data Aggregator DAGI

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
ℹ️ A new version has been recently released on DAGI 🎉 This page is in the work to be updated to the new features of this update. We hope you understand if something has not yet been corrected.
</div>

**In order to publish your data on [GBIF.org](https://www.gbif.org/){:target="_blank"}** (⚠️-currently on the Testing platform of GBIF-⚠️) **and have it displayed on the SwissNatColl portal**, you need to first prepare an import file with it (see [Prepare my data](#prepare-my-data) here below).

After this important step, you are ready to [log in](#log-in) and [import your data](#import-my-data) in the [Data Aggregator (DAGI) app](https://dagi.gbif.ch/sign-in){:target="_blank"}. Then, when done with the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset is ready to be [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SwissNatColl portal, in the Occurrence data section (⚠️-available when publishing on GBIF.org will be effective-⚠️).

A feature currently in development will also allow you to [send your swiss data for validation](#approve-my-data) to the Infospecies data centers experts.

## Checklist -to do before logging in the Data Aggregator DAGI

<br>✅ My institution is **registered on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}**.

> Example: [Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

⚠️ If your institution is not registered on GRSciColl, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).

<br>✅ My collection is **registered on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"}**.

> Example: [Herbarium – De Candolle's Prodromus](https://scientific-collections.gbif.org/collection/8d09b714-dbb5-4dda-976f-f2f804421f02){:target="_blank"}

⚠️ If your collection is not registered on GRSciColl or it needs adjustments, please do the appropriate changes and suggestions of change on [your GRSciColl collection page](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"}.


<br>✅ My institution has **at least [one user](#what-are-the-different-roles-of-the-user-profile-on-the-data-aggregator){:target="_blank"}** registered in DAGI.

> - Collection Digitizer
> - Data Administrator

⚠️ If your institution does not yet have a Collection Digitizer, please send a request by email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your full name, institution email and institution name.

<br>✅ My dataset has all **mandatory fields** (attributes) **correctly informed** to ensure successfull import in DAGI.
> - scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
> - catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

<br>✅ My ready-for-import dataset file is an **UTF-8 encoded csv or text file with tab separation** and **[Darwin Core standardised columns and cell content](/en/data-aggregator-faqs#where-can-i-find-the-darwin-core-terms-description){:target="_blank"}**.
> catalogNumber     scientificName     eventDate     recordedBy     ...<br>
> XXX-123456789     Poa annua L.     2024-10-09     Weber Morgan     ...<br>
> ...      ...     ...      ...     ...<br>
> XXX-234567890     Poa annua L.     2024-10-08     Weber Morgan     ...

<br>✅ My ready-for-import dataset file has a **maximum size of 800 Mbyte (= 800 Mo)**.

<br>

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
<strong>👌 You can do as many data imports as you want</strong>. The Data Aggregator tracks all imported files, even if they contain the same data. <strong>If your catalogNumber remain unchanged, each new import will update the corresponding existing data</strong>.
</div>

<br>

---


## Prepare my data

1. Focus on the most important fields first ([Mandatory fields](/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"}, [MIDS fields](/data-aggregator-faqs#additional-fields-increasing-data-quality-in-the-data-aggregator-mids){:target="_blank"}) and then proceed with the ones you think are important/interesting.
   - You don't need to import your entire database into the Aggregator. Some of your fields are purely internal management.
2. Check that your file does not have
   - catalogNumber duplicates
   - empty scientificName cells
   - duplicated headers (field names)
   - an unwanted space after a header


Please refer to our [FAQs](/en/data-aggregator-faqs){:target="_blank"} for more details on preparing your data for import into DAGI.

<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ 1 .csv or tab-separated .txt file of a maximum size of 800 Mbyte (=Mo), containing your data arranged such that <strong>each line represents one occurrence/specimen, each column represents one attribute</strong>, and <strong>there are no empty lines</strong>.</p>.
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
  <p> ⚠️ Leave <strong>uninformed cells EMPTY</strong>. Remove all "n.a.", "NA", "N/A", "unknown", etc. values from your file or you may receive an error message during import. ⚠️</p>
</div>


## Log in
1. Go to the [Data Aggregator DAGI website](https://dagi.gbif.ch/sign-in){:target="_blank"}.
2. Insert your login details in the corresponding field.
  - After signing in, you arrive on the Datasets page of your institution. Only the users registered with your institution can see this DAGI page.


There are two different views on your institution page:

  - **[Datasets](#datasets-view)**: displays all the **datasets** of your institution already added in DAGI.
  - **[Administration](#administration-view)**: ⚠️visible only to Collection Digitizers⚠️, displays all **users** already added to your institution.

Additionnally, there are two icons opening the pages on the SwissNatColl portal on which you can find help and guidance for the use of DAGI

  - **[Guide](#guide)**: opens the *How to publish data with the Data Aggregator* **page** on the SwissNatColl hosted portal
  - **[Tutorials](#tutorials)**: opens the *Tutorial sessions for the Data Aggregator users* **page** on the SwissNatColl hosted portal

## Add a new dataset

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Digitizer</i> role can add, edit and delete datasets. The steps described in this section are unavailable for users with only the <i>Data Administrator</i> role.
</div>

1. Click on **Datasets** on the left side of the window.
  - On this page, you can see all the datasets of your institution that have already been added in DAGI. The names of the datasets are based on the [GRSciColl collection names](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"}.
  - If no dataset has been added yet, you can click on **+ New dataset** to add one
  - You can order the dataset list by clicking on the **columns title** (e.g. _Name_, _Code_, _State_, _Institution Code_, _Institution_, _Progress_, _Records count / est._ and _Updated At_). By clicking twice or more, you can order it in an ascending or descending order.
  - The State column informs you of the process step currently running (_Importing_, _Encoding_, _Publishing_, _Deleting_). Unless the State of a dataset is on "🕒Ready", no action can be started until the current one is executed. Depending on the number of records, it can take up to a few hours.
2. If your Datasets page is empty, click either on the **+ Add a dataset** button in the center of the page or on **New dataset** on the top-right corner of the window (it does the same thing at this point).
3. If your Datasets page already has datasets, click on the **New dataset** button in the top right corner.

--- A pop-up window has opened. ---

1. Select the type of your data. ⚠️**Mandatory**⚠️
    - Available types: Zoology, Botany, Geology, Paleontology
2. Select the corresponding GRSciColl Collection of your institution. ⚠️**Mandatory**⚠️
    - If the GRSciColl collection has already been added on DAGI, it is not present anymore on the drop-down list of this pop-up window. You can find it on the Datasets page.
3. Add a description of the dataset. 💡optional💡
4. Click on **Create dataset**
    - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**, or edit the dataset afterwards.
    - ⚠️Avoid deleting a dataset after creating it, especially after publishing on GBIF or it might create unwanted duplicates⚠️. Please take [contact](mailto:contact-swissnatcoll@infofauna.ch) with us, so we can advise you correctly.

## Import my data

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Data Administrator</i> can do the following steps, from the import to the publication on GBIForg. The steps described from here on are unavailable for users with only the <i>Collection Digitizer</i> role.
</div>

1. Go to the **Datasets** view.
2. Click on the dataset name in which you want to import your data.
  - For each dataset in DAGI, you have 4 tabs, in a grey bar on top of the dataset page (_Records_, _Imports_, _Exports_, _Publications and Approvals_) (see the [Dataset page](#dataset-page) paragraph for a precise description).
  - The tab **Records** displays the imported records available in your dataset.
  - The tab **Imports** displays all the files you have imported.
  - The tab **Exports** displays all the files you have exported.
  - The tab **Publications and Approvals** displays all the files you have published on GBIF.org and/or sent for approval to the InfoSpecies data centers.
3. If your dataset is empty, click either on the **+ Import** button in the center of the page, or the **Import dataset** button in the top-right corner of the window (it does the same thing at this point).
4. If your dataset already has records and you want to add new records or update the existing ones, click on the **Import dataset** button in the top-right corner.

--- A three-steps pop-up window has opened. ---

1. (Step 1 of 3) Click on **Choose a file** to select your prepared .csv/.txt file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple bar is full.
3. Click on **Next**

### Map my data

{: .box }
The mappings window (Step 2 of 3) has three parts:
<br>- *Quick Start*: if your field names are exactly the same as the DAGI's attributes, the mapping can be automatically performed by **✨Try auto-mapping**. The second button can be used after the first mapping. It mapps your fields the same way you mapped them previously (as long as your field names do not change).
<br>- *Required attributes*: mandatory attributes that have to be mapped in order to go to the next step. At the moment, only two attributes are mandatory in DAGI ([scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} and [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"}).
<br> - *Additional columns*: the other attributes present in your dataset. The number depends on the number of columns in your imported file.

1. If your field names are 100% the same as the Data Aggregator's attribute, click on **✨Try auto-mapping**.
2. If you already did a mapping, click on **🔄️Load existing mapping** and simply check the mapping before clicking on **Update mapping**.
3. Else, do the following steps:
4. For the Required attributes, select in the drop-down menu **Select a column** the corresponding field in your imported file of each required attribute.
  - By typing the beginning of your field names in the search bar, you can find them more easily.
  - If unsure of the correspondence between the attributes and your field names, consult the FAQs section [Where can I find the Darwin Core terms description?](/en/data-aggregator-faqs/#where-can-i-find-the-darwin-core-terms-description).
5. For the Additional columns, either click on **➕ Add all** or add them one by one by clicking on the attribute names (with grey background) to map your fields with the additional attributes.
  - The added attributes appear at the top of the Additional columns list when added one by one, and at the bottom of the list when added with ➕ Add all.
  - The unmapped fields of your file are listed on top of the Additional columns list with a grey background. It is not mandatory to map all of your file fields.
6. Repeat these steps until all of the fields you want to import are mapped.
  - Not all of your fields may be mandatory for GBIF. Find [here](/en/data-aggregator-faqs#which-fields-are-requiredmandatory){:target="_blank"} a list with the required and optional fields guaranteeing the highest data quality.
  - If you can't find a Darwin Core term corresponding to one or more of your fields, you have the possibility to map it as a "Custom Attribute". ⚠️ Custom Attributes are currently not encoded and published on GBIF. It is still useful to have them in case they can be used in future versions.
<br>
7. When satisfied with your mapping, click on **Update mapping**.
<br>
8. (Step 3 of 3) The last step is a summary window on which you can check your file name and size, creation date, the number of rows, and the mapped and unmapped fields.
9. When satisfied, click on **Run import**.
  - The page displayed is now the Imports tab, where you can see all your imported files for a given dataset at all times.
  - A progression bar appears during the import process and disappears when finished. ⚠️ Depending on the size of your imported dataset, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the import state.
  - If the import worked, the State is **✅ Imported**
10. Click on **Records** to see your imported records.
        
<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ A certain amount of imported records shown in the <strong>Records</strong> tab of your dataset page. If it was your first import in this dataset, then the <strong>Not encoded</strong> percentage is 100%.</p>
</div>

## Encode my data

1. If you want to encode only a certain set of your data, use the **available filters**.
  - **Quick-filters**: Below the grey tab band with Records - Imports - Exports - Publication and Approvals, there are four boxes displaying from left to right: the total number of records (**All records**), the percentage and number of not-encoded records (**Not encoded / Incomplete**), the percentage and number of not-published records (**Not published**) and the percentage and number of not-approved records (**Not approved**). By selecting one, you can set a first level of filters.
  - **Search bar**: Below the Quick-filters, there is a search bar (🔍Search) which allows you to look for specific values in the following attributes : 
3. Click on **Encode**.
  - A window opens with a short summary of what the encoding does. Briefly said, it uses some fields as query values to available dictionaries of data (like GBIF API) to encode the provided values and enrich attributes with new values. It is extremely useful for taxonomic standardisation, georeferencing, species protection, etc.
  - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**.
3. Click on **Encode**.
  - A progression bar appears during the encoding process and disappears when launched. ⚠️ Depending on the number of your records, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the encoding state.
  - During the encoding, no other action can be started.
4. Check the percentage of encoded data on your Collection page (see the second box called **Not encoded / Incomplete**).
  - By clicking on any **record**, and then on the **Encodings tab** of the side-pane, you can check the encoding state of all catalogs used for encoding and enriching your data (e.g. geo_reverse, swiss_species, gbif_taxonomy, etc.).
  - If the status is "Incomplete", the record is "Not encoded". The reason is displayed when clicking on the yellow **⚠️Incomplete** icon. It opens the side-pane in the **Encodings tab**.


## Export my data

1. Click on **Export**.
2. Select the headers of the export file you want to generate (either your original headers, as imported in the [Import my data](#import-my-data) part, or the Darwin Core (DWC) Attributes, as mapped in the [Map my data](#map-my-data) part.
   - You can select only one at a time. If you want both, export the records twice.
3. Select the data layer you want to export (either your original data (Raw), as imported in the [Import my data](#import-my-data) part, or the encoded data, as encoded in the [Encode my data](#encode-my-data) part.
   - You can select only one at a time. If you want both, export the records twice.
4. Click on **Start export**.
  - The page view changes from "Records" to "Exports" where all of your exported files are listed.
  - A progression bar appears during the export process and disappears when finished.
3. Click on the **blue icon** of your export file in the _Size_ column.
  - The file is now saved as a .zip file on your computer (usually in the Dowloads folder or on your Desktop).
4. Go to the zip file on your computer and extract the CSV file it contains.
  - A unique file name for this CSV file has been generated by the Data Aggregator.
  - Your data content is separated by commas.


## Upload images

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ This feature will be available in the next release of DAGI (planned at the beginning of January 2025).
</div>

- Only images that can be linked to an **existing record** in your DAGI dataset can be uploaded.
- This feature **is NOT for high definition images**, but for enhancing the visibility of collections who don't have a publicly available image deposit.

{: .box}
**If your images are already available online, simply add the url links to your images in the attribute [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target="_blank"} of the corresponding specimen.**

<br><br>

1. Prepare a ZIP file containing your specimen images (see [this section in our FAQ](https://swissnatcoll.hp.gbif-staging.org/en/data-aggregator-faqs#can-i-upload-images-in-the-data-aggregator){:target="_blank"}).
- file name = your chosen attribute for mapping (recommended: **catalogNumber**)
- file format = **JPG, JPEG, PNG, BMP, TIFF, SVG or WEBP**
- maximal file size = **5 Mb** (Mo)
- maximale ZIP file size = **200 Mb** (Mo)

2. Click on **Image Upload** in the grey tab band of your dataset, then on **➕ Upload Images** in the middle of the page or on **📤Upload Images** in the top-right corner of the page.

--- A three-steps pop-up window has opened. ---

1. (Step 1 of 3) Click on **Choose a file** to select your prepared ZIP file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple bar is full.
3. Click on **Next**
4. (Step 2 of 3) Select in the drop-down menu **Mapping Identifier** the corresponding attribute to your file names.
5. Click on **Update mapping**
6. (Step 3 of 3) The last step is a summary window on which you can check your file name and size, creation date, the number of invalid files, and the mapped identifier.
9. When satisfied, click on **Run Mapping**.
10. You can check the status of your Image Upload
- Incomplete : All or a part of your images remained unmapped. This could be due to the name of the files and the values of the attribute you selected for the mapping. By clicking on the yellow **Incomplete** icon, a side-panel opens with the details of your Image Upload. In the Logfile section, you can click on the **📥 icon** which downloads a csv with the list of all the pictures of your ZIP file and the mapping status and attribute.
- Finished : All of your images could be mapped with a record in your dataset. By clicking on the green **✅Finished** icon, a side-panel opens with the details of your Image Upload. In the Logfile section, you can click on the **📥 icon** which downloads a csv with the list of all the pictures of your ZIP file and the mapping status and attribute.

Now, in the Records tab of your Collection, the records with an image have a green camera icon, and you can see the image when opening the side-panel of a record (only the first image is displayed if multiple images have been mapped to the same record). The link to the DAGI Media Store has been added in the attribute *[associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target="_blank"}*. When publishing your data, the image will also be displayed on the GBIF occurrence page of your specimen.



## Publish my data

### Checklist -to do before publishing your data

<br>✅ The **authors of my dataset** are correct.

> Either individual names or the name of the institution can be used as authors. To verify your authors, go to the **page of your collection** on the [GBIF Registry](https://registry.gbif.org/collection/search?country=CH){:target="_blank"}, then click on **Contacts**. The contacts that will appear as authors are the ones whose **Position** details are *DAGI - Technical support*, *creator* and *metadataProvider*. If you can't do the changes yourself, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).

⚠️ These details have to be provided **in all of the datasets you want to publish**, or else the citation won't be built properly.

<br>✅ The **description of my dataset** is correct

> The description of your dataset is in a box on top of the dataset page, just below the title. To verify the description, go to the **page of your collection** on the [GBIF Registry](https://registry.gbif.org/collection/search?country=CH){:target="_blank"}, then go to the **Notes** section in the Collection details. The text written there will appear as such on your dataset page. If you can't do the changes yourself, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).

⚠️ These details have to be provided **in all of the datasets you want to publish**, or else the description won't be accurate.

<br>

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ For technical reasons, the publication of your records on GBIF.org is currently unavailable. In the meantime, <strong>your published data are on the Testing platform of GBIF</strong>, where you can have a preview of how your dataset page will look like on GBIF.org<br>
We thank you for your patience and understanding.
</div>

- By filtering your records in a Collection, you can select a certain set of records to be published.

1. Click on **Publish**.
   - A window opens with a short summary of what the publication entitles.
   - Note that the data published comes from the Encoded layer of the Data Aggregator. Encoding your data is mandatory to publish it on GBIF.
2. Tick the check box to agree with our [terms and conditions](/en/terms/){:target="_blank"} and accept full responsibility for the publication.
   - Note that your institution, as data owner and provider, is fully entitled for the quality of the data published through the Data Aggregator and to GBIF. Errors in your published datasets are your responsibility and yours only.
3. Click on **Publish**
   - A progression bar appears during the publishing process and disappears when launched.
4. Check the Publication status of your records on your Collection page.
5. By clicking on **Show on GBIF** (purple text in the top-left corner of your dataset page and visible in all tabs), you can access your GBIF dataset. It might take a few minutes/for all the occurrences to appear.
   - ⚠️Do not delete a dataset after publishing on GBIF or it might create unwanted duplicates.⚠️

## Approve my data

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ This feature is not yet active nor fully developed. Clicking on it in DAGI does not do anything.
</div>

1. Click on **Approve**.
  - A window opens with a short summary of what the approval entitles.
  - Note that only the swiss specimens will be reviewed. Records coming from other countries will be ignored.
2. Click on **Approve**.
  - A progression bar appears during the approval process and disappears when launched.
  - This process might take some time, but we currently can't say how long.
3. Check the Approval status of your records on your Collection page.


<br>

---

<br>

# How to navigate in DAGI

When [logging](#log-in) in the Data Aggregator, the platform opens on the [Datasets view](#datasets-view).

In the top-right corner of the page, you can see your login name, the button to log out and the button to choose between light/dark/computer themes. The platform is available only in English.

## Datasets view

The datasets displayed here are the ones that have been added by a Collection Digitizer of your institution. You can only see the datasets of the institution you have been registered to upon creation of your user's profile. The datasets are organised by default by order of creation. If you wish to order them differently, you can click on any of the available headers and order them in an ascending or descending order:
- *Name*: name of your dataset as stated on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"} (collection name)
- *Code*: code of your dataset as stated on [GRSciColl](https://scientific-collections.gbif.org/collection/search?country=CH){:target="_blank"} (collectionCode)
- *State*: is green (🕒Ready) when the previous action requested is finished and a new one can be done (Actions : [📤import a dataset](#import-my-data), [📥export](#export-my-data),  [🧩encode](#encode-my-data), [🌐publish](#publish-my-data) and [✅approve](#approve-my-data)).
- *Institution Code*: code of your institution as stated on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} (institutionCode)
- *Institution*: name of your institution as stated on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} (institution name)
- *Progress*: progress bar linked to the number of records already imported and the total number of specimens stated on your collection page on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}
- *Records count / est.*: numerical display of the progress, with first the number of records currently present in the dataset on DAGI and second the total number of specimens stated on your collection page on [GRSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}
- *Updated At*: timestamp of the last action executed on the dataset)

Only the Collection Digitizers can add (🪟New dataset), edit (📝) and delete (🗑️) datasets in the Datasets page.


### Dataset page

The page of a dataset has 5 available tabs.

- The **Records tab** :<br> View on all imported **records** of the dataset with a selection of important attributes (*Picture availability*, *IUCN tag*, *Typus*, *scientificName*, *verbatimIdentification*, *occurrenceID*, *catalogNumber*, *recordedBy*, *identifiedBy*, *eventDate*, *stateProvince & countryCode*, *verbatimElevation*, *decimalLatitude & decimalLongitude*), the current state of the available actions (*Encoding*, *Publication status*, *Approval status*), the *MIDS quality level* and the *timestamp of the last update of the record*. <br>The tab is separated in two parts: The **filters** on top (*Quick filters*, *Search bar*, *selected layer*, *value filters*) and the **table of records** below. The number of records displayed in the table can be selected at the bottom of the page. The table of records is automatically set in different pages if the total number of records exceeds the displayed number selected.<br><br>

- The **Imports tab** :<br> View on all imported **files** of the dataset with a selection of important metadata (*State of the import*, *File name*, *Size*, *timestamp of the import*, and *number of records imported from the file*). The State is either blue (⚙️*In progress*), green (✅*Imported*) or red (❌*Failed*).<br> 🔸When the state is Imported, by clicking on the green ✅*Imported* icon, a side-pane opens on the right of the window and provides information about the file itself, the mapping saved and the unmapped columns.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure. The red text informs on the number of rows with invalid data and the number of elements with a detected error. By clicking on the blue eye icon (👁️‍🗨️ = *Preview error log*) in the Error log section, a pop-up window opens with the catalog number and scientific name of the records concerned by the invalid data, the field containing the invalid data, the value that is invalid and an error message describing why it is invalid. The required changes have to be done in the import file. A new import attempt must be done to proceed further.<br><br> **All imported files, even the failed ones, are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon of the size (📥*xyz.x Mbyte*). Deleting a file in the Imports tab does not delete it from the server, but only from the tab view.<br><br>

- The **Exports tab** :<br> View on all exported **files** of the dataset with a selection of important metadata (*State of the export*, *File name*, *Size*, *timestamp of the export*, and *number of records exported in the file*). The State is either blue (⚙️*In progress*), green (✅*Exported*) or red (❌*Failed*).<br>🔸When the state is Exported, by clicking on the green ✅*Exported* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All exported files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon of the size (📥*xyz.x Mbyte*). Deleting a file in the Exports tab does not delete it from the server, but only from the tab view.<br><br>

- The **Publications and Approvals tab** :<br> View on all published or sent for approval **files** of the dataset with a selection of important metadata (*State of the publication/approval*, *Channel concerned*, *File name*, *Size*, *timestamp of the publication*, and *number of records exported in the file*). The State is either blue (⚙️*In Publication*), green (✅*Done*) or red (❌*Failed*).<br>🔸When the state is Done, by clicking on the green ✅*Done* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All published/sent for approval files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon of the size (📥*xyz.x Mbyte*). Deleting a file in the Exports tab does not delete it from the server, but only from the tab view.<br><br>

- The **Image Upload tab**:<br> View on all uploaded zip **files** with images. The metadata provided in this tab is more comprehensive compared to the others, as it includes not only the *State of the upload*, *File name*, *Size*, and *Timestamps of creation and start*, but also details such as the **number of mapped**, **unmapped**, and **invalid images** associated with each file. The *Mapping identifier* is also displayed and can be changed by clicking on the **Edit** action (last element in the far right side of the table). The State is either blue (⚙️In progress), green (✅Finished) or yellow (ℹ️Incomplete).<br><br> **All uploaded files are kept at all times in the DAGI server**. They are available for download by clicking on the blue icon of the size (📥*xyz.x Mbyte*).<br><br>

## Administration view

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Digitizer</i> role can access this view.
</div>

The Administration view displays **all users already added to your institution**. You can only see the users of your institution. The users are organised by default by order of creation. If you wish to order them differently, you can click on the *Email*, *First name*, *Last name* and *Phone* headers and order them in an ascending or descending order.

The *Roles* column informs you on the role/s attributed to each user:
- **Data Administrator** (execution role)
  - can view the datasets of their institution
  - can [upload](#import-my-data){:target="_blank"}, [map](#map-my-data){:target="_blank"}, [encode](#encode-my-data){:target="_blank"}, [export](#export-my-data){:target="_blank"} and [publish](#export-my-data){:target="_blank"} the records in the datasets of their institution
- **Collection Digitizer** (management role)
  - can view, add, edit and remove users of their institution
  - can view, add and edit datasets of their institution
 
<br>

| Tasks | Data Administrator | Collection Digitizer |
| ----- | ------------------ | -------------------- |
| **Users** -view/add/edit/remove | ❌ | ✅ own institution |
| **Datasets** -view | ✅ own institution | ✅ own institution |
| **Datasets** -add/edit | ❌ | ✅ own institution |
| **Records** -upload/mapping/encode/export/publish | ✅ | ❌ |

For each user, it is possible to edit their profile (📝) and delete them (🗑️).

### Add a new user

1. Click on **👤➕ Add User**
2. Enter the corresponding data in the *First name*, *Last name*, *E-Mail* (⚠️Mandatory⚠️) and *Phone* (💡optional💡) fields. The institution is automatically set and can't be changed
3. Enter a customed password or click on **Generate Password**.<br>
   ⚠️*Currently there are no user management, so do not forget to copy the password (by clicking on the 👁️‍🗨️ icon) and send it manually to the person concerned. The password of a user is available for display only during the creation steps. It is hidden afterwards.*
4. Click on **Next**
5. Click on the toggle switch/es corresponding to the role you want to attribute to the new user (see here above for the definitions).
6. Click on **Next**
7. Check the Summary step and if satisfied, click on **Create user**. The new user is added on top of the list.

## External links

### Guide

By clicking on **📖Guide**, a new tab is opened on the step-by-step tutorial to publish data with DAGI (this page) of the SwissNatColl hosted portal. In order to facilitate the experience of our users, we check regularly the accuracy of the information given here, and update it with the new functionalities added by the development team. **Do not hesitate to [contact us](mailto:contact-swissnatcoll@infofauna.ch) if you see anything that is missing or unclear.** The purpose of this support material is to serve the users' needs.

### Tutorials

By clicking on **📹Tutorials**, a new tab is opened on the [tutorial sessions page](https://swissnatcoll.hp.gbif-staging.org/en/tutorial-sessions){:target="_blank"} of the SwissNatColl hosted portal. This is where we inform you of the next live tutorial ZOOM sessions, in which you can ask your questions directly to Anne Morel, your contact person, who is acting as a bridge between you and the development team of DAGI.

On this page are also listed all the text material, video material and Powerpoint presentations, prepared to help you in your use of DAGI and also related subjects, such as data preparation and Darwin Core.

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
