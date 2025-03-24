---
layout: documentation
permalink: /en/data-aggregator-faqs
title: DAGI FAQs
toc: true
sideNavigation: sideNavigation.tutorials
---

# Swiss Data Aggregator DAGI FAQs

## What is a data aggregator?

A data aggregator is a tool that combines data from different sources in order to build a coherent dataset that can be used for data processing, data publishing, etc. In our case, DAGI is a data aggregator platform to upload and enrich data. It's goal is to facilitate the visibility and publication of the data, specifically on GBIF.org. With the use of a versioning system and a changelog, the data can easily be updated and re-published in an up-to-date state. The development of this tool provides the opportunity to homogenize data across the Swiss institutions and automatise many processes.

<h1 style="background-color: {{ site.data.colors.lightblue.transparency}}; padding: 10px; color: black;">Data preparation</h1>

## Do I have to upload my entire database into the Data Aggregator?

There is no need to upload all of your database into the Data Aggregator DAGI. You can choose to upload only the most important fields for a selected set of records. The key element in the aggregator is the [catalogNumber field](/en/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator), which has to be unique for all of your records. If a given **catalogNumber value does not yet exist** in your DAGI Collection, then it is **created when importing** a dataset. If a given **catalogNumber value already exists** in the DAGI Collection, then its attributes (other fields) are simply **updated** when importing a dataset.

To help you select your fields, **here is a table with the most important Darwin Core terms** and an example line. You can use it to organise your dataset for the upload into DAGI.

<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">acceptedNameUsage</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">family</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">basisOfRecord</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">partOfOrganism</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedByID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimEventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">day</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">month</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">year</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">end_of_period_day</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">end_of_period_month</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">end_of_period_year</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">eventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">continent</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">higherGeography</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">country</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">countryCode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">stateProvince</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">county</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">decimalLatitude</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">decimalLongitude</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">geodeticDatum</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">coordinateUncertaintyInMeters</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimElevation</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">identifiedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">identifiedByID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">rightsHolder</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">institutionCode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">institutionID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">collectionCode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">collectionID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">preparations</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">typeStatus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">yearCollectionEntrance</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Pinus picea</i> L.</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Abies alba</i> Mill.</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Pinaceae</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">PreservedSpecimen</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">plant tissue</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">inventory-1234</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Weber Morgan</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">0000-0002-1043-7587</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">MW-54</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">6/2024</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">01</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">06</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2024</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">30</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">06</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2024</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2024-06-01/2024-06-30</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Europe</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Alpen</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Switzerland</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">CH</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Bern</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Interlaken-Oberhasli (administrative district)</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Luuswald, above Iseltwald</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">46.701815</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">7.971722</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">WGS84</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">500</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">1050-1120 m</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Weber Morgan</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">0009-0000-0012-XXXX</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Herbarium X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">g9pdh657-3268-4d51-j015-314k3528y74y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">General collection</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">t62v83k3-3zs9-6934-kk21-o49ra9e7348p</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">dried plant</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2015</td>
    </tr>
  </table>
</div>

