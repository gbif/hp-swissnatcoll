---
layout: compose
title: Methods
description: Learn more about the journey of a museum specimen, the various techniques of curating and more
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  GBIF standardised image
height: 50vh
composition:
- type: heroImage
- type: pageMarkdown
- type: features
  data: home.thematicCommunities
---

# The Journey of a museum specimen
Source: Pia Stieger (*unpublished*, 2024)


A specimen of a natural history collection has been collected, described and prepared and is stored in a collection of a natural history institution. In order to publish information about the specimen, it is labelled with 
a unique identifier, photographed or scanned and its information is registered in the database of the institution. The information belonging to the specimen is documented by -ideally- applying the data standard 
Darwin Core. To allow interoperability of the data, not only verbatim fields have to be filled in, but at least location, date and taxonomy have to be interpreted and edited to meet these extra fields and to be readable 
for machines. At this stage, the specimen information can be uploaded to the [SwissCollNet data aggregator](https://svnhc.hp.gbif-staging.org/data-aggregator), in order to be published on a variety of websites, where scientists and the interested public can retrieve the 
information. The information of the specimen is thus becoming FAIR (Findable, Accessible, Interoperable and Reusable)

![image](https://github.com/gbif/hp-svnhc/assets/168731309/b44370a0-fa2b-4129-ac81-d7b6af28016e)
*Digitisation of a specimen in a natural history institution to get ready for its digital journey.*


Digital information of a specimen (digital specimen) has to be organised by applying Darwin Core standards and 
be stored in CSV-format, to be uploaded to the data aggregator. As a first step, the collection unit to 
which the specimen occurs is determined by the data provider. The catalogue of collection units is retrieved 
automatically from the Global Registry of Scientific Collections ([GRSciColl](https://scientific-collections.gbif.org/)). The digital specimen enters the 
aggregator in its raw stage (raw layer), where it will be encoded with data standards (encoding layer, 
[Darwin Core](https://dwc.tdwg.org/), [MIDS standards](https://www.tdwg.org/community/cd/mids/), taxonomic thesauri, etc.). Once encoded, the digital specimen can enter the fast 
track of publication and continue its journey into the database of [GBIF.org](https://www.gbif.org/). If the origin of the digital specimen 
has been collected in Switzerland, it can also enter the approval track and will continue its journey into a 
database of a datacenter of InfoSpecies.

![image](https://github.com/gbif/hp-svnhc/assets/168731309/54877864-197a-45f7-bf23-226c4e10efcf)
*In the SwissCollNet-data aggregator, specimen data is encoded for publication on national and 
international data portals through a fast and/or an approval track.*


Digital specimens collected in Switzerland (Swiss origin) may require specific information (red lists of 
endangered species, Swiss taxonomic thesauri, etc.). They can be retrieved from the data aggregator by 
experts of [InfoSpecies datacenters](https://www.infospecies.ch/fr/) and be enriched with information to meet the criteria for publication in the 
Virtual Data Center of the FOEN and the [GBIF.ch data portal](https://swiss-bif.hp.gbif.org/). The enriched digital specimen will 
enter PICTIS, from where it will be exported to the [GBIF.org database](https://www.gbif.org/), to the VDC database and to the approval 
layer of the [SwissCollNet data aggregator](https://svnhc.hp.gbif-staging.org/data-aggregator).

![image](https://github.com/gbif/hp-svnhc/assets/168731309/dbbf2cc6-2634-4d23-9af4-40d44380b95e)
*Import of digital specimens into the GBIF.org database through a fast track or an approval track and publication on the GBIF-hosted data portals SVNHC and GBIF.ch.*


Digital specimens are published on different data portals such as the SVNHC (SVNHC.ch), the [data 
portal of the Swiss node of GBIF](https://swiss-bif.hp.gbif.org/) and the Virtual Data Center (VDC). On the SVNHC online-portal all 
digital specimens of the data aggregator (fast track and approval track information) will be displayed. 
Information of specimens collected in Switzerland will also be displayed on the GBIF.ch online-portal (fast track 
and approval track information). The digital specimen, which have been enriched and approved by experts of 
InfoSpecies datacenters will also be published on the VDC portal of the FOEN.


Digital specimen information can be updated in the SwissCollNet data aggregator by the data 
providers/owners. Enriched data can be exported back to the database of the data provider. Older versions of 
the digital specimen are stored in the data aggregator to allow reconstruction of the history of the data.
