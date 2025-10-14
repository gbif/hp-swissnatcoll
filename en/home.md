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
  - type: pageMarkdown
#  - type: split
#    data: home.vision
#  - type: features
#    data: home.thematicCommunities
#  - type: split
#    data: home.fileDownload
#  - type: split
#    data: home.video-swisscollnet
---

# Navigation

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
    Find_data --- How_find_data[How to find data];
    Find_data --- Specimens{{Specimens}};
    Specimens --- Collections{{Collections}};
    Collections --- Institutions{{Institutions}};
    Publish_data --- Accessible[Making Data Accessible];
    Publish_data --- Aggregating[Aggregating Data];
    

    %% Define a "common style" for several blocks
    classDef homepage fill:#FBFBF3,stroke:#333,stroke-width:2px,font-weight:bold,font-size:200px;
    classDef navigation fill: #F5E6CD,stroke:#333,stroke-width:2px,rx:10px,ry:20px,font-size:200px;
    classDef content fill: #7D9FF4,stroke:#333,stroke-width:2px,font-size:200px;
    classDef data fill: #D1E4FF,stroke:#333,stroke-width:2px,font-size:200px;

    %% Apply le style à tous les blocs qui doivent avoir la même couleur
    class Home homepage;
    class About,Find_data,Publish_data navigation;
    class Scope,Partners,How_find_data,Accessible,Aggregating content;
    class Specimens,Collections,Institutions data;
    
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

<br><br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tbody>
    <tr>
        <td rowspan="8" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;">🏛️Home</td>
        <td rowspan="2" style="text-align: center; vertical-align: middle; padding: 10px;">About</td>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/en/about-scope/">Scope</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/en/about-partners">Partners</a></td>
    </tr>
    <tr>
        <td rowspan="4" style="text-align: center; vertical-align: middle; border-top: 1px solid black; padding: 10px;">Find Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px;"><a href="/occurrence/search">Specimens</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/collection/search">Collections</a></td>
    </tr>
        <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/institution/search">Institutions</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/en/how-to-find-data">How To Find Data</a></td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border-top: 1px solid black; border-bottom: 1px solid black; padding: 10px;">Publish Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px;"><a href="/en/making-data-accessible/">Making Data Accessible</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px;"><a href="/en/aggregating-data/">Aggregating Data</a></td>
    </tr>
  </tbody>
</table>

<br><br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <tbody>
    <tr>
        <td rowspan="8" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;  background-color: #F5E6CD;">🏛️Home</td>
        <td rowspan="2" style="text-align: center; vertical-align: middle; padding: 10px; background-color: #7D9FF4;">About</td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/about-scope/">Scope</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/about-partners">Partners</a></td>
    </tr>
    <tr>
        <td rowspan="4" style="text-align: center; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #7D9FF4;">Find Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #D1E4FF;"><a href="/occurrence/search">Specimens</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/collection/search">Collections</a></td>
    </tr>
        <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/institution/search">Institutions</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/how-to-find-data">How To Find Data</a></td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border-top: 1px solid black; border-bottom: 1px solid black; padding: 10px; background-color: #7D9FF4;">Publish Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #D1E4FF;"><a href="/en/making-data-accessible/">Making Data Accessible</a></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/aggregating-data/">Aggregating Data</a></td>
    </tr>
  </tbody>
</table>

<br><br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <colgroup>
    <col style="width: 15%;">   <!-- Home -->
    <col style="width: 20%;">   <!-- Navigation -->
    <col style="width: 25%;">   <!-- Content -->
    <col style="width: 40%;">   <!-- Description -->
  </colgroup>
  <tbody>
    <tr>
        <td rowspan="8" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;  background-color: #F5E6CD;">🏛️Home</td>
        <td rowspan="2" style="text-align: center; vertical-align: middle; padding: 10px; background-color: #7D9FF4;">About</td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/about-scope/">Scope</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Learn more about how this hosted portal came to be.</i></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/about-partners">Partners</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Find out about the different partners involved in data mobilisation in Switzerland.</i></td>
    </tr>
    <tr>
        <td rowspan="4" style="text-align: center; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #7D9FF4;">Find Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #D1E4FF;"><a href="/occurrence/search">Specimens</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Dive in the data published by the swiss institutions through the specimens point of entry.</i></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/collection/search">Collections</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Explore the collections of the published specimens.</i></td>
    </tr>
        <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/institution/search">Institutions</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Discover all institutions hosting natural history data.</i></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/how-to-find-data">How To Find Data</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Get some help to find out what you can look for in the swiss data.</i></td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border-top: 1px solid black; border-bottom: 1px solid black; padding: 10px; background-color: #7D9FF4;">Publish Data</td>
        <td style="text-align: left; vertical-align: middle; border-top: 1px solid black; padding: 10px; background-color: #D1E4FF;"><a href="/en/making-data-accessible/">Making Data Accessible</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Follow the steps of a specimen, from curation to worldwide accessibility.</i></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #D1E4FF;"><a href="/en/aggregating-data/">Aggregating Data</a></td>
        <td style="text-align: left; vertical-align: middle; padding: 10px; background-color: #EBF3FF;"><i>Go into the details of how different datasets are standardised by specialised tools.</i></td>
    </tr>
  </tbody>
</table>

{% include back-to-top.html %}