<br><br>
The Darwin Core Github repository also offers files with all or a selection of the Darwin Core fields : [Github tdwg/dwc/dist](https://github.com/tdwg/dwc/tree/master/dist){:target="_blank"}

### How does the update of my data in the Data Aggregator work?

**You can update your data in DAGI by importing a new import file.** This file must have the two mandatory fields (catalogNumber and scientificName). The other fields in the file can be either the same as previously imported or only the fields that have to be updated. It is up to you.

During the new import, DAGI checks the **catalogNumber value** to determine if a specimen is already present in the collection records, or if it is newly imported.
- When the specimen is already present, all other fields imported are updated (scientificName too).
- When the specimen is new (new catalogNumber), the record is added to the records table with all imported fields.

### How does the update of my data on GBIF work?

**You can update your data on GBIF by publishing your collection (or a filtered set of records) again.**

During the new publication, DAGI checks the datasetID automatically generated by GBIF upon the first publication and retrieved by DAGI. It then updates all of the records and metadata of the GBIF dataset with the Darwin Core Archive file it prepared.


## But my database/dataset is not formatted in Darwin Core, do I have to change everything?

Rest assured, you do not need to change your database/dataset dramatically. The most important thing is to find the easiest and fastest way to adapt your database/dataset to import it in DAGI. Here are our 3 most popular suggestions:


<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;"><strong>1) Add the <a href="https://dwc.tdwg.org/terms/">Darwin Core terms</a></strong> in your dataset/database as new columns. With the help of <strong>scripts</strong> and <strong>formulas</strong>, pick the fields of your database and copy or adapt their values in the DwC fields in a dynamic way.
  <br><br>
  <table style="background-color: {{ site.data.colors.lightpink.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tr>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightpink.background }};">Barcode</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightpink.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:catalogNumber" target="_blank">catalogNumber</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightpink.background }};">Species</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightpink.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:scientificName" target="_blank">scientificName</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightpink.background }};">...</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
    <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i></td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
    <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
    <td style="border: 1px solid black; padding: 5px;"><i>C. hederifolium</i></td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
  </tr>
  </table>
  </div>
  
  <div style="flex: 1;">
    ✅ Darwin Core named columns/fields<br>
    ✅ No changes of original columns/fields<br>
    ❌ Duplicated in multiple columns<br>
    ❌ If not dynamic, then mistakes can lower the dataset/database quality
  </div>
</div>
<br><br>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;"><strong>2) Replace the name of your fields with the corresponding <a href="https://dwc.tdwg.org/terms/">Darwin Core term</a></strong> after checking your field compatibilities with the DwC terms definitions.
  <br><br>
  <table style="background-color: {{ site.data.colors.lightblue.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tr>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightblue.background }};"><s>Barcode</s><br><a href="https://dwc.tdwg.org/terms/#dwc:catalogNumber" target="_blank">catalogNumber</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightblue.background }};"><s>Species</s><br><a href="https://dwc.tdwg.org/terms/#dwc:scientificName" target="_blank">scientificName</a></th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightblue.background }};">...</th>
    <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightblue.background }};"><s>Date of collect</s><br><a href="https://dwc.tdwg.org/terms/#dwc:eventDate" target="_blank">eventDate</a></th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
    <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;"><s>12 VIII 1905</s><br>1905-08-12</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
    <td style="border: 1px solid black; padding: 5px;"><s><i>C. hederifolium</i></s><br><i>Cyclamen hederifolium</i> Aiton</td>
    <td style="border: 1px solid black; padding: 5px;">...</td>
    <td style="border: 1px solid black; padding: 5px;">1968-06-12</td>
  </tr>
  </table>
  </div>
  
  <div style="flex: 1;">
    ✅ Fully Darwin Core compatible dataset/database<br>
    ✅ No more changes in the future<br>
    ❌ Difficult to change habits regarding field names<br>
    ❌ Needs a deep cleaning of the whole database/dataset
  </div>
</div>
<br><br>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="flex: 3; padding-right: 70px;"><strong>3) Export a selected set of your database fields and make the correspondance with the <a href="https://dwc.tdwg.org/terms/">Darwin Core terms</a></strong>. Adapt your data with the other important DwC terms until all of the information you want to export is ready.
  <br><br>
  <p style="text-align: center; font-size: 18px;"><u>Your original data</u></p>
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">Barcode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">Species</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">Date of collect</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">Storage room</th>
     <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">...</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i></td>
      <td style="border: 1px solid black; padding: 5px;">12 VIII 1905</td>
      <td style="border: 1px solid black; padding: 5px;">General collection</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
    </tr>
    <tr>
     <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
     <td style="border: 1px solid black; padding: 5px;"><i>C. hederifolium</i></td>
     <td style="border: 1px solid black; padding: 5px;">23.6.68</td>
     <td style="border: 1px solid black; padding: 5px;">Regional collection</td>
     <td style="border: 1px solid black; padding: 5px;">...</td>
    </tr>
  </table>
  
  <p style="text-align: center; font-size: 50px;">+</p>
  <p style="text-align: center; font-size: 18px;"><u>Table imported in the Aggregator</u></p>
  
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:catalogNumber" target="_blank">catalogNumber</a></th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:scientificName" target="_blank">scientificName</a></th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};"><a href="https://dwc.tdwg.org/terms/#dwc:eventDate" target="_blank">eventDate</a></th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;">XXX-0123456</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
      <td style="border: 1px solid black; padding: 5px;">1905-08-12</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;">XXX-7891011</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Cyclamen hederifolium</i> Aiton</td>
      <td style="border: 1px solid black; padding: 5px;">1968-06-23</td>
    </tr>
  </table>
  </div>
  
  <div style="flex: 1;">
    ✅ No extra work of restructuring your database<br>
    ✅ Full control of the data you share<br>
    ❌ Duplicated data<br>
    ❌ Extensive preparation work for every update of the data online
  </div>

</div>
<br><br>

## Which fields are required/mandatory?

### Minimal mandatory fields of the Data Aggregator

