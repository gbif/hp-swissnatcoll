---
layout: documentation
permalink: /en/geo-protocole
title: DAGI Georeferencing protocole
description: Protocole on historical geographical data and how to prepare for the import on DAGI
toc: true
sideNavigation: sideNavigation.georeferencing
---

<h1 style="padding: 10px; color: black; text-align:center">DAGI Georeferencing protocole</h1>

# Context

**Georeferencing** is the **enrichment of the geographical information of a collection specimen with modern coordinates and a margin of error**. Nowadays, this can usually be done directly in the field with a GPS. However for most of older specimen, the geographical description is only textual (e.g. _right side of the road between this place and this place_) and often scarce (e.g. _this country_). Concepts have also evolved with time as well as country names and borders. On the other side, the development of **standardised terms** such as the Darwin Core terms implies **strict rules and definitions** for each data term. For instance, the value _Pays de Vaud_ could never be written in the attribute _country_ of Darwin Core.

In the process of database standardisation and cleaning, the use of **controlled vocabulary** is essential but often an important constraint compared to day-to-day habits of an institution, as well as the usual treatment of historical specimens. Countries that don't exist anymore are still being recorded in the attribute dwc:country, while the recommendation of this term is to use the ISO 3166-1-alpha-2 country standard.

The Data Aggregator DAGI uses the OpenCage Geocoding API of OpenCage GmbH ([https://opencagedata.com/](https://opencagedata.com/){:target="_blank"}) to encode and enrich specific attributes of the institution's records. For the encoding to be successfull, the values of the source attributes must be following the definitions of the attributes, or else inconsistencies and "wrong" data might be inserted.

{: .box}
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
    Start[📜📍 Specimen label Location data] --> |Step 1| Step1[1.1. Transcribe verbatim Location data];
    Step1 --> |Step 2| Step2[2.1. Enrich standardized textual Location data];

    %% Decision Graph in Step 3
    Step2 --> |Step 3| HasCoord[Coordinates present?];
    HasCoord[Coordinates present?] -->|no| GeoPoss[Georeferencing possible?];
    HasCoord -->|yes| TransVerbCoo[Transcribe/convert/document/enrich];
    GeoPoss --> |no| NoGeoref[Don't georeference];
    GeoPoss -->|⬇️ click here ⬇️| Link3[3.1 Possible?];
    GeoPoss --> |yes| GeorefPert[Pertinent?];
    GeorefPert --> |no| NoGeoref;
    GeorefPert -->|⬇️ click here ⬇️| Link4[3.2 Pertinent?];
    GeorefPert --> |yes| GeorefDoable[Do-able?];
    GeorefDoable --> |no| NoGeoref;
    GeorefDoable --> |yes| Georef[Georeference/document/enrich];
    TransVerbCoo -->|⬇️ click here ⬇️| Link1[1.2. Transcribe verbatim coordinates data];
    Georef -->|⬇️ click here ⬇️| Link2[2.2. Enrich standardised coordinates data];
    NoGeoref -->|⬇️ click here ⬇️| Link5[X. to define];

    %% Apply Colors
    style Start fill:#FFFFFF,stroke:#333,stroke-width:4px,font-weight:bold,font-size:50px;;
    style HasCoord fill:#ffcc00,stroke:#333,stroke-width:2px;
    style GeoPoss fill:#ff6666,stroke:#333,stroke-width:2px;
    style TransVerbCoo fill:#66ccff,stroke:#333,stroke-width:2px;
    style NoGeoref fill:#ff3333,stroke:#000,stroke-width:2px,color:white;
    style GeorefPert fill:#ff9900,stroke:#333,stroke-width:2px;
    style GeorefDoable fill:#66cc99,stroke:#333,stroke-width:2px;
    style Georef fill:#33cc33,stroke:#333,stroke-width:2px;
    style Link1 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Link2 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Link3 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Link4 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Link5 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Step1 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    style Step2 fill:#FA5E97,stroke:#333,stroke-width:2px,rx:10px,ry:20px;

    
    %% Define the hyperlink
    click Link1 "/en/geo-protocole#12-transcribe-verbatim-coordinates-data"
    click Link2 "/en/geo-protocole#22-enrich-standardised-coordinates-data"
    click Link3 "/en/geo-protocole#31-possible"
    click Link4 "/en/geo-protocole#31-pertinent"
    click Link5 "/en/geo-protocole"
    click Step1 "/en/geo-protocole#11-step-1-transcribe-verbatim-location-data"
    click Step2 "/en/geo-protocole#21-enrich-standardised-textual-location-data"
</div>
</body>

## 1.1) Step 1: Transcribe verbatim Location data

**Transcribe** the content of the specimen label concerning the location in the field [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"}.

> - [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"}
> - [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target="_blank"}

**Document** information about the method used or difficulty encountered in the field [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks){:target="_blank"}.

> - [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks){:target="_blank"}

## 1.2) Transcribe verbatim coordinates data

**Transcribe** the coordinates present on the specimen label in the field [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates){:target="_blank"} and associated fields.

> - [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates){:target="_blank"}
> - [verbatimLatitude](https://dwc.tdwg.org/terms/#dwc:verbatimLatitude){:target="_blank"}
> - [verbatimLongitude](https://dwc.tdwg.org/terms/#dwc:verbatimLongitude){:target="_blank"}
> - [verbatimCoordinateSystem](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinateSystem){:target="_blank"}
> - [verbatimSRS](https://dwc.tdwg.org/terms/#dwc:verbatimSRS){:target="_blank"}

**Convert** the verbatim coordinates into their corresponding modern coordinate system in the coordinate fields

> - [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude){:target="_blank"}
> - [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude){:target="_blank"}
> - [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters){:target="_blank"}
> - [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum){:target="_blank"}

**Document** information about the method used or difficulty encountered in the field [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks){:target="_blank"}.

> - [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks){:target="_blank"}

# 2) Standardized data entry

## 2.1) Enrich standardised textual Location data

**Enrich** the corresponding information based on the verbatimLocality (and the coordinates if present) in a standardised and controlled way.

> - [continent](https://dwc.tdwg.org/terms/#dwc:continent){:target="_blank"}
> - [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target="_blank"}
> - [waterBody](https://dwc.tdwg.org/terms/#dwc:waterBody){:target="_blank"}
> - [islandGroup](https://dwc.tdwg.org/terms/#dwc:islandGroup){:target="_blank"}
> - [island](https://dwc.tdwg.org/terms/#dwc:island){:target="_blank"}
> - [country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"}
> - [countryCode](https://dwc.tdwg.org/terms/#dwc:countryCode){:target="_blank"}
> - [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince){:target="_blank"}
> - [county](https://dwc.tdwg.org/terms/#dwc:county){:target="_blank"}
> - [municipality](https://dwc.tdwg.org/terms/#dwc:municipality){:target="_blank"}
> - [locality](https://dwc.tdwg.org/terms/#dwc:locality){:target="_blank"}

**Document** information about the method used or difficulty encountered in the field [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks){:target="_blank"}.

> - [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks){:target="_blank"}

## 2.2) Enrich standardised coordinates data

**Enrich**
> - [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude){:target="_blank"}
> - [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude){:target="_blank"}
> - [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum){:target="_blank"}
> - swissCoordinatesLv95_E = swiss longitude coordinates of the [CH1903+/LV95 system](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system){:target="_blank"}
> - swissCoordinatesLv95_N = swiss latitude coordinates of the [CH1903+/LV95 system](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system){:target="_blank"}
> - swissCoordinatesLv03_E = swiss longitude coordinates of the [CH1903/LV03 system](https://www.swisstopo.admin.ch/en/national-triangulation-network-lv03){:target="_blank"}
> - swissCoordinatesLv03_N = swiss latitude coordinates of the [CH1903/LV03 system](https://www.swisstopo.admin.ch/en/national-triangulation-network-lv03){:target="_blank"}
> - [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters){:target="_blank"}
> - [coordinatePrecision](https://dwc.tdwg.org/terms/#dwc:coordinatePrecision){:target="_blank"}


**Document**
> - [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy){:target="_blank"}
> - [georeferencedDate](https://dwc.tdwg.org/terms/#dwc:georeferencedDate){:target="_blank"}
> - [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol){:target="_blank"}
> - [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources){:target="_blank"}
> - [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks){:target="_blank"}

## In-house practices among Swiss natural history collections

### pseudo ISO Codes

In order to deal with unfitting historical locations, the in-house use of self-made codes help filtering data in databases before publishing them and/or sharing them outside of the institution. Here are some example, that would facilitate the collaboration between swiss institutions:

| Pseudo-ISO codes | Definition                    | Example    |
| ---------------- | ----------------------------- | ---------- |
| AA               | Covering several countries    | Yugoslavia |
| ZZ               | Overlapping several countries | Prussia    |
| XX               | Unknown, Whole world          | _empty_    |

# 3) Georeferencing approach

## 3.1) Possible

- Does the georeferencing provide more information to the specimen that the already existing textual information?
- Are the coordinates provided by georeferencing useful in practice when they are accompanied by an uncertainty of several hundred kilometres? (See example [G00304771](/en/geo-histo-loc#state-level-description){:target="_blank"}

{: .box}
**Recommendation**
<br> Only georeference ‘large’ historical localities (e.g. countries, regions) when georeferencing provides greater accuracy than the information provided in the ad hoc fields (_country_, _stateProvince_).


## 3.2) Pertinent

Defining the pertinence of georeferencing historical localities is prior to any step of the procedure in terms of:
- Human ressources
- Time ressources
- Basic data (readable, completeness, univocity)

## 3.2) Historical maps and reference material

--> slide 10

## 3.3) Coordinate assignment

### Cross-border entities

{: .box}
**Recommendation**
<br> Fill in the relevant fields as accurately as possible before proceeding with georeferencing. Do not submit the coordinates if you do not want any of the countries involved to be returned by the encoding.

<div style="overflow-x: auto;">
  <table style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th style="background: {{ site.data.colors.lightblue.background }}; border: 1px solid black; padding: 10px; z-index: 2;">Protocole</th>
        <th style="background: {{ site.data.colors.attribute.background }}; border: 1px solid black; padding: 10px; z-index: 2;">Attribute</th>
        <th style="background: {{ site.data.colors.value.background }}; border: 1px solid black; padding: 10px;">Lakes</th>
        <th style="background: {{ site.data.colors.value.background }}; border: 1px solid black; padding: 10px;">Mountain massifs</th>
        <th style="background: {{ site.data.colors.value.background }}; border: 1px solid black; padding: 10px;">National parks</th>
        <th style="background: {{ site.data.colors.value.background }}; border: 1px solid black; padding: 10px;">Mountain ranges</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="1" style="background: white; text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;">
          <a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1</a><br>verbatim Location data
        </td>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="border: 1px solid black; padding: 10px;">Mont Blanc</td>
        <td style="border: 1px solid black; padding: 10px;">Lac Léman</td>
        <td style="border: 1px solid black; padding: 10px;">Parc national des Écrins</td>
        <td style="border: 1px solid black; padding: 10px;">Forêt Noire</td>
      </tr>
      <tr>
        <td rowspan="5" style="background: white; text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;">
          <a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1</a><br>standardised textual Location data
        </td>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>continent</i></td>
        <td style="border: 1px solid black; padding: 10px;">Europe</td>
        <td style="border: 1px solid black; padding: 10px;">Europe</td>
        <td style="border: 1px solid black; padding: 10px;">Europe</td>
        <td style="border: 1px solid black; padding: 10px;">Europe</td>
      </tr>
      <tr>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>higherGeography</i></td>
        <td style="border: 1px solid black; padding: 10px;">Europe | Mont Blanc</td>
        <td style="border: 1px solid black; padding: 10px;">Europe | Lake Geneva</td>
        <td style="border: 1px solid black; padding: 10px;">Europe | France | Parc National des Ecrins</td>
        <td style="border: 1px solid black; padding: 10px;">Europe | Germany | Baden-Wuerttemberg | Schwarzwald</td>
      </tr>
      <tr>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>waterBody</i></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;">Lake Geneva</td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
      </tr>
      <tr>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>country</i></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;">France</td>
        <td style="border: 1px solid black; padding: 10px;">Germany</td>
      </tr>
      <tr>
        <td style="background: white; text-align: left; border: 1px solid black; padding: 10px;"><i>stateProvince</i></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;"></td>
        <td style="border: 1px solid black; padding: 10px;">Baden-Wuerttemberg</td>
       </tr>
      <tr>
        <td rowspan="1" style="background: white; text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;">
          <a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2</a><br>standardised coordinates data
        </td>
        <td style="background: white; text-align: center; border: 1px solid black; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td colspan="4" style="border: 1px solid black; padding: 10px; text-align: center;">Standardised coordinates data should be left empty or else the "official" administrative entity might be attributed during encoding.</td>
      </tr>
    </tbody>
  </table>
</div>


## 3.4) DAGI Geographical encoding

Geographical encoding allows to standardise and enrich the geographical data associated to a specimen. In DAGI, the geographical encoding is composed of two parts. One is the **Geo Forward** (based on the imported information in the attributes _country_ and _continent_) and the other one is the **Geo Reverse** (based on the imported information in the coordinates attributes (_decimalLatitude_ and _decimalLongitude_, _swissCoordinates_lv95_x_ and _swissCoordinates_lv95_y_, _swissCoordinates_lv03_x_ and _swissCoordinates_lv03_y_).

**Geo Forward** and **Geo Reverse** encoding uses the API of the website [OpenCage data](https://opencagedata.com/){:target="_blank"}. With the use of the attributes mentioned before, a query is built and the result elements are splitted into the corresponding encoded attribute.

In addition to these two parts, coordinates in one or two of the available swiss systems attributes are being converted into WGS84 (_decimalLatitude_ and _decimalLongitude_) and the other available swiss system if it was previously empty.

### Geo Forward

{: .box }
**Attributes needed** : _continent_ OR _country_ <br>
**Attributes encoded** : _continent_, _country_, _countryCode_

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; border: 3px solid black; padding: 10px;">Import examples</th>
        <th colspan="2" style="text-align: center; vertical-align: middle; border: 3px solid black; padding: 10px; background-color: {{ site.data.colors.importedValues.background }};">Imported values</th>
        <th colspan="2" style="text-align: center; vertical-align: middle; border:3px solid black; padding: 10px; background-color: {{ site.data.colors.encodedValues.background }};">Encoded values</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-left: 3px solid black; border-right: 3px solid black; border-top: 3px solid black">
        <td rowspan="3" style="text-align: center; border: 1px solid black; padding: 10px;">Example 1</td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">Europe</td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">Europa</td>
    </tr>
    <tr style="border-left: 3px solid black; border-right: 3px solid black;">
        <td rowspan="2" style="text-align: left; border: 1px solid black; padding: 10px;"><i>country</i></td>
        <td rowspan="2" style="text-align: left; border: 1px solid black; padding: 10px;">Suisse</td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    </tr>
    <tr style="border-left: 3px solid black; border-right: 3px solid black; border-bottom: 3px solid black">
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">CH</td>
    </tr>
    <tr style="border-left: 3px solid black; border-right: 3px solid black;">
        <td rowspan="4" style="text-align: center; border: 1px solid black; padding: 10px;">Example 2</td>
        <td rowspan="4" style="text-align: left; border: 1px solid black; padding: 10px;"><i>country</i></td>
        <td rowspan="4" style="text-align: left; border: 1px solid black; padding: 10px;">Schweiz</td>
    </tr>
    <tr style="border-left: 3px solid black; border-right: 3px solid black;">
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">Europe</td>
    </tr>  
    <tr style="border-left: 3px solid black; border-right: 3px solid black;">
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">Switzerland</td>
    </tr>  
    <tr style="border-left: 3px solid black; border-right: 3px solid black; border-bottom: 3px solid black">
        <td style="text-align: left; border: 1px solid black; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; border: 1px solid black; padding: 10px;">CH</td>
    </tr>
  </tbody>
</table>


### Geo Reverse

{: .box }
**Attributes needed** : _decimalLatitude_ and _decimalLongitude_ <br>
**Attributes encoded** : _continent_, _country_, _countryCode_, _stateProvince_ and _municipality_ (if _countryCode_ = CH, then also _swissCoordinatesLv95_x_, _swissCoordinatesLv95_y_, _swissCoordinatesLv03_x_ and _swissCoordinatesLv03_y_

The first step of Geo Reverse is to **the conversion of the coordinates in Switzerland**, afterwards, the WGS84 coordinates are used in the query to the website [OpenCage data](https://opencagedata.com/){:target="_blank"}.


#### Coordinates conversion

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
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.importedValues.background }};" colspan="3">IMPORTED</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.encodedValues.background }};" colspan="3">ENCODED</th>
      <th style="text-align: left; text-align: center; vertical-align: middle; border: 1px solid black; padding: 5px;" rowspan="2">Consequence</th>
    </tr>
    <tr>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.importedValues.transparency}};">WGS84</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.importedValues.transparency}};">LV95</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.importedValues.transparency}}">LV03</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.encodedValues.transparency}};">WGS84</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.encodedValues.transparency}};">LV95</th>
      <th style="border: 1px solid black; padding: 5px; text-align: center; background-color: {{ site.data.colors.encodedValues.transparency}};">LV03</th>
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

### Risks with the geographical encoding of DAGI

#### Attributing coordinates to an unprecise location

As the whole set of textual information, from continent to municipality, is encoded through the coordinates without an uncertainty radius, it leads to erroneous data by attributing wrong values to smaller elements than the degree of precision of the specimen location.

{: .box}
**What can be done to avoid this:**<br>
- Compare the imported and encoded data in DAGI
- Target and correct the errors of capture in the original database
- Remove the coordinates of the records less precise or import them and publish them without encoding

# 4) Uncertainty estimation

Currently the geographical encoding in DAGI does not take the uncertainty radius in consideration

# 5) Validation and Quality control

## 5.1) Cross checking

# 6) Do not georeference

In cases where georeferencing does not provide the plus-value desired, there are solutions to express it in the data, specifically in the *countryCode* attribute, and leaving all other lower textual location attributes and coordinates attributes empty:

- **Supranational entity** (precision grouping several countries) : countryCode = AA
- **International entity** (precision overlapping several countries) : countryCode = ZZ
- **Unknown location** : countryCode = XX

# Documentation

## Reference protocols
- Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. [https://doi.org/10.15468/doc-gg7h-s853](https://doi.org/10.15468/doc-gg7h-s853){:target="_blank"}. Available online : [https://docs.gbif.org/georeferencing-best-practices/1.0/en/georeferencing-best-practices.en.pdf](https://docs.gbif.org/georeferencing-best-practices/1.0/en/georeferencing-best-practices.en.pdf){:target="_blank"}

- Zermoglio PF, Chapman AD, Wieczorek JR, Luna MC & Bloom DA (2020) Georeferencing Quick Reference Guide. Copenhagen: GBIF Secretariat. [https://doi.org/10.35035/e09p-h128](https://doi.org/10.35035/e09p-h128){:target="_blank"}. Available online: [https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/georeferencing-quick-reference-guide.en.pdf](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/georeferencing-quick-reference-guide.en.pdf){:target="_blank"}

## Online coordinates conversion

- [NAVREF (Swisstopo)](https://www.swisstopo.admin.ch/fr/conversion-coordonnees-navref){:target="_blank"} --> Swiss national coordinates systems (MN03, MN95), Global coordinates (WGS84 decimal, WGS84 DMS)
- [The World Coordinate Converter (TWCC)](https://twcc.fr/){:target="_blank"} --> all coordinates systems

## Helpful files

- [ISO3166-1_allCountries.xlsx](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FmorelanneIF%2Fswissnatcoll-sharingportal%2Frefs%2Fheads%2Fmain%2FLocation-files%2FISO3166-1_allCountries.xlsx&wdOrigin=BROWSELINK){:target="_blank"}

## Source for this page
- Tschudin P., Burckhardt D., Monnerat C., Sanchez A., Burri F., Jutzi M. & Gonseth Y. 2014. Recommandations pour la saisie  de données de spécimens en collections, Ver. 2.0. Neuchâtel : GBIF Swiss Node, 12 pp. (available upon request)

Authors: Collaboration between the CJBG, Naturéum, Info fauna and GBIF.ch
