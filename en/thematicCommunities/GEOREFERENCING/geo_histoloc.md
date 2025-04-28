---
layout: documentation
permalink: /en/geo-histo-loc
title: Examples for georeferencing
toc: true
sideNavigation: sideNavigation.georeferencing
---

<head>
    <!-- OpenSeadragon CSS and JS -->
    <script src="https://openseadragon.github.io/openseadragon/openseadragon.min.js"></script>
    <style>
        .openseadragon-viewer {
            width: 700px;
            height: 500px;
            margin: auto;
            position: relative;
            border: 1px solid black;
        }

        .zoom-level {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 0.9em;
        }

        .legend {
            text-align: center;
            margin-top: 10px;
            font-size: 1.2em;
            font-style: italic;
        }
    </style>
</head>

# Examples for georeferencing : Historical location

## Precise description

<!-- OpenSeadragon Viewer -->
<div id="openseadragon1" class="openseadragon-viewer">
    <div id="zoom-level1" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=235446&lang=fr">G00304771</a>,
    <i>Tragopogon colchicus</i> Albov
</div>

<script>
    var viewer1 = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb19/img_99/G00304771.ptif&cvt=jpeg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer1.addHandler("zoom", function(event) {
        var zoom = viewer1.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level1").innerText = "Zoom: " + zoom;
    });

    viewer1.addHandler("open", function() {
        viewer1.viewport.panTo(new OpenSeadragon.Point(0.43, 0.97));
        viewer1.viewport.zoomTo(2);
    });
</script>

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Mingrélie : loc. [Tschkhorotzuhom]</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Asia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;">Georgia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;">CH</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;">Samegrelo-Zemo Svaneti</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;">Chkhorotsqu</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;">Municipality inferred from label translation</td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2a</a><br> <strong>Enrich</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;">42.52373</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;">42.12743</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;">10'000</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinatePrecision</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2b</a><br> <strong>Document</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferencedBy</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferencedDate</i></td>
        <td style="text-align: left; padding: 10px;">2025-02-01/2025-02-28</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceProtocol</i></td>
        <td style="text-align: left; padding: 10px;">point-radius method</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceSources</i></td>
        <td style="text-align: left; padding: 10px;">Google Maps (february 2025)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
  </tbody>
</table>


## State-level description

<!-- OpenSeadragon Viewer -->
<div id="openseadragon2" class="openseadragon-viewer">
    <div id="zoom-level2" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=467248&lang=fr">G00694252</a>,
    <i>Actinodaphne molochina</i> Nees
</div>

