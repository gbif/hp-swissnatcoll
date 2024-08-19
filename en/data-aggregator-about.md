---
layout: post
title: About
description: Data Aggregator
background: "{{ site.data.images.data-aggregator-about.src }}"
imageLicense: "{{ site.data.images.data-aggregator-about.caption }}"
height: 50vh
toc: true
sideNavigation: sideNavigation.tutorials
---

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

# The Swiss Virtual Natural History Collection (SVNHC)

{: .box }
Publish and retrieve information on natural history collections and objects


More than 90% of the specimens curated in Switzerland are biological or paleontological. For the aggregation and publication of digital information on these specimens, [SwissCollNet](https://swisscollnet.scnat.ch/) collaborates with [InfoSpecies](https://www.infospecies.ch/de/){:target="_blank"} to build on the already existing data infrastructure of the Swiss node of GBIF.

InfoSpecies is the umbrella organisation of the national data centers and coordination offices for species promotion. One of the main goals of InfoSpecies is the provision, management and diffusion of species records, which includes natural history collection data.

The long-term objective is to achieve **automatised data transfer** of collection data to the national aggregator and **publication of data** on national and international online portals as well as an **automatised update of data records**.


## 1. Aim

Provide **open-access to standardized natural history collection data** held in [Swiss institutions](/institution/search){:target = "_blank"} and data of specimens collected in Switzerland and curated abroad.

The digitally available natural history collection data of Swiss public and non-profit organisations (natural history museums and collections, botanical gardens, institutions of higher education) will be aggregated and interconnected. By complying with the [FAIR data principles](https://www.go-fair.org/fair-principles/){:target = "_blank"} (Findable, Accessible, Interoperable, and Reusable), adhering to defined international data standards and specified data vocabularies, the interoperability and transfer of data to other national and international research infrastructures will be facilitated.


## 2. Data infrastructure environments and pathways of specimen data

![Institutional environments and data infrastructures](/assets/images/GraphsDiagrams/Figure1.jpg "Figure 1")

**Figure 1** Summary of the institutional environments and their data infrastructures involved in collecting and curating; aggregating, enriching and validating; storing and displaying of natural history collection data, as well as data pathways.

* **Collect and curate**, specimen data are collected and curated in a variety of collection management systems in collection institutions such as NH museums, Herbaria or institutions of higher education in Switzerland.
* **Aggregate and enrich**, specimen data and media linked to the specimens are uploaded to the SwissCollNet data aggregator individually by data managers and curators of collection institutions. Within the data aggregator, data are mapped with Darwin Core fields and encoded towards external catalogs. Encoded datasets can be sent to the international database of GBIF.org. and can be downloaded from the data aggregator by collection institutions or data centers of InfoSpecies (blue arrows). The SwissCollNet data aggregator is situated and maintained at the Swiss node of GBIF.  
* **Versioning of specimen data**, data of specimens collected in Switzerland can be revised by experts in the data centers of InfoSpecies and a new version (e.g. adaptation to Swiss taxonomic backbone, deontology requested by the Swiss Virtual Data center and GBIF.ch) of the data-set can be transferred through PICTIS to the Virtual Data Center of the Confederation (VDC at FOEN) and to GBIF.org. Furthermore, the dataset can be uploaded back to the data aggregator and be downloaded by the collection institutions. 
* **Display and publish**, all specimen data, which have been transferred from the data aggregator to GBIF.org and deemed as “publishable” by the data owners, will be displayed on the SVNHC online-portal. Data of specimens collected in Switzerland will also be displayed on the online-portal of the Swiss node of GBIF (GBIF.ch). Furthermore, data of specimens collected in Switzerland and validated by InfoSpecies are distributed via PICTIS to the VDC database and the GBIF.org database and are displayed on the online-portals SVNHC, VDC and GBIF.ch. Importantly, the system is designed in a way that allows each actor to proceed at her/his own pace, without blocking the general data flow. As a result, Swiss specimens will be allowed to appear into the SVNHC portal in their current state, even if a confirmation of species identification is still pending on side of the InfoSpecies centers.
* **Export**, at any time-point, the contents of the aggregator can be exported back to the organisation(s) that contributed the collection data. This feature allows data managers and curators to retrieve all the pieces of evidence that have been added by third parties to the aggregated specimens (namely: encoded values towards standard catalogs, MIDS scores, approval feedbacks provided by InfoSpecies, etc).


## 3. The SwissCollNet data aggregator


The SwissCollNet data aggregator is mainly divided into three compartments (Figure 2). 
* Media will be stored in the Media store, a cloud service provided by SWITCH. 
* The data store is composed of three data layers (see paragraph 5 for detailed information) and connected with external catalogues/libraries such as the Global Registry of Scientific Collections (GRSciColl), Darwin Core, international taxonomic thesauri etc.
* In the file store, frozen versions of all data exports are stored, which allow to follow history (modifications) of the data.


![Structure of the SwissCollNet data aggregator](/assets/images/GraphsDiagrams/Figure2.jpg "Figure 2")

**Figure 2** Structure of the SwissCollNet data aggregator

## 4. SVNHC – the online-portal

The SVNHC online-portal is hosted at GBIF.org. The portal presents institutions and their natural history collections in Switzerland. It also serves as a platform to publish information and news in relation to natural history collections in Switzerland. Search functions allow to search for institutions, collections and specimen information. Search functions are provided by GBIF.org, data is retrieved from the GBIF.org and GRSciColl databases (Figure 3).

![SVNHC online-portal](/assets/images/GraphsDiagrams/Figure3.jpg "Figure 3")

**Figure 3** The SVNHC online-portal displays information about natural history collections in Switzerland.

## 5. The Journey of a museum specimen


### 5.1. Digitisation of a specimen


A specimen of a natural history collection has been collected, described and prepared and is stored in a collection of a natural history institution. In order to publish information about the specimen, it is labelled with a unique identifier, photographed or scanned and its information is registered in the database of the institution. The information belonging to the specimen is documented by -ideally- applying the data standard Darwin Core. To allow interoperability of the data, not only verbatim fields have to be filled in, but at least location, date and taxonomy have to be interpreted and edited to meet these extra fields and to be readable for machines. At this stage, the specimen information can be uploaded to the [SwissCollNet data aggregator](https://svnhc.hp.gbif-staging.org/data-aggregator), in order to be published on a variety of websites, where scientists and the interested public can retrieve the information. The information of the specimen is thus becoming FAIR (Findable, Accessible, Interoperable and Reusable)

![Digitisation of a specimen](/assets/images/GraphsDiagrams/Figure4.png "Figure 4")

**Figure 4** Digitisation of a specimen in a natural history institution to get ready for its digital journey.

### 5.2. Upload of digital information on a specimen to the data aggregator


Digital information of a specimen (digital specimen) has to be organised by applying Darwin Core standards and be stored in CSV-format, to be uploaded to the data aggregator. As a first step, the collection unit to which the specimen occurs is determined by the data provider. The catalogue of collection units is retrieved automatically from the Global Registry of Scientific Collections ([GRSciColl](https://scientific-collections.gbif.org/)). The digital specimen enters the aggregator in its raw stage (raw layer), where it will be encoded with data standards (encoding layer, [Darwin Core](https://dwc.tdwg.org/), [MIDS standards](https://www.tdwg.org/community/cd/mids/), taxonomic thesauri, etc.). Once encoded, the digital specimen can enter the fast track of publication and continue its journey into the database of [GBIF.org](https://www.gbif.org/). If the origin of the digital specimen has been collected in Switzerland, it can also enter the approval track and will continue its journey into a database of a datacenter of InfoSpecies.

![SwissCollNet-data aggregator](/assets/images/GraphsDiagrams/Figure5.jpg "Figure 5")

**Figure 5** In the SwissCollNet-data aggregator, specimen data is encoded for publication on national and international data portals through a fast and/or an approval track.


### 5.3. Validation of the digital specimen by experts from InfoSpecies


Digital specimens collected in Switzerland (Swiss origin) may require specific information (red lists of endangered species, Swiss taxonomic thesauri, etc.). They can be retrieved from the data aggregator by experts of [InfoSpecies datacenters](https://www.infospecies.ch/fr/) and be enriched with information to meet the criteria for publication in the Virtual Data Center of the FOEN and the [GBIF.ch data portal](https://swiss-bif.hp.gbif.org/). The enriched digital specimen will enter PICTIS, from where it will be exported to the [GBIF.org database](https://www.gbif.org/), to the VDC database and to the approval layer of the [SwissCollNet data aggregator](https://svnhc.hp.gbif-staging.org/data-aggregator).

![Import of digital specimens](/assets/images/GraphsDiagrams/Figure6.jpg "Figure 6")

**Figure 6** Import of digital specimens into the GBIF.org database through a fast track or an approval track and publication on the GBIF-hosted data portals SVNHC and GBIF.ch.


### 5.4. Publication of the digital specimen


Digital specimens are published on different data portals such as the SVNHC (SVNHC.ch), the [data portal of the Swiss node of GBIF](https://swiss-bif.hp.gbif.org/) and the Virtual Data Center (VDC). On the SVNHC online-portal all digital specimens of the data aggregator (fast track and approval track information) will be displayed. Information of specimens collected in Switzerland will also be displayed on the GBIF.ch online-portal (fast track and approval track information). The digital specimen, which have been enriched and approved by experts of InfoSpecies datacenters will also be published on the VDC portal of the FOEN.

### 5.5. Digital specimen updates


Digital specimen information can be updated in the SwissCollNet data aggregator by the data providers/owners. Enriched data can be exported back to the database of the data provider. Older versions of the digital specimen are stored in the data aggregator to allow reconstruction of the history of the data.


### 6. Data ownership and publication rules


Data providers are the data owners. They are responsible for the quality of their data and are the decision body for publication of the data through the fast and/or the approval track. For publication of data on SVNHC.ch or GBIF.ch, data quality requirements of GBIF.org have to be fulfilled. For publication of data on the VDC, rules of the FOEN have to be met.

<br><br><br>
Source:
- [Data aggregation in Switzerland](https://swisscollnet.scnat.ch/fr/collection_data/data_aggregation){:target="_blank"}
- Pia Stieger (*unpublished*, 2024)
