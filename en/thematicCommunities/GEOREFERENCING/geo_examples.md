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

<!-- OpenSeadragon Configuration -->
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
        panHorizontal: true,
        panVertical: true,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer1.addHandler("zoom", function(event) {
        var zoom = viewer1.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level1").innerText = "Zoom: " + zoom;
    });
</script>

## Location without coordinates

<!-- OpenSeadragon Viewer -->
<div id="openseadragon2" class="openseadragon-viewer">
    <div id="zoom-level2" class="zoom-level">Zoom: 1.00</div>
</div>

<div class="legend">
    <a href="https://www.ville-ge.ch/musinfo/bd/cjb/chg/adetail.php?id=596936&lang=fr">G00390286</a>, 
    <i>Asplenium septentrionale</i> (L.) Hoffm.
</div>

<!-- OpenSeadragon Configuration -->
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
        panHorizontal: true,
        panVertical: true,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        showNavigator: true,
        navigatorPosition: "BOTTOM_LEFT"
    });

    viewer2.addHandler("zoom", function(event) {
        var zoom = viewer2.viewport.getZoom().toFixed(2);
        document.getElementById("zoom-level2").innerText = "Zoom: " + zoom;
    });
</script>
