import lightsImage from "../assets/images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg";
import waterImage from "../assets/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg";
import summitImage from "../assets/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg";
import historyImage from "../assets/images/look-back-in-history/calle-crisologo-593843_1920.jpg";
import natureImage from "../assets/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg";

import lightsVid from "../assets/videos/city.mp4";
import waterVid from "../assets/videos/water.mp4";
import summitVid from "../assets/videos/mountain.mp4";
import historyVid from "../assets/videos/history.mp4";
import natureVid from "../assets/videos/nature.mp4";

import lightsThumb from "../assets/images/hero-section-thumbnails/city-thumb.jpg";
import lightsPoster from "../assets/images/hero-section-thumbnails/city-poster.jpg";
import waterThumb from "../assets/images/hero-section-thumbnails/water-thumb.jpg";
import waterPoster from "../assets/images/hero-section-thumbnails/water-poster.jpg";
import summitThumb from "../assets/images/hero-section-thumbnails/mountain-thumb.jpg";
import summitPoster from "../assets/images/hero-section-thumbnails/mountain-poster.jpg";
import historyThumb from "../assets/images/hero-section-thumbnails/history-thumb.jpg";
import historyPoster from "../assets/images/hero-section-thumbnails/history-poster.jpg";
import natureThumb from "../assets/images/hero-section-thumbnails/nature-thumb.jpg";
import naturePoster from "../assets/images/hero-section-thumbnails/nature-poster.jpg";

import starCity from "../assets/images/cosmopolitan-lights/star-city.webp";
import ccp from "../assets/images/cosmopolitan-lights/ccp.webp";
import chinaTown from "../assets/images/cosmopolitan-lights/chinatown.jpg";
import moa from "../assets/images/cosmopolitan-lights/mall-of-asia.jpg";
import manilaOcean from "../assets/images/cosmopolitan-lights/manila-ocean-park.jpg";
import solaire from "../assets/images/cosmopolitan-lights/solaire.jpg";

import bantayan from "../assets/images/dive-under-water/bantayan.jpg";
import boracay from "../assets/images/dive-under-water/boracay.jpg";
import palaui from "../assets/images/dive-under-water/palaui.jpg";
import panglao from "../assets/images/dive-under-water/panglao.jpg";
import siargao from "../assets/images/dive-under-water/siargao.jpg";

import apo from "../assets/images/explore-the-summit/apo.jpg";
import guiting from "../assets/images/explore-the-summit/guiting-guiting.jpg";
import pinatubo from "../assets/images/explore-the-summit/pinatubo.jpg";
import ugo from "../assets/images/explore-the-summit/ugo.jpg";
import ulap from "../assets/images/explore-the-summit/ulap.jpg";

import fortSantiago from "../assets/images/look-back-in-history/fort-santiago.jpg";
import mactan from "../assets/images/look-back-in-history/mactan.jpg";
import museum from "../assets/images/look-back-in-history/museum.jpg";
import rizalShrine from "../assets/images/look-back-in-history/rizal-shrine.jpg";
import rizal from "../assets/images/look-back-in-history/rizal.jpg";

import bohol from "../assets/images/nature-and-culture/bohol.jpg";
import coron from "../assets/images/nature-and-culture/coron.jpg";
import puerto from "../assets/images/nature-and-culture/puerto-galera.jpg";
import tagaytay from "../assets/images/nature-and-culture/tagaytay.jpg";
import tanay from "../assets/images/nature-and-culture/tanay.jpg";

