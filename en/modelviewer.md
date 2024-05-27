---
layout: compose # this is a layout that allows you to stich together various predefined blocks that comes with the the,e
title: Model Viewer
description: Interactive 3D models
background: /assets/images/placeholders/hylaeus_nigritus_20230714.png
imageLicense: |
  © 2023 The Biocommunication Group - ETH Zurich
height: 70vh
# The general format for these compositions is a list of blocks. Each block has a type and some data that is used by the block template.
# See more examples at https://hp-theme.gbif-staging.org/layout/compose
composition:
- type: heroImage # The type is a template. In this case  a big splashy image with some text on it. The data defines what the image is and what the text is. 
  # data: compose.someFile.someProperty # If no data provided the frontMatter page data will be used instead
- type: pageMarkdown # This block will render the markdown in this file so no data property needed
- type: blank
  data: daschboard.daschboard
---

# Infos on model viewer
This content will show because you added the pageMarkdown block to the composition
