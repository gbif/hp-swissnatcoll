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
#parallax: true
overlayColor: transparent # OPTIONAL: The default it to slightly darken the image. Set to "transparent" to disable filter. Example value: #00000055
hasBlackText: true
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
  - type: markdown
#  - type: split
#    data: home.vision
#  - type: features
#    data: home.thematicCommunities
#  - type: split
#    data: home.fileDownload
#  - type: split
#    data: home.video-swisscollnet
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SwissNatColl website tree</title>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script>
</head>
<body>

<div class="mermaid">
graph TD;
    Home["🏛️Home"] --- About;
    Home --- Find_data[Find data];
    Home --- Publish_data[Publish data];

    %% Decision Graph in Step 3
    About --- Scope;
    About --- Partners;
    Find_data --- Specimens{{Specimens}};
    Find_data --- Collections{{Collections}};
    Find_data --- Institutions{{Institutions}};
    Find_data --- How_find_data[How to find data];
    Publish_data --- Accessible[Making Data Accessible];
    Publish_data --- Aggregating[Aggregating Data];
    

    %% Define a "common style" for several blocks
    classDef navigation fill: #F5E6CD,stroke:#333,stroke-width:2px,rx:10px,ry:20px;
    classDef content fill: #7D9FF4,stroke:#333,stroke-width:2px;
    classDef data fill: #D1E4FF,stroke:#333,stroke-width:2px;

    %% Apply le style à tous les blocs qui doivent avoir la même couleur
    class About,Find_data,Publish_data navigation;
    class Scope,Partners,How_find_data,Accessible,Aggregating content;
    class Specimens,Collections,Institutions data;

    %% Apply Colors
    style Home fill:#FBFBF3,stroke:#333,stroke-width:2px,font-weight:bold,font-size:50px;
    
    %% Define the hyperlink
    click Home "/"
    click Scope "/en/about-scope/"
    click Partners "/en/about-partners"
    click How_find_data "/en/how-to-find-data"
    click Accessible "/en/making-data-accessible/"
    click Aggregating "/en/aggregating-data/"
    click Specimens "/occurrence/search"
    click Collections "/collection/search"
    click Institutions "/institution/search"
</div>
</body>

{% include back-to-top.html %}
