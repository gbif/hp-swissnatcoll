---
layout: documentation
permalink: /en/label-mollusca
title: Mollusca labels
description: Examples of labels found in the mollusc collections of Switzerland and their corresponding Darwin Core encoding
sideNavigation: sideNavigation.tutorials
toc: true
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js"></script>


# Mollusca labels

## Muséum d'Histoire Naturelle de Neuchâtel

### Label example

<div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="/assets/images/categories/Label_Mollusca_MHNN.png" itemprop="contentUrl" data-size="1024x768">
            <img src="/assets/images/categories/Label_Mollusca_MHNN.png" itemprop="thumbnail" alt="Image description" />
        </a>
        <figcaption itemprop="caption description"><i>Lepidopleurus cajetanus</i> (Poli, 1791) (MHNN)</figcaption>
    </figure>
</div>

### Specimen elements corrrespondance with museum encoding and Darwin Core terms

| Museum Specimen | Museum encoding | Darwin Core correspondance |
| --------------- | --------------- | -------------------------- |
| _(specimen)_ | N (nb de coquilles) | [organismQuantity](https://dwc.tdwg.org/terms/#dwc:organismQuantity){:target="_blank"} |
| _Chiton_ | Genre | [genus](https://dwc.tdwg.org/terms/#dwc:genus){:target="_blank"} |
| _cajetanus_ | espèce (et sous-espèce si présent) | [specificEpithet](https://dwc.tdwg.org/terms/#dwc:specificEpithet){:target="_blank"} |
| _Poli_ | Auteur | [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship){:target="_blank"} |
| _(Lepidopleurus)_ | détermination entre parenthèse | [verbatimIdentification](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification){:target="_blank"} |
| _(image .tiff/.jpg/.raw/...)_ | Image ID | [associatedMedia](https://dwc.tdwg.org/terms/#dwc:associatedMedia) |
| _M<sup>r</sup> le Marquis de Monterosato_ | Legs | [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy){:target="_blank"} |
| _Naples_ | Localité ou pays...dépend de l'info | [verbatimLocality](https://dwc.tdwg.org/terms/#dwc:verbatimLocality){:target="_blank"} |
| _(Médit.)_ | Région (ou province) | [higherGeography](https://dwc.tdwg.org/terms/#dwc:higherGeography){:target="_blank"} |
| _N. provisoire: 1_ | Entry ID | [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber){:target="_blank"} |

### Database record example


<div style="overflow-x: auto;">
  <table style="background-color: {{ site.data.colors.lightgreen.transparency }}; width: 100%; border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">catalogNumber</th>
      <th style="text-align: left; width: 40%; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLabel</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimIdentification</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">acceptedNameUsage</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificName</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">genus</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">specificEpithet</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">scientificNameAuthorship</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">recordedBy</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">verbatimLocality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">locality</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">higherGeography</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">organismQuantity</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">organismQuantityType</th>
      <th style="text-align: left; vertical-align: middle; border: 1px solid black; padding: 5px; background-color: {{ site.data.colors.lightgreen.background }};">associatedMedia</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">1</td>
      <td style="border: 1px solid black; width: 40%; padding: 5px;">Chiton cajetanus! Poli (Lepidopleurus)<br> M<sup>r</sup> le Marquis de Monterosato Naples! (Médit.)</td>
      <td style="border: 1px solid black; padding: 5px;">Chiton cajetanus! Poli | (Lepidopleurus)</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Lepidopleurus cajetanus</i> (Poli, 1791)</td>
      <td style="border: 1px solid black; padding: 5px;"><i>Chiton cajetanus</i> Poli</td>
      <td style="border: 1px solid black; padding: 5px;">Chiton</td>
      <td style="border: 1px solid black; padding: 5px;">cajetanus</td>
      <td style="border: 1px solid black; padding: 5px;">Poli</td>
      <td style="border: 1px solid black; padding: 5px;">Tommaso di Maria Allery Monterosato</td>
      <td style="border: 1px solid black; padding: 5px;">Naples! (Médit.)</td>
      <td style="border: 1px solid black; padding: 5px;">Naples</td>
      <td style="border: 1px solid black; padding: 5px;">Mediterranean region</td>
      <td style="border: 1px solid black; padding: 5px; text-align: right;">1</td>
      <td style="border: 1px solid black; padding: 5px;">shell</td>
      <td style="border: 1px solid black; padding: 5px;">MHNN-1.jpg | https://depository-location.ch/path/to/image/MHNN-1.jpg</td>
    </tr>
  </table>
</div>
    

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <!--  Controls are self-explanatory. Order can be changed. -->
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>

<script>
// Initialize PhotoSwipe with the given options
var initPhotoSwipeFromDOM = function(gallerySelector) {
    // Parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element

            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // Create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // Save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // Find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // Opens the photoswipe gallery
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // Define options
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }
        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // Exit if index is not defined
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Initialize PhotoSwipe
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // Loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            // find index of clicked item
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }

            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');
</script>
