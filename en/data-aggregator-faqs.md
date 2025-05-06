---
layout: documentation
permalink: /en/data-aggregator-faqs
title: DAGI FAQs
toc: true
sideNavigation: sideNavigation.tutorials
---

# Swiss Data Aggregator DAGI FAQs

## What is a data aggregator?

A data aggregator is a **tool that combines data from different sources in order to build a coherent dataset** that can be used for data processing, data publishing, etc. 

**DAGI is a swiss data aggregator application to upload and enrich data from the natural history institutions and collections of Switzerland and to publish it on [GBIF.org](https://www.gbif.org/){:target="_blank"}**. Using this tool facilitates the visibility and publication of the swiss natural history data. With the use of a **versioning system** and a **changelog**, the data **can be easily updated** and **re-published in an up-to-date state**. The development of this tool provides the opportunity to homogenize data across the Swiss institutions and automatise many time-consuming processes.

## Who is in charge of DAGI?

DAGI is currently under the management of the GBIF Swiss Node ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"}), affiliated to the InfoSpecies data center Info fauna ([infofauna.ch](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}).

For questions regarding DAGI, please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch). We will be happy to provide you answers and support or adress you to the correct person.

<br>

![DAGI, global overview](/assets/images/GraphsDiagrams/DAGI_largeOverview.png "DAGI, global overview")

<br>

## Who is DAGI for?

