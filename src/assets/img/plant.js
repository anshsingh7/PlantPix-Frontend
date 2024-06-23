import p1_img from "./Tulsi.jpg";
import p2_img from "./Lemon.jpg";
import p3_img from "./Orange.jpg";
import p4_img from "./Apple.jpg";
import p5_img from "./Grapes.jpg";
import p6_img from "./MadhuKamini.jpg";
import p7_img from "./Kadamb.jpg";
import p8_img from "./Aparajita.jpg";
import p9_img from "./SnakePlant.jpg";
import p10_img from "./PinStripe.jpg";
import p11_img from "./Coriander.jpg";
import p12_img from "./Lemon_Balm.jpg";
import p13_img from "./Oregano.jpg";
import p14_img from "./Rosemarry.jpg";
import p15_img from "./PrideOfHankins.jpg";
import p16_img from "./Periwinkle.jpg";
import p17_img from "./StarMogra.jpg";
import p18_img from "./Lotus.jpg";
import p19_img from "./MysoreMalli.jpg";
import p20_img from "./Cannabis.jpg";
import p21_img from "./CebuBlue.jpg";
import p22_img from "./HibiscusVersicolor.jpg";
import p23_img from "./DaintyPink.jpg";
import p24_img from "./DaintyWhite.jpg";
import p25_img from "./Parijat.jpg";
import p26_img from "./WaterJasmine.jpg";
import p27_img from "./DropBloodLotus.jpg";
import p28_img from "./LemonGrass.jpg";
import p29_img from "./KanerAppricot.jpg";
import p30_img from "./Cooperi.jpg";
import p31_img from "./MarbleQueen.jpg";
import p32_img from "./Andersonii.jpg";
import p33_img from "./Carnation.jpg";
import p34_img from "./CrotonPetra.jpg";
import p35_img from "./RedHibiscus.jpg";
import p36_img from "./PhilodendronMicans.jpg";
import p37_img from "./HawaiianSalmon.jpg";
import p38_img from "./Schizopetalus.jpg";

