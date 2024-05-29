---
layout: compose
title: Model Viewer
description: Interactive 3D models
background: /assets/images/placeholders/hylaeus_nigritus_20230714.png
imageLicense: |
  © 2023 The Biocommunication Group - ETH Zurich
height: 70vh
composition:
- type: heroImage
- type: floatingText
  data: floatingText.3Dinsects
- type: pageMarkdown

# "https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf?v=1697467521"
---

# Infos on model viewer

Insects360 is a collaborative project developed by the Biocommunication Group, the Entomological Collection of ETH Zurich, and the SimplyScience Foundation. Its mission is to raise awareness and promote understanding of insects and their role in the world through the use of 3D models and captivating scientific narratives created by experts in the entomological field.

In addition to its informative content, Insects360 offers educational resources in German specifically tailored for Swiss schools. The website believes that knowledge is a key driver in fostering appreciation for these incredible creatures and their vital role in the world.

Insects360 invites visitors on an educational journey to explore the realm of insects, unlocking their secrets and showcasing their beauty in ways that inspire curiosity and admiration.

The website is expanding, and over the next two years, it will introduce new topics, each offering a unique perspective on insects. Visitors can register via the contact form to be informed as soon as new content is available.

published on: 7/13/2023  
written by: Christian Felsner  
Source: [BIOCOMM Research Group](https://biocommunication.org/en/insects360/3d-scans/)

# Preview
<!-- Inclusion of the model-viewer library -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<!-- Model Viewer Component -->
<model-viewer src="https://cors-anywhere.herokuapp.com/https://biocommunication.org/filesystems/scans/Hylaeus-cgj-20230823.gltf"
              shadow-intensity="1" 
              camera-controls="" 
              touch-action="none" 
              interaction-prompt-threshold="500" 
              auto-rotate="" 
              class="js-scan-viewer" 
              ar-status="not-presenting" 
              style="width: 100%; max-width: 800px; height: 400px; border: 1px solid #ccc; background-color: #fff;"></model-viewer>
_If the model is not showing in the window, you may need to add a core origins extension on your navigator (Chrome, Edge, Firefox, etc..)._
