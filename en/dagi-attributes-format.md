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
ℹ️ This page covers the formats of the attributes in DAGI, clarifying how to write the data in the import file.
</div>

# Formats

- **Free text** : any character of your keyboard, it can be letters, numbers, spaces, punctuation marks, and symbols.
- **Integer** : only whole numbers, no decimals.
- **Float** : any number, can be a whole number or a decimal number.

# Mandatory attributes

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>catalogNumber</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal; color: #ff6600; font-weight: bold;">⚠️unique value mandatory</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>scientificName</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# JSON attributes

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>amplification</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>assertions</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>chronometric</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>dynamicProperties</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>ext_references</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>permit</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>resourceRelationship</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>speciesDistribution</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>speciesProfile</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>vernacularNames</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">JSON</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Syntax : { "key" : "value" }</td>
        </tr>
    </table>
</div>

# Event

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>day</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> written in ISO 8601-1:2019</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>month</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> written in ISO 8601-1:2019</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>year</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>eventDate</em> written in ISO 8601-1:2019</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>eventDate</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if <em>day</em>, <em>month</em>, <em>year</em> are informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>eventRemarks</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# Identification

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>typeStatus</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">controlled vocabulary recommended</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>verbatimIdentification</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# Taxon

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>acceptedNameUsage</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>kingdom</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>phylum</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>class</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>order</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>family</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>genus</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>specificEpithet</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>scientificNameAuthorship</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>taxonID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>taxonIdCH</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Integer</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>taxonRank</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>vernacularName</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
    </table>
</div>

# Location

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>continent</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>country</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>countryCode</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>stateProvince</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>municipality</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>locality</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>minimumElevationInMeters</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>maximumElevationInMeters</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>decimalLatitude</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if swissCoordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>decimalLongitude</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if swissCoordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissCoordinatesLv03_E</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissCoordinatesLv03_N</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissCoordinatesLv95_E</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissCoordinatesLv95_N</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">enriched by Encoding if coordinates attributes informed</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>coordinateUncertaintyInMeters</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Float</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>geodeticDatum</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>georeferenceVerificationStatus</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">controlled vocabulary recommended</td>
        </tr>
    </table>
</div>

# Material Entity

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>associatedMedia</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">public URL to an image file <br> enriched by Image Upload</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>otherCatalogNumbers</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>partOfOrganism</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">controlled vocabulary recommended</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>preparations</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">controlled vocabulary recommended</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>recordedBy</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">standardised name writing recommended (Full name, first name then last name)</td>
        </tr>
    </table>
</div>

# Occurrence

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>occurrenceID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">copied from <em>catalogNumber</em> if empty during import</td>
        </tr>
    </table>
</div>

# Others

<div style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; table-layout: fixed; margin: 20px 0;">
        <colgroup>
          <col style="width: 35%;">
          <col style="width: 20%;">
          <col style="width: 45%;">
        </colgroup>
        <tr>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.attribute.background }}; font-weight: bold;">Attribute</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.value.background }}; font-weight: bold;">Format</th>
          <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.condition.background }}; font-weight: bold;">Special condition</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>basisOfRecord</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed if empty during import</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>collectionCode</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after import (Source : GRSciColl)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>collectionID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after import (Source : GRSciColl)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>datasetID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after publication (Source : GBIF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>datasetName</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Recommended to be used for GBIF metadata-only dataset DOI</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>gbifDOI</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after publication (Source : GBIF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>gbifID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after publication (Source : GBIF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>institutionCode</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after publication (Source : GBIF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>institutionID</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after publication (Source : GBIF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>modified</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">date format recommended</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>rightsHolder</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Free text</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">(name of the data owner)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissSpeciesCenter</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after encoding (Source : InfoSpecies)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissSpeciesRegistered</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after encoding (Source : InfoSpecies)</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><em>swissSpeciesRegisteredAt</em></td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; ; color: #ff6600; font-weight: bold;">⚠️ Not available for mapping</td>
          <td style="border: 1px solid black; padding: 5px; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">automatically informed after encoding (Source : InfoSpecies)</td>
        </tr>
    </table>
</div>

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