const PLANTS = [
  {
    id: 1,
    name: "Tulsi",
    botanicalName: "Ocimum tenuiflorum",
    image: p1_img,
    description: "This is Basil Plant",
    types: ["herb", "native", "all"],
  },
  {
    id: 2,
    name: "Lemon",
    botanicalName: "Ocimum",
    image: p2_img,
    description: "This is Basil Plant",
    types: ["native", "fruit", "all"],
  },
  {
    id: 3,
    name: "Orange",
    botanicalName: "Ocimum",
    image: p3_img,
    description: "This is Basil Plant",
    types: ["fruit", "all"],
  },
  {
    id: 4,
    name: "Apple",
    botanicalName: "Ocimum",
    image: p4_img,
    description: "This is Basil Plant",
    types: ["fruit", "tree", "all"],
  },
  {
    id: 5,
    name: "Grapes",
    botanicalName: "Ocimum",
    image: p5_img,
    description: "This is Grapes Plant",
    types: ["fruit", "all"],
  },
  {
    id: 6,
    name: "Madhu Kamini",
    botanicalName: "Ocimum",
    image: p6_img,
    description: "This is Grapes Plant",
    types: ["native", "fragrant", "flower", "all"],
  },
  {
    id: 7,
    name: "Kadamb",
    botanicalName: "Neolamarckia cadamba",
    image: p7_img,
    description: "This is Grapes Plant",
    types: ["native", "flower", "tree", "all"],
  },
  {
    id: 8,
    name: "Aparajita",
    botanicalName: "Clitoria ternatea",
    image: p8_img,
    description: "Aparajita or Shankhpushpi is a perennial herbaceous plant, which is mainly known for its beautiful flowers. It is a fast growing plant, which can grow up to about 1 to 2.5 meters. This plant mainly grows in the ground in the form of a type of creeper and vine, due to which it is also planted as an ornamental plant. Very little effort and care is required to grow this plant. Its roots form symbiotic associations with soil bacteria known as rhizobia. It is suitable for growing in all types of soils ranging from sandy soil to heavy clay.&nbsp; The flowers of this Aparajita or Shankhpushpi plant are generally in blue color and light yellow color from inside. The length of this flower is about 4 cm and the width is around 2 to 3 cm. Let me tell you, these beautiful flowers bloom from the month of June to the end of November and its flowers are followed for a long time. Let me tell you that its flowers are blue as well as white, which are rarely seen. Its fruits are around 5 to 7 cm long in flattened shape and a new plant can be formed again from the seeds found inside the fruit of this Shankhpushpi.",
    types: ["native", "herb", "flower", "all"],
  },
  {
    id: 9,
    name: "Snake Plant",
    botanicalName: "Ocimum",
    image: p9_img,
    description: "This is Grapes Plant",
    types: ["foliage", "all"],
  },
  {
    id: 10,
    name: "Pin-stripe Plant",
    botanicalName: "Goeppertia ornata",
    image: p10_img,
    description: "This is Grapes Plant",
    types: ["foliage", "all"],
  },
  {
    id: 11,
    name: "Coriander",
    botanicalName: "Ocimum",
    image: p11_img,
    description: "This is Coriander Plant",
    types: ["herb", "all"],
  },
  {
    id: 12,
    name: "Lemon Balm",
    botanicalName: "Ocimum",
    image: p12_img,
    description: "This is Lemon Balm Plant",
    types: ["herb", "all"],
  },
  {
    id: 13,
    name: "Oregano",
    botanicalName: "Ocimum",
    image: p13_img,
    description: "This is Grapes Plant",
    types: ["herb", "all"],
  },
  {
    id: 14,
    name: "Rosemarry",
    botanicalName: "Ocimum",
    image: p14_img,
    description: "This is Rosemarry Plant",
    types: ["herb", "all"],
  },
  {
    id: 15,
    name: "Hibiscus Pride of Hankins",
    botanicalName: "Hibiscus rosa-sinensis 'Pride of Hankins'",
    image: p15_img,
    description: "This is Rosemarry Plant",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 16,
    name: "Periwinkle",
    botanicalName: "Catharanthus roseus",
    image: p16_img,
    description: "This is Rosemarry Plant",
    types: ["flower", "all"],
  },
  {
    id: 17,
    name: "Star Mogra",
    botanicalName: "Jasminum sambac var.'Belle of India'",
    image: p17_img,
    description: "This is Rosemarry Plant",
    types: ["native", "fragrant", "flower", "all"],
  },
  {
    id: 18,
    name: "Lotus",
    botanicalName: "Catharanthus roseus",
    image: p18_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["native", "flower", "all"],
  },
  {
    id: 19,
    name: "Mysore Malli",
    botanicalName: "Clerodendrum chinense",
    image: p19_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["native", "fragrant", "flower", "all"],
  },
  {
    id: 20,
    name: "Cannabis",
    botanicalName: "Cannabis indica",
    image: p20_img,
    description: "Cannabis, also known as marijuana or weed among other names, is a psychoactive drug from the cannabis plant. Native to Central or South Asia, the cannabis plant has been used as a drug for both recreational and entheogenic purposes and in various traditional medicines for centuries.",
    types: ["native","herb", "foliage", "all"],
  },
  {
    id: 21,
    name: "Cebu Blue Pothos",
    botanicalName: "Epipremnum Pinnatum",
    image: p21_img,
    description: "Epipremnum Pinnatum is a tropical aroid species found mostly in Asia. Cebu Blue is a form that was found in the island of Cebu (Philippines). It is also called Blue Cebu or Blue Pothos due to its silvery blue-grey colored leaves. It can grown very well as an indoor plant. This plant has juvenile foliage and mature foliage. During the juvenile phase the leaves are full and there are no cuts or holes. Once it matures the cuts and holes are formed.",
    types: ["foliage", "all"],
  },
  {
    id: 22,
    name: "Hibiscus Versicolor",
    botanicalName: "Hibiscus rosa-sinensis 'Versicolor'",
    image: p22_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 23,
    name: "Hibiscus Dainty Pink",
    botanicalName: "Hibiscus rosa-sinensis 'Dainty Pink'",
    image: p23_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 24,
    name: "Hibiscus Dainty White",
    botanicalName: "Hibiscus rosa-sinensis 'Dainty White'",
    image: p24_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 25,
    name: "Parijat",
    botanicalName: "Catharanthus roseus",
    image: p25_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["native", "fragrant", "flower", "all"],
  },
  {
    id: 26,
    name: "Water Jasmine",
    botanicalName: "Wrightia religiosa",
    image: p26_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "fragrant", "all"],
  },
  {
    id: 27,
    name: "Drop Blood Lotus",
    botanicalName: "Nelumbo Nucifera Dixue",
    image: p27_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "all"],
  },
  {
    id: 28,
    name: "Lemon Grass",
    botanicalName: "Cymbopogon Citratus",
    image: p28_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["native", "herb", "all"],
  },
  {
    id: 29,
    name: "Kaner Appricot",
    botanicalName: "Cascabela Thevetia",
    image: p29_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["native", "fragrant", "all"],
  },
  {
    id: 30,
    name: "Hibiscus Cooperi",
    botanicalName: "Hibiscus rosa-sinensis 'Cooperi'",
    image: p30_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "foliage", "hibiscus", "all"],
  },
  {
    id: 31,
    name: "Marble Queen Pothos",
    botanicalName: "Epipremnum Aureum",
    image: p31_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["foliage", "all"],
  },
  {
    id: 32,
    name: "Hibiscus Andersonii",
    botanicalName: "Hibiscus rosa-sinensis 'Andersonii'",
    image: p32_img,
    description: "Hibiscus Archeri is an old hybrid between Hibiscus rosa sinensis and Hibiscus schizopetalus. Named for A.S. Archer, of Antigua in the Antilles, this striking variety is an upright, fast growing shrub, often grown on its own roots. The 10cm red flowers last for a day.Hardy evergreen rounded shrub 2.5m x 2.5m. Green leaves with maroon/purple edging. Mature leaves can be entirely maroon. Prolific small red flowers from spring to autumn. Prefers sunny location protected from hot winds. Moist well drained soils, summer water may be required during hot dry spells. Ideal hedging shrub.",
    types: ["flower", "foliage", "hibiscus", "all"],
  },
  {
    id: 33,
    name: "Hibiscus Carnation",
    botanicalName: "Hibiscus rosa-sinensis 'Carnation'",
    image: p33_img,
    description: "Hibiscus ",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 34,
    name: "Croton Petra",
    botanicalName: "Ocimum",
    image: p34_img,
    description: "This is Coriander Plant",
    types: ["foliage", "all"],
  },
  {
    id: 35,
    name: "Indian Red Hibiscus",
    botanicalName: "Hibiscus rosa-sinensis",
    image: p35_img,
    description: "Hibiscus.",
    types: ["flower", "native", "hibiscus", "all"],
  },
  {
    id: 36,
    name: "Philodendron Micans",
    botanicalName: "Philodendron hederaceum var. hederaceum",
    image: p36_img,
    description: "Philodendron Micans has deep green heart-shaped leaves with purple-brown undersides and a velvety texture. It is an evergreen perennial vine known for its unique velvety foliage and hassle-free maintenance.",
    types: ["foliage", "all"],
  },
  {
    id: 37,
    name: "Hibiscus Hawaiian Salmon",
    botanicalName: "Hibiscus Hawaiian Salmon",
    image: p37_img,
    description: "This is Scred Indian Lotus Plant",
    types: ["flower", "hibiscus", "all"],
  },
  {
    id: 38,
    name: "Coral Hibiscus",
    botanicalName: "Hibiscus Schizopetalus",
    image: p38_img,
    description: "Hibiscus schizopetalus, commonly called Coral Hibiscus, Japanese lantern, fringed hibiscus, or fringed rosemallow, is native to tropical areas of eastern Africa. Although it is not native to Japan, its flowers droop from the branching in a manner reminiscent of Japanese lanterns, hence the common name. It typically grows as a narrow, woody, evergreen shrub to 6-9’ tall on upright-arching stems clad with ovate, serrate, dark green leaves (to 5” long). Lantern-like flowers (to 3” across) bloom seasonally on long pedicels. Each flower features recurved, fringed, pink to red petals and a long slender pendent staminal column.",
    types: ["flower", "hibiscus", "all"],
  },
];
export { PLANTS };
