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
| TARAXACUM retortum vS. | NOM.NOM_COMPLET | part of [verbatimLabel](https://dwc.tdwg.org/terms/#dwc:verbatimLabel){:target="_blank"} |
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
| B. de Retz | COLLECTIFS.PERSONNES | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| 71454 | RECOLTE.NUMERO_COLLECTEUR | [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber){:target="_blank"} |
| J. L. van Soest | _not encoded_ | [previousIdentifications](https://dwc.tdwg.org/terms/#dwc:previousIdentifications){:target="_blank"} |
| Isotype ! | TYPUS.TYPUS | [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus){:target="_blank"} |


### Database record example (Darwin Core formatted)

<div style="overflow-x: auto;">
  <table style="border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">catalogNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">institutionCode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">collectionCode</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">partOfOrganism</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">preparations</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">references</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">occurrenceID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #ffffcc;">associatedMedia</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; max-width: 150px; padding: 5px; background-color: #f2ceeb;">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">otherCatalogNumbers</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">yearCollectionEntrance</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #f2ceeb;">verbatimEventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">day</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">month</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">year</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #85d050;">eventDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">typeStatus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #f2ceeb;">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #85d050;">acceptedNameUsage</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">family</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">recordNumber</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">identifiedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">dateIdentified</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #f2ceeb;">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #85d050;">continent</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">country</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #85d050;">stateProvince</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">county</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">municipality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #f2ceeb;">verbatimElevation</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">minimumElevationInMeters</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #c0e1f5;">maximumElevationInMeters</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #f2ceeb;">verbatimCoordinates</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">locationID</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">decimalLongitude</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">decimalLatitude</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">geodeticDatum</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">coordinateUncertaintyInMeters</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">coordinatePrecision</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">georeferencedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">georeferenceProtocol</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">georeferencedDate</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">georeferenceSources</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: #fffc00;">georeferenceRemarks</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">G00304683</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">CJBG</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">G</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">dried plant tissue</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">herbarium sheet</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=234911&lang=fr</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">https://www.gbif.org/occurrence/1144789039</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffffcc;">https://www.ville-ge.ch/imagezoom/?FIF=cjbiip/cjb19/img_101/G00304683.ptif&cvt=jpg</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">Hb.G. 107575<br> G00304683<br> SOCIETE POUR L'ECHANGE DES PLANTES VASCULAIRES DE L'EUROPE OCCIDENTALE ET DU BASSIN MEDITERRANEEN, Edit. P. Auquier (LG) - Fascicule 16 (1974-1975), no 8023 Taraxacum retortum v. Soest<br> Urdos (France, Pyrenees-Atlantiques), le long de la route du Col du Somport, 200m avant la frontiere avec l'Espagne, alt. 1600 m, 13 juin 1975<br> B. de Retz no 71454<br> J .L. van Soest<br> Isotype !<br> TARAXACUM retortum S.<br> vidi: J. Kirschner et J. Stepanek<br> anno: 2006<br> no. det.: 18854<br> TYPUS<br> Acquis et intercale dans l'herbier general 107575 Geneve 1977</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Hb.G. 107575 | SIB ID 236892/1</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">1977</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">13 juin 1975</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">13</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">6</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">1975</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #92d050;">1975-06-13</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Isotypus of Taraxacum retortum Soest.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">Taraxacum retortum v. Soest</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Taraxacum retortum Soest.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #92d050;">Taraxacum retortum Soest.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Asteraceae</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Taraxacum</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">retortum</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Soest.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">de Retz, B.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">71454</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Stepanek, J.</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">2006</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">Urdos (France, Pyrénées-Atlantiques), le long de la route du Col du Somport, 200m avant la frontière avec l'Espagne</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #92d050;">Europe</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">France</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #92d050;">Nouvelle-Aquitaine</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Pyrénées-Atlantiques</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Urdos</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">Col du Somport</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">alt. 1600 m</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">1600</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #c0e6f5;">NA</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #f2ceef;">NA</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">geopick-v2.1.0-2024-06-18T07-23-18.770Z-243</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">42.7961761</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">-0.5314797</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">epsg:4326</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">104</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">0.0000001</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">A. Mentha</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">Georeferencing Quick Reference Guide (Zermoglio et al. 2020, https://doi.org/10.35035/e09p-h128)</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">2024-08-12T14:57:33.750Z</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">GeoPick v.2.1.0</td>
      <td style="border: 1px solid black; vertical-align: top; padding: 5px;background-color: #ffff00;">Distance assumed along road</td>
    </tr>
  </table>
</div>


<figure class="has-text-centered">
  <a href="/assets/images/GraphsDiagrams/LabelsExamples_G_SummaryRecordingProcess.png" data-lightbox="image-2" data-title='Anouk Mentha / <a href="https://www.cjbg.ch/en" target="_blank">G</a>' data-action="zoom">
    <img src="/assets/images/GraphsDiagrams/LabelsExamples_G_SummaryRecordingProcess.png" alt="<i>Summary : Label information recording process and information format" />
  </a>
  <figcaption>Summary : Label information recording process and information format (Anouk Mentha / <a href="https://www.cjbg.ch/en">G</a>)</figcaption>
</figure>
