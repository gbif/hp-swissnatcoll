---
title: Visit the Swiss scientific collections
description: in person and virtually
layout: compose
permalink: /en/visit_us
background: "{{ site.data.images.visit_us.src }}"
imageLicense: "{{ site.data.images.visit_us.caption }}"
height: 50vh
composition:
  - type: heroImage
  - type: pageMarkdown # This block will render the markdown in this file so no data property needed
  - type: features
    data: exhibitions
  - type: features
    data: outofthebox
---



## Discover the treasures of our collections
Here starts an extraordinary journey to uncover the hidden and forgotten treasures within Switzerland's natural history collections.
Marvel at rare and ancient fossils that transport you back in time, and intricate minerals that sparkle with natural beauty.
Explore fascinating artifacts that reveal the secrets of Earth's diverse ecosystems and geological wonders.
Each exhibit is a captivating story waiting to be discovered, from the tiniest insect specimens to majestic prehistoric creatures.


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Back to Top Button</title>
  <style>
    /* Style for the Back to Top Button */
    #back-to-top {
      position: fixed;
      bottom: 40px;
      right: 120px;
      display: none;
      background-color: #fa5e97;
      color: white;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      z-index: 1000;
      width: 70px; /* Width for the rectangle */
      height: 50px; /* Height for the rectangle */
      line-height: 40px;
    }

    #back-to-top:hover {
      background-color: #fa5e97;
    }
  </style>
</head>

<body>

  <!-- Back to Top Button -->
  <a id="back-to-top" href="#" title="Back to top">Up</a>

  <script>
    // Show or hide the button when scrolling
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var backToTopButton = document.getElementById("back-to-top");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }

    // Scroll to the top when the button is clicked
    document.getElementById("back-to-top").addEventListener("click", function(event) {
      event.preventDefault();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  </script>

</body>
</html>
