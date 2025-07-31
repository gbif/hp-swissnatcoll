---
layout: documentation
permalink: /en/attribute-values
title: Values examples for DAGI attributes
description: Examples of values for the DAGI attributes
sideNavigation: sideNavigation.tutorials
toc: true
---

# GBIFch

| Attribute | Source | Definition | Example |
| --------- | ------ | ---------- | ------- |
| **materialSampleID** | dwc | Special use : 	GBIFCH unique ID for a specimen | GBIFCH00000001 |
| **endOfPeriodDay** | GBIFch | Day of the month marking the end of the date interval | 30 (if the verbatimEventDate were June 1855) |
| **endOfPeriodMonth** | GBIFch | Month marking the end of the date interval | 5 (if the verbatimEventDate were June 1855) |
| **endOfPeriodYear** | GBIFch | Year marking the end of the date interval | 1855 (if the verbatimEventDate were June 1855) |

# Paleontology

| Attribute | Source | Definition | Example |
| --------- | ------ | ---------- | ------- |
| **associatedTaxa** | dwc | A list (concatenated and separated) of identifiers or names of dwc:Taxon records and the associations of this dwc:Occurrence to each of them. | "occurred with" : "Cheirolepis trailli" | 
