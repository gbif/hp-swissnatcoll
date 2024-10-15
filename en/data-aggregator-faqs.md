---
layout: documentation
permalink: /en/data-aggregator-faqs
title: Data Aggregator
toc: true
sideNavigation: sideNavigation.tutorials
---

# Swiss Data Aggregator FAQs


<h1 style="background-color: #D3F7FF; padding: 10px; color: black;">Data preparation</h1>

## Do I have to upload my entire database into the Data Aggregator?

There is no need to upload all of your database into the Data Aggregator. You can choose to upload only the most important fields for a selected set of records. The key element in the aggregator is the [catalogNumber field](/en/data-aggregator#minimal-mandatory-fields-of-the-data-aggregator), which has to be unique for all of your records. If a given **catalogNumber value does not yet exist** in your Data Aggregator Collection, then it is **created when importing** a dataset. If a given **catalogNumber value already exists** in the Data Aggregator Collection, then its attributes (other fields) are simply **updated** when importing a dataset.

To help you select your fields, **here is a table with the most important Darwin Core terms** and an example line. You can use it to organise your dataset for the upload into the Data Aggregator.

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


## But my database/dataset is not formatted in Darwin Core, do I have to change everything?

Rest assured, you do not need to change your database/dataset dramatically. The most important thing is to find the easiest and fastest way to adapt your database/dataset to import it in the data aggregator. Here are our 3 most popular suggestions:


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

### Additional fields increasing data quality in the Data Aggregator (MIDS)
The [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"} is the **M**inimum **I**nformation about a **D**igital **S**pecimen. The four levels of MIDS (0, 1, 2, 3) expected in the Data Aggregator correspond to the minimal expected information to be present when publishing on GBIF. All of the expected fields have to be present and contain data for a record to reach the corresponding MIDS quality level.

| MIDS | DwC term (dwc:) | Definition | Corresponding terms found in datasets | Examples |
| ---- | --------------- | ---------- | ------------------------------------- | -------- |
| 0 | [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target='_blank'} | The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. <br> See the [GrSciColl official institution codes](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} | ... | BERN<br> G<br> MHNN |

| MIDS | DwC term (dwc:) | Definition | Corresponding terms found in datasets | Examples |
| ---- | --------------- | ---------- | ------------------------------------- | -------- |
| 1 | _part_of_organism_ ! _not DwC_ ! | Part or parts of the organism that have been preserved. | ... | shell<br> skeleton<br> skull<br> soft tissue |
| 1 | [preparations](https://dwc.tdwg.org/terms/#dwc:preparations){:target='_blank'} | A list (concatenated and separated) of preparations and preservation methods for a specimen. | ... | fossil<br> cast<br> photograph<br> DNA extract<br> skin<br> skull<br> skeleton<br> whole animal (ETOH)<br> tissue (EDTA) |


| MIDS | DwC term (dwc:) | Definition | Corresponding terms found in datasets | Examples |
| ---- | --------------- | ---------- | ------------------------------------- | -------- |
| 2 | _yearCollectionEntrance_ ! _not DwC_ ! | The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event). | ... | ... |
| 2 | [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target='_blank'} | The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived. | ... | ... |
| 2 | [collectionID](https://dwc.tdwg.org/terms/#dwc:collectionID){:target='_blank'} | An identifier for the collection or dataset from which the record was derived. | ...    | ... |
| 2 | [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target='_blank'} | The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context. | date of collect<br> collection date<br> date de récolte<br> Funddatum<br> date<br> Datum | August 1903<br> 01.04.85<br> 15 VII 1867 |
| 2 | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target='_blank'} | A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first. | leg.<br> collecteur<br> Sammler<br> collector  | ... |
| 2 | [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus){:target='_blank'} | A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject. | type | ... |
| 2 | [continent](https://dwc.tdwg.org/terms/#dwc:continent){:target='_blank'} | The name of the continent in which the Location occurs. | ... | ... |
| 2 | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target='_blank'} | A list (concatenated and separated) of geographic names less specific than the information captured in the locality term. | ... | ... |
| 2 | [country](https://dwc.tdwg.org/terms/#dwc:country){:target='_blank'} | The name of the country or major administrative unit in which the Location occurs.| Pays<br> Land | ... |
| 2 | [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince){:target='_blank'} | The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs. | ... |
| 2 | [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target='_blank'} | The specific description of the place. | Lieu<br> Fundort | ... |
| 2 | [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude){:target='_blank'} | The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive. | coordonnées x<br> coordinates | ...  |
| 2 | [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude){:target='_blank'} | The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive. | coordonnées y<br> coordinates | ...  |
| 2 | [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target='_blank'} | The original description of the elevation (altitude, usually above sea level) of the Location. | ... | ... |

| MIDS | DwC term (dwc:) | Definition | Corresponding terms found in datasets | Examples |
| ---- | --------------- | ---------- | ------------------------------------- | -------- |
| 3 | [county](https://dwc.tdwg.org/terms/#dwc:county){:target='_blank'} | The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.  | ... | ... |
| 3 | [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth){:target='_blank'} | The original description of the depth below the local surface.  | ...    | ... |


## Are there fields in Data Aggregator that are not part of Darwin Core?

Some of the fields in the Data Aggregator have been borrowed from other sources (e.g. [MIDS](https://www.tdwg.org/community/cd/mids/){:target="_blank"}, GBIF Swiss Node) or have been homemade to answer specific needs of our swiss institutions (e.g. our swiss coordinates systems).

Here is a table with those fields and their definition:

| Attribute                        | Description                                                                                                                                                     | Examples                                                                                         |
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
| swissCoordinates_LV03_x          | Swiss Coordinates CH1903/LV03, value towards the East (6 digits, https://epsg.io/21781).                                                                          | 574175,61                                                                                        |
| swissCoordinates_LV95_x          | Swiss Coordinates CH1903+/LV95, value towards the East (7 digits, https://epsg.io/2056).                                                                          | 2574174,86                                                                                       |
| swissCoordinates_LV03_y          | Swiss Coordinates CH1903/LV03, value towards the Nord (6 digits, https://epsg.io/21781).                                                                          | 103975,67                                                                                        |
| swissCoordinates_LV95_y          | Swiss Coordinates CH1903+/LV95, value towards the Nord (7 digits, https://epsg.io/2056).                                                                          | 1104009,83                                                                                       |
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


<h1 style="background-color: #D3F7FF; padding: 10px; color: black;">Data Aggregator functionalities</h1>

## Can I upload images in the Data Aggregator?
Ultimately, yes. This aspect is still in development and not everyone will be able to upload images in the Media Store of the Aggregator.

However, some elements can already be prepared by the institutions:

✅ My specimen image files are named after the catalogNumber of my specimen (or at least start with it).

> Example: G12346579.jpg, BERN-123456.tiff

✅ The name of the image files is added to my dataset in the field [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target='_blank'}

> Example 1: Sheet-132456789.jpg
> Example 2: Sheet-123456789_front.jpg | Sheet-123456798_back.jpg

✅ My image files to be uploaded are smaller than 5 Mb (JPEG) and 30 Mb (TIFF)

## I made a mistake when importing my data into the Data Aggregator, what do I do?

The Data Aggregator has a structure in three different layers (imported data, encoded data and approved data). For each of them, the history of all imported data is kept continuously. Therefore you can simply re-upload your correct dataset, do the correct mapping and encode it again. As long as your catalogNumber data is consistent, the rest is simply updated when importing a dataset with known catalogNumber values.


## What are the different roles of the user profile on the Data Aggregator?

There are two different roles for user profile in the Data Aggregator:
- **Data Administrator**
  - can view the collections of their institution
  - can upload, map, encode, export, activate the validation and publish the records in the collections of their institution
<br>
- **Collection Digitizer**
  - can view, add, edit and remove Data Administrator users of their institution
  - can view, add and edit collections of their institution
 
<br>

| Tasks | Data Administrator | Collection Digitizer |
| ----- | ------------------ | -------------------- |
| **Users** -add/edit/remove Collection Digitizer | ❌ | ❌ |
| **Users** -add/edit/remove Data Administrator | ❌ | ✅ own institution |
| **Collections** -add/edit | ❌ | ✅ own institution |
| **Collections** -view | ✅ own institution | ✅ own institution |
| **Dataset** -upload/mapping/encode/export/publish | ✅ | ❌ |

<br><br>

{: .box }
For all users and roles, the following rules apply:
<br>🔸One **institution** can have **more than one user / role**
<br>🔸One **user** is attributed to **one and only one institution**
<br>🔸One **user** can have **more than one role**
<br>🔸**A user profile is specific to an individual and must not be shared with others**

### My institution does not have a Collection Digitizer yet, what can I do?

Please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your full name and institution name, so that we can add you as a Data Aggregator's user.

## What are the different data layers of the Data Aggregator?

The data inside the data aggregator is organised in a table, with **entities** in lines (= specimens with a unique catalogNumber value associated) and **attributes** in columns. The **value** is the information stored in a given attribute for a given entity. 

The values of a given entity can be added and updated in three different layers:
  1. The **Raw layer**: this layer contains the verbatim attributes and the interpreted attributes (encoded and enriched) imported in the import files. The import files come from the Museum, are uploaded by the museums, are updated if a new import file contains entities (records) already present in the Raw layer.
  2. The **Encoded layer**: this layer is in two parts, the encode part and the enrich part. For each encoded and enriched attribute, the Data Aggregator uses reference attributes (e.g. scientificName, locality, country, decimalLatitude/decimalLongitude, etc...) to fetch the corresponding values found in a set of thesaurii. The acquired values are then added to the corresponding entities' attribute of that layer.
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



<h1 style="background-color: #D3F7FF; padding: 10px; color: black;">Data standards</h1>

## What is Darwin Core?

[Darwin Core](https://dwc.tdwg.org/){:target="_blank"} is a **data standard**, a template to be used when organising data in a database or a table in order to have **distinct and precise fields with a known and fixed information format** in each of them. It has been created as a helping basis to make [FAIR](https://dwc.tdwg.org/ ){:target="_blank"} data.

The direct benefit of the Darwin Core standard is the **high level of compatibility between data from different sources**.


### How is Darwin Core organised?

Each **term** of Darwin Core has a **precise and unique definition**, and for some a **controlled vocabulary** is highly recommended. The **terms** are organised in **categories**, based on the data they must contain. Concerning data of natural history institutions, the categories could correspond to these following themes:

<table border="1">
  <tr>
    <th>Theme</th>
    <th>Categories in Darwin Core</th>
  </tr>
  <tr>
    <td><strong>⛰️ Field work</strong></td>
    <td>
      <table>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#occurrence" target="_blank">Occurrence</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#measurementorfact" target="_blank">MeasurementOrFact</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#organism" target="_blank">Organism</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#livingspecimen" target="_blank">LivingSpecimen</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#materialsample" target="_blank">MaterialSample</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#humanobservation" target="_blank">HumanObservation</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#event" target="_blank">Event</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#machineobservation" target="_blank">MachineObservation</a></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td><strong>🗄️ Specimen storage</strong></td>
    <td>
      <table>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#organism" target="_blank">Organism</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#preservedspecimen" target="_blank">PreservedSpecimen</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#materialentity" target="_blank">MaterialEntity</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#fossilspecimen" target="_blank">FossilSpecimen</a></td>
        </tr>
        <tr>
         <td><a href="https://dwc.tdwg.org/terms/#materialsample" target="_blank">MaterialSample</a></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td><strong>🖥️ Database management</strong></td>
    <td>
      <table>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#record-level" target="_blank">Record-level</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#measurementorfact" target="_blank">MeasurementOrFact</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#occurrence" target="_blank">Occurrence</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#resourcerelationship" target="_blank">ResourceRelationship</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#organism" target="_blank">Organism</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#livingspecimen" target="_blank">LivingSpecimen</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#event" target="_blank">Event</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#materialcitation" target="_blank">MaterialCitation</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#identification" target="_blank">Identification</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#humanobservation" target="_blank">HumanObservation</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#taxon" target="_blank">Taxon</a></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td><strong>🐟 Taxonomy</strong></td>
    <td>
      <table>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#identification" target="_blank">Identification</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#taxon" target="_blank">Taxon</a></td>
        </tr>
      </table>
    </td>    
  </tr>
  <tr>
    <td><strong>🌍 Geography</strong></td>
    <td>
      <table>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#occurrence" target="_blank">Occurrence</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#geologicalcontext" target="_blank">GeologicalContext</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#event" target="_blank">Event</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#taxon" target="_blank">Taxon</a></td>
        </tr>
        <tr>
          <td><a href="https://dwc.tdwg.org/terms/#location" target="_blank">Location</a></td>
          <td><a href="https://dwc.tdwg.org/terms/#measurementorfact" target="_blank">MeasurementOrFact</a></td>
        </tr>
      </table>
    </td>
  </tr>
</table>


### Where can I find the Darwin Core terms description?
On the Darwin Core official website, the [Quick Reference Guide](https://dwc.tdwg.org/terms/) is the easiest to use.

Here are a few of the top-10 most used fields in natural history institutions' databases. The ones marked with a "!" should use only a [controlled vocabulary](/en/data-aggregator/#what-is-a-controlled-vocabulary).

| DwC term (dwc:) | DwC Definition | Corresponding terms found in NHC datasets | Examples |
| --------------- | -------------- | ----------------------------------------- | -------- |
| ! [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | **class [Taxon](https://dwc.tdwg.org/terms/#taxon){:target="_blank"}** <br> The **full scientific name**, with authorship and date information if known, **or** the name in **lowest level taxonomic rank that can be determined**. | Scientific name<br> nom scientifique<br> Wissenschaftliche Name<br> Full name<br> Nom complet | _Cyclamen hederifolium_ Aiton<br> _Vulpes vulpes (Linnaeus, 1758)_ |
| ! [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target="_blank"} | **class [Event](https://dwc.tdwg.org/terms/#event){:target="_blank"}**<br> The date-time or interval when the dwc:Event was recorded. Format: for a precise date: YYYY-MM-DD, for an interval: YYYY-MM-DD/YYYY-MM-DD | date of collect<br>  collection date<br>  date de récolte<br>  Funddatum | 1903-08<br> 2024-08-01<br> 1815 |
| ! [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} | **class [Occurrence](https://dwc.tdwg.org/terms/#occurrence){:target="_blank"}**<br> A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original dwc:Occurrence. | Collector<br> collecteur<br> leg. | Sutter Ruben<br> Steffen Liseli<br> Dutoit Eugen |
| [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber){:target="_blank"} | **class [Occurrence](https://dwc.tdwg.org/terms/#occurrence){:target="_blank"}**<br> An identifier given to the dwc:Occurrence at the time it was recorded (link between field notes and specimen). | field number<br> collect number<br> numéro de récolte<br> Fundnummer | 2089<br> ASM-515 |
| [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} | **class [Occurrence](https://dwc.tdwg.org/terms/#occurrence){:target="_blank"}**<br> A unique identifier for the record within the data set or collection. | Code-barre<br> Numéro<br> Barcode<br> Nummer<br> Numéro d'inventaire | G00009201<br> Sheet-2765149 |
| ! [country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | **class [Location](https://dwc.tdwg.org/terms/#location){:target="_blank"}**<br> The name of the country or major administrative unit in which the [dcterms:Location](https://dwc.tdwg.org/terms/#location) occurs. | Pays<br> Land<br> Country | Switzerland<br> France<br> Germany<br> Italy<br> Austria |
| [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} | **class [Location](https://dwc.tdwg.org/terms/#location){:target="_blank"}**<br> The original textual description of the place. | Location<br> Fundort<br> Lieu | "Les Follatères"<br> "Zürich, am See"<br> "Pizzo Leone, 1659 m" |
| ! [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target="_blank"} | **class [Location](https://dwc.tdwg.org/terms/#location){:target="_blank"}**<br> The specific description of the place. | _often not standardised in databases_ | "Les Follatères"<br> "Lake of Zürich"<br> "Pizzo Leone, summit" |
| ! [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} | **class [Record-level](https://dwc.tdwg.org/terms/#record-level){:target="_blank"}**<br> The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. | Institution | G<br> UZH:Z<br> BERN |
| ! [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target="_blank"} | **class [Record-level](https://dwc.tdwg.org/terms/#record-level){:target="_blank"}**<br> The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived. | Collection | General collection<br> Collection générale<br> Hauptsammlung |

### What is a controlled vocabulary?

A controlled vocabulary is a **standardized set of terms and phrases used to ensure consistency and accuracy in the documentation and cataloging of specimens**. This vocabulary facilitates **clear communication**, **data sharing**, and **interoperability** among researchers, institutions, and databases by providing a **common language** for describing attributes such as species, locations, and collection methods. Darwin Core is widely used for biodiversity data, to ensure that everyone uses the same terms in the same way when recording and sharing information about natural history collections.

| Existing name for a field (and DwC term) | Without controlled vocabulary | With controlled vocabulary | Reference system |
| ---------------------------------------- | ----------------------------- | -------------------------- | ---------------- |
| Name<br> Art<br> Espèce<br><br> [dwc:scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | Cyclamen hederifolium<br> C. hederifolium<br> C. hed.<br> Cyclamen hederifolium Aiton<br> hederifolium | *Cyclamen hederifolium* Aiton | [World Flora Online](https://www.worldfloraonline.org/){:target="_blank"}<br> [GBIF.org](https://www.gbif.org/){:target="_blank"}<br> [Catalog of Life](https://www.catalogueoflife.org/){:target="_blank"}<br> [Info Species, Swiss centers of information](https://www.infospecies.ch/de/){:target="_blank"} |
| Date of collect<br> Funddatum<br> Date de récolte<br><br> [dwc:eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target="_blank"} | 1. August 2024<br> 1er août 2024<br> 1° agosto 2024<br> 1 Aug. 2024<br> 1.8.2024<br> 01 VIII 2024<br> 1/8/24<br> 8/1/2024  | 2024-08-01 | [ISO 8601-1:2019](https://www.iso.org/obp/ui/en/#iso:std:iso:8601:-1:ed-1:v1:en){:target="_blank"} |
| leg.<br><br> [dwc:recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} | Ruben Sutter<br> R. Sutter<br> Sutter<br> RSutter<br> R.S. | Sutter Ruben<br> + Q96409968 ([recordedByID](https://dwc.tdwg.org/terms/#dwc:recordedByID){:target="_blank"})  | [ORCID](https://orcid.org/){:target="_blank"} (alive scientists)<br> [WIKIDATA](https://www.wikidata.org/wiki/Wikidata:Main_Page){:target="_blank"} (older scientists) |
| Country<br> Pays<br> Land<br><br> [dwc:country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | Schweiz<br> Suisse<br> Switzerland<br> Svizzera<br> Svizra<br> CH | Switzerland | [Getty Thesaurus of Geographic Names](https://www.getty.edu/research/tools/vocabularies/tgn/){:target="_blank"} |
| Locality<br><br> [dwc:locality](https://dwc.tdwg.org/terms/#dwc:locality){:target="_blank"} | Les Follatères<br> N of Sion, on the right side of the Rhône river, lieu-dit Les Follatères<br> Follatères | Les Follatères | [Getty Thesaurus of Geographic Names](https://www.getty.edu/research/tools/vocabularies/tgn/){:target="_blank"}<br> [swissNAMES3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d){:target="_blank"} |
| Institution<br><br> [dwc:institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} | Herbarium des Botanischen Gartens der Universität Bern<br> Herbarium Bern<br> Herb. Bern<br> Herbarium BOGA | BERN | [GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"} |
| collection<br><br> [dwc:country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | Hauptsammlung | Herbarium specimens | [GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"} |


<h1 style="background-color: #D3F7FF; padding: 10px; color: black;">Special cases</h1>

## My institution already has data on GBIF.org, how is this dealt with?

In this case, the data in your database that has already been sent to an Infospecies data center and/or GBIF Swiss Node and/or GBIF.org **MUST NOT YET be published through the Data Aggregator**. This could cause big problems of duplicated data, losing visibility through the articles that already used your specimen data on GBIF.org and provided the link to it (DOI, dataset ID, occurrence ID, etc...).

Currently, the staff of GBIF Swiss Node is preparing the correct procedure to solve this issue. We recommend in the meantime to import in the Aggregator data that has not been published anywhere else yet.

{: .box }
If this special case concerns you, please take contact with [GBIF Swiss Node](mailto:contact@gbif.ch).

<br>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
✅ If you already know which specimens of your collection have been sent to or obtained from an Infospecies data center, please inform the data center identifier in the field <strong>occurrenceID</strong> of your dataset.
</div>
<br>

## My institution has geological specimens (rocks and such), what have you planned about it?

Currently, the Data Aggregator and SwissNatColl hosted portal are mainly oriented for biological data (including fossils and paleontology). On the other side, GBIF.org does not support geological data.

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
