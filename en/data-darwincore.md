---
layout: documentation
permalink: /en/data-dwc
title: Darwin Core
toc: true
sideNavigation: sideNavigation.tutorials
---

# Darwin Core data standard

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
