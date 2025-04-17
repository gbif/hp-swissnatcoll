---
layout: compose
permalink: /en/georeferencing
title: Georeferencing
description: Information and important pages on georeferencing
background: "{{ site.data.images.georeferencing‎.src }}"
imageLicense: "{{ site.data.images.georeferencing‎.caption }}"
height: 50vh
composition:
- type: heroImage
- type: media
  inlineData: 
    title: Great papers you should read
    description: Papers of authors working for the Swiss natural history collections
    features:
      - preTitle: Web  # optional
        title: Attribution de coordonnées standardisées aux cantons et localités suisses pour une saisie homogène des étiquettes lacunaires (Vust M., 2023) # required
        description: |      # required
          Digitisation of old herbariums reveals cases where only the town, or even the canton, is indicated as the locality. Other samples have no indication of localization, but the biography of the collector suggests that they came from Switzerland. In the absence of more precise information, the question arises as to what coordinates and uncertainty should we assign to these samples in a digitization's goal targeting national and international databases in order to represent them on distribution maps. Standardization was proposed and discussed.
        # img required
        background: https://www.e-periodica.ch/iiif/2/e-periodica!bsv!2023_102!bsv-002_2023_102_0001.jpg/full/!320,320/0/default.jpg
        imageLicense: Bulletin de la Société Vaudoise des Sciences Naturelles Band 102 (2023)
        href: https://www.e-periodica.ch/digbib/view?pid=bsv-002:2023:102::159#72

- type: pageMarkdown # This block will render the markdown in this file so no data property needed

- type: features # The block type "features" shows a list of cards
  data: features.couldBeAnyName # We also need some data for those cards. In this case we refer to a yaml file in the _data folder.

- type: split
  data: features.someOtherNameForSomeData

---

# Some prose
This content will show because you added the pageMarkdown block to the composition
