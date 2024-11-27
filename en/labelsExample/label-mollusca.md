---
layout: documentation
permalink: /en/label-mollusca
title: Mollusca labels
description: Examples of labels found in the mollusc collections of Switzerland and their corresponding Darwin Core encoding
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

# Mollusca labels

## Muséum d'Histoire Naturelle de Neuchâtel

### Label example

<figure class="has-text-centered">
  <a href="/assets/images/categories/Label_Mollusca_MHNN.png" data-lightbox="image-1" 
     data-title='Celia Bueno / <a href="https://www.museum-neuchatel.ch/collections/" target="_blank">Muséum Neuchâtel</a>'>
    <img src="/assets/images/categories/Label_Mollusca_MHNN.png" 
         alt="<i>Chiton cajetanus</i> Poli, 1791 (MHNN)" 
         style="max-width: 100%; height: auto; cursor: zoom-in;" />
  </a>
  <figcaption><i>Lepidopleurus cajetanus</i> (Poli, 1791) (MHNN)</figcaption>
</figure>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Specimen | Museum encoding | Darwin Core correspondance |
| --------------- | --------------- | -------------------------- |
| _(specimen)_ | N (nb de coquilles) | [organismQuantity](https://dwc.tdwg.org/terms/#dwc:organismQuantity){:target="_blank"} |
| _Chiton_ | Genre | [genus](https://dwc.tdwg.org/terms/#dwc:genus){:target="_blank"} |
| _cajetanus_ | espèce (et sous-espèce si présent) | [specificEpithet](https://dwc.tdwg.org/terms/#dwc:specificEpithet){:target="_blank"} |
| _Poli_ | Auteur | [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship){:target="_blank"} |
| _(Lepidopleurus)_ | détermination entre parenthèse | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| _(image .tiff/.jpg/.raw/...)_ | Image ID | part of the url in [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia){:target="_blank"} |
| _M<sup>r</sup> le Marquis de Monterosato_ | Legs | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| _Naples_ | Localité ou pays...dépend de l'info | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| _(Médit.)_ | Région (ou province) | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target="_blank"} |
| _N. provisoire: 1_ | Entry ID | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |

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
      <td style="border: 1px solid black; padding: 5px; text-align: right;">1</td>
      <td style="border: 1px solid black; width: 40%; padding: 5px;">Chiton cajetanus! Poli (Lepidopleurus)<br> M<sup>r</sup> le Marquis de Monterosato Naples! (Médit.)</td>
      <td style="border: 1px solid black; padding: 5px;">Chiton cajetanus! Poli | (Lepidopleurus)</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Lepidopleurus cajetanus</i> (Poli, 1791)</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Chiton cajetanus</i> Poli</td>
      <td style="border: 1px solid black; padding: 5px;">Chiton</td>
      <td style="border: 1px solid black; padding: 5px;">cajetanus</td>
      <td style="border: 1px solid black; padding: 5px;">Poli</td>
      <td style="border: 1px solid black; padding: 5px;">Tommaso di Maria Allery Monterosato</td>
      <td style="border: 1px solid black; padding: 5px;">Naples! (Médit.)</td>
      <td style="border: 1px solid black; padding: 5px;">Naples</td>
      <td style="border: 1px solid black; padding: 5px;">Mediterranean region</td>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">1</td>
      <td style="border: 1px solid black; padding: 5px;">shell</td>
      <td style="border: 1px solid black; padding: 5px;">https://depository-location.ch/path/to/image/MHNN-1.jpg</td>
    </tr>
  </table>
</div>
