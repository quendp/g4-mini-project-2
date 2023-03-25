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
    categoryPath: "cosmopolitan-lights",
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
        path: "star-city",
        destinationImage: starCity,
        details:
          "Located in the city of Pasay in Metro Manila , Star City is one of the biggest, most popular and all weather, air-conditioned amusement park in all of Philippines. \n\n Star City is a 35,000 m2 (380,000 sq ft) amusement park in Pasay, Philippines. It is located in the reclaimed area of the Cultural Center of the Philippines Complex, part of Bay City. The facility is owned by Star Parks Corporation, a subsidiary of Elizalde Holdings Corporation (the holding company of the FJE Group of Companies). \n\n Star City was hit by a fire on October 2, 2019, causing major damage to the main building and forcing its closure. Prior to the fire, Star City had an annual attendance of about 1.5 million people. Star City had more than 30 different rides and attractions at the time of the fire, many of which were indoors. The park had initially planned to re-open by January 14, 2022, but due to a surge of COVID-19 cases in Metro Manila brought by the Omicron variant, it has been postponed until February 24, 2022.",
      },
      {
        id: 2,
        destination: "Chinatown in Binondo Manila",
        path: "chinatown",
        destinationImage: chinaTown,
        details:
          "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese. \n\n Binondo is a district in Manila and is referred to as the city's Chinatown. Its influence extends beyond to the places of Quiapo, Santa Cruz, San Nicolas and Tondo. It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese, it was positioned so that colonial rulers could keep a close eye on their migrant subjects. \n\n It was already a hub of Chinese commerce even before the Spanish colonial period. Binondo is the center of commerce and trade of Manila, where all types of business run by Filipino-Chinese thrive.",
      },
      {
        id: 3,
        destination: "Mall of Asia in Pasay City",
        path: "mall-of-asia",
        destinationImage: moa,
        details:
          "The mall is currently the largest shopping mall in the Philippines and the third in the world. When it opened in 2006, it was the largest shopping mall in the Philippines until SM North EDSA was redeveloped in 2008. \n\n SM Mall of Asia, also abbreviated as SM MoA, or simply Mall of Asia or MoA, is a large shopping mall in the Philippines, located at Bay City, Pasay, Philippines, within the SM Central Business Park, a reclaimed area within Manila Bay, and the southern end of Epifanio de los Santos Avenue (EDSA). \n\n Owned and developed by SM Prime Holdings, the largest mall chain owner and developer in the Philippines, it has a land area of 67 hectares (170 acres), a gross floor area of approximately 489,891 m2 (5,273,140 sq ft), and offers 46,647 m2 (502,100 sq ft) of floor area space for conventions and social functions. The area attracts a daily average foot traffic of about 200,000 people.",
      },
      {
        id: 4,
        destination: "Manila Ocean Park",
        path: "manila-ocean-park",
        destinationImage: manilaOcean,
        details:
          "Manila Ocean Park is the country's first world-class marine theme park and a premiere educational facility. An integrated urban resort with marine life attractions and aqua-themed hotel. \n\n The main attraction of Manila Ocean Park is the Oceanarium which houses 14,000 sea creatures from about 277 species all of which is indigenous in Southeast Asia. The Oceanarium has seven sections and contains 3,000 cubic meters (110,000 cu ft) of sea water. Its main feature is the 25-meter (82 ft) 220° curved walkway tunnel after a 55-meter (180 ft) walkthrough inside the Oceanarium. \n\n The water used in the Oceanarium is derived from Manila Bay, which is filtered to be suitable to marine life. It also has an educational activity area, function rooms for events, and shark and stingray viewing area situated in two levels. The Jellies Exhibit, a separate attraction hosts jellyfishes. The Back of the House features information on the operation of the facility itself.",
      },
      {
        id: 5,
        destination: "Solaire Resort & Casino Manila",
        path: "solaire",
        destinationImage: solaire,
        details:
          "When you are looking for comfortable and convenient accommodations in Manila, make Solaire Resort & Casino your home away from home. A stay at Solaire Resort & Casino ensures an easy access to the lively city and all of its wonders. \n\n Solaire Resort & Casino was the first development to break ground in PAGCOR's Entertainment City, a massive integrated resort envisioned by former PAGCOR Chairman Ephraim Genuino for the Manila Bay area. The 120-hectare (300-acre) reclaimed area was designated as a special economic zone by the Philippine Economic Zone Authority.\n\n The resort is run by Bloomberry Resorts Corporation, headed by Enrique K. Razón, Jr., chairman of the Manila-based company, International Container Terminal Services Incorporated. The project required an investment commitment of $1.2 billion pursuant to a casino license from PAGCOR.",
      },
      {
        id: 6,
        destination: "Cultural Center of the Philippines in Pasay City",
        path: "cultural-center-of-the-philippines",
        destinationImage: ccp,
        details:
          "It is a mixed-use cultural and tourism hub overlooking Manila Bay in south-central Manila, most of which fall under the jurisdiction of the city of Pasay. \n\n The complex is bounded by Manila Bay to the north and west, the Philippine Navy headquarters to the northeast, Roxas Boulevard to the east, and Jose Diokno Boulevard to the south. It is divided into two zones: the Art Zone, and the Commercial and Entertainment Zone. \n\n It features several brutalist structures designed in the 1960s and 1970s by Leandro Locsin, such as the Tanghalang Pambansa, the Philippine International Convention Center, and the Sofitel Philippine Plaza Manila. Other landmarks in the complex include the Coconut Palace, the Manila Film Center and Star City amusement park.",
      },
    ],
  },
  {
    categoryId: 2,
    categoryPath: "dive-under-water",
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
        id: 7,
        destination: "Bantayan Island in Cebu",
        path: "bantayan-island",
        destinationImage: bantayan,
        details:
          "Bantayan Island Cebu is an excellent spot for relaxation with its exquisite beauty. It has white sands, clear blue beaches, tranquil mood, and hospitable people. \n\n Bantayan is the main and largest island of the Bantayan island group that lies close to the geographical center of the Philippine archipelago. The island group includes numerous smaller islands (some uninhabited or uninhabitable), mostly around the southwest corner of the island. \n\n About 20 of these islets stretch for about 8 kilometers (5 miles) southwest from Bantayan municipality port area, with some nearer ones being accessible on foot from the main island at low tide. The islands are beside the busy shipping lanes for ships and ferries coming from Mindanao or Cebu City on their way to Manila. The islands are all small and green and low, virtually indistinguishable one from another.",
      },
      {
        id: 8,
        destination: "Boracay Beach in Aklan",
        path: "boracay",
        destinationImage: boracay,
        details:
          "Boracay Island in Aklan is one of the top tourist destination in the Philippines. Boast white sand beaches, caves and scenic views. \n\n Boracay (often locally shortened to Bora) is a resort island in the Western Visayas region of the Philippines, located 0.8 kilometers (0.50 mi) off the northwest coast of Panay. It has a total land area of 10.32 square kilometers (3.98 sq mi), under the jurisdiction of three barangays in Malay, Aklan, and had a population of 37,802 in 2020.\n\n Boracay was originally inhabited by the Tumandok and Ati people, but commercial development has led to their severe marginalization since the 1970s. \n\n Apart from its white sand beaches, Boracay is also famous for being one of the world's top destinations for relaxation. As of 2013, it was emerging among the top destinations for tranquility and nightlife.",
      },
      {
        id: 9,
        destination: "El Nido in Palawan",
        path: "el-nido",
        destinationImage: waterImage,
        details:
          "El Nido has been named a number of times as the best island beaches in the world because of its paradise-like attractions with white sand, turquoise waters, vibrant coral reefs, and stunning limestone cliffs. \n\n  El Nido, officially the Municipality of El Nido (Cuyonon: Banwa i'ang El Nido, Tagalog: Bayan ng El Nido), is a 1st class municipality in the province of Palawan, Philippines. According to the 2020 census, it has a population of 50,494 people. \n\n It is about 420 kilometres (260 mi) south-west of Manila, and about 238 kilometres (148 mi) north-east of Puerto Princesa, capital of Palawan.A managed resource protected area, it is known for its white-sand beaches, coral reefs, and limestone cliffs, as well as for being the gateway to the Bacuit archipelago.",
      },
      {
        id: 10,
        destination: "Palaui Island in Santa Ana",
        path: "palaui-island",
        destinationImage: palaui,
        details:
          "Palaui island offers so much white sandy beaches and panoramic coves, a century old lighthouse, hidden waterfalls and lovely people, all in a scenic ragged terrain surrounded with huge waves and echoing wind. \n\n Among the destinations in the Palaui is the northern point of the island is the Cape Engaño Lighthouse which is situated at Cape Engaño the northern point of the island and its beaches. The island is the tenth entry in CNN's World's 100 Best Beaches list which was published on May 13, which remarked the island's \"raw beauty\" \n\n On June 22, 2018, the Palaui Island Protected Landscape and Seascape was designated a national park through the Expanded National Integrated Protected Areas System (ENIPAS) Act or Republic Act No. 11038. \n\n In January 2019, the island won the Association of Southeast Asian Nations (ASEAN) Community-Based Tourism Award for 2019-2021 for promoting sustainable tourism through the efforts of the island's environmental group, the Palaui Environmental Protectors Association (PEPA).",
      },
      {
        id: 11,
        destination: "Panglao Island in Bohol",
        path: "panglao-island",
        destinationImage: panglao,
        details:
          "Panglao Island is the most popular tourist spot in Bohol. It is the tourist hub for all activities and there are hundreds of resorts, hotels, and restaurants in this area. \n\n The island has an area of 91.12 square kilometres (35.18 sq mi). It is within Bohol Province, and comprises two municipalities: Dauis and Panglao. Panglao island is located southwest of the island of Bohol and east and south of Cebu.\n\nPanglao has a terrain that ranges from plain, hilly to mountainous. Panglao is made of Maribojoc limestone, the youngest of the limestone units found in the western area of Bohol. The limestone composition delayed the development of the international airport as coralline limestone is soluble which causes formation of caves and sinkholes. \n\n One interesting geological feature found in the island is the Hinagdanan Cave which has an underground water source. The cave is an important water source as the island has no rivers or lakes.",
      },
      {
        id: 12,
        destination: "Siargao Island",
        path: "siargao-island",
        destinationImage: siargao,
        details:
          "Named after a native mangrove, the surf capital of the Philippines is perfect for lovers of the great outdoors, whether you embrace adventure sports or gentler pursuits such as swimming in rock pools and caves. \n\n Siargao is a tear-drop shaped island in the Philippine Sea situated 196 kilometers southeast of Tacloban. It has a land area of approximately 437 square kilometres (169 sq mi). The east coast is relatively straight with one deep inlet, Port Pilar. The coastline is marked by a succession of reefs, small points and white, sandy beaches. The neighboring islands and islets have similar landforms. Siargao is known as the surfing capital of the Philippines, and was voted the Best Island in Asia in the 2021 Conde Nast Travelers Readers awards.\n\nThe island is within the jurisdiction of the province of Surigao del Norte and is composed of the municipalities of Burgos, Dapa, Del Carmen, General Luna, San Benito, Pilar, San Isidro, and Santa Monica.",
      },
    ],
  },
  {
    categoryId: 3,
    categoryPath: "explore-the-summit",
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
        id: 13,
        destination: "Mt. Apo in Davao City",
        path: "mt-apo",
        destinationImage: apo,
        details:
          "Towering at 2954 meters above sea level, Mount Apo is the highest mountain and volcano in the Philippines. It is also marked for the UNESCO Tentative World Heritage List. \n\n Mount Apo, also known locally as Apo Sandawa, is a large solfataric, dormant stratovolcano on the island of Mindanao, Philippines. With an elevation of 2,954 meters (9,692 ft) above sea level, it is the highest-mountain in the Philippine Archipelago, Mindanao and 24th-highest peak of an island on Earth. \n\n Located between Davao City and Davao del Sur in the Davao Region, and Cotabato in Soccsksargen, Mount Apo is the most-prominent mountain in the Philippines. The peak overlooks from Davao City 45 kilometers (28 mi) to the northeast, Digos 25 kilometers (16 mi) to the southeast, and Kidapawan 20 kilometers (12 mi) to the west. It is a protected area and a Natural Park of the Philippines.",
      },
      {
        id: 14,
        destination: "Guiting-Guiting National Park in Sibuyan Island",
        path: "guiting-guiting",
        destinationImage: guiting,
        details:
          'Its steep slopes and jagged peak, have earned it the reputation as one of the most difficult mountain to climb in the Philippines. It also ranked 71st-highest peak of an island in the world. \n\n Mount Guiting-Guiting is the highest mountain in the province of Romblon, located in Sibuyan Island, in the Philippines, with an elevation of 6,752 ft (2,058 m) above sea level. Its steep slopes and jagged peak, have earned it a reputation as one of the most difficult and technically most challenging mountains to climb in the Philippines. \n\n It is ranked as the 11th-most prominent mountain in the Philippines, and 71st-highest peak of an island in the world. Located at the heart of Sibuyan, it dominates the landscape for miles around. Guiting-Guiting, in the Romblomanon dialect means "jagged". \n\n It is one of the focal points of Sibuyan\'s declaration as a biodiversity haven and has been dubbed by some local and international natural scientists as The Galapagos of Asia. This high endemism prompted much of the mountain and its slopes to be protected in 1996 as the Mt. Guiting-Guiting Natural Park. The park also encompasses nearby Mt. Nailog (789 masl) to the west.',
      },
      {
        id: 15,
        destination: "Mt. Pulag in Benguet",
        path: "mt-pulag",
        destinationImage: summitImage,
        details:
          'Mt. Pulag National Park is the highest peak in Luzon and is the second highest mountain in the Philippines with an elevation of 2,922 m above sea level. Visitors can also catch glimpses of the Milky Way Galaxy at dawn. \n\n Mount Pulag is Luzon\'s highest peak at 2,928 metres (9,606 ft) above sea level, third-highest mountain in the Philippines, and the 26th-highest peak of an island on Earth. It is second-most prominent mountain in the Philippines, it is a dormant volcano. Located on the triple border of the provinces of Benguet, Ifugao, and Nueva Vizcaya, the borders meet at the mountain\'s peak. Mount Pulag is third highest next to Mount Apo and Mount Dulang-dulang.\n\n  Mount Pulag Sea of clouds Mount Pulag is famous for its "sea of clouds" and its exceptional view of the Milky Way Galaxy at dawn, which has attracted many tourists who wish to see the "other-worldly" scenery.The entire mountain is believed to be the home to the tinmongao spirits and is the sacred resting ground of the souls of the Ibaloi people and other ethnic peoples in the area.',
      },
      {
        id: 16,
        destination: "Mt. Pinatubo in Zambales",
        path: "mt-pinatubo",
        destinationImage: pinatubo,
        details:
          "Explore the Philippines most popular hiking destination on an 18 hour tour taking you to the best trekking areas and viewing spots around Mount Pinatubo. \n\n Pinatubo is most notorious for its VEI-6 eruption on June 15, 1991, the second-largest terrestrial eruption of the 20th century after the 1912 eruption of Novarupta in Alaska. Complicating the eruption was the arrival of Typhoon Yunya, bringing a lethal mix of ash and rain to towns and cities surrounding the volcano. Predictions at the onset of the climactic eruption led to the evacuation of tens of thousands of people from the surrounding areas, saving many lives. \n\n Surrounding areas were severely damaged by pyroclastic surges, pyroclastic falls, and subsequently, by the flooding lahars caused by rainwater re-mobilizing earlier volcanic deposits. This caused extensive destruction to infrastructure and changed river systems for years after the eruption. Minor dome-forming eruptions inside the caldera continued from 1992 to 1993.",
      },
      {
        id: 17,
        destination: "Mt. Ugo in Nueva Viscaya",
        path: "mt-ugo",
        destinationImage: ugo,
        details:
          "Mt. Ugo is a popular hiking destination located in the borderline province of Nueva Vizcaya and Benguet. It has an elevation of 2,200 meters above sea level or 7,217 feet. \n\n Mt. Ugo is a popular hiking destination located in the borderline province of Nueva Vizcaya and Benguet. It has an elevation of 2,200 meters above sea level or 7,217 feet. Mt. Ugo offers marvelous views of the surrounding mountains of the Cordillera region, pine forests, villages, and highland rice paddies.Mt. Ugo was discovered in the year 1987 in the aftermath of a Philippine Airlines aircraft crash on one of Mt. Ugo's slopes. Rescuers, including mountaineers and locals, found the wreckage of the plane 200 yards just below the summit. \n\n From the date of its discovery, many mountaineers have gone to explore the trail of the mountains. Furthermore, subsequent operations paved the way for establishing the trails, and soon become a new hiking destination in the Cordillera region. As of today, Mt. Ugo is a popular hiking destination in the Cordillera region.",
      },
      {
        id: 18,
        destination: "Mt. Ulap in Itogon, Benguet",
        path: "mt-ulap",
        destinationImage: ulap,
        details:
          "Mt. Ulap is located in Itogon, Benguet. It is one of the most visited mountains in the Philippines. It offers scenic views of the Cordillera mountain range and it is often called mini Mt. Ugo. \n\n Mt. Ulap is located in Itogon, Benguet. It is one of the most visited mountains in the Philippines. It offers scenic views of the Cordillera mountain range and it is often called mini Mt. Ugo because it provides the same view of pine ridges similar to its counterpart. Mt. Ulap has a height of 1846 meters above sea level or 6056 feet. \n\n The jump-off point of Mt. Ulap is just 45 minutes drive from Baguio City and because of its closeness to Baguio City, it becomes a perfect day hike for hikers and mountaineers seeking peace of mind with mother nature. Mt. Ulap is one of the most photogenic mountains in the Philippines.  \n\nThe most famous spot in Mt. Ulap is the Gungal Rock Formation, it's the rock formation with great views that made the mountain prominent for its picture-perfect shots. In addition, the mountain was called Mt. Ulap because, at the summit, the clouds literally kiss and touch the mountains. Hikers can feel and touch the sea of clouds at the top of the mountain. Hence Mt. Ulap is the name of the mountain.",
      },
    ],
  },
  {
    categoryId: 4,
    categoryPath: "look-back-in-history",
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
        id: 19,
        destination: "Calle Crisologo in Vigan, Ilocos Sur",
        path: "calle-crisologo",
        destinationImage: historyImage,
        details:
          "One of the most beautiful streets in the Philippines. It boasts a dense concentration of centuries-old stone houses, lovely tungsten lamps, and antique cobblestone, where horse-drawn carriages or calesas are used for transport.  \n\n Though only 500 meters long, Calle Crisologo in Vigan, Ilocos Sur, is one of the most beautiful streets in the Philippines. It boasts centuries-old stone houses, lovely tungsten lamps, and antique cobblestone, where horse-drawn carriages or kalesas are still used for transport. In fact, the street is a pedestrian-only zone, save for kalesas favored for touring the historical sites around town.\n\n A few of the ancestral houses have also become restaurants that serve the famous Ilocos bagnet (deep fried pork belly) or empanadas. Meanwhile, others have been converted into inns and souvenir shops for traditional Inabel linen.",
      },
      {
        id: 20,
        destination: "Fort Santiago, Intramuros, Manila",
        path: "fort-santiago",
        destinationImage: fortSantiago,
        details:
          "Fort Santiago is one of the oldest fortifications in Manila built by the Spaniards in 1571 from what was once a palisaded structure of logs and earth built by Rajah Soliman on the native settlement called Maynila. \n\n Fort Santiago is one of the oldest fortifications in Manila built by the Spaniards in 1571 from what was once a palisaded structure of logs and earth built by Rajah Soliman on the native settlement called Maynila. The colonizers recognized that the tongue of land where the Pasig River flowed into the Manila Bay was a very strategic location.  The fort was destroyed in 1574 during the Chinese attack led by Limahong.  \n\nThe stone fort was built between 1589 and 1592 and was repaired and extended after being damaged by the 1645 earthquake. Spanish, British, American and Japanese occupation forces used the fort as their headquarters and a prison for men, women, children and soldiers.  After its destruction during the Battle of Manila in 1945, the fort was used by the U.S. \n\n Transportation Corps as a depot until it was turned over to the Philippine government in 1946. In 1950, Fort Santiago was declared a Shrine of Freedom and restoration began the following year. Today, it stands as a memorial to the victims of World War II and the sacrifices of the Filipino people in pursuit of freedom.",
      },
      {
        id: 21,
        destination: "Magellan's Cross in Mactan, Cebu",
        path: "mactan",
        destinationImage: mactan,
        details:
          "A small circular pavilion, built in the 19th century, houses Magellans Cross, which is today one of Cebu islands most important religious icons and an essential stop on any Cebu City tour. \n\n Magellan's Cross Pavilion is a stone kiosk in Cebu City, Philippines. The structure is situated on Plaza Sugbo beside the Basilica del Santo Niño It houses a Christian cross that was planted by explorers of the Spanish expedition of the first circumnavigation of the world, led by Ferdinand Magellan, upon arriving in Cebu in the Philippines on April 21, 1521.\n\n Along with the Basilica del Santo Niño's church and convent buildings, the pavilion is a declared National Cultural Treasure of the Philippines.",
      },
      {
        id: 22,
        destination: "National Museum of Natural History in Manila",
        path: "national-museum",
        destinationImage: museum,
        details:
          "One of the most popular museums in the country is the National Museum of Natural History, which was officially opened to the public in May 2018. Located in Rizal Park, it is part of the National Museum Complex. \n\n The National Museum Act, which was passed in 1998, mandates the conversion of three civic buildings within Rizal Park, the Legislative Building, the Finance Building, and the Tourism Building, into museums. The Finance Building was the first to be repurposed. In 1998, the building was converted into the National Museum of Anthropology. \n\n The Legislative Building was converted into the National Museum of Fine Arts in 2000. The Tourism Building would later become the National Museum of Natural History. The National Museum of Natural History was officially inaugurated on September 30, 2017. A grand opening for the museum was expected in the later quarter of 2017. The museum opened on May 18, 2018.",
      },
      {
        id: 23,
        destination: "Rizal park in Manila",
        path: "rizal-park",
        destinationImage: rizal,
        details:
          "Rizal Park, also known as Luneta Park or simply Luneta, is a historic urban park located in Ermita, Manila. It is considered one of the largest urban parks in the Philippines, covering an area of 58 hectares. Rizal Park, also known as Luneta Park or simply Luneta, is a historic urban park located in Ermita, Manila. \n\n  It is considered one of the largest urban parks in the Philippines, covering an area of 58 hectares (140 acres). The site on where the park is situated was originally known as Bagumbayan during the Spanish colonial period. It is adjacent to the historic Walled City of Intramuros.\n\n Situated on the eastern shore of Manila Bay, the park plays a significant role in shaping the history of the Philippines. The execution of Filipino patriot José Rizal on December 30, 1896 in the same area fanned the flames of the 1896 Philippine Revolution against the Kingdom of Spain. \n\n The park was officially named in his honor, and the monument enshrining his remains serves as the park's symbolic focal point. The declaration of Philippine independence from the United States was held here on July 4, 1946, as well as later political rallies, including those of Ferdinand Marcos and Corazon Aquino, the latter having culminated in the EDSA Revolution in 1986.",
      },
      {
        id: 24,
        destination: "Rizal Shrine in Dapitan, Zamboanga del Norte",
        path: "rizal-shrine",
        destinationImage: rizalShrine,
        details:
          "The shrine features a collection of structures that retells the tales of former Dapitan and the passion of an extraordinary man who lived as an exile with a purpose—to teach and serve the Dapitanons. \n\n The José Rizal Memorial Protected Landscape, also known as the Rizal Park and Shrine, is a protected landscape and memorial to the Philippines' national hero located in the city of Dapitan on the island of Mindanao. It preserves the farm site in barrio Talisay where José Rizal was exiled for four years from 1892-1896 after being accused of sedition and plotting the Philippine revolution in Manila by the Spanish colonial authorities. \n\n The protected area was established in 1940 as the Rizal National Park covering an initial area of 10 hectares (25 acres) through Proclamation No. 616 signed by President Manuel Luis Quezon. In 2000, it was enlarged to its present size of 439 hectares (1,080 acres) with a buffer zone of 15 hectares (37 acres) and was declared a protected landscape under the National Integrated Protected Areas System through Proclamation No. 279.",
      },
    ],
  },
  {
    categoryId: 5,
    categoryPath: "nature-and-culture",
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
        id: 25,
        destination: "Chocolate Hills in Bohol",
        path: "chocolate-hills",
        destinationImage: bohol,
        details:
          "The Chocolate Hills is declared the Philippines' 3rd National Geological Monument and is dubbed as an Eight Wonder of the World. These iconic hills are even featured in the 200 Philippine Peso bill. \n\n The island province of Bohol in the Philippines may be smaller than its Visayan neighbors Cebu and Negros which are home to some of the top tourist spots in Visayas and most beautiful islands in the Philippines, but it doesn't fall short of stunning sights and activities, such as its famous Chocolate Hills. \n\nJoining Chocolate Hills tours will treat you to a breathtaking view of a thousand beautiful cone-shaped hills stretched over 50 square kilometers of land across the towns of Carmen, Batuan, and Sagbayan. This is the tourist spot that put Bohol on the map of top tourist destinations in the Philippines, and that has baffled many geologists.",
      },
      {
        id: 26,
        destination: "Barracuda Lake in Coron Island, Palawan Province",
        path: "barracuda-lake",
        destinationImage: coron,
        details:
          "It is one of the famous diving sites not only in Coron but also in the entire country. Barracuda Lake is composed of both salt and fresh water, but the most notable feature of this lake is its thermocline. \n\n Found on the north shore of Coron Island in the Philippines, offers one of the most unique diving experiences in the world. Occasionally referred to as Luluyuan Lake by locals, its crystal blue waters hidden between majestic rocky formations aren't big on actual barracudas and other wildlife. Instead, divers can experience a thermocline and halocline unlike anywhere else.\n\nStarting out on the surface of the lake, divers, swimmers, and scuba enthusiasts can expect temperatures around 82 degrees Fahrenheit. But as you descend into the depths of the lake, around 45 to 50 feet down, the temperature drastically changes to just over 100 degrees Fahrenheit (to put that in perspective, most people keep their hot tubs at 104 degrees, so it's best to forego a wetsuit here). ",
      },
      {
        id: 27,
        destination: "Banaue Rice Terraces in Ifugao",
        path: "banaue-rice-terraces",
        destinationImage: natureImage,
        details:
          'The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people. The terraces are occasionally called the Eighth Wonder of the World. \n\n The Banaue Rice Terraces (Filipino: Hagdan-hagdang Palayan ng Banawe) are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people. The terraces are occasionally called the "Eighth Wonder of the World". It is commonly thought that the terraces were built with minimal equipment, largely by hand.\n\nThe terraces are located approximately 1,500 metres (4,900 feet) above sea level. These are fed by an ancient irrigation system from the rainforests above the terraces. It is said that if the steps were put end to end, it would encircle half of the globe.',
      },
      {
        id: 28,
        destination: "Puerto Galera in Mindoro oriental",
        path: "puerto-galera",
        destinationImage: puerto,
        details:
          "Puerto Galera is a town on the Philippine island of Mindoro. It's known for its dive sites and beaches. The long curve of White Beach is backed by bars and resorts. \n\n Puerto Galera, especially the Sabang area, is among the top diving destinations in the Philippines and in Asia.[citation needed] Diving sites are found less than five minutes from Sabang Beach.[citation needed] Diving activities generally focus around the areas either side of Escarceo Point. Marine life is diverse. There are over 180+ species of nudibranchs found in the area, and many species of fish can be seen. \n\n A variety of wrecks over the years can be found in addition to the one wreck of an engine of a WWII Japanese patrol boat. The major diving federations PADI, CMAS, NAUI and Technical Diving International (TDI) are represented in the area, offering courses from beginners' open water to advanced and technical diving (rebreather, trimix). \n\n Diving trips in the Verde Island Passage, at the heart of the Coral Triangle are organized from Puerto Galera. Many threatened species such as a variety of sea turtles including hawksbills, olive ridleys, and green turtles, humphead wrasses, giant groupers and giant clams are present in the Verde Island Passage.",
      },
      {
        id: 29,
        destination: "The City Tagaytay in Cavite",
        path: "tagaytay",
        destinationImage: tagaytay,
        details:
          "Tagaytay is a popular holiday town south of Manila on the Philippine island Luzon. Known for its mild climate, it sits on a ridge above Taal Volcano Island, an active volcano surrounded by Taal Lake. \n\n Tagaytay, officially the City of Tagaytay, is a 2nd class component city in the province of Cavite, Philippines. According to the 2020 census, it has a population of 85,330 people. It is one of the country's most popular destinations for domestic tourism because of its scenery and cooler climate provided by its altitude. Tagaytay overlooks Taal Lake in Batangas and provides views of Taal Volcano Island in the middle of the lake through various vantage points situated in the city. \n\nTagaytay is relatively close to the capital city of Manila, only 59 kilometers (37 mi) away via Aguinaldo Highway, providing an easy escape for the locals from the heat of the huge metropolis. It is 39 kilometers (24 mi) from Imus.",
      },
      {
        id: 30,
        destination: "Masungi Georeserve in Tanay, Rizal",
        path: "masungi-georeserve",
        destinationImage: tanay,
        details:
          'The Masungi Georeserve is a conservation area and a rustic rock garden tucked in the rainforests of Rizal. In this sanctuary, guests will be able to commune with nature, and reenergise themselves while doing so. \n\n The Masungi Georeserve is located at Kilometer 47, Marilaque Highway, Baras, Rizal, Philippines, post code 1970. The Masungi Georeserve is characterized by rugged limestone karst peaks, steep slopes, and surrounding lush montane rainforests. It contains several caves, including the Yungib ni Ruben (Ruben\'s Cave), which features stalactite and stalagmite formations, as well as a man-made fountain. \n\n A popular attraction in the park is the Sapot ("Cobweb"), a metallic platform with wooden steps which allows visitors to walk on suspended netting above the karst and get a 360-degree view of the Sierra Madre and Laguna de Bay.[4] The park\'s tallest peak, Tatay, also has a viewing deck at its summit. The limestone formations are connected by hanging bridges, rope courses and eco-trails developed by the Masungi Georeserve Foundation and Blue Star Development. \n\n On one of the hanging bridges, a wooden cable car-like shelter called Patak ("water droplet") can be found which serves as a rest stop for visitors. The Duyan, a giant rope hammock spanning a few hundred feet, is one of Masungi\'s most photographed rope courses.',
      },
    ],
  },
];

export { categoriesInfo };
