---
layout: heroImage
title: Data Aggregator
description: Swiss Data Aggregator and tutorials
background: "{{ site.data.images.dataaggregator.src }}"
imageLicense: "{{ site.data.images.dataaggregator.caption }}"
height: 50vh
toc: true
---

# Swiss Data Aggregator

More than 90% of the specimens curated in Switzerland are biological or paleontological. For the aggregation and publication of digital information on these specimens, [SwissCollNet](https://swisscollnet.scnat.ch/) collaborates with [InfoSpecies](https://www.infospecies.ch/de/){:target="_blank"} to build on the already existing data infrastructure of the Swiss node of GBIF.

InfoSpecies is the umbrella organisation of the national data centers and coordination offices for species promotion. One of the main goals of InfoSpecies is the provision, management and diffusion of species records, which includes natural history collection data.

The long-term objective is to achieve **automatised data transfer** of collection data to the national aggregator and **publication of data** on national and international online portals as well as an **automatised update of data records**.

Source : [Data aggregation in Switzerland](https://swisscollnet.scnat.ch/fr/collection_data/data_aggregation){:target="_blank"}.

<div style="text-align: left; margin-top: 50px; border: 10px solid #fa5e97; padding: 20px;">
  <p class="box"><strong>For the Swiss Natural History institutions who wish to publish data on this portal:</strong></p>
  <p style="text-align: center; font-size: 20px;">
    <a href="https://svnhc.hp.gbif-staging.org/en/how-to-publish-data/">How to publish data - Data Aggregator</a>
  </p>
</div>

# FAQs
## Do I have to upload my entire database fields into the Data Aggregator?
There is no need to upload all fields of your database into the Data Aggregator. You can choose to upload only the most important fields.

To help you select your fields, **here is an empty file with the most important Darwin Core terms**, and an example line. You can use it to organise your dataset for the upload into the Data Aggregator. Clicking on this button opens the file on the web, and by right-clicking on it, you can save it in a text file.
<div style="text-align: center;">
    <a href="https://raw.githubusercontent.com/gbif/hp-svnhc/master/downloadFiles/DarwinCoreSelected.csv" download="DarwinCoreSelected.csv">
        <button style="padding: 5px 15px; font-size: 14px; cursor: pointer;">Download CSV</button>
    </a>
</div>
<br><br>
The Darwin Core Github repository also offers files with all or a selection of the Darwin Core fields : [Github tdwg/dwc/dist](https://github.com/tdwg/dwc/tree/master/dist){:target="_blank"}

## What is Darwin Core?
[Darwin Core](https://dwc.tdwg.org/){:target="_blank"} is a **data standard**, a template to be used when organising data in a database or a table in order to have **distinct and precise fields with a known and fixed information format** in each of them. It has been created as a helping basis to make [FAIR](https://dwc.tdwg.org/ ){:target="_blank"} data.

The direct benefit of the Darwin Core standard is the **high level of compatibility between data from different sources**.

### How is Darwin Core organised?

Each **term** of Darwin Core has a **precise and unique definition**, and for some fields a **controlled vocabulary** is highly recommended. The **terms** are organised in **categories**, based on the data they must contain. Concerning data of natural history institutions, the categories could be organised as such:

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

### What is a controlled vocabulary?

A controlled vocabulary is a **standardized set of terms and phrases used to ensure consistency and accuracy in the documentation and cataloging of specimens**. This vocabulary facilitates **clear communication**, **data sharing**, and **interoperability** among researchers, institutions, and databases by providing a **common language** for describing attributes such as species, locations, and collection methods. Darwin Core is widely used for biodiversity data, to ensure that everyone uses the same terms in the same way when recording and sharing information about natural history collections.

| Field | Without controlled vocabulary | With controlled vocabulary | Reference system |
| ----- | ----------------------------- | -------------------------- | ---------------- |
| Name<br> Art<br> Espèce<br><br> [dwc:scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | Cyclamen hederifolium<br> C. hederifolium<br> C. hed.<br> Cyclamen hederifolium Aiton<br> hederifolium | *Cyclamen hederifolium* Aiton | [World Flora Online](https://www.worldfloraonline.org/){:target="_blank"}<br> [GBIF.org](https://www.gbif.org/){:target="_blank"} |
| Date of collect<br> Funddatum<br> Date de récolte<br><br> [dwc:eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target="_blank"} | 1. August 2024<br> 1er août 2024<br> 1° agosto 2024<br> 1 Aug. 2024<br> 1.8.2024<br> 01 VIII 2024<br> 1/8/24<br> 8/1/2024  | 2024-08-01 | [ISO 8601-1:2019](https://www.iso.org/obp/ui/en/#iso:std:iso:8601:-1:ed-1:v1:en){:target="_blank"} |
| leg.<br><br> [dwc:recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} | Ruben Sutter<br> R. Sutter<br> Sutter<br> RSutter<br> R.S. | Sutter Ruben<br> + Q96409968 ([recordedByID](https://dwc.tdwg.org/terms/#dwc:recordedByID){:target="_blank"})  | [ORCID](https://orcid.org/){:target="_blank"} (alive scientists)<br> [WIKIDATA](https://www.wikidata.org/wiki/Wikidata:Main_Page){:target="_blank"} (older scientists) |
| Country<br> Pays<br> Land<br><br> [dwc:country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | Schweiz<br> Suisse<br> Switzerland<br> Svizzera<br> Svizra<br> CH | Switzerland | [Getty Thesaurus of Geographic Names](https://www.getty.edu/research/tools/vocabularies/tgn/){:target="_blank"} |
| Locality<br><br> [dwc:locality](https://dwc.tdwg.org/terms/#dwc:locality){:target="_blank"} | Les Follatères<br> N of Sion, on the right side of the Rhône river, lieu-dit Les Follatères<br> Follatères | Les Follatères | [Getty Thesaurus of Geographic Names](https://www.getty.edu/research/tools/vocabularies/tgn/){:target="_blank"}<br> [swissNAMES3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d){:target="_blank"} |
| Institution<br><br> [dwc:institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} | Herbarium des Botanischen Gartens der Universität Bern<br> Herbarium Bern<br> Herb. Bern<br> Herbarium BOGA | BERN | [GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"} |
| collection<br><br> [dwc:country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | Hauptsammlung | Herbarium specimens | [GRSciColl](https://scientific-collections.gbif.org/){:target="_blank"} |


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
  <div style="flex: 3; padding-right: 70px;"><strong>3) Export a selected set of your database fields and make the correspondance with the <a href="https://dwc.tdwg.org/terms/">Darwin Core terms</a></strong> (you can use the file provided <a href="https://svnhc.hp.gbif-staging.org/en/data-aggregator/#do-i-have-to-upload-my-entire-database-fields-into-the-data-aggregator">here above</a>). Adapt your data with the other important DwC terms until all of the information you want to export is ready.
  <br><br>
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
  
  <p style="text-align: center; font-size: 50px;"> + </p>
  
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
  


## Where can I find the Darwin Core terms description?
On the Darwin Core official website, the [Quick Reference Guide](https://dwc.tdwg.org/terms/) is the easiest to use.

Here are a few of the top-10 most used fields in natural history institutions' databases. The ones marked with a "!" should use only a [controlled vocabulary](https://svnhc.hp.gbif-staging.org/en/data-aggregator/#what-is-a-controlled-vocabulary).

| DwC term (dwc:) | DwC Definition | Corresponding terms found in NHC datasets | Examples |
| --------------- | -------------- | ----------------------------------------- | -------- |
| ! [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | The full scientific name, with authorship and date information if known. | Scientific name, nom scientifique, Wissenschaftliche Name, Full name, Nom complet | _Cyclamen hederifolium_ Aiton<br> _Vulpes vulpes (Linnaeus, 1758)_ |
| ! [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target="_blank"} | The date-time or interval when the dwc:Event was recorded. Format: for a precise date: YYYY-MM-DD, for an interval: YYYY-MM-DD/YYYY-MM-DD | date of collect<br>  collection date<br>  date de récolte<br>  Funddatum | 1903-08<br> 2024-08-01<br> 1815 |
| ! [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} | A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original dwc:Occurrence. | Collector<br> collecteur<br> leg. | Sutter Ruben<br> Steffen Liseli<br> Dutoit Eugen |
| [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber){:target="_blank"} | An identifier given to the dwc:Occurrence at the time it was recorded (link between field notes and specimen). | field number<br> collect number<br> numéro de récolte<br> Fundnummer | 2089<br> ASM-515 |
| [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} | A unique identifier for the record within the data set or collection. | Code-barre<br> Numéro<br> Barcode<br> Nummer<br> Numéro d'inventaire | G00009201<br> Sheet-2765149 |
| ! [country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} | The name of the country or major administrative unit in which the [dcterms:Location](https://dwc.tdwg.org/terms/#location) occurs. | Pays<br> Land<br> Country | Switzerland<br> France<br> Germany<br> Italy<br> Austria |
| [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} | The original textual description of the place. | Location<br> Fundort<br> Lieu | "Les Follatères", "Zürich, am See", "Pizzo Leone, 1659 m" |
| ! [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target="_blank"} | The specific description of the place. | _often not standardised in databases_ | "Les Follatères"<br> "Lake of Zürich"<br> "Pizzo Leone, summit" |
| ! [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} | The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. | Institution | G<br> UZH:Z<br> BERN |
| ! [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target="_blank"} | The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived. | Collection | General collection<br> Collection générale<br> Hauptsammlung |



## Which fields are required/mandatory?

### Minimal mandatory fields of the Data Aggregator

| DwC term | DwC definition | In most databases | Examples |
| -------- | -------------- | ----------------- | -------- |
| [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} | The full scientific name, with authorship and date information if known. | Scientific name<br> nom scientifique<br> Wissenschaftliche Name<br> Full name<br> Nom complet | _Cyclamen hederifolium_ Aiton<br> _Vulpes vulpes_ (Linnaeus, 1758) |
| [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber) | A unique identifier for the record within the data set or collection. | Code-barre<br> Numéro<br> Barcode<br> Nummer<br> Numéro d’inventaire | G00009201<br> Sheet-2765149

### Additional fields increasing data quality in the Data Aggregator (MIDS)

| MIDS | DwC term (dwc:) | Definition | Corresponding terms found in datasets | Examples |
| ---- | --------------- | ---------- | ------------------------------------- | -------- |
| 0 | [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target='_blank'} | The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record. <br> See the [GrSciColl official institution codes](https://scientific-collections.gbif.org/institution/search?country=CH){:target="_blank"} | ... | BERN, G, MHNN |
| 1 | _part_of_organism_ ! _not DwC_ ! | Part or parts of the organism that have been preserved. | ... | shell, skeleton, skull, soft tissue |
| 1 | [preparations](https://dwc.tdwg.org/terms/#dwc:preparations){:target='_blank'} | A list (concatenated and separated) of preparations and preservation methods for a specimen. | ... | fossil, cast, photograph, DNA extract, skin, skull, skeleton, whole animal (ETOH), tissue (EDTA) |
| 2 | [yearCollectionEntrance](https://dwc.tdwg.org/terms/#dwc:yearCollectionEntrance){:target='_blank'} | The four-digit year of collection entrance of a specimen (earliest year of occurrence in absence of a documented collection event). | ... | ... |
| 2 | [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target='_blank'} | The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived. | ... | ... |
| 2 | [collectionID](https://dwc.tdwg.org/terms/#dwc:collectionID){:target='_blank'} | An identifier for the collection or dataset from which the record was derived. | ...    | ... |
| 2 | [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate){:target='_blank'} | The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context. | date of collect, collection date, date de récolte, Funddatum, date, Datum | August 1903, 01.04.85, 15 VII 1867 |
| 2 | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target='_blank'} | A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first. | leg., collecteur, Sammler, collector  | ... |
| 2 | [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus){:target='_blank'} | A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject. | type | ... |
| 2 | [continent](https://dwc.tdwg.org/terms/#dwc:continent){:target='_blank'} | The name of the continent in which the Location occurs. | ... | ... |
| 2 | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target='_blank'} | A list (concatenated and separated) of geographic names less specific than the information captured in the locality term. | ... | ... |
| 2 | [country](https://dwc.tdwg.org/terms/#dwc:country){:target='_blank'} | The name of the country or major administrative unit in which the Location occurs.| Pays, Land | ... |
| 2 | [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince){:target='_blank'} | The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs. | ... |
| 2 | [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target='_blank'} | The specific description of the place. | Lieu, Fundort | ... |
| 2 | [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude){:target='_blank'} | The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive. | coordonnées x, coordinates | ...  |
| 2 | [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude){:target='_blank'} | The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive. | coordonnées y, coordinates | ...  |
| 2 | [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target='_blank'} | The original description of the elevation (altitude, usually above sea level) of the Location. | ... | ... |
| 3 | [county](https://dwc.tdwg.org/terms/#dwc:county){:target='_blank'} | The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.  | ... | ... |
| 3 | [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth){:target='_blank'} | The original description of the depth below the local surface.  | ...    | ... |


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Back to Top Button</title>
  <style>
    /* Style for the Back to Top Button */
    #back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
      background-color: #fa5e97;
      color: white;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      font-size: 24px;
      cursor: pointer;
      z-index: 1000;
      width: 120px; /* Width for the rectangle */
      height: 40px; /* Height for the rectangle */
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
