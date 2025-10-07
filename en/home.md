---
lang-ref: home
layout: home
permalink: /

# ====================================================================================
# TITLE PART OF THE HOMEPAGE
# ====================================================================================
title: "Swiss Natural History Collections"
description: "_Discover the Treasures Curated in Switzerland_"
background:  "{{ site.data.images.home.src }}"
imageLicense: "{{ site.data.images.home.caption }}"
parallax: true
overlayColor: transparent # OPTIONAL: The default it to slightly darken the image. Set to "transparent" to disable filter. Example value: #00000055
hasBlackText: #5770C0 #true
hasTextShadow: true
#hasBlackText: "{{ site.data.images.home.colorText }}"   # OPTIONAL - default is black. Depending on your background image is can be useful to change text color

height: 80vh

# ====================================================================================
# WHOLE STRUCTURE OF THE HOMEPAGE
# top banner (with title)
# stats part
# thematic feature coded in a yml file
# 2-columns splitted part
# ====================================================================================
composition:
  - type: floatingText
    inlineData:
      title: ⚠️ This website is currently under development 🏗️
  - type: heroImage
  - type: stats
    data: home.stats  #file with the stats: _data/features.yml
  - type: blank
    data: home.homeMap
#  - type: split
#    data: home.vision
#  - type: features
#    data: home.thematicCommunities
#  - type: split
#    data: home.fileDownload
#  - type: split
#    data: home.video-swisscollnet
---

{% include back-to-top.html %}
