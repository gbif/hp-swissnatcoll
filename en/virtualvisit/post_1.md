---
title: "{{ site.data.outoftheboxposts.post_1.title }}"
background: "{{ site.data.outoftheboxposts.post_1.background }}"
imageLicense: |
  "{{ site.data.outoftheboxposts.post_1.caption }}"
composition:
  - type: pageMarkdown
---
<head>
  <!-- Lightbox2 CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
  <!-- Your existing CSS -->
  
  <!-- Lightbox2 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>
  <!-- Your existing JavaScript -->
</head>

## {{ site.data.outoftheboxposts.post_1.title }}

<figure class="has-text-centered">
  <a href="{{ site.data.outoftheboxposts.post_1.background }}" data-lightbox="image-1" data-title="{{ site.data.outoftheboxposts.post_1.overlay-title }}">
    <img src="{{ site.data.outoftheboxposts.post_1.background }}" alt="{{ site.data.outoftheboxposts.post_1.overlay-title }}" />
  </a>
  <figcaption>{{ site.data.outoftheboxposts.post_1.overlay-title }}</figcaption>
</figure>


{{ site.data.outoftheboxposts.post_1.description}}