| DwC term | DwC definition | In most databases | Examples |
| -------- | -------------- | ----------------- | -------- |
| [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | The full scientific name, with authorship and date information if known, or the name in lowest level taxonomic rank that can be determined. | Scientific name<br> nom scientifique<br> Wissenschaftliche Name<br> Full name<br> Nom complet | _Cyclamen hederifolium_ Aiton<br> _Vulpes vulpes_ (Linnaeus, 1758) |
| [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} | A unique identifier for the record within the data set or collection. | Code-barre<br> Numéro<br> Barcode<br> Nummer<br> Numéro d’inventaire | G00009201<br> Sheet-2765149

### Fields in the Data Aggregator with special values required

The DAGI's available attributes are based mainly on the Darwin Core terms but there are also supplementary attributes from the GBIF extensions, ABCD standard and GBIF-CH. The use of some of these attributes is also specific to our national installations.

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed;">
    <colgroup>
      <col style="width: 30%;">   <!-- DAGI Attribute -->
      <col style="width: 30%;">   <!-- Value required -->
      <col style="width: 30%;">   <!-- Examples -->
    </colgroup>
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }};">DAGI Attribute</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }};">Value required</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.exampleValues.background }};">Examples</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>catalogNumber</em></td>
      <td style="border: 1px solid black; padding: 5px;">Your institution unique ID for a specimen</td>
      <td style="border: 1px solid black; padding: 5px;">G00547679</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>occurrenceID</em></td>
      <td style="border: 1px solid black; padding: 5px;">Info Species data center unique ID for a specimen already published on GBIF before 2025</td>
      <td style="border: 1px solid black; padding: 5px;">NISM-BRYO-537533</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>materialSampleID</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH unique ID for a specimen</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH000014</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>gbifCHID ⚠️available soon</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH unique ID for a specimen</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH000014</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv95_x</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss longitude coordinate in CH1903+/LV95 format</td>
      <td style="border: 1px solid black; padding: 5px;">2598633.94</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv95_y</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss latitude coordinate in CH1903+/LV95 format</td>
      <td style="border: 1px solid black; padding: 5px;">1200386.85</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv03_x</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss longitude coordinate in CH1903/LV03 format</td>
      <td style="border: 1px solid black; padding: 5px;">657499.41</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv03_y</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss latitude coordinate in CH1903/LV03 format</td>
      <td style="border: 1px solid black; padding: 5px;">191750.14</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>associatedMedia</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>empty</em> OR the URL to a public deposit of your specimen image</td>
      <td style="border: 1px solid black; width: 30%; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><a href="https://www.digitalis.uzh.ch/media/specimen/293/Z-000293332.jpg" target="_blank">https://www.digitalis.uzh.ch/media/specimen/293/Z-000293332.jpg</a></td>
    </tr>
  </table>
</div>

