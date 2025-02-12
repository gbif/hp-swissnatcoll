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

Georeferencing is the enrichment of the geographical information of a collection specimen with coordinates and a margin of error. Nowadays, this can be done directly in the field with GPS. However for most of older specimen, the geographical description is only textual (e.g. _right side of the road between this place and this place_) and often scarce (e.g. _this country_). Concepts have also evolved with time as well as country names and borders. On the other side, the development of standardised terms such as the Darwin Core terms implies strict rules and definitions for each data term. For instance, the value _Pays de Vaud_ could never be written in the attribute _country_ of Darwin Core.

In the process of database standardisation and cleaning, the use of controlled vocabulary is essential but often an important constraint compared to day-to-day habits of an institution, as well as the usual treatment of historical specimens. For instance, countries that don't exist anymore are still being recorded in the attribute dwc:country.

Specimens have to be treated differently based on their category. The first step is to do [preliminary assessments](/en/geo-protocole#1-preliminary-assessment) defining the categories concerned in a given collection and how they have to be treated.

# 1) Preliminary assessment

| Category | Definition | Specific treatment |
| -------- | ---------- | ------------------ |
| Typus specimen | Specimens that served as the basis of description and publication of a new combination | [Typus](/en/geo-typus){:target="_blank"} |
|  |  |  |


## 1.1) Data Review

## 1.2) Prioritization

# 2) Standardized data entry

## 2.1) Digitization

## 2.2) Data cleaning

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

## Helpful files

- [ISO3166-1_allCountries.xlsx](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FmorelanneIF%2Fswissnatcoll-sharingportal%2Frefs%2Fheads%2Fmain%2FLocation-files%2FISO3166-1_allCountries.xlsx&wdOrigin=BROWSELINK){:target="_blank"}

## Source for this page
- Tschudin P., Burckhardt D., Monnerat C., Sanchez A., Burri F., Jutzi M. & Gonseth Y. 2014. Recommandations pour la saisie  de données de spécimens en collections, Ver. 2.0. Neuchâtel : GBIF Swiss Node, 12 pp. (available upon request)
