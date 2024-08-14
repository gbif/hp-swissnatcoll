---
layout: documentation
permalink: /en/label-ornithology
title: Ornithology labels
description: Examples of labels found in the ornithology collections of Switzerland and their corresponding Darwin Core encoding
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

# Ornithology labels

## [Natur-Museum Luzern](/institution/582f1eda-5673-4265-87ac-6a164cd8d193){:target="_blank"}

### Label example

<figure class="has-text-centered">
  <a href="/assets/images/categories/Label_Ornitho_NMLU.png" data-lightbox="image-1" data-title='Celia Bueno / <a href="https://naturmuseum.lu.ch/Sammlung_und_Forschung" target="_blank">Natur-Museum Luzern</a>'>
    <img src="/assets/images/categories/Label_Ornitho_NMLU.png" alt="<i>Glaucidium passerinum</i> (Linnaeus, 1758) (NMLU)" />
  </a>
  <figcaption><i>Glaucidium passerinum</i> (Linnaeus, 1758) (NMLU)</figcaption>
</figure>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Specimen | Museum encoding | Darwin Core correspondance |
| --------------- | --------------- | -------------------------- |
| AS-145-MON | NML Nr. | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |
| Glaucidium passerinum | Artname | [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} |
| Sperlingskauz | ... | [vernacularName](https://dwc.tdwg.org/terms/#dwc:vernacularName){:target="_blank"} |
| ♀ | Geschlecht | [sex](https://dwc.tdwg.org/terms/#dwc:sex){:target="_blank"} |
| ad | Alter | [lifeStage](https://dwc.tdwg.org/terms/#dwc:lifeStage){:target="_blank"} |
| CH : OW / NW / LU: Pilatus [Pilatus] | Fundort | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality) |
| 4. Dez. 1914<br> 4.XII 1914 | ... | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target="_blank"} |
| 374 | ... | [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers){:target="_blank"} |
| NMLU | ... | [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} |
| ZOO AV | ... | [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target="_blank"} |

### Database record example


<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; width: 40%; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">vernacularName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">AS-145-MON</td>
      <td style="border: 1px solid black; width: 150%; padding: 5px;">374 Kollektion Dr. Jul. Troller, Luzern<br> Glaucidium passerinum (Linné)<br> Sperlingskauz ♀<br> Pilatus 4.XII 1914 | NATUR-MUSEUM LUZERN<br> Artname: Glaucidium passerinum<br> Sperlingskauz<br> Geschlecht: ♀ Alter: ad<br> Fundort: CH : OW/NW/LU: Pilatus [Pilatus]<br> Datum: 4. Dez. 1914<br> NML Nr. AS-145</td>
      <td style="border: 1px solid black; padding: 5px;">Glaucidium passerinum (Linné)</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Glaucidium passerinum</i> (Linnaeus, 1758)</td>
      <td style="border: 1px solid black; padding: 5px;">Glaucidium</td>
      <td style="border: 1px solid black; padding: 5px;">passerinum</td>
      <td style="border: 1px solid black; padding: 5px;">(Linnaeus, 1758)</td>
      <td style="border: 1px solid black; padding: 5px;">Sperlingskauz | Chevechette d'Europe | Civetta nana</td>
      <td style="border: 1px solid black; padding: 5px;">Pilatus | CH : OW/NW/LU: Pilatus [Pilatus]</td>
      <td style="border: 1px solid black; padding: 5px;">Pilatus</td>
    </tr>
  </table>
</div>
