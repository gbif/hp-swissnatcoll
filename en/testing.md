---
layout: documentation
permalink: /testing
title: Testing page
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GIF Pop-up</title>
</head>
<body>

  <!-- Button that opens the GIF in a pop-up -->
  <button onclick="openGifPopup()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
    View GIF
  </button>

  <script>
    function openGifPopup() {
      // Replace with your actual server link to the GIF
      var gifUrl = "https://cscfetkarch.sharepoint.com/:i:/s/infofauna_extern/EbjpkjzO0bVImDEL6wYRcWABE9NPxXXO_H_VzFhazBc8wA?e=zprzQe";
      
      // Open the GIF in a new small pop-up window
      window.open(gifUrl, "gifPopup", "width=600,height=400");
    }
  </script>

</body>
