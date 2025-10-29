---
# https://swissnatcoll.hp.gbif-staging.org/en/about-partners
# https://github.com/gbif/hp-swissnatcoll/blob/13b4d4595acf6824d0e4a3369ca7c2205ba4f989/en/about-partners.md
layout: compose
title: Partners
permalink: /en/about-partners
background:  "{{ site.data.images.aboutPartners.src }}"
imageLicense: "{{ site.data.images.aboutPartners.caption }}"
overlayColor: transparent
hasBlackText: true
height: 50vh
toc: true
composition:
  - type: heroImage
  - type: pageMarkdown
---

# Data Providers

Owing to its federal system, Swiss natural history collections are distributed across [natural history institutions](/institution/search){:target="_blank"} throughout the country, including museums, botanical gardens, universities and cantonal departments. Switzerland does not have a single centralised natural history collection, and it is up to the institutions to curate, manage and database their collections and regularly upload specimen data to national data nodes. They are the data providers.
<br>

<style>
.scrollable-table {
  height: 500px;
  overflow-y: auto;
  border: 1px solid black;
  padding: 5px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
  cursor: ns-resize; /* indique qu'on peut "faire glisser" pour scroller */
}

.scrollable-table:active {
  cursor: text; /* effet quand on clique pour scroller */
}

/* Important : on garde le curseur normal sur les liens */
.scrollable-table a {
  cursor: pointer;
}
</style>

