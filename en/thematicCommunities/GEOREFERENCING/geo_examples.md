---
layout: documentation
permalink: /en/geo-examples
title: Examples for georeferencing
toc: true
sideNavigation: sideNavigation.georeferencing
---

<head>
    <script src="https://openseadragon.github.io/openseadragon/openseadragon.min.js"></script>
    <style>
        #openseadragon {
            width: 800px;
            height: 600px;
            margin: auto;
        }
    </style>
</head>

# Examples for georeferencing

## Location with coordinates

<body>
    <div id="openseadragon"></div>

    <script>
        OpenSeadragon({
            id: "openseadragon",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: {
                type: "image",
                url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb100/img_220/G00341664.ptif&cvt=jpeg",
                buildPyramid: false
            },
            defaultZoomLevel: 1,  // Initial zoom level
            panHorizontal: true,
            panVertical: true,
            minZoomLevel: 0.5,
            maxZoomLevel: 5
        });
    </script>
</body>


| Attribute | Value |
| --------- | ----- |
| verbatimLocality | MALAYSIA<br> Borneo. Lahad Datu District. Gunung Silam Ultramafic soil. |
| verbatimCoordinate | 04°58'14''N 118°10'44''E |
| verbatimElevation | 365 m |
