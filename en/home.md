---
lang-ref: home
layout: home
permalink: /
# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: Swiss Virtual Natural History Collection
description: Virtual museum of the Natural History collections of Switzerland
background:  "{{ site.data.images.home.src }}"
imageLicense: "{{ site.data.images.home.caption }}"
height: 70vh
parallax: true

# ====================================================================================
# SHORTCUT BUTTONS BELOW THE TITLE
# ====================================================================================
cta:
  - text: Institutions
    href: /institution/search
  - text: Specimens
    href: /specimen/search
    isPrimary: true
  - text: About
    href: /about

# ====================================================================================
# WHOLE STRUCTURE OF THE HOMEPAGE
# top banner (with title)
# stats part
# thematic feature coded in a yml file
# 2-columns splitted part
# ====================================================================================
composition:
  - type: heroImage # the block type
  - type: stats
    data: home.stats  #file with the stats: _data/examples.yml
  - type: split
    data: home.vision
  - type: floatingText
    data: home.video-swisscollnet
  - type: features
    data: home.thematicCommunities
  #- type: split
  #  data: examples.herbariumImageExample
  ---
