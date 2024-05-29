---
layout: compose # this is a layout that allows you to stich together various predefined blocks that comes with the the,e
title: Model Viewer
description: Interactive 3D models
background: /assets/images/placeholders/hylaeus_nigritus_20230714.png
imageLicense: |
  © 2023 The Biocommunication Group - ETH Zurich
height: 70vh
composition:
- type: heroImage
- type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

# Infos on model viewer
Observing insects through a magnifying glass is neat, no doubt! But guess what? We've got an even cooler option for you. Come and explore our collection of 3D insect models!
published on: 7/13/2023
written by: Christian Felsner
Source: [BIOCOMM Research Group](https://biocommunication.org/en/insects360/3d-scans/)


<model-viewer src="https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf?v=1697467521" shadow-intensity="1" camera-controls="" touch-action="none" interaction-prompt-threshold="500" auto-rotate="" class="js-scan-viewer" ar-status="not-presenting"></model-viewer>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
