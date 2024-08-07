---
lang-ref: about
layout: post
title: About
description: SVNHC
background: "{{ site.data.images.about.src }}"
imageLicense: "{{ site.data.images.about.caption }}"
height: 50vh
toc: true
---

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

# Swiss Natural History Collection, a SwissCollNet project

The ‘**Swiss Virtual Natural History Collection Network**’ ([SwissCollNet](https://swisscollnet.scnat.ch/de)) is an initiative committed to improving the accessibility of natural history collections for research, education and  society. During the funding period 2021–24, SwissCollNet has identified, prioritized and digitized as many collections as possible and built an online portal, the Swiss Virtual Natural History Collection (hereafter SVNHC), which provides **open access to harmonized specimen data from the Swiss collections** for researchers, data providers, curators, collection-holding institutions and customers from the cantons and the federal administration in Switzerland, as well as citizen scientists. As a result, it is hoped the collections will gain increased public visibility.

_Source: [Petrus, A., Wildi, T. and Müller, S. Preproject ‘Swiss Virtual Natural History Collection’. Database (2023) Vol. 2023: article ID baad072.](https://academic.oup.com/database/article/doi/10.1093/database/baad072/7335478?login=true){:target="_blank}_

<figure class="has-text-centered">
	<img src="{{ site.data.images.swisscollnet.src }}" />
	<figcaption caption="{{ site.data.images.swisscollnet.caption }}" />
</figure>


# Natural History collections in Switzerland

The history of natural history collections in Switzerland dates back to the Enlightenment era, reflecting the country’s deep-rooted fascination with nature and scientific inquiry. The foundation of these collections began in the 18th century, paralleling the rise of natural sciences across Europe. Early collections were often housed in universities and belonged to wealthy individuals or scholarly societies who sought to catalog the natural world.

One of the earliest and most prominent institutions is the [Naturhistorisches Museum Basel](https://www.nmbs.ch/en.html), established in 1821. It grew from the collections of the Amerbach Cabinet, a significant private collection acquired by the University of Basel in the 17th century. This museum set a precedent for other Swiss cities to follow.

The 19th century saw a surge in the establishment of natural history museums and collections, spurred by the increasing interest in natural sciences and exploration. The [Naturhistorisches Museum Bern](https://www.nmbe.ch/en), founded in 1832, became notable for its extensive collection of Alpine geology and paleontology. Similarly, the [Muséum d'histoire Naturelle de Genève](http://institutions.ville-geneve.ch/fr/mhn/), established in 1820, is renowned for its diverse collections in zoology, mineralogy, and entomology.

Switzerland’s geographical diversity played a crucial role in enriching these collections, offering a wide array of specimens from the Alps, lakes, and diverse ecosystems. The 20th century brought modernization and expansion, with museums incorporating more interactive exhibits and research facilities. Institutions like the Swiss [Federal Institute of Technology Zurich](https://ethz.ch/en.html) also contributed significantly, fostering research and housing important collections.

Today, Swiss natural history collections continue to thrive, blending traditional specimen displays with cutting-edge research and conservation efforts. These institutions not only preserve the natural heritage of Switzerland but also serve as critical centers for scientific education and public engagement.

[All swiss institutions](/institution/search){: .button .is-primary}