<div class="scrollable-table">
  <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
    <colgroup>
      <col style="width: 15%;">
      <col style="width: 85%;">
    </colgroup>
    <thead>
      <tr>
        <th style="position: sticky; top: 0; background-color: #95B0EE; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Canton</th>
        <th style="position: sticky; top: 0; background-color: #95B0EE; z-index: 1; border: 1px solid black; padding: 8px; text-align: left;">Institutions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid black; padding: 8px; vertical-align: top;"><i>AG</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturama Aargau (<a href="/institution/a4e8fc5e-fb6c-4c08-b9f1-ef8724870e89" target="_blank">NAAG</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>BE</i></td>
        <td style="border: 1px solid black; padding: 8px;">Herbarium of the Botanical Garden of the University of Bern (<a href="/institution/f6abc948-1068-4d23-b165-701e8734c07e" target="_blank">BERN</a>) ; Naturhistorisches Museum der Burgergemeinde Bern (<a href="/institution/08ccd767-4afc-4023-ab55-7a7c34295e93" target="_blank">NMBE</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>BL</i></td>
        <td style="border: 1px solid black; padding: 8px;">Archäologie und Museum Baselland - Museum.BL (<a href="/institution/58f0cf31-4c49-4568-87d5-60d51389230f" target="_blank">AMBL</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>BS</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturhistorisches Museum Basel (<a href="/institution/e772c6d6-bbc8-40c8-92e9-b74407e1f5bb" target="_blank">NMB</a>) ; Universität Basel, Departement Umweltwissenschaften (<a href="/institution/07f5d226-10ac-44cd-9c61-f13438cd8e79" target="_blank">UNIBAS:DUW</a>) ; Universität Basel, Herbarium (<a href="/institution/cc775ae7-70ec-4a4e-aeaa-2653708ca2ac" target="_blank">UNIBAS:HERBARIA</a>) ; Universität Basel, Interkantonale Arbeitsgemeinschaft für Anthropologie (<a href="/institution/90070fe3-51ec-4a56-96be-cb6c00dd0ae2" target="_blank">UNIBAS:IPNA</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>FR</i></td>
        <td style="border: 1px solid black; padding: 8px;">Musée d'histoire naturelle Fribourg (<a href="/institution/d4ec3a19-8a63-4985-9966-e74d5d4c33b5" target="_blank">MHNF</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>GE</i></td>
        <td style="border: 1px solid black; padding: 8px;">Conservatoire et Jardin botaniques de Genève (<a href="/institution/d200fcbc-972e-4488-bcb6-eaa47209148d" target="_blank">CJBG</a>) ; Muséum d’histoire naturelle de Genève (<a href="/institution/8d572607-d32c-4477-8834-c9dbe76c57f9" target="_blank">MHNG</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>GL</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturwissenschaftliche Sammlungen des Kantons Glarus (<a href="/institution/b661a5a9-e227-4a75-9a93-25d1a11034c1" target="_blank">NWSGL</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>GR</i></td>
        <td style="border: 1px solid black; padding: 8px;">Bündner Naturmuseum, Chur (<a href="/institution/0a76df5c-a78c-4ab8-8e0b-74fa19e8eadc" target="_blank">BNM</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>JU</i></td>
        <td style="border: 1px solid black; padding: 8px;">Jurassica Museum (<a href="/institution/07087f63-ad84-4603-8f17-e01037da89b0" target="_blank">MJSN</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>LU</i></td>
        <td style="border: 1px solid black; padding: 8px;">Museum Luzern (<a href="/institution/582f1eda-5673-4265-87ac-6a164cd8d193" target="_blank">MULU</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>NE</i></td>
        <td style="border: 1px solid black; padding: 8px;">Muséum d'histoire naturelle de Neuchâtel (<a href="/institution/01ef07f0-5502-4935-b00e-7657417b8dae" target="_blank">MHNN</a>) ; MUZOO - Musée d'histoire naturelle de La Chaux-de-Fonds (<a href="/institution/278f3403-ad9f-4c6b-b0d8-243a2935cc40" target="_blank">MUZOO</a>) ; Université de Neuchâtel, Herbarium (<a href="/institution/ee1fe2cc-fd6e-4bf6-a691-46518d806154" target="_blank">UNINE:NEU</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>SG</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturmuseum St. Gallen (<a href="/institution/dcb3162a-9409-4785-a86a-fa6b9b805d1d" target="_blank">NMSG</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>SH</i></td>
        <td style="border: 1px solid black; padding: 8px;">Museum zu Allerheiligen Schaffhausen (<a href="/institution/170b7cf5-9b5f-44e2-859b-39e23034aa48" target="_blank">NMSH</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>SO</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturmuseum Olten (<a href="/institution/1236323a-0966-4380-9e87-c253056ac77e" target="_blank">NMOL</a>) ; Naturmuseum Solothurn (<a href="/institution/9674bfd8-6070-4835-a88d-0c4c13fe7f55" target="_blank">NMSO</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>TI</i></td>
        <td style="border: 1px solid black; padding: 8px;">Museo cantonale di storia naturale, Lugano (<a href="/institution/24ab1eae-4509-4433-afa7-d13fc5e25d04" target="_blank">MCSN</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>TG</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturmuseum Thurgau (<a href="/institution/fa45db4d-69f0-455a-8359-3dd7d4f8fd87" target="_blank">NMTG</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>VD</i></td>
        <td style="border: 1px solid black; padding: 8px;">Muséum cantonal des sciences naturelles, Lausanne, Département de Botanique (<a href="/institution/5183c521-f6ff-4f24-904e-7b715f22d92d" target="_blank">NATUREUM:DB</a>), de Géologie (<a href="/institution/9e597ef1-6ce0-4677-b311-014739a27603" target="_blank">NATUREUM:DG</a>) et de Zoologie (<a href="/institution/3e879cad-48a9-428f-848d-1c0d1a6ba94b" target="_blank">NATUREUM:DZ</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>VS</i></td>
        <td style="border: 1px solid black; padding: 8px;">Musée de la nature du Valais (<a href="/institution/da2b9a85-283c-45b4-9d1f-4a9e2884bdb8" target="_blank">MNVS</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>UR</i></td>
        <td style="border: 1px solid black; padding: 8px;">Naturkundliche Sammlung Uri (<a href="/institution/2c521b92-4c8d-4fe6-990c-50d426708847" target="_blank">NSUR</a>)</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;"><i>ZH</i></td>
        <td style="border: 1px solid black; padding: 8px;">Eidgenössische Technische Hochschule Zürich (<a href="/institution/adee7883-8290-4050-b643-8e2816f92e9a" target="_blank">ETHZ</a>) ; Kulturama Museum des Menschen Zürich (<a href="/institution/b576469b-3679-4588-8505-c62c90ce8e8f" target="_blank">KMDMZ</a>) ; Universität Zürich, Naturhistorisches Museum (<a href="/institution/d34bd63f-0472-419a-a13c-2c5430eb875d" target="_blank">UZH:NMZ</a>) ; Naturmuseum Winterthur (<a href="/institution/3ab4b761-c62f-4996-a6d8-ed1283fc161e" target="_blank">NMWIN</a>) ; Universität Zürich, Herbarium (<a href="/institution/5b487a79-76ef-4615-93d9-f4ea25a40c33" target="_blank">UZH:Z</a>) ; Universität Zürich, Institute of Evolutionary Medicine (<a href="/institution/6bc72849-0b52-481b-a64f-4d7778469cdf" target="_blank">UZH:IEM</a>)</td>
      </tr>
    </tbody>
  </table>
</div>

# Data Managers and Coordination Associations

Three key associations contribute to data management and coordination, at both national and international levels:

**InfoSpecies**

The Swiss Information Center for Species ([InfoSpecies](https://www.infospecies.ch/fr/){:target="_blank"}) serves as an umbrella organization for national data and information centers and coordination centers in species conservation, focused on collecting, validating, and publishing information on animal, fungal, plant, moss, and lichen species. Supported by the Federal Office for the Environment (OFEV), InfoSpecies coordinates these various centers and supports public authorities, private clients, research institutes, and natural history institutions.

**musnatcoll.ch**

The Association of Natural Science Museums and Collections in Switzerland and Liechtenstein ([musnatcoll.ch](https://musnatcoll.ch/en){:target="_blank"}) represents the interests of natural history museums towards the Association of Swiss Museums, the Swiss Academy of Natural Sciences, the Swiss Confederation, politicians, and the general public. Its objective is to promote the importance of scientific collections and museums as an integral part of national and international cultural heritage. Beginning in 2026, a dedicated office will support the network through publications, events, fundraising, and cultural policy activities.

**Swiss Academy of Sciences**

The Swiss Academy of Sciences ([SCNAT](https://scnat.ch/en){:target="_blank"}) works at regional, national, and international level for the future of science and society. It strengthens the awareness for the sciences as a central pillar of cultural and economic development. The breadth of its support makes it a representative partner for politics. SCNAT links the sciences, provides expertise, promotes the dialogue between science and society, identifies and evaluates scientific developments. It is part of the association of the Swiss Academies of Arts and Sciences.

# Technical point of contact

Infrastructure maintenance and technical support are provided by the Swiss Node of GBIF ([GBIF.ch](https://www.gbif.org/country/CH/participation){:target="_blank"})

**GBIF Swiss Node**

The Swiss Node of GBIF ([GBIF.ch](https://www.gbif.org/country/CH/participation){:target="_blank"}) coordinates the mobilisation, integration and publication of biodiversity data from across Switzerland within the international GBIF network. Operated by the Swiss Data and Information Centre on Swiss Fauna ([info fauna](https://www.infofauna.ch/fr#gsc.tab=0){:target="_blank"}), it brings together museums, research institutions, public authorities, and information centers to ensure that data on species and ecosystems are openly accessible. Acting as a bridge between national and global infrastructures, it provides services for data management and publication, and delivers high-resolution validated data to Swiss authorities.

{% include back-to-top.html %}
