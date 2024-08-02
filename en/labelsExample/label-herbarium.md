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
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>

  <!-- Zoom.js CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/css/zoom.min.css">

  <!-- Zoom.js JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.2.0/js/zoom.min.js"></script>

</head>

# Herbarium labels

## Herbarium des Botanischen Gartens der Universität Bern

### Label example

<figure class="has-text-centered">
  <a href="/assets/images/categories/Label_Herbarium_BERN.JPG" data-lightbox="image-1" data-title='by <a href="https://herbarium-bernense.ch/" target="_blank">by Herbarium Bernense</a> / CC BY 4.0.' data-action="zoom">
    <img src="/assets/images/categories/Label_Herbarium_BERN.JPG" alt="<i>Saxifraga biflora</i> All. (BERN)" />
  </a>
  <figcaption><i>Saxifraga biflora</i> All. (BERN)</figcaption>
</figure>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Specimen | Museum encoding<br> (in this case already corresponding Darwin Core) |
| --------------- | ------------------------------------------- |
| ... | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| ... | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target="_blank"} |
| ... | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| ... | [occurrenceRemarks](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks){:target="_blank"} |
| ... | [datasetName](https://dwc.tdwg.org/terms/#dwc:datasetName){:target="_blank"} |
| ... | [family](https://dwc.tdwg.org/terms/#dwc:family){:target="_blank"} |
| ... | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| ... | [vernacularName](https://dwc.tdwg.org/terms/#dwc:vernacularName){:target="_blank"} |
| ... | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| ... | [habitat](https://dwc.tdwg.org/terms/#dwc:habitat){:target="_blank"} |
| ...| [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target="_blank"} |
| ... | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target="_blank"} |
| ... | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| ... | [materialEntityID](https://dwc.tdwg.org/terms/#dwc:materialEntityID){:target="_blank"} or <br> [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |

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
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
      <td style="border: 1px solid black; padding: 5px;">...</td>
    </tr>
  </table>
</div>
