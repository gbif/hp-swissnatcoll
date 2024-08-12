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

## Conservatoire et Jardin botaniques de Genève

### Label example

<figure class="has-text-centered">
  <a href="/assets/images/categories/Label_Herbarium_G_G00304683.jpg" data-lightbox="image-1" data-title='<a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/" target="_blank">Conservatoire et Jardin botaniques de Genève</a>' data-action="zoom">
    <img src="/assets/images/categories/Label_Herbarium_G_G00304683.jpg" alt="<i>Taraxacum retortum</i> Soest (G)" />
  </a>
  <figcaption>Taraxacum retortum Soest (G)</figcaption>
</figure>

### Specimen elements corrrespondance with institution encoding and Darwin Core terms

| Museum Specimen | Institution encoding | Darwin Core correspondance |
| --------------- | -------------------- | -------------------------- |
| Hb.G. 107575 | _not encoded anymore_ | [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers){:target="_blank"} |
| TARAXACUM retortum S. | NOM.NOM_COMPLET | part of [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target="_blank"} |
| J. Kirschner et J. Stepanek | COLLECTIFS.PERSONNES | [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy){:target="_blank"} |
| 2006 | DETERMINAVIT.A_DETERMINATION | element in [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target="_blank"} |
| no. det.: 18854 | _not encoded_ | element in [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target="_blank"} |
| Acquis et intercale dans l'herbier general 107575 Geneve 1977 | _not encoded_ | part of [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target="_blank"} |
| G00304683 | PART.CODE | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |
| SOCIETE POUR L'ECHANGE DES PLANTES VASCULAIRES DE L'EUROPE OCCIDENTALE ET DU BASSIN MEDITERRANEEN, Edit. P. Auquier (LG) - Fascicule 16 (1974-1975), no 8023 Taraxacum retortum v. Soest | _not encoded_ | [references](https://dwc.tdwg.org/terms/#dcterms:references){:target="_blank"} |
| Urdos (France, Pyrenees-Atlantiques), le long de la route du Col du Somport, 200m avant la frontiere avec l'Espagne | RECOLTE.DESC_LOCALITE | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| France | RECOLTE.CO_PAYS | [country](https://dwc.tdwg.org/terms/#dwc:country){:target="_blank"} |
| Pyrenees-Atlantiques | RECOLTE.CO_DEPARTEMENT | [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince){:target="_blank"} |
| 1600 m | RECOLTE.ALTITUDE | [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation){:target="_blank"} |
| 13 juin 1975 | RECOLTE.DA_RECOLTE_ED | [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate){:target="_blank"} |
| 13 | RECOLTE.J_RECOLTE | [day](https://dwc.tdwg.org/terms/#dwc:day){:target="_blank"} |
| 6 | RECOLTE.M_RECOLTE | [month](https://dwc.tdwg.org/terms/#dwc:month){:target="_blank"} |
| 1975 | RECOLTE.A_RECOLTE | [year](https://dwc.tdwg.org/terms/#dwc:year){:target="_blank"} |
| B. de Retz | COLLECTIFS.PERSONNES | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| 71454 | RECOLTE.NUMERO_COLLECTEUR | [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber){:target="_blank"} |
| J. L. van Soest | _not encoded_ | [previousIdentifications](https://dwc.tdwg.org/terms/#dwc:previousIdentifications){:target="_blank"} |
| Isotype ! | TYPUS.TYPUS | [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus){:target="_blank"} |


### Database record example (Darwin Core formatted)

<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">typeStatus</th>
      <th style="text-align: left; width: 40%; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">acceptedNameUsage</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">identifiedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">dateIdentified</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">country</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">stateProvince</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">county</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimElevation</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">minimumElevationInMeters</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimEventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">day</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">month</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">year</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">eventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">otherCatalogNumbers</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px;">G00304683</td>
      <td style="border: 1px solid black; padding: 5px;">Isotypus of <i>Taraxacum retortum</i> Soest.</td>
      <td style="border: 1px solid black; padding: 5px;">Hb.G. 107575<br> G00304683<br> SOCIETE POUR L'ECHANGE DES PLANTES VASCULAIRES DE L'EUROPE OCCIDENTALE ET DU BASSIN MEDITERRANEEN, Edit. P. Auquier (LG) - Fascicule 16 (1974-1975), no 8023 Taraxacum retortum v. Soest<br> Urdos (France, Pyrenees-Atlantiques), le long de la route du Col du Somport, 200m avant la frontiere avec l'Espagne, alt. 1600 m, 13 juin 1975<br> B. de Retz no 71454<br> J .L. van Soest<br> Isotype !<br> TARAXACUM retortum S.<br> vidi: J. Kirschner et J. Stepanek<br> anno: 2006<br> no. det.: 18854<br> TYPUS<br> Acquis et intercale dans l'herbier general 107575 Geneve 1977</td>
      <td style="border: 1px solid black; padding: 5px;">Taraxacum retortum v. Soest</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Taraxacum retortum</i> Soest</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Taraxacum retortum</i> Soest</td>
      <td style="border: 1px solid black; padding: 5px;">Taraxacum</td>
      <td style="border: 1px solid black; padding: 5px;">retortum</td>
      <td style="border: 1px solid black; padding: 5px;">Soest</td>
      <td style="border: 1px solid black; padding: 5px;">de Retz Bernard Guy Gaston</td>
      <td style="border: 1px solid black; padding: 5px;">71454</td>
      <td style="border: 1px solid black; padding: 5px;">Kirschner, J. | Stepanek J.</td>
      <td style="border: 1px solid black; padding: 5px;">2006</td>
      <td style="border: 1px solid black; padding: 5px;">Urdos (France, Pyrenees-Atlantiques), le long de la route du Col du Somport, 200m avant la frontiere avec l'Espagne</td>
      <td style="border: 1px solid black; padding: 5px;">France</td>
      <td style="border: 1px solid black; padding: 5px;">Pyrenees-Atlantiques</td>
      <td style="border: 1px solid black; padding: 5px;">Urdos</td>
      <td style="border: 1px solid black; padding: 5px;">Col du Somport, 200m before the border with Spain</td>
      <td style="border: 1px solid black; padding: 5px;">alt. 1600 m</td>
      <td style="border: 1px solid black; padding: 5px;">1600</td>
      <td style="border: 1px solid black; padding: 5px;">13 juin 1975</td>
      <td style="border: 1px solid black; padding: 5px;">13</td>
      <td style="border: 1px solid black; padding: 5px;">06</td>
      <td style="border: 1px solid black; padding: 5px;">1975</td>
      <td style="border: 1px solid black; padding: 5px;">1975-06-13</td>
      <td style="border: 1px solid black; padding: 5px;">Hb.G. 107575 | 236892/1</td>
    </tr>
  </table>
</div>