DAGI's **main users are the swiss natural history institution's staff** in charge of managing and working with the natural history collections (e.g. curators, scientific collaborators, people appointed by the institution). The **institutions concerned are the ones registered in the Global Registry of Scientific Collections** ([GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"})

<h1 style="background-color: {{ site.data.colors.lightblue.transparency}}; padding: 10px; color: black;">Data preparation</h1>

## Do I have to upload my entire database into the Data Aggregator?

**There is no need to upload all of your database into the Data Aggregator DAGI.** You can choose to upload **only the most important fields for a selected set of records**. Keep in mind that the **key element** of the data you import in DAGI is the [catalogNumber attribute](/en/data-aggregator-faqs#minimal-mandatory-fields-of-the-data-aggregator), which has to be unique for all of your records. If a given **catalogNumber value does not yet exist** in your DAGI Collection, then it is **created when importing** a dataset. If a given **catalogNumber value already exists** in the DAGI Dataset, then its attributes (other fields) are simply **updated** when importing a new file.

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
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">preparations</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">typeStatus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">yearCollectionEntrance</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Pinus picea</i> L.</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"><i>Abies alba</i> Mill.</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Pinaceae</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">preservedSpecimen</td>
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
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Europa</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Alpen</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Switzerland</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">CH</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Bern</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Interlaken-Oberhasli (administrative district)</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Luuswald</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">46.701815</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">7.971722</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">WGS84</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">500</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">1050-1120 m</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Weber Morgan</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">0009-0000-0012-XXXX</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">Herbarium X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">dried plant</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2015</td>
    </tr>
  </table>
</div>

<br><br>
The Darwin Core Github repository also offers files with all or a selection of the Darwin Core terms : [Github tdwg/dwc/dist](https://github.com/tdwg/dwc/tree/master/dist){:target="_blank"}

### How does the update of my data in the Data Aggregator work?

**You can update your data in DAGI by importing a new import file.** This file must have the two mandatory fields (_catalogNumber_ and _scientificName_). The other fields in the file can be either the same as previously imported or only the fields that have to be updated. It is up to you.

During the new import, DAGI checks the **_catalogNumber_ value** to determine if a record is already present in the DAGI dataset, or if it is newly imported.
- When the record is already present, all other attributes imported are updated (_scientificName_ too).
- When the record is new (new catalogNumber), the record is added to the records table with all imported attributes.

### How does the update of my data on GBIF work?

**You can update your data on GBIF by publishing your dataset again.**

After the first publication, DAGI retrieves the datasetID that has been automatically generated by GBIF for the new dataset. During the new publication, DAGI checks if the datasetID exists on GBIF. It then updates all of the records and metadata of the GBIF dataset with the Darwin Core Archive file it prepared.


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
      <td style="border: 1px solid black; padding: 5px;">Your institution unique ID for a specimen (ideally starting with your institution or collection code)</td>
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
      <td style="border: 1px solid black; padding: 5px;"><em>gbifCHID</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH unique ID for a specimen</em></td>
      <td style="border: 1px solid black; padding: 5px;"><em>GBIFCH000014</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv95_E</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss longitude coordinate in CH1903+/LV95 format <br> _(always starts with a "2")_</td>
      <td style="border: 1px solid black; padding: 5px;">2598633.94</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv95_N</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss latitude coordinate in CH1903+/LV95 format <br> _(always starts with a "1")_</td>
      <td style="border: 1px solid black; padding: 5px;">1200386.85</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv03_E</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss longitude coordinate in CH1903/LV03 format <br> _(always bigger than the latitude coordinate)_</td>
      <td style="border: 1px solid black; padding: 5px;">657499.41</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;"><em>swissCoordinatesLv03_N</em></td>
      <td style="border: 1px solid black; padding: 5px;">Swiss latitude coordinate in CH1903/LV03 format <br> _(always smaller than the longitude coordinate)_</td>
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
The [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"} is the **M**inimum **I**nformation about a **D**igital **S**pecimen. The four levels of MIDS (0, 1, 2, 3) have been implemented in DAGI in order to provide a **visualisation of the degree of information associated to a record**. The levels are interconnected: all attributes of a certain level have to be informed in order to reach the next level.

{: .box}
**MIDS 0** : _Bare_ - A bare or skeletal record making the association between an identifier of a physical specimen and its digital representation, allowing for unambiguous attachment of all other information.<br>
**MIDS 1** : _Basic_ - A basic record of specimen information enabling basic discoverability as well as how the user is permitted to use the data.<br>
**MIDS 2** : _Intermediate_ - A regular level of information including data that have been agreed over time as essential for most scientific purposes.<br>
**MIDS 3** : _Extended_ - An extended level of information about a specimen including identifiers enabling connections to be made to other data present or known about the specimen.

<br><br>

<div style="height: 500px; overflow-y: auto; border: 1px solid black; padding: 5px;">
  <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
    <colgroup>
      <col style="width: 10%;">   <!-- MIDS -->
      <col style="width: 25%;">   <!-- DAGI Attribute -->
      <col style="width: 25%;">   <!-- Definition -->
      <col style="width: 25%;">   <!-- Comment -->
    </colgroup>
    <thead>
      <tr>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.mids.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">MIDS</th>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.attribute.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">DAGI Attribute</th>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.value.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Definition</th>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.exampleValues.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top; text-align: center; background-color: {{ site.data.colors.mids1.transparency }};">0</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:institutionCode" target="_blank">institutionCode</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. <br> See the <a href="https://scientific-collections.gbif.org/institution/search?country=CH" target="_blank">GrSciColl official institution codes</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">This attribute is automatically added to each record upon import in DAGI. Therefore it is not available for mapping during import</td>
      </tr>
      <tr>
        <td rowspan = "2" style="border: 1px solid black; padding: 8px; vertical-align: top; text-align: center; background-color: {{ site.data.colors.mids2.transparency }};">1</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><i>partOfOrganism</i></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Part or parts of the organism that have been preserved, <br>e.g. shell, skeleton, skull, soft tissue.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">This is not a Darwin Core term, but it is available in DAGI. It is possible to concatenate multiple values with the use of the vertical bar " | ".</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:taxonID" target="_blank">taxonID</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">An identifier for the set of dwc:Taxon information. May be a global unique identifier or an identifier specific to the data set.</td>
        <td style="border: 1px solid black;  padding: 8px; vertical-align: top;">By encoding your records, you automatically obtain the taxonID of GBIF</td>
      </tr>
      <tr>
        <td rowspan = "16" style="border: 1px solid black; padding: 8px; vertical-align: top; text-align: center; background-color: {{ site.data.colors.mids3.transparency }};">2</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:eventDate" target="_blank">eventDate</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"> The structure must follow the ISO 8601-1:2019 standard. <br> 2025-04-08 <br> 2025-04-08/2025-04-10</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:recordedBy" target="_blank">recordedBy</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:typeStatus" target="_blank">typeStatus</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Good practice on GBIF is to leave it <i>empty</i> if it is not a Typus.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:originalNameUsage" target="_blank">originalNameUsage</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated dwc:nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the dwc:scientificName or the senior/earlier homonym for replaced names.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:continent" target="_blank">continent</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The name of the continent in which the Location occurs.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:country" target="_blank">country</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The name of the country or major administrative unit in which the Location occurs.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Best practice is to use current existing country names and not historical countries.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:stateProvince" target="_blank">stateProvince</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:county" target="_blank">county</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:higherGeography" target="_blank">higherGeography</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A list (concatenated and separated) of geographic names less specific than the information captured in the locality term.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:locality" target="_blank">locality</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The specific description of the place.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:decimalLatitude" target="_blank">decimalLatitude</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"> The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A coordinate conversion in DAGI allows to import the swiss coordinates and obtain the decimalLatitude by encoding.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:decimalLongitude" target="_blank">decimalLongitude</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A coordinate conversion in DAGI allows to import the swiss coordinates and obtain the decimalLongitude by encoding.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimDepth" target="_blank">verbatimDepth</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The original description of the depth below the local surface.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimElevation" target="_blank">verbatimElevation</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"> The original description of the elevation (altitude, usually above sea level) of the Location.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><i>yearCollectionEntrance</i></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">This is not a Darwin Core term, but it is available in DAGI.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:occurrenceID" target="_blank">occurrenceID</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">An identifier for the dwc:Occurrence (as opposed to a particular digital record of the dwc:Occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">If not informed during import, this attribute is automatically copied from the <i>catalogNumber</i>.</td>
      </tr>
      <tr>
        <td rowspan = "16" style="border: 1px solid black; padding: 8px; vertical-align: top; text-align: center; background-color: {{ site.data.colors.mids4.transparency }};">3</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimEventDate" target="_blank">verbatimEventDate</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The verbatim original representation of the date and time information for a dwc:Event.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:identifiedBy" target="_blank">identifiedBy</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A list (concatenated and separated) of names of people, groups, or organizations who assigned the dwc:Taxon to the subject.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:identificationQualifier" target="_blank">identificationQualifier</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the dwc:Identification.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:identificationVerificationStatus" target="_blank">identificationVerificationStatus</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.<br> E.g. 0 (= "unverified" in HISPID/ABCD).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><i>lastVerifiedBy</i></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Person confirming the identification (usually a specialist of the corresponding systematic family).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">This is not a Darwin Core term, but it is available in DAGI</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimIdentification" target="_blank">verbatimIdentification</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A string representing the taxonomic identification as it appeared in the original record.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:georeferencedBy" target="_blank">georeferencedBy</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the dcterms:Location.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus" target="_blank">georeferenceVerificationStatus</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates" target="_blank">verbatimCoordinates</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The verbatim original spatial coordinates of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="https://dwc.tdwg.org/terms/#dwc:verbatimLatitude" target="_blank">verbatimLatitude</a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The verbatim original latitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: middle;"><a href="" target="_blank"></a></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
    </tbody>
  </table>
</div>

| MIDS | DAGI Attribute | Definition | Comment |
| ---- | -------------- | ---------- | ------- |
| 4 | [verbatimLongitude](https://dwc.tdwg.org/terms/#dwc:verbatimLongitude){:target='_blank'} | The verbatim original longitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem. |  |
| 4 | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target='_blank'} | 	The original textual description of the place. |  |
| 4 | [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target='_blank'} | _URL to the original image deposited in a public access deposit_ | The URL can either be of the institution's public image deposit or of the DAGI Media Store (Image Upload on DAGI). |
| 4 | _completeness_ | Degree of completeness of the specimen; may describe completeness of a part. <br> e.g. complete, cephalon only, complete skull | This is not a Darwin Core term, but it is available in DAGI |
| 4 | [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers){:target='_blank'} | A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same dwc:Occurrence, whether in the current or any other data set or collection. |  |
| 4 | [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target='_blank'} | The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:occurrenceRemarks. |  |


## Are there attributes in DAGI that are not part of Darwin Core?

**Some of the attributes in DAGI have been borrowed from other sources** (e.g. [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"}, GBIF Swiss Node) **or have been homemade to answer specific needs** of our swiss institutions (e.g. our swiss coordinate systems). **These attributes can't be yet published on GBIF** (because GBIF does not have the structure for them). However some are used in DAGI during the encoding, and **can ben sent to the Info Species data centers through the Validation**.

Here is a table with these attributes and their definition:

<div style="height: 500px; overflow-y: auto; border: 1px solid black; padding: 5px;">
  <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
    <thead>
      <tr>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.attribute.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">DAGI Attribute</th>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.value.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Description</th>
        <th style="position: sticky; top: 0; background-color: {{ site.data.colors.exampleValues.background }}; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">endOfPeriodDay</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The integer day of a date marking the end of an interval in which the Event occurred.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">2, 30</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">endOfPeriodMonth</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The ordinal month of a date marking the end of an interval in which the Event occurred.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">2 (February), 11 (November)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">endOfPeriodYear</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The four-digit year of a date marking the end of an interval in which the Event occurred, according to the Common Era Calendar.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">generalEnvironment</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: General Environment</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">habitatCode</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Habitat Code</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">6.-2.1</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">habitatContact</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Contact</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">habitatInclusion</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Inclusion</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">habitatRef</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Habitat Coding Reference</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">influence</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Influence</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">landscapeStructure</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Landscape Structure</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">microStructure</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Microstructure</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">substratum</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: Substratum</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">substratumState</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Delarze et al. 2015: State of substratum</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">placeOfOrigin</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The place of origin for material that has been transported during its history e.g. glacial erratics and meteorites.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">evidenceType</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Type of evidence or validation criterion considered (preferably according to a controlled vocabulary).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">identified by genitalia</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">lastVerifiedBy</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Person confirming the identification (usually a specialist of the corresponding systematic family).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Huber C.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">lastVerifiedByID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Globally Unique Identifier of the person confirming the identification (usually a specialist of the coresponding systematic family).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">https://orcid.org/0000-0003-3283-7764</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">swissCoordinatesLv03_E</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Swiss Coordinates CH1903/LV03, value towards the East (6 digits, https://epsg.io/21781).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">574175.61</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">swissCoordinatesLv03_N</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Swiss Coordinates CH1903/LV03, value towards the Nord (6 digits, https://epsg.io/21781).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">103975.67</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">swissCoordinatesLv95_E</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Swiss Coordinates CH1903+/LV95, value towards the East (7 digits, https://epsg.io/2056).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">574175.61</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">swissCoordinatesLv95_N</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Swiss Coordinates CH1903+/LV95, value towards the Nord (7 digits, https://epsg.io/2056).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">103975.67</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">waterbodyID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The ID of the water body in which the Location occurs (according to a registry such as GEWISS).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">CH0000180000 (for Walibach, Bennwil BL)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">anatomicalDescription</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Free text description of the preserved part of organism.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Mand. Dext. Mit Winkel und Ramus ascendens M3-P3</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">articulation</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Articulation in the preserved specimen - applies to invertebrate shells and exoskeletons as well as vertebrate skeletons.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">articulated, dis-articulated, single valves</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">assemblageOrigin</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The mode of origin of the assemblage.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">unknown, allochthonous, autochthonous, paraautochthonous</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">barcodeLabel</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Unique Specimen Identifier (Barcode Tag)</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">GBIFCH00376402, NMLU-ENT000115</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">bioerosion</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Damage due to biological action.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">boring worms, sponges</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">completeness</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Degree of completeness of the specimen; may describe completeness of a part.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">complete, cephalon only, complete skull</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">depositionalEnvironmentText</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Original environment in which the rock was deposited or the mineral formed.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">hypersaline lagoon, lacustrine, intertidal</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">depositionalEnvironmentType</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Keywords from enumerated list for indexing of depositional environments</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dnaBankID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Internal identifier assigned by the institution currently storing the DNA sample.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dnaStableID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">GBIFCH identifier assigned by the Biobank to the DNA sample.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">encrustation</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Biological encrustations.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">oysters and tube worms</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">extractionTemporaryID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Identifier assigned by the lab, temporarily ensuring links between genetic information.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">feedingPredationTraces</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Aspects of feeding and predation.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">ammonite with bite mark from plesiosaur, shell drilled by predatory gastropod</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">form</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The original or a mold, cast etc. of the specimen.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">gbifDOI</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">GBIF DOI generated for a published dataset</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">gbifCHID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">GBIFCH unique identifier</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">matrix</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The sediment or mineral matrix enclosing the fossil.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">mineralization</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The form of mineralization.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">organismQuantityMethod</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Count type. Without indication, a number expressed in organismQuantity is interpreted as exact count.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">exact count, estimation, minimum number</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">orientation</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Orientation of the fossil remains in the host rock.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">unknown, life position, topped</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">origColAuthor</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Originator of a physical collection (“LEG”), possibly differing from the collector in the field (recordedBy). Information relevant for validation/plausibilisation of specimen occurrence records (cf. Monnerat et al. 2015).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">originalBiominerals</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Origins of biomaterial preserved in the specimen.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">paleoCompleteness</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">An indication of the completeness of the representation of an organism.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">disarticulated, complete</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">partOfOrganism</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Part or parts of the organism that have been preserved.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">shell, skeleton, skull, soft tissue</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">postBurialTransportation</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Any post burial transport of fossil material.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">river transport, scree slope</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">replacementMinerals</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">List of replacement minerals in the specimen.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">silica</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">taphonomy</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The life position, allochthonous death assemblage, post mortem history details etc.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">tissueBankID</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">GBIFCH identifier assigned by the Biobank to the tissue sample.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">yearCollectionEntrance</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event).</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">1897</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dnaBankInstitution</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Biobank for long-term storage of DNA samples.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dnaInstitution</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Institution that still has the DNA.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dnaStorageCode</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Information on the place of storage of the DNA - Identifier, Location</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationAlterationText</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Mineralogical changes in preserved specimens.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">original shell material preserved, replacement minerals, re-crystallisation, silicification</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationMethod</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Preservation method for a specimen.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">ethanol 70%, dried</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationModeKeywords</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Keywords for how fossil material has been preserved.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">body, cast, mold, trace fossil, soft parts mineralised</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationModeText</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Mode of preservation.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">is the specimen a cast or mold, are soft parts preserved or mineralised</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationQuality</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Preservation quality; includes preservation of anatomical detail and softparts.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">poor, medium, good, excellent</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preservationSpecialMode</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Keywords for any special mode of preservation.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">preserved in amber or frozen in tundra, tar pit</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">storageCode</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The verbatim code of a storage or container unit; as it is mentioned or stated by the institution providing the resource.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">storageName</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">The type of storage that applies to entry. Usually refers to a vocabulary provided by the institution, e.g. “container”, “compactus”.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">tissueBankInstitution</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Biobank for long-term storage of tissue samples.</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">dateAvailable</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Earliest release date conveined</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">specificAuthorOfRecord</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Author(s) to be cited for this record</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">specifyEvent</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Flag regulating the release of temporal data</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">specifyLocality</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Flag regulating the release of spatial data</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">specifyOrganismName</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Flag regulating the release of identification data</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">specifyPerson</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;">Flag regulating the release of person data</td>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"></td>
      </tr>
    </tbody>
  </table>
</div>

## How can I check if my import file is encoded in UTF-8?

* Open your file with the <img src="https://static.wikia.nocookie.net/logopedia/images/0/07/Notepad_Win11.svg" style="vertical-align:middle" height="15" width="15"> Notepad app.
* Check the bottom right of the Notepad window.

<img src="/assets/images/inline_Illustrations/FileEncoding-NotepadWindowsANSI.png" alt="TXT file in ANSI encoding (Windows-1252/WinLatin1)" width="453" height="201" style="vertical-align:middle;margin:0px 100px">

<img src="/assets/images/inline_Illustrations/FileEncoding-NotepadWindowsUTF8.png" alt="TXT file in UTF-8 encoding (Unicode Transformation Format – 8-bit)" width="451" height="204" style="vertical-align:middle;margin:0px 100px">

* Save your file with the _Save as_ option and change the encoding to UTF-8.


<h1 style="background-color: {{ site.data.colors.lightblue.transparency}}; padding: 10px; color: black;">Data Aggregator functionalities</h1>

## Can I upload images in the Data Aggregator?

There are **two ways to have images associated to your records** in DAGI.
1. Insert the URL of your image (when deposited in a public repository) in the attribute _associatedMedia_ --> see [here below](#my-images-are-already-publicly-available-on-a-website-do-i-have-to-upload-them-too).
2. Upload your pictures in ZIP files in the DAGI Media Store --> See the Guide section about Image Upload (available to DAGI users)

### My images are already publicly available on a website, do I have to upload them too?

No, you don't need the Media Store of DAGI if your images are already publicly available. What you can do is import the **link to your images** in the attribute [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target='_blank'}.

| associatedMedia |
| --------------- |
| https://www.digitalis.uzh.ch/media/specimen/293/Z-000293332.jpg |

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ Make sure to import the URL to the file itself (must end with the extension for it to be displayed on GBIF)
</div>

## I made a mistake when importing my data into the Data Aggregator, what do I do?

**You can simply import a new file** with the correct values and the same _catalogNumber_. The values in DAGI will be replaced. If you import empty values for an attribute in DAGI, then the attribute is emptied.

DAGI has a structure in three different layers (imported data, encoded data and validated data). For each of them, the history of all imported data is kept continuously. Therefore you can simply re-upload your correct dataset, do the correct mapping and encode it again. As long as your catalogNumber data is consistent, the rest is simply updated when importing a dataset with known catalogNumber values.

## What are the different roles of the user profile on the Data Aggregator?

There are two different roles for user profile in DAGI:
- **Collection Administrator**
  - can view, add, edit and remove users of their institution
  - can view, add and edit datasets of their institution
  - can publish datasets on GBIF.org

- **Data Digitizer**
  - can view the datasets of their institution
  - can import, encode, export and send records for Validation in the datasets of their institution
<br>
 
<br>

| Tasks | Collection Administrator | Data Digitizer |
| ----- | ------------------ | -------------------- |
| **Users** -view/add/edit/remove | ✅ | ❌ |
| **Datasets** -view | ✅ | ✅ |
| **Datasets** -add/edit | ✅ | ❌ |
| **Records** -import/encode/export/send for validation | ❌ | ✅ |
| **Records** -publish | ✅ | ❌ |

<br>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ As the Publication of records on GBIF involves the public responsibility of the institution, we decided to change the users available tasks so that only the Collection Administrator (curators, institution staff member responsible of a collection) can do this important step.
</div>
<br>

{: .box }
For all users and roles, the following rules apply:
<br>🔸One **institution** can have **more than one user / role**
<br>🔸One **user** is attributed to **one and only one institution**
<br>🔸One **user** can have **more than one role**
<br>🔸**A user profile is specific to an individual and must not be shared with others**

<br>

### My institution does not have a Collection Digitizer yet, what can I do?

Please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your full name and institution name, so that we can add you as a Data Aggregator's user.

### How can I have more users in my institution?

**Only Collection Administrators can add/edit/remove and assign roles to other users for their institution**. To do this, go to the Administration page on DAGI (icon on the left side of your DAGI's page) and click on **👤➕ Add user**.

We consider that the Collection Administrator is fully responsible for the management of their institution page on DAGI. There is no need to ask for permission to add new users.

## What are the different data layers of the Data Aggregator?

The data inside DAGI is organised in a table, with **entities** (records) in lines (= specimens with a unique catalogNumber value associated) and **attributes** in columns. The **value** is the information stored in a given attribute for a given record. 

The values of a given entity can be added and updated in three different layers:
  1. The **Raw layer**: this layer contains the verbatim attributes and the interpreted attributes (encoded and enriched) imported in the import files. The import files come from the institutions, are uploaded by the institutions, are updated if a new import file contains entities (records) already present in the Raw layer.
  2. The **Encoded layer**: this layer is in two parts, the encoded part and the enriched part. For each encoded and enriched attribute, DAGI uses reference attributes (e.g. _scientificName_, _locality_, _country_, _decimalLatitude/decimalLongitude_, etc...) to fetch the corresponding values found in a set of thesaurii. The acquired values are then added to the corresponding entities' attribute of that layer.
  3. The **Validation layer**: this layer concerns the validation of the data by the swiss Infospecies data centers, specifically in cases where sensitive data must be hidden or replaced by a less precise information (e.g. the coordinates of a rare and threatened species are replaced by their corresponding 10 km-square).

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

The Encoding process **standardises important values** of your data, and **enriches your record with new standard information** it did not have.

Here are the Thesaurii available in DAGI:

| Category | Resource | Field(s) used for query | Information encoded |
| -------- | -------- | ----------------------- | ------------------- |
| GBIF Taxonomy | [GBIF Species API](https://techdocs.gbif.org/en/openapi/v1/species){:target='_blank'} | _scientificName_ | _taxonID_, _kingdom_, _phylum_, _order_, _class_, _family_, _genus_, _specificEpithet_, _scientificNameAuthorship_, _scientificName_ |
| Swiss Species | PICTIS | _taxonID_ | _taxonIdCH_, _acceptedNameUsage_ |
| Geo Reverse | [OpenCage Geocoding API](https://opencagedata.com/){:target='_blank'} | _decimalLatitude_, _decimalLongitude_* | _continent_, _country_, _countryCode_, _stateProvince_, _municipality_, (if in CH: _swissCoordinatesLv95_E/N_ and _swissCoordinatesLv03_E/N_) |
| Geo Forward | [OpenCage Geocoding API](https://opencagedata.com/){:target='_blank'} | _country_, _continent_ | _continent_, _country_, _countryCode_ |
| GBIF IUCN Redlist | [GBIF Species API](https://techdocs.gbif.org/en/openapi/v1/species){:target='_blank'} | _taxonID_ | _iucn_redlist_category_ |
| Add Institution Code | [GBIF Registry API](https://techdocs.gbif.org/en/openapi/v1/registry){:target='_blank'} ([GRSciColl](https://scientific-collections.gbif.org/){:target='_blank'}) | (Collection where encoding is done in DAGI) | institutionCode, institutionID |
| Relate Images | DAGI Media Store | Attribute selected during Image Upload | associatedMedia |
| Date Conversion** | DAGI internal code | a. _eventDate_ <br> b. _day_, _month_, _year_, _endOfPeriodDay/Month/Year_ |  a. _day_, _month_, _year_, _endOfPeriodDay/Month/Year_ <br> b. _eventDate_

*If decimalLatitude, decimalLongitude (=WGS84) is not informed, DAGI checks if swissCoordinatesLv95_E, swissCoordinatesLv95_N (=CH1903+/LV95) or swissCoordinatesLv03_E, swissCoordinatesLv03_N (=CH1903/LV03) are informed, and does the conversion to WGS84. The API is performed solely on decimalLatitude, decimalLongitude coordinates.

** _eventDate_ value must be exactly ISO 8601-1:2019 standard YYYY-MM-DD


#### Examples of encoded data

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
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv95_E</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">2692331.25671</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv95_N</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">1279034.48212</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv03_E</td>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">692331.25671</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: left;">swissCoordinatesLv03_N</td>
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

<br>

#### Examples of data that can't be correctly encoded

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }}">DAGI Attribute</th>
      <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value that can't be encoded</th>
      <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.exampleValues.background }};">Cause</th>
      <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.exampleValues.background }};">Recommendation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 8px; vertical-align: top;">scientificName</td>
      <td style="border: 1px solid black; padding: 8px;">"Rubiaceae Coffea liberica"</td>
      <td style="border: 1px solid black; padding: 8px;">Presence of words corresponding to another rank than the species name (Genus + specific epithet + author)</td>
      <td style="border: 1px solid black; padding: 8px;">Either import "Rubiaceae" or "Coffea liberica"</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">"<i>example coming soon</i>"</td>
      <td style="border: 1px solid black; padding: 8px;">API call resulting in two options because two combinations exist with different authors</td>
      <td style="border: 1px solid black; padding: 8px;">Add the author</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">"Indet. ohne Angaben"</td>
      <td style="border: 1px solid black; padding: 8px;">API call resulting in two options because two combinations exist with different authors</td>
      <td style="border: 1px solid black; padding: 8px;">Either don't import these specimens with incomplete identification or choose a higher taxon rank (e.g. <i>kingdom</i>, <i>phylum</i>)</td>
    </tr>
    <tr>
      <td rowspan="2" style="border: 1px solid black; padding: 8px; vertical-align: top;">eventDate</td>
      <td style="border: 1px solid black; padding: 8px;">"01.01.2025"</td>
      <td style="border: 1px solid black; padding: 8px;">Only the correct ISO 8601-1:2019 standard "YYYY-MM-DD" can be encoded by the Date Conversion</td>
      <td rowspan="2" style="border: 1px solid black; padding: 8px;">Separate your <i>eventDate</i> into <i>day</i>, <i>month</i>, <i>year</i> and use the encoding of DAGI<br> or change the format to ISO 8601-1:2019</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">"2025-1-1"</td>
      <td style="border: 1px solid black; padding: 8px;">Only the correct ISO 8601-1:2019 standard "YYYY-MM-DD" can be encoded by the Date Conversion</td>
    </tr>
  </tbody>
</table>


## How do I most effectively open a csv file?

CSV files are quite tricky to open with Excel because the encoding of the file is forced by the system (usually ANSII), even if the file itself is UTF-8 encoded.

Here is the **safest method to open any csv file**:
1. Open a new empty excel workbook.
2. Click on **Data** in the Quick Access Toolbar (File - Home - Insert - Page Layout - Formulas - **Data** - Review ...).
3. Click on **Get Data** in the Ribbon (First element on the left of the Data ribbon).
4. Choose **From File** and then **From Text/CSV**.
- A pop-up window opens, displaying the content of your CSV file, the corresponding encoding and the separation used. Make sure that the encoding format is "65001: Unicode (UTF-8)" for the File Origin.
5. Click on **Load** at the bottom of the pop-up window
- Your data is now being loaded in your excel workbook and is now correctly displayed as a table.

<div style="padding: 15px; border: 1px solid transparent; border-color: #d1b3eb; margin-bottom: 20px; border-radius: 4px; color: #6a1b9a; background-color: #e6d3f2;">
📝 Be careful that the decimal separator (comma or period) can be changed by Excel itself depending if you have a french or english software.
</div>

## How do I change the table format of my opened CSV file?

1. Select your whole dataset (Crtl + A).
2. Click on **Table Design** in the Quick Access Toolbar ( ... Automate - Help - **Table Design** - Query).
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
