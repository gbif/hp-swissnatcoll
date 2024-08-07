---
lang-ref: about
layout: post
title: About
description: SVNHC
background: "{{ site.data.images.about.src }}"
imageLicense: "{{ site.data.images.about.caption }}"
height: 50vh
toc: true
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

## 1. Aim

Provide open-access to standardized natural history collection data held in Swiss institutions and data of specimens collected in Switzerland and curated abroad. 
The digitally available natural history collection data of Swiss public and non-profit organisations (natural history museums and collections, botanical gardens, institutions of higher education) will be aggregated and interconnected. By complying with the FAIR (Findable, Accessible, Interoperable, and Reusable) data principles, adhering to defined international data standards and specified data vocabularies, the interoperability and transfer of data to other national and international research infrastructures will be facilitated.


## 2. Data infrastructure environments and pathways of specimen data

![Institutional environments and data infrastructures](/assets/images/GraphsDiagrams/Figure1.jpg "Figure 1")

**Figure 1** summarises institutional environments and their data infrastructures involved in collecting and curating; aggregating, enriching and validating; storing and displaying of natural history collection data, as well as data pathways.

* **Collect and curate**, specimen data are collected and curated in a variety of collection management systems in collection institutions such as NH museums, Herbaria or institutions of higher education in Switzerland.
* **Aggregate and enrich**, specimen data and media linked to the specimens are uploaded to the SwissCollNet data aggregator individually by data managers and curators of collection institutions. Within the data aggregator, data are mapped with Darwin Core fields and encoded towards external catalogs. Encoded datasets can be sent to the international database of GBIF.org. and can be downloaded from the data aggregator by collection institutions or data centers of InfoSpecies (blue arrows). The SwissCollNet data aggregator is situated and maintained at the Swiss node of GBIF.  
* **Versioning of specimen data**, data of specimens collected in Switzerland can be revised by experts in the data centers of InfoSpecies and a new version (e.g. adaptation to Swiss taxonomic backbone, deontology requested by the Swiss Virtual Data center and GBIF.ch) of the data-set can be transferred through PICTIS to the Virtual Data Center of the Confederation (VDC at FOEN) and to GBIF.org. Furthermore, the dataset can be uploaded back to the data aggregator and be downloaded by the collection institutions. 
* **Display and publish**, all specimen data, which have been transferred from the data aggregator to GBIF.org and deemed as “publishable” by the data owners, will be displayed on the SVNHC online-portal. Data of specimens collected in Switzerland will also be displayed on the online-portal of the Swiss node of GBIF (GBIF.ch). Furthermore, data of specimens collected in Switzerland and validated by InfoSpecies are distributed via PICTIS to the VDC database and the GBIF.org database and are displayed on the online-portals SVNHC, VDC and GBIF.ch. Importantly, the system is designed in a way that allows each actor to proceed at her/his own pace, without blocking the general data flow. As a result, Swiss specimens will be allowed to appear into the SVNHC portal in their current state, even if a confirmation of species identification is still pending on side of the InfoSpecies centers.
* **Export**, at any time-point, the contents of the aggregator can be exported back to the organisation(s) that contributed the collection data. This feature allows data managers and curators to retrieve all the pieces of evidence that have been added by third parties to the aggregated specimens (namely: encoded values towards standard catalogs, MIDS scores, approval feedbacks provided by InfoSpecies, etc).

[All swiss institutions](/institution/search){: .button .is-primary}