### Additional fields increasing data quality in the Data Aggregator (MIDS)
The [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"} is the **M**inimum **I**nformation about a **D**igital **S**pecimen. The four levels of MIDS (1, 2, 3, 4) have been implemented in DAGI in order to provide a visualisation of the degree of information associated to a specimen. The levels are interconnected: all attributes of a certain level have to be informed in order to reach the next level.

| MIDS | DAGI Attribute | Definition | Comment |
| ---- | -------------- | ---------- | ------- |
| 1 | [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target='_blank'} | The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. <br> See the [GrSciColl official institution codes](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} | This attribute is automatically added to each record upon import in DAGI. Therefore it is not available for mapping during import |

| MIDS | DAGI Attribute | Definition | Comment |
| ---- | -------------- | ---------- | ------- |
| 2 | _partOfOrganism_ | Part or parts of the organism that have been preserved, <br>e.g. shell, skeleton, skull, soft tissue. | This is not a Darwin Core term, but it is available in DAGI |
| 2 | [taxonID](https://dwc.tdwg.org/terms/#dwc:taxonID){:target='_blank'} | An identifier for the set of dwc:Taxon information. May be a global unique identifier or an identifier specific to the data set. | By encoding your records, you obtain the taxonID of GBIF |


| MIDS | DAGI Attribute | Definition | Comment |
| ---- | -------------- | ---------- | ------- |
| 3 | [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target='_blank'} | The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context. |  |
| 3 | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target='_blank'} | A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first. |  |
| 3 | [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus){:target='_blank'} | A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject. |  |
| 3 | [originalNameUsage](https://dwc.tdwg.org/terms/#dwc:originalNameUsage){:target='_blank'} | The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated dwc:nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the dwc:scientificName or the senior/earlier homonym for replaced names. |  |
| 3 | [continent](https://dwc.tdwg.org/terms/#dwc:continent){:target='_blank'} | The name of the continent in which the Location occurs. |  |
| 3 | [country](https://dwc.tdwg.org/terms/#dwc:country){:target='_blank'} | The name of the country or major administrative unit in which the Location occurs.|  |
| 3 | [county](https://dwc.tdwg.org/terms/#dwc:county){:target='_blank'} | The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs. |  |
| 3 | [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude){:target='_blank'} | The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive. |  |
| 3 | [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude){:target='_blank'} | The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive. |  |
| 3 | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target='_blank'} | A list (concatenated and separated) of geographic names less specific than the information captured in the locality term. |  |
| 3 | [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince){:target='_blank'} | The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs. |  |
| 3 | [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target='_blank'} | The specific description of the place. |  |
| 3 | [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth){:target='_blank'} | The original description of the depth below the local surface. |  |
| 3 | [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target='_blank'} | The original description of the elevation (altitude, usually above sea level) of the Location. |
| 3 | _yearCollectionEntrance_ | The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event). | This is not a Darwin Core term, but it is available in DAGI |
| 3 | [occurrenceID](https://dwc.tdwg.org/terms/#dwc:occurrenceID){:target='_blank'} | An identifier for the dwc:Occurrence (as opposed to a particular digital record of the dwc:Occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique. | If not informed during import, this attribute is automatically copied from the _catalogNumber_. |

| MIDS | DAGI Attribute | Definition | Comment |
| ---- | -------------- | ---------- | ------- |
| 4 | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target='_blank'} | The verbatim original representation of the date and time information for a dwc:Event.| |
| 4 | [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy){:target='_blank'} | A list (concatenated and separated) of names of people, groups, or organizations who assigned the dwc:Taxon to the subject. | |
| 4 | [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier){:target='_blank'} | A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the dwc:Identification. |  |
| 4 | [identificationVerificationStatus](https://dwc.tdwg.org/terms/#dwc:identificationVerificationStatus){:target='_blank'} | A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.<br> E.g. 0 (= "unverified" in HISPID/ABCD). |  |
| 4 | _lastVerifiedBy_ | Person confirming the identification (usually a specialist of the corresponding systematic family). | This is not a Darwin Core term, but it is available in DAGI |
| 4 | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target='_blank'} | A string representing the taxonomic identification as it appeared in the original record. |  |
| 4 | [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy){:target='_blank'} | A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the dcterms:Location. |  |
| 4 | [georeferenceVerificationStatus](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus){:target='_blank'} | A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence. |  |
| 4 | [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates){:target='_blank'} | The verbatim original spatial coordinates of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem. |  |
| 4 | [verbatimLatitude](https://dwc.tdwg.org/terms/#dwc:verbatimLatitude){:target='_blank'} | The verbatim original latitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem. |  |
| 4 | [verbatimLongitude](https://dwc.tdwg.org/terms/#dwc:verbatimLongitude){:target='_blank'} | The verbatim original longitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem. |  |
| 4 | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target='_blank'} | 	The original textual description of the place. |  |
| 4 | [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target='_blank'} | _URL to the original image deposited in a public access deposit_ | The URL can either be of the institution's public image deposit or of the DAGI Media Store |
| 4 | _completeness_ | Degree of completeness of the specimen; may describe completeness of a part. <br> e.g. complete, cephalon only, complete skull | This is not a Darwin Core term, but it is available in DAGI |
| 4 | [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers){:target='_blank'} | A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same dwc:Occurrence, whether in the current or any other data set or collection. |  |
| 4 | [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target='_blank'} | The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:occurrenceRemarks. |  |


## Are there fields in Data Aggregator that are not part of Darwin Core?

Some of the fields in DAGI have been borrowed from other sources (e.g. [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"}, GBIF Swiss Node) or have been homemade to answer specific needs of our swiss institutions (e.g. our swiss coordinates systems). These attributes can't be yet published on GBIF (because GBIF does not have the structure for them). However some are used in DAGI during the encoding.

Here is a table with those fields and their definition:

| DAGI Attribute                        | Description                                                                                                                                                     | Examples                                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| endOfPeriodDay                   | The integer day of a date marking the end of an interval in which the Event occurred.                                                                            | 2, 30                                                                                            |
| endOfPeriodMonth                 | The ordinal month of a date marking the end of an interval in which the Event occurred.                                                                          | 2 (February), 11 (November)                                                                      |
| endOfPeriodYear                  | The four-digit year of a date marking the end of an interval in which the Event occurred, according to the Common Era Calendar.                                  |                                                                                                  |
| generalEnvironment               | Delarze et al. 2015: General Environment                                                                                                                         |                                                                                                  |
| habitatCode                      | Habitat Code                                                                                                                                                     | 6.-2.1                                                                                           |
| habitatContact                   | Delarze et al. 2015: Contact                                                                                                                                     |                                                                                                  |
| habitatInclusion                 | Delarze et al. 2015: Inclusion                                                                                                                                    |                                                                                                  |
| habitatRef                       | Habitat Coding Reference                                                                                                                                         | Delarze et al. 2015                                                                              |
| influence                        | Delarze et al. 2015: Influence                                                                                                                                    |                                                                                                  |
| landscapeStructure               | Delarze et al. 2015: Landscape Structure                                                                                                                          |                                                                                                  |
| microStructure                   | Delarze et al. 2015: Microstructure                                                                                                                               |                                                                                                  |
| substratum                       | Delarze et al. 2015: Substratum                                                                                                                                    |                                                                                                  |
| substratumState                  | Delarze et al. 2015: State of substratum                                                                                                                           |                                                                                                  |
| placeOfOrigin                    | The place of origin for material that has been transported during its history e.g. glacial erratics and meteorites.                                                |                                                                                                  |
| evidenceType                     | Type of evidence or validation criterion considered (preferably according to a controlled vocabulary).                                                             | identified by genitalia                                                                          |
| lastVerifiedBy                   | Person confirming the identification (usually a specialist of the corresponding systematic family).                                                               | Huber C.                                                                                         |
| lastVerifiedByID                 | Globally Unique Identifier of the person confirming the identification (usually a specialist of the coresponding systematic family).                              | https://orcid.org/0000-0003-3283-7764                                                            |
| swissCoordinatesLv03_x          | Swiss Coordinates CH1903/LV03, value towards the East (6 digits, https://epsg.io/21781).                                                                          | 574175,61                                                                                        |
| swissCoordinatesLv95_x          | Swiss Coordinates CH1903+/LV95, value towards the East (7 digits, https://epsg.io/2056).                                                                          | 2574174,86                                                                                       |
| swissCoordinatesLv03_y          | Swiss Coordinates CH1903/LV03, value towards the Nord (6 digits, https://epsg.io/21781).                                                                          | 103975,67                                                                                        |
| swissCoordinatesLv95_y          | Swiss Coordinates CH1903+/LV95, value towards the Nord (7 digits, https://epsg.io/2056).                                                                          | 1104009,83                                                                                       |
| waterbodyID                      | The ID of the water body in which the Location occurs (according to a registry such as GEWISS).                                                                   | CH0000180000 (for Walibach, Bennwil BL)                                                          |
| anatomicalDescription            | Free text description of the preserved part of organism.                                                                                                          | Mand. Dext. Mit Winkel und Ramus ascendens M3-P3                                                 |
| articulation                     | Articulation in the preserved specimen - applies to invertebrate shells and exoskeletons as well as vertebrate skeletons.                                          | articulated, dis-articulated, single valves                                                      |
| assemblageOrigin                 | The mode of origin of the assemblage.                                                                                                                             | unknown, allochthonous, autochthonous, paraautochthonous                                          |
| barcodeLabel                     | Unique Specimen Identifier (Barcode Tag)                                                                                                                          | GBIFCH00376402, NMLU-ENT000115                                                                   |
| bioerosion                       | Damage due to biological action.                                                                                                                                  | boring worms, sponges                                                                            |
| completeness                     | Degree of completeness of the specimen; may describe completeness of a part.                                                                                       | complete, cephalon only, complete skull                                                          |
| depositionalEnvironmentText      | Original environment in which the rock was deposited or the mineral formed.                                                                                       | hypersaline lagoon, lacustrine, intertidal                                                       |
| depositionalEnvironmentType      | Keywords from enumerated list for indexing of depositional environments                                                                                           |                                                                                                  |
| dnaBankID                        | Internal identifier assigned by the institution currently storing the DNA sample.                                                                                  |                                                                                                  |
| dnaStableID                      | GBIFCH identifier assigned by the Biobank to the DNA sample.                                                                                                       |                                                                                                  |
| encrustation                     | Biological encrustations.                                                                                                                                        | oysters and tube worms                                                                           |
| extractionTemporaryID            | Identifier assigned by the lab, temporarily ensuring links between genetic information.                                                                             |                                                                                                  |
| feedingPredationTraces           | Aspects of feeding and predation.                                                                                                                                | ammonite with bite mark from plesiosaur, shell drilled by predatory gastropod                    |
| form                             | The original or a mold, cast etc. of the specimen.                                                                                                                |                                                                                                  |
| gbifDOI                          | GBIF DOI generated for a specimen                                                                                                                                 |                                                                                                  |
| matrix                           | The sediment or mineral matrix enclosing the fossil.                                                                                                              |                                                                                                  |
| mineralization                   | The form of mineralization.                                                                                                                                       |                                                                                                  |
| organismQuantityMethod           | Count type. Without indication, a number expressed in organismQuantity is interpreted as exact count.                                                               | exact count, estimation, minimum number                                                          |
| orientation                      | Orientation of the fossil remains in the host rock.                                                                                                               | unknown, life position, topped                                                                   |
| origColAuthor                    | Originator of a physical collection ("LEG"), possibly differing from the collector in the field (recordedBy). Information relevant for validation/plausibilisation of specimen occurrence records (cf. Monnerat et al. 2015). |                                                                                                  |
| originalBiominerals              | Origins of biomaterial preserved in the specimen.                                                                                                                 |                                                                                                  |
| paleoCompleteness                | An indication of the completeness of the representation of an organism.                                                                                           | disarticulated, complete                                                                         |
| partOfOrganism                   | Part or parts of the organism that have been preserved.                                                                                                           | shell, skeleton, skull, soft tissue                                                              |
| postBurialTransportation         | Any post burial transport of fossil material.                                                                                                                     | river transport, scree slope                                                                     |
| replacementMinerals              | List of replacement minerals in the specimen.                                                                                                                     | silica                                                                                           |
| taphonomy                        | The life position, allochthonous death assemblage, post mortem history details etc.                                                                                 |                                                                                                  |
| tissueBankID                     | GBIFCH identifier assigned by the Biobank to the tissue sample.                                                                                                    |                                                                                                  |
| yearCollectionEntrance           | The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event).                                | 1897                                                                                             |
| dnaBankInstitution               | Biobank for long-term storage of DNA samples.                                                                                                                     |                                                                                                  |
| dnaInstitution                   | Institution that still has the DNA.                                                                                                                               |                                                                                                  |
| dnaStorageCode                   | Information on the place of storage of the DNA - Identifier, Location                                                                                             |                                                                                                  |
| preservationAlterationText       | Mineralogical changes in preserved specimens.                                                                                                                     | original shell material preserved, replacement minerals, re-crystallisation, silicification      |
| preservationMethod               | Preservation method for a specimen.                                                                                                                               | ethanol 70%, dried                                                                               |
| preservationModeKeywords         | Keywords for how fossil material has been preserved.                                                                                                              | body, cast, mold, trace fossil, soft parts mineralised                                            |
| preservationModeText             | Mode of preservation.                                                                                                                                            | is the specimen a cast or mold, are soft parts preserved or mineralised                          |
| preservationQuality              | Preservation quality; includes preservation of anatomical detail and softparts.                                                                                    | poor, medium, good, excellent                                                                    |
| preservationSpecialMode          | Keywords for any special mode of preservation.                                                                                                                    | preserved in amber or frozen in tundra, tar pit                                                  |
| storageCode                      | The verbatim code of a storage or container unit; as it is mentioned or stated by the institution providing the resource.                                           |                                                                                                  |
| storageName                      | The type of storage that applies to entry. Usually refers to a vocabulary provided by the institution, e.g. "container", "compactus".                             |                                                                                                  |
| tissueBankInstitution            | Biobank for long-term storage of tissue samples.                                                                                                                   |                                                                                                  |
| dateAvailable                    | Earliest release date conveined                                                                                                                                   |                                                                                                  |
| specificAuthorOfRecord           | Author(s) to be cited for this record                                                                                                                             |                                                                                                  |
| specifyEvent                     | Flag regulating the release of temporal data                                                                                                                      |                                                                                                  |
| specifyLocality                  | Flag regulating the release of spatial data                                                                                                                       |                                                                                                  |
| specifyOrganismName              | Flag regulating the release of identification data                                                                                                                |                                                                                                  |
| specifyPerson                    | Flag regulating the release of person data                                                                                                                        |                                                                                                  |


## How can I check if my import file is encoded in UTF-8?

* Open your file with the <img src="https://static.wikia.nocookie.net/logopedia/images/0/07/Notepad_Win11.svg" style="vertical-align:middle" height="15" width="15"> Notepad app.
* Check the bottom right of the Notepad window.

<img src="/assets/images/inline_Illustrations/FileEncoding-NotepadWindowsANSI.png" alt="TXT file in ANSI encoding (Windows-1252/WinLatin1)" width="453" height="201" style="vertical-align:middle;margin:0px 100px">

<img src="/assets/images/inline_Illustrations/FileEncoding-NotepadWindowsUTF8.png" alt="TXT file in UTF-8 encoding (Unicode Transformation Format – 8-bit)" width="451" height="204" style="vertical-align:middle;margin:0px 100px">

* Save your file with the "Save as" option and change the encoding to UTF-8.


<h1 style="background-color: {{ site.data.colors.lightblue.transparency}}; padding: 10px; color: black;">Data Aggregator functionalities</h1>

## Can I upload images in the Data Aggregator?

There are two ways to have images associated to your records in DAGI.
1. Insert the URL of your image (when deposited in a public repository) in the attribute _associatedMedia_ --> see [here below](#my-images-are-already-publicly-available-on-a-website-do-i-have-to-upload-them-too).
2. Upload your pictures in ZIP files in the DAGI Media Store.

### My images are already publicly available on a website, do I have to upload them too?

No, you don't need the Media Store of DAGI if your images are already available publicly. What you can do is write down the **link to your images** in the field [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target='_blank'}.

> Example 1: associatedMedia = [https://www.digitalis.uzh.ch/media/specimen/293/Z-000293332.jpg](https://www.digitalis.uzh.ch/media/specimen/293/Z-000293332.jpg)<br>

## I made a mistake when importing my data into the Data Aggregator, what do I do?

DAGI has a structure in three different layers (imported data, encoded data and approved data). For each of them, the history of all imported data is kept continuously. Therefore you can simply re-upload your correct dataset, do the correct mapping and encode it again. As long as your catalogNumber data is consistent, the rest is simply updated when importing a dataset with known catalogNumber values.

## What are the different roles of the user profile on the Data Aggregator?

There are two different roles for user profile in DAGI:
- **Data Administrator**
  - can view the collections of their institution
  - can upload, map, encode, export and publish the records in the collections of their institution
<br>
- **Collection Digitizer**
  - can view, add, edit and remove users of their institution
  - can view, add and edit collections of their institution
 
<br>

| Tasks | Data Administrator | Collection Digitizer |
| ----- | ------------------ | -------------------- |
| **Users** -view/add/edit/remove | ❌ | ✅ own institution |
| **Collections** -view | ✅ own institution | ✅ own institution |
| **Collections** -add/edit | ❌ | ✅ own institution |
| **Records** -upload/mapping/encode/export/publish | ✅ | ❌ |

<br><br>

{: .box }
For all users and roles, the following rules apply:
<br>🔸One **institution** can have **more than one user / role**
<br>🔸One **user** is attributed to **one and only one institution**
<br>🔸One **user** can have **more than one role**
<br>🔸**A user profile is specific to an individual and must not be shared with others**

### My institution does not have a Collection Digitizer yet, what can I do?

Please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your full name and institution name, so that we can add you as a Data Aggregator's user.

### How can I have more users in my institution?

Only Collection Digitizers can add/edit/remove and assign roles to other users for their institution. To do this, go to the Administration page on DAGI (icon on the left of your DAGI's page) and click on **👤➕ Add user**.

We consider that the Collection Digitizer is fully responsible for the management of their institution page on DAGI. There is no need to ask for permission to add new users.

## What are the different data layers of the Data Aggregator?

The data inside DAGI is organised in a table, with **entities** in lines (= specimens with a unique catalogNumber value associated) and **attributes** in columns. The **value** is the information stored in a given attribute for a given entity. 

The values of a given entity can be added and updated in three different layers:
  1. The **Raw layer**: this layer contains the verbatim attributes and the interpreted attributes (encoded and enriched) imported in the import files. The import files come from the Museum, are uploaded by the museums, are updated if a new import file contains entities (records) already present in the Raw layer.
  2. The **Encoded layer**: this layer is in two parts, the encode part and the enrich part. For each encoded and enriched attribute, DAGI uses reference attributes (e.g. scientificName, locality, country, decimalLatitude/decimalLongitude, etc...) to fetch the corresponding values found in a set of thesaurii. The acquired values are then added to the corresponding entities' attribute of that layer.
  3. The **Approval layer**: this layer concerns the validation of the data by the swiss Infospecies data centers, specifically in cases where sensitive data must be hidden or replaced by a less precise information (e.g. the coordinates of a rare and threatened species are replaced by their corresponding 10 km-square).

<figure class="has-text-centered">
  <a href="/assets/images/GraphsDiagrams/Dagi_dataLayers.png" data-lightbox="image-1" 
     data-title='Inside the data store: layers and responsibilities'>
    <img src="/assets/images/GraphsDiagrams/Dagi_dataLayers.png" 
         alt="<i>Data Aggregator Layers" 
         style="max-width: 100%; height: auto; cursor: zoom-in;" />
  </a>
  <figcaption>Data Aggregator Layers</figcaption>
</figure>

### What does the Encoding do?

The Encoding process standardises important values of your data, and enriches your specimen with new standard information it did not have.

Here are the Thesaurii available in DAGI:

| Category | Resource | Field(s) used for query | Information encoded |
| -------- | -------- | ----------------------- | ------------------- |
| GBIF Taxonomy | [GBIF Species API](https://techdocs.gbif.org/en/openapi/v1/species){:target='_blank'} | scientificName | taxonID, kingdom, phylum, order, class, family, genus, specificEpithet, scientificNameAuthorship, scientificName |
| Swiss Species | PICTIS | taxonID | taxonIdCH, acceptedNameUsage |
| Geo Reverse | [OpenCage Geocoding API](https://opencagedata.com/){:target='_blank'} | decimalLatitude, decimalLongitude* | continent, country, countryCode, stateProvince, municipality, (if in CH: swissCoordinatesLv95_x,_y and swissCoordinatesLv03_x,_y) |
| Geo Forward | [OpenCage Geocoding API](https://opencagedata.com/){:target='_blank'} | country, continent | continent, country, countryCode |
| GBIF IUCN Redlist | [GBIF Species API](https://techdocs.gbif.org/en/openapi/v1/species){:target='_blank'} | taxonID | iucn_redlist_category |
| Add Institution Code | [GBIF Registry API](https://techdocs.gbif.org/en/openapi/v1/registry){:target='_blank'} ([GRSciColl](https://scientific-collections.gbif.org/){:target='_blank'}) | (Collection where encoding is done in DAGI) | institutionCode, institutionID |
| Relate Images** | DAGI Media Store | Attribute selected during Image Upload | associatedMedia |

*If decimalLatitude, decimalLongitude (=WGS84) is not informed, DAGI checks if swissCoordinatesLv95_x, swissCoordinatesLv95_y (=CH1903+/LV95) or swissCoordinatesLv03_x, swissCoordinatesLv03_y (=CH1903/LV03) are informed, and does the conversion to WGS84. The API is performed solely on decimalLatitude, decimalLongitude coordinates.

**The Image Upload is not yet available, changes to this line might occur.

#### Example of encoded data

<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }};"  rowspan="2">API Category</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }};" colspan="2">Source Data</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.exampleValues.background }};" colspan="2">Output Data = ENCODED</th>
    </tr>
    <tr>
      <th style="border: 1px solid black; padding: 5px; text-align: left; background-color: {{ site.data.colors.value.transparency }};">Attribute</th>
      <th style="border: 1px solid black; padding: 5px; text-align: left; background-color: {{ site.data.colors.value.transparency }};">Value (example)</th>
      <th style="border: 1px solid black; padding: 5px; text-align: left; background-color: {{ site.data.colors.exampleValues.transparency }};">Attribute</th>
      <th style="border: 1px solid black; padding: 5px; text-align: left; background-color: {{ site.data.colors.exampleValues.transparency }};">Value (example)</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="10">GBIF Taxonomy</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="10">scientificName</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="10"><i>Enydra anagallis</i> Gardner</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">taxonID</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">5402444</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">kingdom</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Plantae</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">phylum</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Tracheophyta</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">class</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Magnoliopsida</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">order</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Asterales</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">family</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Asteraceae</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">genus</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Enydra</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">scientificName</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Enydra anagallis</i> Gardner</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">scientificNameAuthorship</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Gardner</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;text-align: left;">specificEpithet</td>
      <td style="border: 1px solid black; padding: 5px;text-align: left;">anagallis</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="2">Swiss Species</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="2">taxonID</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="2">5998041</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">taxonIdCH</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">22879</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">acceptedNameUsage</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Cerambyx miles</i> Bonelli, 1823</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="9">Geo Reverse</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="9">decimalLatitude<br>decimalLongitude</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="9">47.65545071<br>8.667665926</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">continent</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Europe</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">country</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Switzerland</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">countryCode</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">CH</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">stateProvince</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Zurich</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">municipality</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Benken (ZH)</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv95_x</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2692331.25671</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv95_y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">1279034.48212</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv03_x</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">692331.25671</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv03_y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">279034.48212</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="3">Geo Forward</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="3">country<br>continent</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;" rowspan="3">Suisse<br>Europe</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">continent</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Europe</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">country</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Switzerland</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">countryCode</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">CH</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;">GBIF IUCN Redlist</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;">taxonID</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left; vertical-align: top;">3188295</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">iucn_redlist_category</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">EN</td>
    </tr>
  </table>
</div>

## How do I most effectively open a csv file?

CSV files are quite tricky to open with Excel because the encoding of the file is forced by the system (usually ANSII), even if the file itself is UTF-8 encoded.

Here is the **safest method to open any csv file**:
1. Open a new empty excel workbook.
2. Click on **Data** in the Quick Access Toolbar (File  Home  Insert  Page Layout  Formulas **Data** Review ...).
3. Click on **Get Data** in the Ribbon (First element on the left of the Data ribbon).
4. Choose **From File** and then **From Text/CSV**.
- A pop-up window opens, displaying the content of your CSV file, the corresponding encoding and the separation used. Make sure that the encoding format is "65001: Unicode (UTF-8)" for the File Origin.
5. Click on **Load** at the bottom of the pop-up window
- Your data is now being loaded in your excel workbook and is now correctly displayed as a table.

## How do I change the table format of my opened CSV file?

1. Select your whole dataset (Cnrtl + A).
2. Click on **Table Design** in the Quick Access Toolbar ( ... Automate  Help  **Table Design** Query).
3. Click on **Conver to range** in the Ribbon (Second element, bottom line, on the left of the Table Design ribbon).
- Your data is now a usual excel sheet.

<h1 style="background-color: {{ site.data.colors.lightblue.transparency}}; padding: 10px; color: black;">Special cases</h1>

## My institution already has data on GBIF.org, how is this dealt with?

If some data in your database has already been sent to an Infospecies data center and/or GBIF Swiss Node and/or GBIF.org, please **get in contact with [GBIF Swiss Node](mailto:contact@gbif.ch)** before uploading this data in DAGI.

<br>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
✅ If you already know which specimens of your collection have been sent to or obtained from an Infospecies data center, please inform the data center identifier in the field <strong>occurrenceID</strong> of your dataset.
</div>
<br>

## My institution has geological specimens (rocks and such), what have you planned about it?

Currently, DAGI and SwissNatColl hosted portal are mainly oriented for biological data (including fossils and paleontology). On the other side, GBIF.org does not support geological data.

The inclusion of the geological data of Switzerland is still in discussion, and no planning can be determined at the point where we stand at the moment.

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
      background-color: {{ site.data.colors.siteColor.background }};
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
      background-color: {{ site.data.colors.siteColor.background }};
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
