---
layout: compose
title: Digitalisation
description: Digitalisation of natural history collections, best practices, examples, material and more.
background: "{{ site.data.images.digitalisation.src }}"
imageLicense: "{{ site.data.images.digitalisation.caption }}"
height: 70vh

composition:
- type: heroImage # The type is a template. In this case  a big splashy image with some text on it. The data defines what the image is and what the text is. 
  # data: compose.someFile.someProperty # If no data provided the frontMatter page data will be used instead
- type: pageMarkdown # This block will render the markdown in this file so no data property needed
- type: media # another block type, but this time defining the data inline, instead of in a separate file
  inlineData: 
    title: Great papers you should read
    description: Recent publications on digitalisation aspects of collections in Switzerland
    features:
      - preTitle: PDF  # optional
        title: SwissCollNet – A National Initiative for Natural History Collections in Switzerland (Frick H. _et al._, 2019)
        description: |      # required
          digitisation, strategy, standards, data management, educational potential, scientific potential
        background: "{{ site.data.images.swisscollnet.src }}"
        imageLicense: "{{ site.data.images.swisscollnet.caption }}"
        href: https://biss.pensoft.net/article/37188/download/pdf/
      - preTitle: Power Point  # optional
        title: Fly moving land
        href: /about
        description: |      # required
          Light green they’re living green years firmament thing fly moving land.
        background: /assets/img/Haeckel_Caulerpa_racemosa_(uvifera).jpeg
        imageLicense: None for this image, but it would normally go here. Markdown is allowed.
---

# Digitalisation workflow

'''mermaid
graph TD;
  Collecting-->Mounting/Conditioning-->Image capture


