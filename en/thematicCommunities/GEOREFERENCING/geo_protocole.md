---
layout: compose
permalink: /en/geo-protocole
title: Georeferencing protocole
description: Protocole on historical geographical data and how to prepare for the import on DAGI
background: "{{ site.data.images.georeferencing‎.src }}"
imageLicense: "{{ site.data.images.georeferencing‎.caption }}"
height: 50vh
toc: true
sideNavigation: sideNavigation.georeferencing
composition:
- type: heroImage
- type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

# Context

Georeferencing is the enrichment of the geographical information of a collection specimen with modern coordinates and a margin of error. Nowadays, this can usually be done directly in the field with a GPS. However for most of older specimen, the geographical description is only textual (e.g. _right side of the road between this place and this place_) and often scarce (e.g. _this country_). Concepts have also evolved with time as well as country names and borders. On the other side, the development of standardised terms such as the Darwin Core terms implies strict rules and definitions for each data term. For instance, the value _Pays de Vaud_ could never be written in the attribute _country_ of Darwin Core.

In the process of database standardisation and cleaning, the use of controlled vocabulary is essential but often an important constraint compared to day-to-day habits of an institution, as well as the usual treatment of historical specimens. Countries that don't exist anymore are still being recorded in the attribute dwc:country, while the recommendation of this term is to use the ISO 3166-1-alpha-2 country standard.

