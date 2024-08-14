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
  <a href="/assets/images/categories/Label_Ornitho_NMLU.png" data-lightbox="image-1" data-title='Tamara Emmenegger / <a href="https://naturmuseum.lu.ch/Sammlung_und_Forschung" target="_blank">Natur-Museum Luzern</a>'>
    <img src="/assets/images/categories/Label_Ornitho_NMLU.png" alt="<i>Glaucidium passerinum</i> (Linnaeus, 1758) (NMLU)" style="max-width: 100%; height: auto; cursor: zoom-in;" />
  </a>
  <figcaption><i>Glaucidium passerinum</i> (Linnaeus, 1758) (NMLU)</figcaption>
</figure>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Specimen | Museum encoding | Darwin Core correspondance |
| --------------- | --------------- | -------------------------- |
| _Glaucidium passerinum_ | Artname | [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName){:target="_blank"} |
| _Sperlingskauz_ | ... | [vernacularName](https://dwc.tdwg.org/terms/#dwc:vernacularName){:target="_blank"} |
| _♀_ | Geschlecht | [sex](https://dwc.tdwg.org/terms/#dwc:sex){:target="_blank"} |
| _ad_ | Alter | [lifeStage](https://dwc.tdwg.org/terms/#dwc:lifeStage){:target="_blank"} |
| _CH : OW / NW / LU: Pilatus [Pilatus]_ | Fundort | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality) |
| _4. Dez. 1914_<br> _4.XII 1914_ | ... | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target="_blank"} |
| _374_ | ... | [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers){:target="_blank"} |
| _NMLU_ | ... | [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode){:target="_blank"} |
| _ZOO AV_ | ... | [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode){:target="_blank"} |
| _AS-145-MON_ | NML Nr. | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |

### Database record example


<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; border-collapse: collapse; border: 1px solid black; table-layout: fixed;">
    <colgroup>
      <col style="width: 40%;">
      <col style="min-width: 300px; width: 20%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
      <col style="width: 15%;">
      <col style="width: 15%;">
      <col style="width: 15%;">
    </colgroup>
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">family</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">vernacularName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimEventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">eventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">day</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">month</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">year</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;">AS-145-MON</td>
      <td style="border: 1px solid black; padding: 5px;">374 Kollektion Dr. Jul. Troller, Luzern<br> Glaucidium passerinum (Linné)<br> Sperlingskauz ♀<br> Pilatus 4.XII 1914 | NATUR-MUSEUM LUZERN<br> Artname: Glaucidium passerinum<br> Sperlingskauz<br> Geschlecht: ♀ Alter: ad<br> Fundort: CH : OW/NW/LU: Pilatus [Pilatus]<br> Datum: 4. Dez. 1914<br> NML Nr. AS-145</td>
      <td style="border: 1px solid black; padding: 5px;">Glaucidium passerinum (Linné)</td>
      <td style="border: 1px solid black; padding: 5px;">Strigidae</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Glaucidium passerinum</i> (Linnaeus, 1758)</td>
      <td style="border: 1px solid black; padding: 5px;">Glaucidium</td>
      <td style="border: 1px solid black; padding: 5px;">passerinum</td>
      <td style="border: 1px solid black; padding: 5px;">(Linnaeus, 1758)</td>
      <td style="border: 1px solid black; padding: 5px;">Sperlingskauz | Chevechette d'Europe | Civetta nana</td>
      <td style="border: 1px solid black; padding: 5px;">n.a.</td>
      <td style="border: 1px solid black; padding: 5px;">Pilatus | CH : OW/NW/LU: Pilatus [Pilatus]</td>
      <td style="border: 1px solid black; padding: 5px;">Pilatus</td>
      <td style="border: 1px solid black; padding: 5px;">4. Dez. 1914 | 4.XII 1914</td>
      <td style="border: 1px solid black; padding: 5px;">1914-12-04</td>
      <td style="border: 1px solid black; padding: 5px;">04</td>
      <td style="border: 1px solid black; padding: 5px;">12</td>
      <td style="border: 1px solid black; padding: 5px;">1914</td>
    </tr>
  </table>
</div>

