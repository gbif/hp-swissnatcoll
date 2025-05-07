---
layout: compose # this is a layout that allows you to stich together various predefined blocks that comes with the the,e
title: Helpdesk
description: All the help you need is here to be found
background: "{{ site.data.images.helpdesk.src }}"
imageLicense: "{{ site.data.images.helpdesk.caption }}"
height: 50vh
toc: true
composition:
- type: heroImage
- type: pageMarkdown
---

# Who is the target audience of this online portal?
The target audience of the Swiss Natural History Collection (SwissNatColl) includes **researchers**, **data providers**, **curators**, and **collection-holding institutions**. Additionally, it serves **customers from the cantons and the federal administration** in Switzerland, as well as **citizen scientists** interested in natural history collections.

# What types of data are available on the SwissNatColl portal?
The portal displays the data sent by the swiss institutions to the international biodiversity facility [GBIF](https://www.gbif.org/). Additionally, the data reflects the expertise found within Swiss institutions in areas such as taxonomy, restoration, curation, and collection management, ensuring high-quality and meticulously curated information for researchers, educators, and citizen scientists.

# How can I search for specific specimens or collections?
In the navigation bar, on top of each page of the portal, click on the **Data** tab. There you can choose to see all [swiss occurrences](/occurrence/search), [swiss collections](/collection/search) and [swiss institutions](/institution/search)

# Are there any usage restrictions or licenses for the data on SwissNatColl?
At this point of the state of the data, no. The usage restrictions and licenses have been defined through the previous steps of data selection, data aggregation and data validation. Every information provided here is completely in open-access and public. For restricted information requests, please contact the corresponding institution directly.

# What can I not find on the SwissNatColl portal?
This online portal is not a management system for museums and institutions. It also can't serve as a tool for advanced georeferencing. High-resolution images are also not deposited here.

# I found some mistakes or inconsistencies on this online portal
Thank you very much for your interest in our work and our collections. We would be happy to hear from you, especially if you help us provide a better website for the years to come. Please do not hesitate to send us an email at **contact-swissnatcoll@infofauna.ch** (or [click here](mailto:contact-swissnatcoll@infofauna.ch))


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
