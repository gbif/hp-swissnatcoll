---
layout: compose
permalink: /en/tutorial-sessions
title: Tutorial sessions on the Data Aggregator
toc: true
composition:
  - type: pageMarkdown
  - type: features
    data: tutosPowerpoint.lessons

# [https://zoom.us/j/3388329693](https://zoom.us/j/3388329693)
---

# Tutorial sessions for the Data Aggregator users

<br>

## ✨NEW In-house training

{: .box }
**To request for a DAGI individual support in your institution**, please send an email to [contact-swissnatcoll@infofauna.ch](mailto:contact-swissnatcoll@infofauna.ch) with your date of preference, institution name and location and the number of people attending.

<br>

**In-house training goal**: provide DAGI users with personalised support tailored to the specific needs of their respective databases and management systems

**Target audience**:
1. Data Digitizer for the technical aspects of the training (how to use the different features of DAGI)
2. Collection Administrator for the context and global understanding of the system (plus-value of DAGI, what is and can be done with the imported data)

<br>
<br>

## Next live tutorial sessions

Tutorial sessions are independent. You can choose to come to one whose subject interest you.

{: .box }
~~- THURSDAY - **17-04-2025** - **10H30-11H30** - Publication on GBIF~~
~~<br>- TUESDAY - **22-04-2025** - **10H30-11H30** - Publication on GBIF~~
~~<br>- THURSDAY - **24-04-2025** - **15H-16H** - Review : data preparation & import~~
~~<br>- MONDAY - **28-04-2025** - **15H-15H45** - Review : encoding & publishing~~
~~<br>- WEDNESDAY - **07-05-2025** - **15H-16H** - Open questions session~~
<br>- THURSDAY - **08-05-2025** - **10H30-11H30** - Open questions session
<br>Zoom link: [https://zoom.us/j/3388329693](https://zoom.us/j/3388329693)

<br><br>

## Available material

### Text material

<div style="display: flex; justify-content: center; align-items: center; gap: 30px;">
  <a href="/en/how-to-publish-data" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🥾 Step-by-step Guide
    </button>
  </a>
  <a href="/en/how-to-publish-data#how-to-navigate-in-dagi" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🧭 How to navigate in DAGI
    </button>
  </a>

  ### FAQs
  
  <a href="/en/data-aggregator-faqs" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      📊 FAQs DAGI
    </button>
  </a>
  <a href="/en/data-dwc" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🗂️ FAQs Darwin Core
    </button>
  </a>
</div>

### Use Case material

<div style="display: flex; justify-content: center; align-items: center; gap: 30px;">
  <a href="/en/label-herbarium" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🌷 Herbarium labels
    </button>
  </a>
  <a href="/en/label-mollusca" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🐚 Mollusca labels
    </button>
  </a>
  <a href="/en/label-ornithology" style="text-decoration: none;">
    <button style="padding: 10px 20px; font-size: 16px; border: 2px solid #FA5E97; border-radius: 4px; background-color: transparent; color: #333; cursor: pointer;"
            onmouseover="this.style.color='#FA5E97';"
            onmouseout="this.style.color='#333';">
      🦉 Ornithology labels
    </button>
  </a>
</div>



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
