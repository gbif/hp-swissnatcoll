---
layout: documentation
permalink: /en/how-to-publish-data
title: How to publish data with the Data Aggregator
description: For Swiss Natural History institutions
sideNavigation: sideNavigation.tutorials
toc: true
---
# How to publish data with the Data Aggregator
In order to publish your dataset/collection on [GBIF.org](https://www.gbif.org/){:target="_blank"} (⚠️-currently the Testing platform of GBIF-⚠️) and have it displayed on the SwissNatColl portal, you need to first prepare a file with your data (see [Prepare my data](#prepare-my-data) here below).

After this important step, you are ready to [log in](#log-in) and [upload your data](#upload-my-data) in the [Data Aggregator (DAGI) website](https://dagi.gbif.ch/sign-in){:target="_blank"}. Then, when done with the [mapping](#map-my-data) and [encoding](#encode-my-data) of your data, the dataset is ready to be [published on GBIF.org](#publish-my-data). From there, it will be displayed on the SwissNatColl portal, in the [Occurrence data](/occurrence/search){:target="_blank"} section.

A feature currently in development will also allow you to [send your swiss data for validation](#approve-my-data) by the Infospecies data centers experts.

## Checklist -to do before logging in the Data Aggregator
✅ My institution is **registered on [GrSciColl](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"}**.

> Example: [CJBG Conservatoire et Jardin botaniques de Genève](https://scientific-collections.gbif.org/institution/d200fcbc-972e-4488-bcb6-eaa47209148d){:target="_blank"}

⚠️ If your institution is not registered on GRSciColl, please contact [GBIF Swiss Node](mailto:contact@gbif.ch).

✅ My collection is **registered on [GrSciColl](https://scientific-collections.gbif.org/collection/search){:target="_blank"}**.

> Example: [CJBG-G-DC Herbier De Candolle](https://scientific-collections.gbif.org/collection/8d09b714-dbb5-4dda-976f-f2f804421f02){:target="_blank"}

⚠️ If your collection is not registered on GRSciColl or it needs adjustments, please do the appropriate suggestions of change on your GRSciColl collection page.


✅ My institution has **at least [one user](##what-are-the-different-roles-of-the-user-profile-on-the-data-aggregator){:target="_blank"}** registered in the Data Aggregator.

> - Collection Digitizer
> - Data Administrator

⚠️ If your institution does not yet have a Collection Digitizer, please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your full name, institution email and institution name.

✅ My dataset has all **mandatory fields** (attributes) to ensure correct import in the Data Aggregator.
> - scientificName ([definition](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"})
> - catalogNumber ([definition](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"})

✅ My ready-for-upload dataset file is an **UTF-8 encoded csv or text file with tab separation** with **[Darwin Core standardised columns and cell content](/en/data-aggregator-faqs#where-can-i-find-the-darwin-core-terms-description){:target="_blank"}**.

✅ My ready-for-upload dataset file has a **maximum size of 800 Mbyte (= 800 Mo)**.

<br>

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
<strong>ℹ️ You can perform as many data imports as you like</strong> as long as your data isn't published on GBIF. The Data Aggregator tracks all imported files, even if they contain the same data. <strong>If your catalogNumber values remain unchanged</strong>, each new import will update the corresponding existing data.
</div>

<br>

---


## Prepare my data

1. Focus on the most important fields first ([Mandatory fields](/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator){:target="_blank"}, [MIDS fields](/data-aggregator-faqs#additional-fields-increasing-data-quality-in-the-data-aggregator-mids){:target="_blank"}) and then proceed with the ones you think are important/interesting.
   - You don't need to upload your entire database into the Aggregator. Some of your fields are purely internal management.
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
  <p> ⚠️  avoid special symbols (#, ü, ö, é, &, %, ...) at all costs ⚠️</p>
</div>


## Log in
1. Go to the [Data Aggregator website](https://dagi.gbif.ch/sign-in){:target="_blank"}.
2. Insert your login details in the corresponding field.
  - After signing in, you arrive on Collections page of your institution. Only the users registered with your institution can see these collections


There are five different tabs on your institution page

  - **Collections**: displays all the collections of your institution already added in the Data Aggregator.
  - **Records**: displays all the records already imported, present in all of your collections.
  - **Administration**: visible only to Collection Digitizer users, displays all users already added to your institution.
  - **Guide**: opens the **How to publish data with the Data Aggregator** page on the SwissNatColl hosted portal
  - **Tutorials**: opens the **Tutorial sessions for the Data Aggregator users** page on the SwissNatColl hosted portal

## Add a new collection

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Collection Digitizer</i> role can add, edit and delete collections. The steps described in this section are unavailable for users with only the <i>Data Administrator</i> role.
</div>

1. Click on **Collections** on the left side of the window.
  - On this page, you can see all the collections of your institution that have already been added in the Data Aggregator. The names of the collections are based on the [GrSciColl collection names](https://scientific-collections.gbif.org/collection/search){:target="_blank"}.
  - If no collection has been added yet, you can click on **+ New collection** to add one
  - You can order the collection list by clicking on the **columns title** (e.g. _Name_, _Code_, _State_, _Institution Code_, _Institution_, _Progress_, _Records count / est._ and _Updated At_). By clicking twice or more, you can order it in an ascending or descending order.
  - The State column informs you of the process step currently running (_Importing_, _Encoding_, _Publishing_, _Deleting_). Unless the State of a collection is on "🕒Ready", no action can be started until the current one is executed. Depending on the number of records, it can take up to a few hours.
2. If your Collections page is empty, click either on the **+ Add a collection** button in the center of the page or on **New collection** on the top-right corner of the window (it does the same thing at this point).
3. If your Collections page already has collections, click on the **New collection** button in the top right corner.

--- A window has opened. ---

1. Select the type of your data. ⚠️**Mandatory**⚠️
    - Available types: Zoology, Botany, Geology, Paleontology
2. Select the corresponding GrSciColl Collection of your institution. ⚠️**Mandatory**⚠️
    - If the GrSciColl collection has already been used in another upload, it is not present anymore on the drop-down list of this window. You can find it on the Collections page.
3. Add a description of the collection. 💡optional💡
4. Click on **Create collection**
    - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**, or edit the collection afterwards.
    - ⚠️Do not delete a collection after creating it, especially after publishing on GBIF or it might create unwanted duplicates⚠️

## Upload my data

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ Only the <i>Data Administrator</i> can do the following steps, from the upload to the publication on GBIForg. The steps described from here on are unavailable for users with only the <i>Collection Digitizer</i> role.
</div>

1. Click on **Collections** on the left side of the window.
2. Click on the collection name in which you want to upload your data.
  - For each collection on the Data Aggregator, you have 4 tabs, in a grey bar on top of the collection page (_Records_, _Imports_, _Exports_, _Publications and Approvals_).
  - The tab **Records** displays the imported records available in your collection.
  - The tab **Imports** stores all the files you have imported, displaying the state of import, the name of the file with the number of rows, the size and the number of records imported.
  - The tab **Exports** stores all the files you have exported (see [Export my data](#export-my-data)).
  - The tab **Publications and Approvals** stores all the files you have published on GBIF.org and/or sent for approval to the InfoSpecies data centers (see [Publish my data](h#publish-my-data) and [Approve my data](#approve-my-data)).
2. If your collection is empty, click either on the **+ Import** button in the center of the page, or the **Import dataset** button in the top-right corner of the window (it does the same thing at this point).
3. If your collection already has records and you want to add new records or update the existing ones, click on the **Import dataset** button in the top-right corner.

--- A three-steps window has opened. ---

1. (Step 1 of 3) Click on **Choose a file** to select your prepared .csv/.tab/.txt file or drag and drop it if you have a folder window opened on your screen.
2. Wait until the purple bar is full.
3. Click on **Next**

### Map my data

{: .box }
The mappings window (Step 2 of 3) has three parts:
<br>  - Quick Start: if your field names are the exactly the same as the Data Aggregator's attributes, the mapping can be automatically performed by **Try auto-mapping**. The second button can be used after the first mapping and re-mapps your fields the same way you mapped them previously (as long as your field names do not change)
<br>  - Required attributes: mandatory attributes that have to be mapped in order to go to the next step. At the moment, only two attributes are mandatory in the Data Aggregator ([scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} and [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"}).
<br> - Additional columns: the other attributes present in your dataset. The number depends on the number of columns in your imported file.

1. If your fields are 100% the same as the Data Aggregator's attribute, click on **✨ Try auto-mapping** and simply check the mapping before clicking on **Update mapping**.
2. If you already did a mapping, click on **🔄️ Load existing mapping** and simply check the mapping before clicking on **Update mapping**.
3. Else, do the following steps.
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
  - The window displayed is now the Imports tab, where you can see all your imported files for a given collection at all times.
  - A progression bar appears during the import process and disappears when finished. ⚠️ Depending on the size of your imported dataset, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the import state.
  - If the import worked, the State is **✅ Imported**
10. Click on **Records** to see your imported records.
        
<div style="text-align: center; margin-top: 50px; border: 5px solid #000; padding: 20px;">
  <p style="font-size: 20px;"><strong>What you are expected to have at the end of this step:</strong></p>
  <p>✅ A certain amount of imported records shown in the <strong>Records</strong> tab of your collection page. If it was your first import in this collection, then the <strong>Not encoded</strong> percentage is 100%.</p>
</div>

## Encode my data

1. Click on **Encode**.
  - A window opens with a short summary of what the encoding does.
  - If you change your mind, you can cancel and close the window at any time by clicking on **Cancel**.
2. Click on **Encode**.
  - A progression bar appears during the encoding process and disappears when launched. ⚠️ Depending on the number of your records, this step can take up to a day to be completed ⚠️ Closing your navigator has not impact on the process, you can come back later to check the encoding state.
  - During the encoding, no other action can be started.
3. Check the percentage of encoded data on your Collection page.
  - Below the grey band with Records - Imports - Exports - Publication and Approvals, there are two boxes displaying first the total number of records (*All records*) and second the percentage and number of un-encoded records (*Not encoded*).
  - By clicking on any **record**, and then on the **Record encodings** drop-down list, you can check the encoding state of all catalogs used for encoding and enriching your data (e.g. geo_reverse, swiss_species, gbif_taxonomy, etc.).
  - If the status is "Incomplete", the record is "Not encoded". The reason is displayed when passing over the "Incomplete" logo with the mouse.


## Export my data

1. Click on **Export**.
2. Select the headers of the export file you want to generate (either your original headers, as imported in the [Upload my data](/en/how-to-publish-data#upload-my-data) part, or the Darwin Core (DWC) Attributes, as mapped in the [Map my data](/en/how-to-publish-data#map-my-data) part.
   - You can select only one at a time. If you want both, export the records twice.
3. Select the data layer you want to export (either your original data (Raw), as imported in the [Upload my data](/en/how-to-publish-data#upload-my-data) part, or the encoded data, as encoded in the [Encode my data](/en/how-to-publish-data#encode-my-data) part.
   - You can select only one at a time. If you want both, export the records twice.
4. Click on **Start export**.
  - The page view changes from "Records" to "Exports" where all of your exported files are listed.
  - A progression bar appears during the export process and disappears when finished.
3. Click on the **blue icon** of your export file in the _Size_ column.
  - The file is now saved as a .zip file on your computer (usually in the Dowloads folder or on your Desktop).
4. Go to the zip file on your computer and extract the CSV file it contains.
  - A unique file name for this CSV file has been generated by the Data Aggregator.
  - Your data content is separated by commas.


## Publish my data

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
❌ For technical reasons, the publication of your records on GBIF.org is currently unavailable. In the meantime, <strong>your published data are on GBIF-UAT</strong> (technical page of GBIF), where you can have a preview of how your dataset page will look like on GBIF.org<br>
We thank you for your patience and understanding.
</div>

- By filtering your records in a Collection, you can select a certain set of records to be published.

1. Click on **Publish**.
   - A window opens with a short summary of what the publication entitles.
   - Note that the data published comes from the Encoded layer of the Data Aggregator. Encoding your data is mandatory to publish it on GBIF.
2. Tick the check box if you agree with our [terms and conditions](/en/terms/){:target="_blank"} and accept full responsibility for the publication.
   - Note that your institution, as data owner and provider, is fully entitled for the quality of the data published through the Data Aggregator and to GBIF. Errors in your published datasets are your responsibility and yours only.
3. Click on **Publish**
   - A progression bar appears during the publishing process and disappears when launched.
4. Check the Publication status of your records on your Collection page.
5. By clicking on **Show on GBIF** (purple text in the top-left corner of your collection page and visible in all tabs), you can access to the GBIF-uat page of your dataset and check the validity of the data before publishing on GBIF.org.
   - ⚠️Do not delete a collection after publishing on GBIF or it might create unwanted duplicates⚠️

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

# How to navigate in the Data Aggregator

When [logging in](#log-in) the Data Aggregator, the platform opens on the [Collections page](#collections-page).

In the top-right corner of the page, you can see your login name, the button to log out and the button to choose between light/dark/computer themes. The platform is available only in English.

## Collections view

The collections displayed here are the ones that have been added by a Collection Digitizer of your institution. You can see only the collections of the institution you have have been registered to upon creation of your user's profile. The collections are organised by default by order of creation. If you wish to order them differently, you can click on any of the available headers (Name, Code, State, Institution Code, Institution, Progress, Records count / est., Updated At) and order them in an ascending or descending order. Only the Collection Digitizers can add, edit and delete collections in the Collections page.

The State display is green (🕒Ready) when the previous action requested is finished and a new one can be done (Actions : [📤import a dataset](#upload-my-data), [📥export](#export-my-data),  [🧩encode](#encode-my-data), [🌐publish](#publish-my-data) and [✅approve](#approve-my-data)).

### Collection page

The page of a collection has 5 available tabs.

- The **Records tab** :<br> View on all imported **records** of the collection with a selection of important attributes (*Picture availability*, *IUCN tag*, *Typus*, *scientificName*, *verbatimIdentification*, *occurrenceID*, *catalogNmber*, *ecordedBy*, *identifiedBy*, *eventDate*, *stateProvince & countryCode*, *verbatimElevation*, *decimalLatitude & decimalLongitude*), the current state of the available actions (*Encoding*, *ublication status*, *Approval status*), the *MIDS quality level* and the *timestamp of the last update of the record*. <br>The tab is separated in two parts: The **filters** on top (*Quick filters*, *Search bar*, *elected layer*, *value filters*) and the **table of records** below. The number of records displayed in the table can be selected at the bottom of the page. The table of records is automatically set in different pages if the total number of records exceeds the displayed number selected.<br><br>

- The **Imports tab** :<br> View on all imported **files** of the collection with a selection of important metadata (*State of the import*, *File name*, *Size*, *timestamp of the import*, and *number of records imported from the file*). The State is either blue (⚙️*In progress*), green (✅*Imported*) or red (❌*Failed*).<br> 🔸When the state is Imported, by clicking on the green ✅*Imported* icon, a side-pane opens on the right of the window and provides information about the file itself, the mapping saved and the unmapped columns.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure. The red text informs on the number of rows with invalid data and the number of elements with a detected error. By clicking on the blue eye icon (👁️‍🗨️ = *Preview error log*) in the Error log section, a pop-up window opens with the catalog number and scientific name of the records concerned by the invalid data, the field containing the invalid data, the value that is invalid and an error message describing why it is invalid. The required changes have to be done in the import file. A new import attempt must be done to proceed further.<br><br> **All imported files, even the failed ones, are kept at all times in the DAGI server**. They are available for a download by clicking on the blue size icon (📥*xyz.x Mbyte*). Deleting a file in the Imports tab does not delete it from the server, but only from the tab view.<br><br>

- The **Exports tab** :<br> View on all exported **files** of the collection with a selection of important metadata (*State of the export*, *File name*, *Size*, *timestamp of the export*, and *number of records exported in the file*). The State is either blue (⚙️*In progress*), green (✅*Exported*) or red (❌*Failed*).<br>🔸When the state is Exported, by clicking on the green ✅*Exported* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All exported files are kept at all times in the DAGI server**. They are available for a download by clicking on the blue size icon (📥*xyz.x Mbyte*). Deleting a file in the Exports tab does not delete it from the server, but only from the tab view.<br><br>

- The **Publications and Approvals tab** :<br> View on all published or sent for approval **files** of the collection with a selection of important metadata (*State of the publication/approval*, *Channel concerned*, *File name*, *Size*, *timestamp of the publication*, and *number of records exported in the file*). The State is either blue (⚙️*In Publication*), green (✅*Done*) or red (❌*Failed*).<br>🔸When the state is Done, by clicking on the green ✅*Done* icon, a side-pane opens on the right of the window and provides information about the file.<br> 🔸When the state is Failed, by clicking on the red ❌*Failed* icon, a side-pane opens on the right of the window and provides analyses information on the cause of failure.<br><br> **All published/sent for approval files are kept at all times in the DAGI server**. They are available for a download by clicking on the blue size icon (📥*xyz.x Mbyte*). Deleting a file in the Exports tab does not delete it from the server, but only from the tab view.<br><br>


## Records view

## Admnistration view

## External links

### Guide

### Tutorials

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
