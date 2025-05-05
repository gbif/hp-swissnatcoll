---
layout: heroImage
title: Data
description: How to search, find, download, cite the data
background: "{{ site.data.images.data.src }}"
imageLicense: "{{ site.data.images.data.caption }}"
height: 50vh
toc: true
permalink: /en/navigating_in_the_data
---

# What data can be found on the SwissNatColl portal?
The data accessible on this hosted portal has been **provided by the [swiss natural history institutions](/institution/search){:target="_blank"}** and **published on [GBIF.org](https://www.gbif.org/){:target="_blank"}** by the **swiss data aggregator [DAGI](/en/data-aggregator-about/){:target="_blank"}**.

There are currently 3 entry points to the data:
1. 📍[Occurrences](/occurrence/search){:target="_blank"}, each element of the table is a specimen of a natural history institution. This view is based on the [GBIF.org occurrence table](https://www.gbif.org/occurrence/search?occurrence_status=present&q=){:target="_blank"} but shows only specimens held in the swiss natural history institutions.

2. 🗃️[Collections](/collection/search), each element of the table is a collection of a natural history institution. This view is based on the [GBIF Registry - GRSciColl collections](https://registry.gbif.org/collection/search).

3. 🏛️[Institutions](/institution/search), each element of the table is a swiss natural history institution who is part of the SwissCollNet project network. This view is based on the [GBIF Registry - GRSciColl institutions](https://registry.gbif.org/institution/search). A map of Switzerland with all registered natural history instutions is also displayed.

4. 🔬 [3D models](/en/threeDmodels), a model viewer displays a selected 3D model of a specimen held in a swiss institution. The model can be viewed from different angles and zoomed in and out. If the specimen data is also available on GBIF, the link and a few basic information is provided.


<br>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ For reasons of confidentiality and security, the precision of certain data, for example geographical data, has been reduced.
</div>
<br>

# How is the data displayed?
The data present on the SwissNatColl portal can be displayed as such:
- a **table** where each line corresponds to a museum specimen (or a collection or an institution , depending on the tab selected and each column corresponds to **all the information we have about a specific specimen/collection/institution**.

- a **map** where each point corresponds to a **georeferenced museum specimen**. By clicking on it, a small window opens, and by clicking on the small window, the information panel of the occurrence appears on the right side of the screen. The metadata is grouped in categories, which have their own fields (Summary, Record, Taxon, Location, Occurrence, Event, Identification, Other and Citation). These categories and fields are based on the standard [Darwin Core](https://dwc.tdwg.org/).

- a **gallery** with pictures of the specimens.

- a **dashboard** (only in the occurrence page) where you can choose to synthetize the data in plot or lists. Each dashboard element's title is named after the data field name considered.

# Can I download the data?
On the [occurrences page](/occurrence/search), the last tab on top is [**Download**](/occurrence/search?view=DOWNLOAD). By clicking on it, you are redirected to GBIF.org download page. Note that all applicated filters on the SwissNatColl data page are transmitted to GBIF.org, allowing you to dowload your data of interest easily.

⚠️The link is quite slow to open and still sending towards "https://www.gbif-staging.org/....". At the moment, by simply removing "-staging" in the url on your browser, you can access the requested GBIF dowload page.

# Can I filter the data?
To filter the data in the Occurrence table presentation, you have a highlighted selected set (listed here below) and by clicking on the "More" button, you have access to more available filters

| Fields | Definition |
| :------------- | :------------- |
| Scientific name       | The scientific name as it appears in the GBIF backbone taxonomy. These names are normalized to ease search across datasets. It is possible that an originally-provided name might be misinterpreted or unknown. To search the names as provided use the "Verbatim scientific name" filter.     |
| Institution      | The name of the institution having custody of the object(s) or information referred to in the record.     |
| Recorded by (leg.)      | The names of the person, people, groups or organizations responsible for recording the original occurrence.     |
| Year      | The year in which the event occurred.     |
| State province      | The name of the next administrative region smaller than country in which the location occurs.     |
| Administrative area      | The name of any administrative area from [GADM.org](https://gadm.org/) determined during record processing.     |
| Elevation      | The distance above a vertical reference point (usually mean sea level or a geoid) in metres.     |
| Issues and flags      | The types of issues or flags of potential interest discovered in processing the data.     |

# Is the data exactly the same as in the institution databases?

No, the data published on GBIF by the swiss Data Aggregator and displayed here has been going through various encoding, enrichment and validation processes. For most of it, it may have not changed much, but for threatened and sensitive species, some data accuracy have been reduced to a grid-cell level or a higher taxonomy rank before publishing.

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