<script>
    var viewer2 = OpenSeadragon({
        id: "openseadragon2",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb75/img_20170629/GDC045175_01.ptif&cvt=jpeg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer2.addHandler("zoom", function(event) {
        var zoom = viewer2.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level2").innerText = "Zoom: " + zoom;
    });

    viewer2.addHandler("open", function() {
        viewer2.viewport.panTo(new OpenSeadragon.Point(0.25, 1.1));
        viewer2.viewport.zoomTo(3.5);
    });
</script>

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Ceylan</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Asia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;">Ceylan</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;">Sri Lanka</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;">Wikipedia : <a href="https://fr.wikipedia.org/wiki/Sri_Lanka" target="_blank">https://fr.wikipedia.org/wiki/Sri_Lanka</a> : « Le pays était auparavant nommé Tambapanni par ses premiers habitants, Taprobane par les Grecs de l'Antiquité, Serendip (ou Serendib) par les Arabes, puis Ceylan jusqu'en 1972. »</td>
    </tr>
    <tr>
        <td rowspan="9" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2a</a><br> <strong>Enrich</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;">7.86814</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;">80.30689</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><s><i>swissCoordinatesLv95_E</i></s></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><s><i>swissCoordinatesLv95_N</i></s></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><s><i>swissCoordinatesLv03_E</i></s></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><s><i>swissCoordinatesLv03_N</i></s></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;">241'237</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinatePrecision</i></td>
        <td style="text-align: left; padding: 10px;">0.00001</td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2b</a><br> <strong>Document</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferencedBy</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferencedDate</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceProtocol</i></td>
        <td style="text-align: left; padding: 10px;">Georeferencing Quick Reference Guide (Zermoglio et al. 2020, <a href="https://doi.org/10.35035/e09p-h128" target="_blank">https://doi.org/10.35035/e09p-h128)</a></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceSources</i></td>
        <td style="text-align: left; padding: 10px;">GeoPick v.2.1.0 </td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
  </tbody>
</table>


## Inter-state-level description

### Caucase

<!-- OpenSeadragon Viewer -->
<div id="openseadragon3" class="openseadragon-viewer">
    <div id="zoom-level3" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/search.php?lang=fr"><i>unknown specimen</i></a>,
    <i>Coryza thapsoides</i>. Caucase. Dr Hoefft 1830.
</div>

<script>
    var viewer3 = OpenSeadragon({
        id: "openseadragon3",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.cjbg.ch/themes/custom/cjb/assets/header/logo.svg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer3.addHandler("zoom", function(event) {
        var zoom = viewer3.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level3").innerText = "Zoom: " + zoom;
    });

    viewer3.addHandler("open", function() {
        viewer3.viewport.panTo(new OpenSeadragon.Point(0, 0));
        viewer3.viewport.zoomTo(0.5);
    });
</script>

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Caucase</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;">World | Caucasus</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><a href="https://www.getty.edu/vow/TGNFullDisplay?find=caucase&place=&nation=&prev_page=1&english=Y&subjectid=7016642" target="_blank" >Getty Thesaurus of Geographic Names (TGN)</a> : « Area between the Black and Caspian Seas, […] comprising roughly the modern nations of Georgia, Armenia, Azerbaijan, southern parts of Russia, and northeastern Turkey. […] the Caucasus mountains have traditionally been the boundary separating Europe from Asia; however, the area is more subject to Asian influence and so is more often grouped with Asia in modern scholarship. »</td>
    </tr>
    <tr>
        <td rowspan="9" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2a</a><br> <strong>Enrich</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;">42</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;">45</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv95_E</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv95_N</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv03_E</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv03_N</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;">600'000</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinatePrecision</i></td>
        <td style="text-align: left; padding: 10px;">0</td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2b</a><br> <strong>Document</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferencedBy</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferencedDate</i></td>
        <td style="text-align: left; padding: 10px;">2025-02-01/2025-02-28</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceProtocol</i></td>
        <td style="text-align: left; padding: 10px;">point-radius method</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceSources</i></td>
        <td style="text-align: left; padding: 10px;">Getty Thesaurus of Geographic Names (TGN) | Google Maps (feb. 2025)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
  </tbody>
</table>

### Kashmir

<!-- OpenSeadragon Viewer -->
<div id="openseadragon4" class="openseadragon-viewer">
    <div id="zoom-level4" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=203878&base=img&lang=fr">G00214044</a>,
    <i>	Leontopodium brachyactis</i> Gand.
</div>

<script>
    var viewer4 = OpenSeadragon({
        id: "openseadragon4",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb9/img_51/GDC015713_1.ptif&cvt=jpeg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer4.addHandler("zoom", function(event) {
        var zoom = viewer4.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level4").innerText = "Zoom: " + zoom;
    });

    viewer4.addHandler("open", function() {
        viewer4.viewport.panTo(new OpenSeadragon.Point(0.7, 0.8));
        viewer4.viewport.zoomTo(2.88);
    });
</script>

<br>


<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Cachemire</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Asia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;">Asia | Indian subcontinent | Kashmir</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><a href="https://www.getty.edu/vow/TGNFullDisplay?find=kashmir&place=&nation=&prev_page=1&english=Y&subjectid=7029388" target="_blank">Getty Thesaurus of Geographic Names (TGN)</a> : « Ancient state and region of the northwestern Indian subcontinent, comprising circa 85,800 square miles [...] It is has been the subject of dispute between India and Pakistan since the partition of the Indian subcontinent in 1947. »</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2</a><br> Standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;">Standardised coordinates data should be left empty, or else the "official" administrative entity might be attributed during encoding.</td>
    </tr>
  </tbody>
</table>

<br>

### Île de France (Maurice) et Bourbon (Réunion, France)

<!-- OpenSeadragon Viewer -->
<div id="openseadragon5" class="openseadragon-viewer">
    <div id="zoom-level5" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=462801&base=img&lang=fr">G00666913</a>,
    <i>Chassalia boryana</i> DC.
</div>

<script>
    var viewer5 = OpenSeadragon({
        id: "openseadragon5",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb100/img_223/GDC036175_02.ptif&cvt=jpeg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer5.addHandler("zoom", function(event) {
        var zoom = viewer5.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level5").innerText = "Zoom: " + zoom;
    });

    viewer5.addHandler("open", function() {
        viewer5.viewport.panTo(new OpenSeadragon.Point(0.75, 1.4));
        viewer5.viewport.zoomTo(2);
    });
</script>

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Île de France et Bourbon au Pouce</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;">Indian Ocean | Mascarene</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;">Mascarene</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><a href="https://www.getty.edu/vow/TGNFullDisplay?find=mascarene&place=&nation=&prev_page=1&english=Y&subjectid=1010139" target="_blank">Getty Thesaurus of Geographic Names (TGN)</a>: Group of islands in the Indian Ocean east of Madagascar.</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2</a><br> Standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;">Centroid method of georeferencing could be used here (see <a href="https://geopick.gbif.org/?locationid=geopick-v2.1.0-2025-01-13T11-05-40.825Z-138" target="_blank">example here</a>), however geocoding APIs may not be able to deal with multiple countries results (here: Mauritia MU and Reunion RE).</td>
    </tr>
  </tbody>
</table>

<br>

## Changes in borders delimitation

<!-- OpenSeadragon Viewer -->
<div id="openseadragon6" class="openseadragon-viewer">
    <div id="zoom-level6" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=166481&lang=fr">G00191977</a>,
    <i>Triticum obtusidlorum</i> DC.
</div>

<script>
    var viewer6 = OpenSeadragon({
        id: "openseadragon6",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb8/img_43/G00191977.ptif&cvt=jpeg",
            buildPyramid: false
        },
        defaultZoomLevel: 1,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer6.addHandler("zoom", function(event) {
        var zoom = viewer6.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level6").innerText = "Zoom: " + zoom;
    });

    viewer6.addHandler("open", function() {
        viewer6.viewport.panTo(new OpenSeadragon.Point(0.75, 1.4));
        viewer6.viewport.zoomTo(2);
    });
</script>

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;">Macedonia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Europe</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;">Europe | Macedonia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2</a><br> Standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;">Standardised coordinates data should be left empty or else the "official" administrative entity might be attributed during encoding.</td>
    </tr>
  </tbody>
</table>

<br>
<br>
<br>

<!-- table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.lightblue.background }}">Protocole</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.attribute.background }};">Attribute</th>
        <th style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px; background-color: {{ site.data.colors.value.background }};">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1a</a><br> <strong>Transcribe</strong><br> verbatim Location data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimLocality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="11" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised textual Location data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>higherGeography</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>waterBody</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>islandGroup</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>countryCode</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1b</a><br> <strong>Document</strong><br> standardised textual Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td rowspan="9" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2a</a><br> <strong>Enrich</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv95_E</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv95_N</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv03_E</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>swissCoordinatesLv03_N</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinatePrecision</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#22-enrich-standardised-coordinates-data">Step 2.2b</a><br> <strong>Document</strong><br> standardised coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>georeferencedBy</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferencedDate</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceProtocol</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceSources</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; padding: 10px;"></td>
    </tr>
  </tbody>
</table -->