const categoriesInfo = [
  {
    categoryId: 1,
    category: "Cosmopolitan Lights",
    headerTitle: "THE LIVELY MODERN CITIES",
    previewImage: lightsImage,
    categoryTitle: ["Visit the Lively", "and Colorful Cities"],
    description:
      "A trip to Star City Amusement Park, Manila Ocean Park, Chinatown, and Solaire Resort and Casino in Manila, and Mall of Asia and Cultural Center of the Philippines in Pasay.",
    videoBg: lightsVid,
    thumbnail: lightsThumb,
    poster: lightsPoster,
    accent: "var(--clr-accent-lights)",
    accentLight: "var(--clr-accent-lights-100)",
    destinations: [
      {
        id: 1,
        destination: "Star City Amusement Park in Pasay",
        destinationImage: starCity,
        details:
          "Located in the city of Pasay in Metro Manila, Star City is one of the biggest, most popular and all weather, air-conditioned amusement park in all of Philippines.",
        duration: "2 days",
        price: "Php 3,500.00 / person",
      },
      {
        id: 2,
        destination: "Chinatown in Binondo Manila",
        destinationImage: chinaTown,
        details:
          "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese.",
        duration: "1 1/2 days",
        price: "Php 2,500.00 / person",
      },
      {
        id: 3,
        destination: "Mall of Asia in Pasay City",
        destinationImage: moa,
        details:
          "The mall is currently the largest shopping mall in the Philippines and the third in the world. When it opened in 2006, it was the largest shopping mall in the Philippines until SM North EDSA was redeveloped in 2008.",
        duration: "1 1/2 days",
        price: "Php 3,500.00 / person",
      },
      {
        id: 4,
        destination: "Manila Ocean Park",
        destinationImage: manilaOcean,
        details:
          "Manila Ocean Park is the country's first world-class marine theme park and a premiere educational facility. An integrated urban resort with marine life attractions and aqua-themed hotel.",
        duration: "2 days",
        price: "Php 6,000.00 / person",
      },
      {
        id: 5,
        destination: "Solaire Resort & Casino Manila",
        destinationImage: solaire,
        details:
          "When you are looking for comfortable and convenient accommodations in Manila, make Solaire Resort & Casino your home away from home. A stay at Solaire Resort & Casino ensures an easy access to the lively city and all of its wonders.",
        duration: "5 days",
        price: "Php 25,000.00 / person",
      },
      {
        id: 6,
        destination: "Cultural Center of the Philippines in Pasay City",
        destinationImage: ccp,
        details:
          "It is a mixed-use cultural and tourism hub overlooking Manila Bay in south-central Manila, most of which fall under the jurisdiction of the city of Pasay.",
        duration: "1 day",
        price: "Php 5,000.00 / person",
      },
    ],
  },
  {
    categoryId: 2,
    category: "Dive Under Water",
    headerTitle: "THE WONDERS OF THE SEA",
    previewImage: waterImage,
    categoryTitle: ["Discover the Wonders", "of the Deep Sea"],
    description:
      "A trip towards places such as the Bantayan Island in Cebu, Boracay Beach in Aklan, El Nido in Palawan, Palaui Island in Santa Ana, Panglao Island in Bohol, and Siargao Island.",
    videoBg: waterVid,
    thumbnail: waterThumb,
    poster: waterPoster,
    accent: "var(--clr-accent-water)",
    accentLight: "var(--clr-accent-water-100)",
    destinations: [
      {
        id: 1,
        destination: "Bantayan Island in Cebu",
        destinationImage: bantayan,
        details:
          "Bantayan Island Cebu is an excellent spot for relaxation with its exquisite beauty. It has white sands, clear blue beaches, tranquil mood, and hospitable people.",
        duration: "5 days",
        price: "Php 12,000.00 / person",
      },
      {
        id: 2,
        destination: "Boracay Beach in Aklan",
        destinationImage: boracay,
        details:
          "Boracay Island in Aklan is one of the top tourist destination in the Philippines. Boast white sand beaches, caves and scenic views.",
        duration: "5 days",
        price: "Php 25,500.00 / person",
      },
      {
        id: 3,
        destination: "El Nido in Palawan",
        destinationImage: waterImage,
        details:
          "El Nido has been named a number of times as the best island beaches in the world because of its paradise-like attractions with white sand, turquoise waters, vibrant coral reefs, and stunning limestone cliffs.",
        duration: "7 days",
        price: "Php 28,500.00 / person",
      },
      {
        id: 4,
        destination: "Palaui Island in Santa Ana",
        destinationImage: palaui,
        details:
          "Palaui island offers so much white sandy beaches and panoramic coves, a century old lighthouse, hidden waterfalls and lovely people, all in a scenic ragged terrain surrounded with huge waves and echoing wind.",
        duration: "5 days",
        price: "Php 15,000.00 / person",
      },
      {
        id: 5,
        destination: "Panglao Island in Bohol",
        destinationImage: panglao,
        details:
          "Panglao Island is the most popular tourist spot in Bohol. It is the tourist hub for all activities and there are hundreds of resorts, hotels, and restaurants in this area.",
        duration: "5 days",
        price: "Php 17,500.00 / person",
      },
      {
        id: 6,
        destination: "Siargao Island",
        destinationImage: siargao,
        details:
          "Named after a native mangrove, the surf capital of the Philippines is perfect for lovers of the great outdoors, whether you embrace adventure sports or gentler pursuits such as swimming in rock pools and caves.",
        duration: "7 days",
        price: "Php 25,000.00 / person",
      },
    ],
  },
  {
    categoryId: 3,
    category: "Explore the Summit",
    headerTitle: "THE SKY ON MOUNTAIN PEAKS",
    previewImage: summitImage,
    categoryTitle: ["Look at the Sky on", "Top of Mountain Peaks"],
    description:
      "Visit beautiful mountains such as Mt. Apo in Davao City, Mt. Guiting Guiting in Sibuyan, Mt. Pulag and Mt. Itogon in Benguet, Mt. Pinatubo in Zambales, and Mt. Ugo in Nueva Viscaya.",
    videoBg: summitVid,
    thumbnail: summitThumb,
    poster: summitPoster,
    accent: "var(--clr-accent-summit)",
    accentLight: "var(--clr-accent-summit-100)",
    destinations: [
      {
        id: 1,
        destination: "Mt. Apo in Davao City",
        destinationImage: apo,
        details:
          "Towering at 2954 meters above sea level, Mount Apo is the highest mountain and volcano in the Philippines. It is also marked for the UNESCO Tentative World Heritage List.",
        duration: "7 days",
        price: "Php 15,500.00 / person",
      },
      {
        id: 2,
        destination: "Guiting-Guiting National Park in Sibuyan Island",
        destinationImage: guiting,
        details:
          "Its steep slopes and jagged peak, have earned it the reputation as one of the most difficult mountain to climb in the Philippines. It also ranked 71st-highest peak of an island in the world.",
        duration: "7 days",
        price: "Php 12,500.00 / person",
      },
      {
        id: 3,
        destination: "Mt. Pulag in Benguet",
        destinationImage: summitImage,
        details:
          "Mt. Pulag National Park is the highest peak in Luzon and is the second highest mountain in the Philippines with an elevation of 2,922 m above sea level. Visitors can also catch glimpses of the Milky Way Galaxy at dawn.",
        duration: "5 days",
        price: "Php 13,500.00 / person",
      },
      {
        id: 4,
        destination: "Mt. Pinatubo in Zambales",
        destinationImage: pinatubo,
        details:
          "Explore the Philippines most popular hiking destination on an 18 hour tour taking you to the best trekking areas and viewing spots around Mount Pinatubo.",
        duration: "5 days",
        price: "Php 16,000.00 / person",
      },
      {
        id: 5,
        destination: "Mt. Ugo in Nueva Viscaya",
        destinationImage: ugo,
        details:
          "Mt. Ugo is a popular hiking destination located in the borderline province of Nueva Vizcaya and Benguet. It has an elevation of 2,200 meters above sea level or 7,217 feet.",
        duration: "5 days",
        price: "Php 15,500.00 / person",
      },
      {
        id: 6,
        destination: "Mt. Ulap in Itogon, Benguet",
        destinationImage: ulap,
        details:
          "Mt. Ulap is located in Itogon, Benguet. It is one of the most visited mountains in the Philippines. It offers scenic views of the Cordillera mountain range and it is often called mini Mt. Ugo.",
        duration: "5 days",
        price: "Php 16,500.00 / person",
      },
    ],
  },
  {
    categoryId: 4,
    category: "Look Back in History",
    headerTitle: "THE REMNANTS OF THE PAST",
    previewImage: historyImage,
    categoryTitle: ["Embrace the Great", "Remnants of the Past"],
    description:
      "Visit Historical Sites such as Calle Crisologo in Vigan, Fort Santiago in Intramuros, Magellan's Cross in Mactan, National Museum and Rizal Park in Manila, and Rizal Shrine in Dapitan.",
    videoBg: historyVid,
    thumbnail: historyThumb,
    poster: historyPoster,
    accent: "var(--clr-accent-history)",
    accentLight: "var(--clr-accent-history-100)",
    destinations: [
      {
        id: 1,
        destination: "Calle Crisologo in Vigan, Ilocos Sur",
        destinationImage: historyImage,
        details:
          "One of the most beautiful streets in the Philippines. It boasts a dense concentration of centuries-old stone houses, lovely tungsten lamps, and antique cobblestone, where horse-drawn carriages or calesas are used for transport. ",
        duration: "2 days",
        price: "Php 5,500.00 / person",
      },
      {
        id: 2,
        destination: "Fort Santiago, Intramuros, Manila",
        destinationImage: fortSantiago,
        details:
          "Fort Santiago is one of the oldest fortifications in Manila built by the Spaniards in 1571 from what was once a palisaded structure of logs and earth built by Rajah Soliman on the native settlement called Maynila.",
        duration: "1 1/2 days",
        price: "Php 3,500.00 / person",
      },
      {
        id: 3,
        destination: "Magellan's Cross in Mactan, Cebu",
        destinationImage: mactan,
        details:
          "A small circular pavilion, built in the 19th century, houses Magellans Cross, which is today one of Cebu islands most important religious icons and an essential stop on any Cebu City tour.",
        duration: "2 days",
        price: "Php 5,500.00 / person",
      },
      {
        id: 4,
        destination: "National Museum of Natural History in Manila",
        destinationImage: museum,
        details:
          "One of the most popular museums in the country is the National Museum of Natural History, which was officially opened to the public in May 2018. Located in Rizal Park, it is part of the National Museum Complex.",
        duration: "1 1/2 days",
        price: "Php 3,000.00 / person",
      },
      {
        id: 5,
        destination: "Rizal park in Manila",
        destinationImage: rizal,
        details:
          "Rizal Park, also known as Luneta Park or simply Luneta, is a historic urban park located in Ermita, Manila. It is considered one of the largest urban parks in the Philippines, covering an area of 58 hectares.",
        duration: "1 day",
        price: "Php 2,000.00 / person",
      },
      {
        id: 6,
        destination: "Rizal Shrine in Dapitan, Zamboanga del Norte",
        destinationImage: rizalShrine,
        details:
          "The shrine features a collection of structures that retells the tales of former Dapitan and the passion of an extraordinary man who lived as an exile with a purpose—to teach and serve the Dapitanons.",
        duration: "3 day",
        price: "Php 5,000.00 / person",
      },
    ],
  },
  {
    categoryId: 5,
    category: "Nature and Culture",
    headerTitle: "THE BREATH OF FRESH AIR",
    previewImage: natureImage,
    categoryTitle: ["Feel the Beauty of", "the Untouched Lands"],
    description:
      "Visit the Chocolate Hills in Bohol, Barracuda Lake in Coron, Banaue Rice Terraces in Ifugao, Puerto Galera in Mindoro, Tagaytay in Cavite, and Masungi Georeserve in Tanay.",
    videoBg: natureVid,
    thumbnail: natureThumb,
    poster: naturePoster,
    accent: "var(--clr-accent-culture)",
    accentLight: "var(--clr-accent-culture-100)",
    destinations: [
      {
        id: 1,
        destination: "Chocolate Hills in Bohol",
        destinationImage: bohol,
        details:
          "The Chocolate Hills is declared the Philippines' 3rd National Geological Monument and is dubbed as an Eight Wonder of the World. These iconic hills are even featured in the 200 Philippine Peso bill.",
        duration: "5 days",
        price: "Php 12,500.00 / person",
      },
      {
        id: 2,
        destination: "Barracuda Lake in Coron Island, Palawan Province",
        destinationImage: coron,
        details:
          "It is one of the famous diving sites not only in Coron but also in the entire country. Barracuda Lake is composed of both salt and fresh water, but the most notable feature of this lake is its thermocline.",
        duration: "5 days",
        price: "Php 11,500.00 / person",
      },
      {
        id: 3,
        destination: "Banaue Rice Terraces in Ifugao",
        destinationImage: natureImage,
        details:
          "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people. The terraces are occasionally called the Eighth Wonder of the World.",
        duration: "5 days",
        price: "Php 10,500.00 / person",
      },
      {
        id: 4,
        destination: "Puerto Galera in Mindoro oriental",
        destinationImage: puerto,
        details:
          "Puerto Galera is a town on the Philippine island of Mindoro. It's known for its dive sites and beaches. The long curve of White Beach is backed by bars and resorts.",
        duration: "5 days",
        price: "Php 16,000.00 / person",
      },
      {
        id: 5,
        destination: "Tagaytay in Cavite",
        destinationImage: tagaytay,
        details:
          "Tagaytay is a popular holiday town south of Manila on the Philippine island Luzon. Known for its mild climate, it sits on a ridge above Taal Volcano Island, an active volcano surrounded by Taal Lake.",
        duration: "3 days",
        price: "Php 9,500.00 / person",
      },
      {
        id: 6,
        destination: "Masungi Georeserve in Tanay, Rizal",
        destinationImage: tanay,
        details:
          "The Masungi Georeserve is a conservation area and a rustic rock garden tucked in the rainforests of Rizal. In this sanctuary, guests will be able to commune with nature, and reenergise themselves while doing so.",
        duration: "3 days",
        price: "Php 8,500.00 / person",
      },
    ],
  },
];

export { categoriesInfo };
