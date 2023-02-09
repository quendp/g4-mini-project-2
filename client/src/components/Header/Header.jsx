import React, {useState} from 'react';
import './Header.css';
import HeaderCollapsed from './HeaderCollapsed';
import HeaderExpanded from './HeaderExpanded';
import grainOverlay from '../../assets/images/grain.png'
import lightsImage from '../../assets/images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg';
import waterImage from '../../assets/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg';
import summitImage from '../../assets/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg';
import historyImage from '../../assets/images/look-back-in-history/calle-crisologo-593843_1920.jpg';
import natureImage from '../../assets/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg';

const Header = ({logInToken}) => {
    const [isActiveClass, setIsActiveClass] = useState("");
    const [showExpanded, setShowExpanded] = useState("d-none");
    const [headerBgColor, setHeaderBgColor] = useState("transparent");
    const [headerBgImage, setHeaderBgImage] = useState("");
    const [headerBlur, setHeaderBlur] = useState("blur(0px)");
    const [headerTransform, setHeaderTransform] = useState("translateY(0)");
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const categoriesInfo = [
        {
            category : "Cosmopolitan Lights",
            headerTitle : "THE LIVELY MODERN CITIES",
            previewImage : lightsImage,
            categoryTitle : "Visit the Lively <br> and Colorful Cities" ,
            description : "A trip to Star City Amusement Park, Manila Ocean Park, Chinatown, and Solaire Resort and Casino in Manila, and Mall of Asia and Cultural Center of the Philippines in Pasay.",
            poster : "../../assets/images/hero-section-thumbnails/city-poster.jpg",
            accent: "var(--clr-accent-lights)",
            accentLight: "var(--clr-accent-lights-100",
            destinations : [
                {
                    destination : "Star City Amusement Park in Pasay",
                    details : "Located in the city of Pasay in Metro Manila, Star City is one of the biggest, most popular and all weather, air-conditioned amusement park in all of Philippines.",
                    duration : "2 days",
                    price : "Php 3,500.00 / person"
                },{
                    destination : "Chinatown in Binondo Manila",
                    details : "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese.",
                    duration : "1 1/2 days",
                    price : "Php 2,500.00 / person"
                }, {
                    destination : "Mall of Asia in Pasay City",
                    details : "The mall is currently the largest shopping mall in the Philippines and the third in the world. When it opened in 2006, it was the largest shopping mall in the Philippines until SM North EDSA was redeveloped in 2008.",
                    duration : "1 1/2 days",
                    price : "Php 3,500.00 / person"
                }, {
                    destination : "Manila Ocean Park",
                    details : "Manila Ocean Park is the country's first world-class marine theme park and a premiere educational facility. An integrated urban resort with marine life attractions and aqua-themed hotel.",
                    duration : "2 days",
                    price : "Php 6,000.00 / person"
                }, {
                    destination : "Solaire Resort & Casino Manila",
                    details : "When you are looking for comfortable and convenient accommodations in Manila, make Solaire Resort & Casino your home away from home. A stay at Solaire Resort & Casino ensures an easy access to the lively city and all of its wonders.",
                    duration : "5 days",
                    price : "Php 25,000.00 / person"
                }, {
                    destination : "Cultural Center of the Philippines in Pasay City",
                    details : "It is a mixed-use cultural and tourism hub overlooking Manila Bay in south-central Manila, most of which fall under the jurisdiction of the city of Pasay.",
                    duration : "1 day",
                    price : "Php 5,000.00 / person"
                }
            ]
        }, {
            category : "Dive Under Water",
            headerTitle : "THE WONDERS OF THE SEA",
            previewImage : waterImage,
            categoryTitle : "Discover the Wonders <br> of the Deep Sea" ,
            description : "A trip towards places such as the Bantayan Island in Cebu, Boracay Beach in Aklan, El Nido in Palawan, Palaui Island in Santa Ana, Panglao Island in Bohol, and Siargao Island.",
            poster : "../../assets/images/hero-section-thumbnails/water-poster.jpg",
            accent: "var(--clr-accent-water)",
            accentLight: "var(--clr-accent-water-100",
            destinations : [
                {
                    destination : "Bantayan Island in Cebu",
                    details : "Bantayan Island Cebu is an excellent spot for relaxation with its exquisite beauty. It has white sands, clear blue beaches, tranquil mood, and hospitable people.",
                    duration : "5 days",
                    price : "Php 12,000.00 / person"
                },{
                    destination : "Boracay Beach in Aklan",
                    details : "Boracay Island in Aklan is one of the top tourist destination in the Philippines. Boast white sand beaches, caves and scenic views.",
                    duration : "5 days",
                    price : "Php 25,500.00 / person"
                }, {
                    destination : "El Nido in Palawan",
                    details : "El Nido has been named a number of times as the best island beaches in the world because of its paradise-like attractions with white sand, turquoise waters, vibrant coral reefs, and stunning limestone cliffs.",
                    duration : "7 days",
                    price : "Php 28,500.00 / person"
                }, {
                    destination : "Palaui Island in Santa Ana",
                    details : "Palaui island offers so much white sandy beaches and panoramic coves, a century old lighthouse, hidden waterfalls and lovely people, all in a scenic ragged terrain surrounded with huge waves and echoing wind.",
                    duration : "5 days",
                    price : "Php 15,000.00 / person"
                }, {
                    destination : "Panglao Island in Bohol",
                    details : "Panglao Island is the most popular tourist spot in Bohol. It is the tourist hub for all activities and there are hundreds of resorts, hotels, and restaurants in this area.",
                    duration : "5 days",
                    price : "Php 17,500.00 / person"
                }, {
                    destination : "Siargao Island",
                    details : "Named after a native mangrove, the surf capital of the Philippines is perfect for lovers of the great outdoors, whether you embrace adventure sports or gentler pursuits such as swimming in rock pools and caves.",
                    duration : "7 days",
                    price : "Php 25,000.00 / person"
                }
            ]
        }, {
            category : "Explore the Summit",
            headerTitle : "THE SKY ON MOUNTAIN PEAKS",
            previewImage : summitImage,
            categoryTitle : "Look at the Sky on <br> Top of Mountain Peaks" ,
            description : "Visit beautiful mountains such as Mt. Apo in Davao City, Mt. Guiting Guiting in Sibuyan, Mt. Pulag and Mt. Itogon in Benguet, Mt. Pinatubo in Zambales, and Mt. Ugo in Nueva Viscaya.",
            poster : "../../assets/images/hero-section-thumbnails/mountain-poster.jpg",
            accent: "var(--clr-accent-summit)",
            accentLight: "var(--clr-accent-summit-100",
            destinations : [
                {
                    destination : "Mt. Apo in Davao City",
                    details : "Towering at 2954 meters above sea level, Mount Apo is the highest mountain and volcano in the Philippines. It is also marked for the UNESCO Tentative World Heritage List.",
                    duration : "7 days",
                    price : "Php 15,500.00 / person"
                },{
                    destination : "Guiting-Guiting National Park in Sibuyan Island",
                    details : "Its steep slopes and jagged peak, have earned it the reputation as one of the most difficult mountain to climb in the Philippines. It also ranked 71st-highest peak of an island in the world.",
                    duration : "7 days",
                    price : "Php 12,500.00 / person"
                }, {
                    destination : "Mt. Pulag in Benguet",
                    details : "Mt. Pulag National Park is the highest peak in Luzon and is the second highest mountain in the Philippines with an elevation of 2,922 m above sea level. Visitors can also catch glimpses of the Milky Way Galaxy at dawn.",
                    duration : "5 days",
                    price : "Php 13,500.00 / person"
                }, {
                    destination : "Mt. Pinatubo in Zambales",
                    details : "Explore the Philippines most popular hiking destination on an 18 hour tour taking you to the best trekking areas and viewing spots around Mount Pinatubo.",
                    duration : "5 days",
                    price : "Php 16,000.00 / person"
                }, {
                    destination : "Mt. Ugo in Nueva Viscaya",
                    details : "Mt. Ugo is a popular hiking destination located in the borderline province of Nueva Vizcaya and Benguet. It has an elevation of 2,200 meters above sea level or 7,217 feet.",
                    duration : "5 days",
                    price : "Php 15,500.00 / person"
                }, {
                    destination : "Mt. Ulap in Itogon, Benguet",
                    details : "Mt. Ulap is located in Itogon, Benguet. It is one of the most visited mountains in the Philippines. It offers scenic views of the Cordillera mountain range and it is often called mini Mt. Ugo.",
                    duration : "5 days",
                    price : "Php 16,500.00 / person"
                }
            ]
        }, {
            category : "Look Back in History",
            headerTitle : "THE REMNANTS OF THE PAST",
            previewImage : historyImage,
            categoryTitle : "Embrace the Great <br> Remnants of the Past" ,
            description : "Visit Historical Sites such as Calle Crisologo in Vigan, Fort Santiago in Intramuros, Magellan's Cross in Mactan, National Museum and Rizal Park in Manila, and Rizal Shrine in Dapitan.",
            poster : "../../assets/images/hero-section-thumbnails/history-poster.jpg",
            accent: "var(--clr-accent-history)",
            accentLight: "var(--clr-accent-history-100",
            destinations : [
                {
                    destination : "Calle Crisologo in Vigan, Ilocos Sur",
                    details : "One of the most beautiful streets in the Philippines. It boasts a dense concentration of centuries-old stone houses, lovely tungsten lamps, and antique cobblestone, where horse-drawn carriages or calesas are used for transport. ",
                    duration : "2 days",
                    price : "Php 5,500.00 / person"
                },{
                    destination : "Fort Santiago, Intramuros, Manila",
                    details : "Fort Santiago is one of the oldest fortifications in Manila built by the Spaniards in 1571 from what was once a palisaded structure of logs and earth built by Rajah Soliman on the native settlement called Maynila.",
                    duration : "1 1/2 days",
                    price : "Php 3,500.00 / person"
                }, {
                    destination : "Magellan's Cross in Mactan, Cebu",
                    details : "A small circular pavilion, built in the 19th century, houses Magellans Cross, which is today one of Cebu islands most important religious icons and an essential stop on any Cebu City tour.",
                    duration : "2 days",
                    price : "Php 5,500.00 / person"
                }, {
                    destination : "National Museum of Natural History in Manila",
                    details : "One of the most popular museums in the country is the National Museum of Natural History, which was officially opened to the public in May 2018. Located in Rizal Park, it is part of the National Museum Complex.",
                    duration : "1 1/2 days",
                    price : "Php 3,000.00 / person"
                }, {
                    destination : "Rizal park in Manila",
                    details : "Rizal Park, also known as Luneta Park or simply Luneta, is a historic urban park located in Ermita, Manila. It is considered one of the largest urban parks in the Philippines, covering an area of 58 hectares.",
                    duration : "1 day",
                    price : "Php 2,000.00 / person"
                }, {
                    destination : "Rizal Shrine in Dapitan, Zamboanga del Norte",
                    details : "The shrine features a collection of structures that retells the tales of former Dapitan and the passion of an extraordinary man who lived as an exile with a purpose—to teach and serve the Dapitanons.",
                    duration : "3 day",
                    price : "Php 5,000.00 / person"
                }
            ]
        }, {
            category : "Nature and Culture",
            headerTitle : "THE BREATH OF FRESH AIR",
            previewImage : natureImage,
            categoryTitle : "Feel the Beauty of <br> the Untouched Lands" ,
            description : "Visit the Chocolate Hills in Bohol, Barracuda Lake in Coron, Banaue Rice Terraces in Ifugao, Puerto Galera in Mindoro, Tagaytay in Cavite, and Masungi Georeserve in Tanay.",
            poster : "../../assets/images/hero-section-thumbnails/nature-poster.jpg",
            accent: "var(--clr-accent-culture)",
            accentLight: "var(--clr-accent-culture-100",
            destinations : [
                {
                    destination : "Chocolate Hills in Bohol",
                    details : "The Chocolate Hills is declared the Philippines' 3rd National Geological Monument and is dubbed as an Eight Wonder of the World. These iconic hills are even featured in the 200 Philippine Peso bill.",
                    duration : "5 days",
                    price : "Php 12,500.00 / person"
                },{
                    destination : "Barracuda Lake in Coron Island, Palawan Province",
                    details : "It is one of the famous diving sites not only in Coron but also in the entire country. Barracuda Lake is composed of both salt and fresh water, but the most notable feature of this lake is its thermocline.",
                    duration : "5 days",
                    price : "Php 11,500.00 / person"
                }, {
                    destination : "Banaue Rice Terraces in Ifugao",
                    details : "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people. The terraces are occasionally called the Eighth Wonder of the World.",
                    duration : "5 days",
                    price : "Php 10,500.00 / person"
                }, {
                    destination : "Puerto Galera in Mindoro oriental",
                    details : "Puerto Galera is a town on the Philippine island of Mindoro. It's known for its dive sites and beaches. The long curve of White Beach is backed by bars and resorts.",
                    duration : "5 days",
                    price : "Php 16,000.00 / person"
                }, {
                    destination : "Tagaytay in Cavite",
                    details : "Tagaytay is a popular holiday town south of Manila on the Philippine island Luzon. Known for its mild climate, it sits on a ridge above Taal Volcano Island, an active volcano surrounded by Taal Lake.",
                    duration : "3 days",
                    price : "Php 9,500.00 / person"
                }, {
                    destination : "Masungi Georeserve in Tanay, Rizal",
                    details : "The Masungi Georeserve is a conservation area and a rustic rock garden tucked in the rainforests of Rizal. In this sanctuary, guests will be able to commune with nature, and reenergise themselves while doing so.",
                    duration : "3 days",
                    price : "Php 8,500.00 / person"
                }
            ]
    }];

    window.addEventListener("scroll", () => {
        adjustHeader();
        setLastScrollY(window.scrollY);
    });

    const headerClickHandler = () => {
        document.body.classList.toggle("h-disable-scroll");
        if (isActiveClass == "") {
            setIsActiveClass("h-active");
            setShowExpanded("");
            setHeaderBgColor("var(--clr-primary-dark)");
            setHeaderBgImage(`url(${grainOverlay})`);
        } else {
            setIsActiveClass("");
            setShowExpanded("d-none");
            adjustHeader();
            
        }
    };

    const adjustHeader = () => {
        if ( window.scrollY == 0){
            setHeaderBgColor("transparent");
            setHeaderBgImage("none");
            setHeaderBlur("blur(0px)");
        } else if (lastScrollY < window.scrollY){
            setHeaderBgColor("transparent");
            setHeaderBlur("blur(2px)");
            setHeaderTransform("translateY(-10vh)");
        } else {
            setHeaderBgColor("var(--clr-primary-glass)");
            setHeaderBgImage(`url(${grainOverlay})`);
            setHeaderBlur("blur(2px)");
            setHeaderTransform("translateY(0)");
    }};

    const headerWrapperStyle = {
        backgroundColor: headerBgColor,
        backgroundImage: headerBgImage,
        backdropFilter: headerBlur,
        transform: headerTransform
    };

  return (
    <header className={isActiveClass + " h-header-wrapper container-fluid position-fixed top-0 start-0"} style={headerWrapperStyle}>
        <HeaderCollapsed logInToken={logInToken} onBurgerClick = {headerClickHandler}/>
        <HeaderExpanded onBurgerClick = {showExpanded} categoriesData = {categoriesInfo} logInToken={logInToken} />
    </header>
  )
}

export default Header