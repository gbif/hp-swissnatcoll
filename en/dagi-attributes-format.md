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
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>amplification</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>assertions</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>chronometric</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>dynamicProperties</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>ext_references</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>permit</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>resourceRelationship</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>speciesDistribution</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>speciesProfile</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>vernacularNames</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">{ "key" : "value" }</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">only this writing of the value can be accepted</td>
        </tr>
    </table>
</div>

# Event

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
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>day</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">20</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> in ISO 8601-1:2019</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>month</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">5</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> in ISO 8601-1:2019</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>year</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">2025</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> in ISO 8601-1:2019</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>eventDate</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">2025-05-20 (recommended)</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>day</em>, <em>month</em>, <em>year</em> informed</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>eventRemarks</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">(any remarks related to the event)</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# Identification

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
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>typeStatus</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Holotype<br>not a type<br>Type material</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">controlled vocabulary recommended</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>verbatimIdentification</em></td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">(any remarks related to the identification)</td>
            <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# Taxon

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _acceptedNameUsage_ | Free text | Abies alba Mill. | enriched by Encoding |
| _kingdom_ | Free text | Plantae | enriched by Encoding |
| _phylum_ | Free text | Tracheophyta | enriched by Encoding |
| _class_ | Free text | Pinopsida | enriched by Encoding |
| _order_ | Free text | Pinales | enriched by Encoding |
| _family_ | Free text | Pinaceae | enriched by Encoding |
| _genus_ | Free text | Abies | enriched by Encoding |
| _specificEpithet_ | Free text | alba | enriched by Encoding |
| _scientificNameAuthorship_ | Free text | Miller | enriched by Encoding |
| _taxonID_ | Integer | 123465789 | enriched by Encoding |
| _taxonIdCH_ | Integer | 132465789 | enriched by Encoding |
| _taxonRank_ | Free text | Species | enriched by Encoding |
| _vernacularName_ | Free text | Tanne | |

# Location

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _continent_ | Free text | Europe | enriched by Encoding if coordinates attributes informed |
| _country_ | Free text | Suisse | enriched by Encoding if coordinates attributes informed |
| _countryCode_ | Free text | CH | enriched by Encoding if coordinates attributes informed |
| _stateProvince_ | Free text | Solothurn | enriched by Encoding if coordinates attributes informed |
| _municipality_ | Free text | Grenchen | enriched by Encoding if coordinates attributes informed |
| _locality_ | Free text | Plaine de Plainpalais, skate park | |
| _minimumElevationInMeters_ | Float | 300.0 | |
| _maximumElevationInMeters_ | Float | 500.0 | |
| _decimalLatitude_ | Float | 47.1849 | enriched by Encoding if swissCoordinates attributes informed |
| _decimalLongitude_ | Float | 7.34 | enriched by Encoding if swissCoordinates attributes informed |
| _swissCoordinatesLv03_E_ | Float | 500000.1 | enriched by Encoding if coordinates attributes informed |
| _swissCoordinatesLv03_N_ | Float | 200000.1 | enriched by Encoding if coordinates attributes informed |
| _swissCoordinatesLv95_E_ | Float | 2500000.1 | enriched by Encoding if coordinates attributes informed |
| _swissCoordinatesLv95_N_ | Float | 1200000.1 | enriched by Encoding if coordinates attributes informed |
| _coordinateUncertaintyInMeters_ | Float | 300.0 | |
| _geodeticDatum_ | Free text | WGS84 | |
| _georeferenceVerificationStatus_ | Free text | verified by administrator | controlled vocabulary recommended |

# Material Entity

| Attribute | Format | Examples | Special condition |
| --------- | ------ | -------- | ----------------- |
| _associatedMedia_ | Free text | https://(path to a file).jpg | public URL to an image file <br> enriched by Image Upload |
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
