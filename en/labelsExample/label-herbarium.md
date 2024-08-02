---
layout: documentation
permalink: /en/label-herbarium
title: Herbarium labels
description: Examples of labels found in the herbaria of Switzerland and their corresponding Darwin Core encoding
sideNavigation: sideNavigation.tutorials
toc: true
---

<head>
  <!-- Lightbox2 CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
  <!-- Your existing CSS -->
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>
  <!-- Your existing JavaScript -->
</head>

# Herbarium labels

## Herbarium des Botanischen Gartens der Universität Bern

### Label example

<figure class="has-text-centered">
  <a href="/assets/images/categories/Label_Herbarium_BERN.JPG" data-lightbox="image-1" data-title='by <a href="https://herbarium-bernense.ch/" target="_blank">by Herbarium Bernense</a> / CC BY 4.0.'>
    <img src="/assets/images/categories/Label_Herbarium_BERN.JPG" alt="<i>Scientific name</i> (BERN)" />
  </a>
  <figcaption><i>Scientific name</i> (BERN)</figcaption>
</figure>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Label | Museum encoding | Darwin Core correspondance |
| ------------ | --------------- | -------------------------- |
| ... | ... | [organismQuantity](https://dwc.tdwg.org/terms/#dwc:organismQuantity){:target="_blank"} |
| ... | ... | [genus](https://dwc.tdwg.org/terms/#dwc:genus){:target="_blank"} |
| ... | ... | [specificEpithet](https://dwc.tdwg.org/terms/#dwc:specificEpithet){:target="_blank"} |
| ... | ... | [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship){:target="_blank"} |
| ... | ... | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| ... | ... | [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia) |
| ... | ... | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| ... | ... | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| ... | ... | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target="_blank"} |
| ... | ... | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |

### Database record example

<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; width: 40%; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">acceptedNameUsage</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">higherGeography</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">organismQuantity</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">organismQuantityType</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">associatedMedia</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">...</td>
      <td style="border: 1px solid black; width: 40%; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
    </tr>
  </table>
</div>
    
