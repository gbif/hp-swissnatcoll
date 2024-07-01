---
layout: blank
---
<html>
<head>
  <title>Responsive Model Viewer</title>
  <style>
    .js-scan-viewer {
      width: 100%;
      max-width: 100vw; /* Maximum width as 100% of the viewport width */
      height: 95vh;    /* Height as 100% of the viewport height */
      border: 1px solid #ccc;
      background-color: #fff;
    }
  </style>
</head>
<body>
  <!-- Inclusion of the model-viewer library -->
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

  <!-- Model Viewer Component -->
  <model-viewer src="https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf"
                shadow-intensity="1" 
                camera-controls="" 
                touch-action="none" 
                interaction-prompt-threshold="500" 
                auto-rotate="" 
                class="js-scan-viewer" 
                ar-status="not-presenting"></model-viewer>
</body>
</html>
