---
layout: documentation
permalink: /en/geo-examples
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

# Examples for georeferencing

## Location with coordinates

<!-- OpenSeadragon Viewer -->
<div id="openseadragon1" class="openseadragon-viewer">
    <div id="zoom-level1" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=610730&lang=fr">G00341664</a>,
    <i>Benstonea serpentinica</i> Callm. & Buerki
</div>

<script>
    var viewer1 = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb100/img_220/G00341664.ptif&cvt=jpeg",
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
        viewer1.viewport.panTo(new OpenSeadragon.Point(0.75, 1.25));
        viewer1.viewport.zoomTo(2.0);
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
        <td style="text-align: left; padding: 10px;">MALAYSIA<br> Sabah<br> Borneo. Lahad Datu District.<br> Gunung Silam Ultramafic soil.</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimElevation</i></td>
        <td style="text-align: left; padding: 10px;">365 m</td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#11-step-1-transcribe-verbatim-location-data">Step 1.1b</a><br> <strong>Document</strong><br> verbatim Location data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>locationRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"></td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2a</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; padding: 10px;">04°58’14’‘N 118°10’44’‘E</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimLatitude</i></td>
        <td style="text-align: left; padding: 10px;">04°58’14’‘N</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimLongitude</i></td>
        <td style="text-align: left; padding: 10px;">118°10’44’‘E</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimCoordinateSystem</i></td>
        <td style="text-align: left; padding: 10px;">degrees minutes seconds</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimSRS</i></td>
        <td style="text-align: left; padding: 10px;">unknown</td>
    </tr>
    <tr>
        <td rowspan="4" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2b</a><br> <strong>Convert</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;">4.97056</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;">118.17889</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;">49</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2c</a><br> <strong>Document</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;">uncertainty calculating using the Wieczorek C, J Wieczorek (2021) Georeferencing Calculator</td>
    </tr>
    <tr>
        <td rowspan="6" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Asia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;">Malaysia</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;">Sabah</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>island</i></td>
        <td style="text-align: left; padding: 10px;">Borneo</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>county</i></td>
        <td style="text-align: left; padding: 10px;">Lahad Datu District</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;">Gunung Silam</td>
    </tr>
  </tbody>
</table>

---

## Location without coordinates

<!-- OpenSeadragon Viewer -->
<div id="openseadragon2" class="openseadragon-viewer">
    <div id="zoom-level2" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=596936&lang=fr">G00390286</a>,
    <i>Asplenium septentrionale</i> (L.) Hoffm.
</div>

<script>
    var viewer2 = OpenSeadragon({
        id: "openseadragon2",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
            type: "image",
            url: "https://www.ville-ge.ch/imagezoom/?fif=cjbiip/cjb100/img_225/G00390286.ptif&cvt=jpeg",
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
        viewer2.viewport.panTo(new OpenSeadragon.Point(0.8, 1.25));
        viewer2.viewport.zoomTo(2.5);;
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
        <td style="text-align: left; padding: 10px;">Murs à Champel, Genève</td>
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
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2a</a><br> <strong>Transcribe</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>verbatimCoordinates</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimLatitude</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimLongitude</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimCoordinateSystem</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>verbatimSRS</i></td>
        <td style="text-align: left; padding: 10px;"><i>none</i></td>
    </tr>
    <tr>
        <td rowspan="4" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2b</a><br> <strong>Convert</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>decimalLatitude</i></td>
        <td style="text-align: left; padding: 10px;">46.19212</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>decimalLongitude</i></td>
        <td style="text-align: left; padding: 10px;">6.15747</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>coordinateUncertaintyInMeters</i></td>
        <td style="text-align: left; padding: 10px;">1000</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>geodeticDatum</i></td>
        <td style="text-align: left; padding: 10px;">EPSG:4326 (=WGS84)</td>
    </tr>
    <tr>
        <td style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#12-transcribe-verbatim-coordinates-data">Step 1.2c</a><br> <strong>Document</strong><br> verbatim Coordinates data</td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;"><i>georeferenceRemarks</i></td>
        <td style="text-align: left; border-bottom: 1px solid black; padding: 10px;">Approximated coordinates and uncertainty from legacy institutional database</td>
    </tr>
    <tr>
        <td rowspan="5" style="text-align: center; vertical-align: middle; border: 1px solid black; padding: 10px;"><a href="/en/geo-protocole#21-enrich-standardised-textual-location-data">Step 2.1a</a><br> <strong>Enrich</strong><br> standardised Coordinates data</td>
        <td style="text-align: left; padding: 10px;"><i>continent</i></td>
        <td style="text-align: left; padding: 10px;">Europa</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>country</i></td>
        <td style="text-align: left; padding: 10px;">Switzerland</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>stateProvince</i></td>
        <td style="text-align: left; padding: 10px;">Geneva</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>municipality</i></td>
        <td style="text-align: left; padding: 10px;">Geneva</td>
    </tr>
    <tr>
        <td style="text-align: left; padding: 10px;"><i>locality</i></td>
        <td style="text-align: left; padding: 10px;">Champel</td>
    </tr>
  </tbody>
</table>
