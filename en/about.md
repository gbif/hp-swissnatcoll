---
lang-ref: about
layout: compose
title: About
description: This hosted portal presents the digitised specimens held in the natural history institutions of Switzerland
background: /assets/images/GraphsDiagrams/SwissDataFlows.png
imageLicense: "modified from DatenGroup_20231205.pptx (Presentation of Nils Arrigo, 2023)"
height: 50vh
toc: true
composition:
  - type: heroImage
  - type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

# Swiss Natural History Collection
The Swiss Natural History Collection (SwissNatColl) provides **open access to harmonized specimen data from the Swiss collections** for researchers, data providers, curators, collection-holding institutions and customers from the cantons and the federal administration in Switzerland, as well as citizen scientists. As a result, it is hoped the collections will gain increased public visibility.


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