The Data Aggregator DAGI uses the OpenCage Geocoding API of OpenCage GmbH ([https://opencagedata.com/](https://opencagedata.com/){:target="_blank"}) to encode and enrich specific attributes of the institution's records. For the encoding to be successfull, the values of the source attributes must be following the definitions of the attributes, or else inconsistencies and "wrong" data might be inserted.

This protocole aims to provide the best practices in using the DAGI for geographical encoding of natural history collection specimens.

# 1) Preliminary assessment

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mermaid Decision Graph</title>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script>
</head>
<body>

<div class="mermaid">
graph TD;
    Start((📜📍 Specimen label Location data)) --> |Step 1| Step1[1.1. Transcribe verbatim Location data];
    Step1 --> |Step 2| Step2[2.1. Enrich standardized textual Location data];

    %% Decision Graph in Step 3
    Step2 --> |Step 3| A[Coordinates present?];
    A[Coordinates present?] -->|no| B[Georeferencing possible?];
    A -->|yes| C[Transcribe/convert/document/enrich];
    B --> |no| D[Don't georeference!];
    B --> |yes| E[Pertinent?];
    E --> |no| D;
    E --> |yes| F[Do-able?];
    F --> |no| D;
    F --> |yes| G[Georeference/document/enrich];
    C -->|⬇️ ️click here ⬇️| H[1.2. Transcribe verbatim coordinates data];
    G -->|⬇️ ️click here ⬇️| I[2.2. Enrich standardised coordinates data];
    D -->|⬇️ ️click here ⬇️| J[X. to define];

    %% Apply Colors
    style Start fill:#FFFFFF,stroke:#333,stroke-width:4px,font-weight:bold,font-size:50px;;
    style A fill:#ffcc00,stroke:#333,stroke-width:2px;
    style B fill:#ff6666,stroke:#333,stroke-width:2px;
    style C fill:#66ccff,stroke:#333,stroke-width:2px;
    style D fill:#ff3333,stroke:#000,stroke-width:2px,color:white;
    style E fill:#ff9900,stroke:#333,stroke-width:2px;
    style F fill:#66cc99,stroke:#333,stroke-width:2px;
    style G fill:#33cc33,stroke:#333,stroke-width:2px;
    style H fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style I fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style J fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Step1 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Step2 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;

    
    %% Define the hyperlink
    click H "/en/geo-protocole#12-transcribe-verbatim-coordinates-data"
    click I "/en/geo-protocole#22-enrich-standardised-coordinates-data"
    click Step1 "en/geo-protocole#11-step-1-transcribe-verbatim-location-data"
    click Step2 "en/geo-protocole#21-enrich-standardised-textual-location-data"
</div>
</body>

## 1.1) Step 1: Transcribe verbatim Location data

## 1.2) Transcribe verbatim coordinates data

# 2) Standardized data entry

## 2.1) Enrich standardised textual Location data

## 2.2) Enrich standardised coordinates data

# 3) Georeferencing approach

## 3.1) Historical maps and reference material

## 3.2) Coordinate assignment

## 3.3) Geographical encoding

Geographical encoding allows to standardise and enrich the geographical data associated to a specimen. In DAGI, the geographical encoding is composed of two parts. One is the **Geo Forward** (based on the imported information in the attributes _country_ and _continent_) and the other one is the **Geo Reverse** (based on the imported information in the coordinates attributes (_decimalLatitude_ and _decimalLongitude_, _swissCoordinates_lv95_x_ and _swissCoordinates_lv95_y_, _swissCoordinates_lv03_x_ and _swissCoordinates_lv03_y_).

**Geo Forward** and **Geo Reverse** encoding uses the API of the website [OpenCage data](https://opencagedata.com/){:target="_blank"}. With the use of the attributes mentioned before, a query is built and the result elements are splitted into the corresponding encoded attribute.

In addition to these two parts, coordinates in one or two of the available swiss systems attributes are being converted into WGS84 (_decimalLatitude_ and _decimalLongitude_) and the other available swiss system if it was previously empty.

## Geo Forward

{: .box }
**Attributes needed** : _continent_ OR _country_ <br>
**Attributes encoded** : _continent_, _country_, _countryCode_

## Geo Reverse

{: .box }
**Attributes needed** : _decimalLatitude_ and _decimalLongitude_ <br>
**Attributes encoded** : _continent_, _country_, _countryCode_, _stateProvince_ and _municipality_ (if _countryCode_ = CH, then also _swissCoordinatesLv95_x_, _swissCoordinatesLv95_y_, _swissCoordinatesLv03_x_ and _swissCoordinatesLv03_y_


## Coordinates conversion

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ When importing multiple coordinate systems for the same record, ensure that they all correspond to the same location. DAGI does not compare attributes to detect inconsistencies.
</div>

The coordinate attributes are ranked by priority :
1. WGS84
2. CH1903+/LV95
3. CH1903/LV03

When importing coordinates, it is better practice to import one set of coordinates per specimen (in either of the three systems supported by DAGI) than doing the conversion before importing and importing multiple systems for the same record. The table here below illustrates what happens when importing 1 or 2 or 3 different locations among the coordinate terms available.

<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #59B1A3;" colspan="3">IMPORTED</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #77CDEE;" colspan="3">ENCODED</th>
      <th style="text-align: left; text-align: center; vertical-align: middle; border: 1px solid black; padding: 5px;" rowspan="2">Consequence</th>
    </tr>
    <tr>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #9de7da;">WGS84</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #9de7da;">LV95</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #9de7da">LV03</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #BEE1EE;">WGS84</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #BEE1EE;">LV95</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: #BEE1EE;">LV03</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center; vertical-align: middle; " rowspan="3">1 location ✔️</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">Y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">Z</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">🟰</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">Y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">❌</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center; vertical-align: middle; " rowspan="3">2 locations ⚠️️</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">Z</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">❌</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;"></td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">Y</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">Z</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">✅</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; border-bottom: 3px solid black; padding: 5px; text-align: center;">❌</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">X</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">Y</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">Z</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">🟰</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">❌</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center;">❌</td>
      <td style="border: 1px solid black; padding: 5px; text-align: center; vertical-align: middle; ">3 locations️ ⚠️⚠️</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 5px; text-align: left;" colspan="8">legend:<br>LV95 = CH1903+/LV95; LV03 = CH1903/LV03<br> coordinates X &ne; coordinates Y &ne; coordinates Z (these represent three different locations)<br> 🟰 = original value used for conversion, ✅ = converted from 🟰 value, ❌ = unconverted original value</td>
    </tr>
  </table>
</div>

# 4) Uncertainty estimation

# 5) Validation and Quality control

## 5.1) Cross checking

# Documentation

## Reference protocols
- Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. [https://doi.org/10.15468/doc-gg7h-s853](https://doi.org/10.15468/doc-gg7h-s853){:target="_blank"}. Available online : [https://docs.gbif.org/georeferencing-best-practices/1.0/en/georeferencing-best-practices.en.pdf](https://docs.gbif.org/georeferencing-best-practices/1.0/en/georeferencing-best-practices.en.pdf){:target="_blank"}

- Zermoglio PF, Chapman AD, Wieczorek JR, Luna MC & Bloom DA (2020) Georeferencing Quick Reference Guide. Copenhagen: GBIF Secretariat. [https://doi.org/10.35035/e09p-h128](https://doi.org/10.35035/e09p-h128){:target="_blank"}. Available online: [https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/georeferencing-quick-reference-guide.en.pdf](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/georeferencing-quick-reference-guide.en.pdf){:target="_blank"}

## Helpful files

- [ISO3166-1_allCountries.xlsx](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FmorelanneIF%2Fswissnatcoll-sharingportal%2Frefs%2Fheads%2Fmain%2FLocation-files%2FISO3166-1_allCountries.xlsx&wdOrigin=BROWSELINK){:target="_blank"}

## Source for this page
- Tschudin P., Burckhardt D., Monnerat C., Sanchez A., Burri F., Jutzi M. & Gonseth Y. 2014. Recommandations pour la saisie  de données de spécimens en collections, Ver. 2.0. Neuchâtel : GBIF Swiss Node, 12 pp. (available upon request)

Authors: Collaboration between the CJBG, Naturéum, Info fauna and GBIF.ch
