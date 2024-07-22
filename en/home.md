---
lang-ref: home
layout: home
permalink: /

# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: "Swiss Virtual Natural History Collection"
description: "Discover the treasures of the Swiss natural history institutions"
background:  "{{ site.data.images.home.src }}"
imageLicense: "{{ site.data.images.home.caption }}"
height: 70vh
parallax: true
cta:
  - text: 🏛️ Institutions
    href: /institution/search
  - text: 🏷️ Specimens
    href: /occurrence/search
    isPrimary: true
  - text: About
    href: /about 
  - text: Publish my data
    href: /en/how-to-publish-data

# ====================================================================================
# WHOLE STRUCTURE OF THE HOMEPAGE
# top banner (with title)
# stats part
# thematic feature coded in a yml file
# 2-columns splitted part
# ====================================================================================
composition:
  - type: heroImage
  - type: stats
    data: home.stats  #file with the stats: _data/examples.yml
  - type: split
    data: home.vision
  - type: features
    data: home.thematicCommunities
  - type: split
    data: home.fileDownload
  - type: split
    data: home.video-swisscollnet
---
