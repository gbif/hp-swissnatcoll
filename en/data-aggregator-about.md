---
layout: post
title: DAGI
background: "assets/images/placeholders/acalypha_gillespieae_1258001892.jpg"
imageLicense: "GBIF placeholders"
height: 50vh
toc: true
---

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
