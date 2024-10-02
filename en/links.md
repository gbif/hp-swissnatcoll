---
lang-ref: links
layout: post
title: Links
description: Associations, organisations, information networks, databases and current projects or initiatives
background: "{{ site.data.images.links.src }}"
imageLicense: "{{ site.data.images.links.caption }}"
height: 50vh
toc: true
---

Source: [National significance of natural history collections in Switzerland](https://swisscollnet.scnat.ch/fr/exchange/publications/uuid/i/3ce18531-2438-54d1-a034-7ec0b51f42d2-National_significance_of_natural_history_collections_in_Switzerland){:target="_blank"}, Report 2019

# Swiss organisations

## Research and Knowledge sharing

* GBIF Swiss Node hosted portal ([SwissBIF](https://swiss-bif.hp.gbif.org/){:target="_blank"})
* GBIF Swiss Node official page ([GBIF.ch](https://www.gbif.org/country/CH/summary){:target="_blank"})
* Swiss Association of Natural History Museums ([musnatcoll.ch](https://musnatcoll.ch/en){:target="_blank"})
* Swiss Systematics Society ([SSS](https://swiss-systematics.ch/en){:target="_blank"})
* Swiss Centre for Species Information ([InfoSpecies](https://www.infospecies.ch/fr/){:target="_blank"})
* Nationales Bodeninformationssystem ([NABODAT](https://www.nabodat.ch/index.php/de){:target="_blank"})
* Swiss natural history collections network ([SwissCollNet](https://swisscollnet.scnat.ch/en){:target="_blank"})

## Molecular Biology and Genetics
* Association Swiss Barcode of Life ([SwissBOL](http://www.swissbol.ch/){:target="_blank"})

## Education and Collaboration
* Swiss Academy of Sciences ([SCNAT](https://scnat.ch/en){:target="_blank"})

## Online collections
* Natural Science Collections Online - ETH Zürich ([NAHIMA](https://www.nahima.ethz.ch/search){:target="_blank"})
* Herbarium of the Botanical Garden of the University of Bern ([Herbarium Bernense](https://herbarium-bernense.ch/){:target="_blank"})
* Zurich Herbaria ([United Herbaria Z+ZT and Herbarium of the Zurich Succulent Plant Collection (ZSS)](https://www.herbarien.uzh.ch/de.html){:target="_blank"})
* Naturmuseum Uri ([Naturkundemuseum Online](https://naturmuseum.kmsu.ch/){:target="_blank"})
* hallerNet platform ([hallerNet](https://www.hallernet.org/){:target="_blank"})

## 3D models of specimens
* Insects in 3D ([Insects360](https://biocommunication.org/en/insects360/3d-scans/){:target="_blank"})
* Paleontological institute university of Zürich ([Palaeontological Collection UZH](https://sketchfab.com/PIMUZ/models){:target="_blank"})


---


# European organisations
## Research and Knowledge sharing
* Consortium of European Taxonomic Facilities ([CETAF](https://cetaf.org/){:target="_blank"})
* e-Science European Infrastructure for Biodiversity and Ecosystem Research ([LifeWatch-ERIC](https://www.lifewatch.eu/){:target="_blank"})
* National Network of NAturalist Collections ([eReColNat](https://www.recolnat.org/en/){:target="_blank"})

## Data Infrastructure and mobilisation
* [Europeana](https://www.europeana.eu/en){:target="_blank"}, portal for digitised cultural heritage collections of european institutions
* Distributed System of Scientific Collections ([DiSSCo](https://www.dissco.eu/){:target="_blank"})

## Initiatives and Projects
* Cost Action Mobilising Data, Policies and Experts in Scientific Collections ([MOBILISE](https://www.cost.eu/actions/CA17106/){:target="_blank"})
* Innovation and consolidation for large scale digitisation of natural heritage ([ICEDIG](https://know.dissco.eu/handle/item/164){:target="_blank"})
* Synthesis of Systematic Resources, a DiSSCo Project ([SYNTHESYS](https://www.synthesys.info/){:target="_blank"})

## Education and Training
* Distributed European School of Taxonomy ([DEST](https://www.taxonomytraining.eu/){:target="_blank"})


---


# International Organisations
## Research and Knowledge sharing
* Society for the Preservation of Natural History Collections ([SPNHC](https://spnhc.org/){:target="_blank"})
* Global Biodiversity Information Facility ([GBIF](https://www.gbif.org/){:target="_blank"})

## Molecular Biology and Genetics
* Barcode of life Data System ([BOLDSYSTEMS](https://www.boldsystems.org/){:target="_blank"})
* Global Genome Biodiversity Network ([GGBN](https://www.ggbn.org/ggbn_portal/){:target="_blank"})
* National Center for Biotechnology Information ([NCBI](https://www.ncbi.nlm.nih.gov/genbank/){:target="_blank"})

## Data Infrastructure and mobilisation
* Biological Collection Access Service ([BioCASe](https://www.biocase.org/){:target="_blank"})
* Geosciences Collection Access Service ([GeoCASe](https://www.geocase.eu/){:target="_blank"})
* Biodiversity Information Standards (previously: Taxonomic Databases Working Group) ([TDWG](https://www.tdwg.org/){:target="_blank"})
* GBIF Hosted portals in production ([GBIF Hosted portals](https://www.gbif.org/en/composition/4s2G3hhH1n3reU0yN0F8RF/hosted-portals-in-production){:target="_blank"})

## Infrastructure and Initiatives
* Integrated Digitized Biocollections ([iDigBio](https://www.idigbio.org/){:target="_blank"})


---


# Standards & Tools
* DarwinCore Standard ([DwC](https://dwc.tdwg.org/){:target="_blank"})
    * Supplementary help with Darwin Core ([OBIS Manual - Darwin Core](https://manual.obis.org/darwin_core.html){:target="_blank"})
* Access to Biological Collections Data ([ABCD-Standard](https://abcd.tdwg.org/){:target="_blank"})
* GBIF Integrated Publishing Toolkit ([IPT](https://www.gbif.org/ipt){:target="_blank"})


---


# General knowledge and source of information
* SCNAT knowledge - FAQ Biodiversity ([Scientific answers to frequently asked questions about biodiversity](https://naturalsciences.ch/biodiversity/questions_and_answers){:target="_blank"})

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Back to Top Button</title>
  <link rel="stylesheet" href="sass/_backToTop.scss">
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
