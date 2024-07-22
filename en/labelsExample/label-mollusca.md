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

<figure class="has-text-centered">
  <a href="/assets/images/categories/label_Mollusca.png" data-lightbox="image-1" data-title='Celia Bueno / <a href="https://www.museum-neuchatel.ch/collections/" target="_blank">Muséum Neuchâtel</a>'>
    <img src="/assets/images/categories/label_Mollusca.png" alt="<i>Chiton cajetanus</i> Poli, 1791 (MHNN)" />
  </a>
  <figcaption><i>Chiton cajetanus</i> Poli, 1791 (MHNN)</figcaption>
</figure>

| Museum Label | Museum encoding | Darwin Core correspondance |
| ------------ | --------------- | -------------------------- |
| _(specimen)_ | N (nb de coquilles) | [organismQuantity](https://dwc.tdwg.org/terms/#dwc:organismQuantity){:target="_blank"} |
| _Chiton_ | Genre | [genus](https://dwc.tdwg.org/terms/#dwc:genus){:target="_blank"} |
| _cajetanus_ | espèce (et sous-espèce si présent) | [specificEpithet](https://dwc.tdwg.org/terms/#dwc:specificEpithet){:target="_blank"} |
| _Poli_ | Auteur | [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship){:target="_blank"} |
| _(Lepidopleurus)_ | détermination entre parenthèse | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| _(image .tiff/.jpg/.raw/...)_ | Image ID | _no DwC equivalent yet. See class:_ [MachineObservation](https://dwc.tdwg.org/terms/#machineobservation){:target="_blank"} |
| _M<sup>r</sup> le Marquis de Monksosato_ | Legs | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| _Naples_ | Localité ou pays...dépend de l'info | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| _(Médit.)_ | Région (ou province) | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target="_blank"} |
| _N. provisoire: 1_ | Entry ID | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |
|  |  | [](){:target="_blank"} |

/!\ [organismQuantity](https://dwc.tdwg.org/terms/#dwc:organismQuantity){:target="_blank"} is to be completed with the field [organismQuantityType](https://dwc.tdwg.org/terms/#dwc:organismQuantityType){:target="_blank"} (in the case of this specimen, the value would be "shell" or "individuals"
