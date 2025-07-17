---
layout: documentation
permalink: /en/dagi-attributes-format
title: DAGI Attributes
description: Description of the value formats of the DAGI attributes
sideNavigation: sideNavigation.tutorials
toc: true
---

<head>
  <!-- Lightbox2 CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>

  <!-- Zoom.js CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/css/zoom.min.css">

  <!-- Zoom.js JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/js/zoom.min.js"></script>

</head>

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
ℹ️ This page covers the formats of the attributes in DAGI, which means what kind of data is accepted in a given attribute.
</div>

# Formats

- Free text : any character of your keyboard, it can be letters, numbers, spaces, punctuation marks, and symbols.
- Integer : only whole numbers, no decimals.
- Float : any number, can be a whole number or a decimal number.

# Mandatory attributes

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
            <col style="width: 25%;">
            <col style="width: 25%;">
            <col style="width: 25%;">
            <col style="width: 25%;">
        </colgroup>
        <tr>
            <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #e6f3ff; font-weight: bold;">Attribute</th>
            <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #e6f3ff; font-weight: bold;">Format</th>
            <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #e6f3ff; font-weight: bold;">Examples</th>
            <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #e6f3ff; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>catalogNumber</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Prefix-123456</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><span style="color: #ff6600; font-weight: bold;">⚠️unique value⚠️</span></td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>scientificName</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Abies alba<br>Pinguicula<br>Orchidaceae</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>
# JSON attributes

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _amplification_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _assertions_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _chronometric_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _dynamicProperties_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _ext_references_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _permit_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _resourceRelationship_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _speciesDistribution_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _speciesProfile_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |
| _vernacularNames_ | JSON | { "key" : "value" } | only this writing of the value can be accepted |

# Event

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _day_ | Integer | 20 | overwritten by Encoding if _eventDate_ in ISO 8601-1:2019 |
| _month_ | Integer | 5 | overwritten by Encoding if _eventDate_ in ISO 8601-1:2019 |
| _year_ | Integer | 2025 | overwritten by Encoding if _eventDate_ in ISO 8601-1:2019 |
| _eventDate_ | Free text | 2025-05-20 (recommended) | overwritten by Encoding if _day_, _month_, _year_ informed |
| _eventRemarks_ | Free text | (any remarks related to the event) | |

# Identification

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _typeStatus_ | Free text | Holotype <br> not a type <br> Type material | controlled vocabulary recommended |
| _verbatimIdentification_ | Free text | (any remarks related to the identification) | |

# Taxon

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _acceptedNameUsage_ | Free text | Abies alba Mill. | overwritten by Encoding |
| _kingdom_ | Free text | Plantae | overwritten by Encoding |
| _phylum_ | Free text | Tracheophyta | overwritten by Encoding |
| _class_ | Free text | Pinopsida | overwritten by Encoding |
| _order_ | Free text | Pinales | overwritten by Encoding |
| _family_ | Free text | Pinaceae | overwritten by Encoding |
| _genus_ | Free text | Abies | overwritten by Encoding |
| _specificEpithet_ | Free text | alba | overwritten by Encoding |
| _scientificNameAuthorship_ | Free text | Miller | overwritten by Encoding |
| _taxonID_ | Integer | 123465789 | overwritten by Encoding |
| _taxonIdCH_ | Integer | 132465789 | overwritten by Encoding |
| _taxonRank_ | Free text | Species | overwritten by Encoding |
| _vernacularName_ | Free text | Tanne | |

# Location

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _continent_ | Free text | Europe | overwritten by Encoding if coordinates attributes informed |
| _country_ | Free text | Suisse | overwritten by Encoding if coordinates attributes informed |
| _countryCode_ | Free text | CH | overwritten by Encoding if coordinates attributes informed |
| _stateProvince_ | Free text | Solothurn | overwritten by Encoding if coordinates attributes informed |
| _municipality_ | Free text | Grenchen | overwritten by Encoding if coordinates attributes informed |
| _locality_ | Free text | Plaine de Plainpalais, skate park | |
| _minimumElevationInMeters_ | Float | 300.0 | |
| _maximumElevationInMeters_ | Float | 500.0 | |
| _decimalLatitude_ | Float | 47.1849 | overwritten by Encoding if swissCoordinates attributes informed |
| _decimalLongitude_ | Float | 7.34 | overwritten by Encoding if swissCoordinates attributes informed |
| _swissCoordinatesLv03_E_ | Float | 500000.1 | overwritten by Encoding if coordinates attributes informed |
| _swissCoordinatesLv03_N_ | Float | 200000.1 | overwritten by Encoding if coordinates attributes informed |
| _swissCoordinatesLv95_E_ | Float | 2500000.1 | overwritten by Encoding if coordinates attributes informed |
| _swissCoordinatesLv95_N_ | Float | 1200000.1 | overwritten by Encoding if coordinates attributes informed |
| _coordinateUncertaintyInMeters_ | Float | 300.0 | |
| _geodeticDatum_ | Free text | WGS84 | |
| _georeferenceVerificationStatus_ | Free text | verified by administrator | controlled vocabulary recommended |

# Material Entity

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _associatedMedia_ | Free text | https://(path to a file).jpg | public URL to an image file <br> overwritten by Image Upload |
| _otherCatalogNumbers_ | Free text | 7400 | |
| _partOfOrganism_ | Free text | whole animal | controlled vocabulary recommended |
| _preparations_ | Free text | mounted | controlled vocabulary recommended |
| _recordedBy_ | Free text | Max Welten | standardised name writing recommended (Full name, first name then last name) |

# Occurrence

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _occurrenceID_ | Free text | Prefix-123456 | copied from _catalogNumber_ if empty during import |

# Others

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _basisOfRecord_ | Free text | PreservedSpecimen | automatically informed if empty during import |
| _collectionCode_ | ⚠️ Not available for mapping |  | automatically informed after import (Source : GRSciColl) |
| _collectionID_ | ⚠️ Not available for mapping |  | automatically informed after import (Source : GRSciColl) |
| _datasetID_ | ⚠️ Not available for mapping |  | automatically informed after publication (Source : GBIF) |
| _datasetName_ | Free text | https://doi.org/(GBIF metadata-only dataset DOI) | Recommended to be used for GBIF metadata-only dataset DOI |
| _gbifDOI_ | ⚠️ Not available for mapping |  | automatically informed after publication (Source : GBIF) |
| _gbifID_ | ⚠️ Not available for mapping |  | automatically informed after publication (Source : GBIF) |
| _institutionCode_ | ⚠️ Not available for mapping |  | automatically informed after publication (Source : GBIF) |
| _institutionID_ | ⚠️ Not available for mapping |  | automatically informed after publication (Source : GBIF) |
| _modified_ | Free text | 01.05.2025 | date format recommended |
| _rightsHolder_ | Free text | (name of the data owner) | |
| _swissSpeciesCenter_ | ⚠️ Not available for mapping |  | automatically informed after encoding (Source : InfoSpecies) |
| _swissSpeciesRegistered_ | ⚠️ Not available for mapping |  | automatically informed after encoding (Source : InfoSpecies) |
| _swissSpeciesRegisteredAt_ | ⚠️ Not available for mapping |  | automatically informed after encoding (Source : InfoSpecies) |

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
