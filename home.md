---
lang-ref: home
layout: home
permalink: /
# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: Swiss Virtual Natural History Collection
description: Virtual museum of the Natural History collections of Switzerland
background:  "{{ site.data.images.acalypha_gillespieae.src }}"
imageLicense: "{{ site.data.images.acalypha_gillespieae.caption }}"
height: 90vh
#parallax: true

# ====================================================================================
# SHORTCUT BUTTONS BELOW THE TITLE
# ====================================================================================
cta:
  - text: Institutions
    href: /institution/search
    isPrimary: true
  - text: Specimens
    href: /specimen/search
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
    data: examples.stats  #file with the stats: _data/examples.yml
  - type: features
    data: examples.couldBeAnyName
  - type: split
    data: examples.herbariumImageExample                            
---

Edit `/home.md` to change the text.

Lorem markdownum spatium limes indefessus neque *at* orat aestuat, quicquam ne
flavusque omnibus, virginis socerque sparsos vidimus eundem. Sustinet **ramo
pontum ut** avus quamquam de trabes vestemque cruorem tremor.

Viscera mercibus isdem hebetarat undas! Iubet ora ire unum telis adicit, si
Telephus *valent*, instructo refers. Ille **est resque**, sic ruris erit ante
profana detegeret. Et cogor tractus arboribus prensurum praesens memorantur
neque inplet iussus temeraria merui **fas ecce** aethera dixit fieretque [plura
tollebat altius](http://virgineusque.net/est.html).
