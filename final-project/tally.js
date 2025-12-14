
const species = [

  {
    commonName: "Quaking Aspen",
    scientificName: "Populus tremuloides",
    descriptions: ["tree","medium","white bark","trembling leaves","clonal","mountain","forest","common","green"],
    facts: [
      "Aspens grow in huge clonal colonies connected by roots.",
      "They are one of the most widespread tree species in North America.",
      "Their leaves flutter due to flattened leaf stems."
    ],
    image: "images/quaking-aspen.jpg",
    habitat: "Found in cool mountain forests, valley edges, and mixed woodlands."
  },

  {
    commonName: "Sagebrush",
    scientificName: "Artemisia tridentata",
    descriptions: ["shrub","small","gray-green","aromatic","dry-adapted","sage-steppe","desert","common"],
    facts: [
      "Sagebrush dominates the Great Basin and high desert landscapes.",
      "Its aromatic oils help it survive drought.",
      "It provides essential habitat for sage-grouse."
    ],
    image: "",
    habitat: "Grows in dry plains, foothills, and sage-steppe regions."
  },

  {
    commonName: "Arrowleaf Balsamroot",
    scientificName: "Balsamorhiza sagittata",
    descriptions: ["wildflower","yellow","medium","broad leaves","sun-loving","mountain","meadow","spring blooming"],
    facts: [
      "It resembles a wild sunflower and blooms early in spring.",
      "Deer and elk feed on its leaves.",
      "Indigenous peoples used its roots medicinally."
    ],
    image: "",
    habitat: "Found in sunny meadows, foothills, and open mountain slopes."
  },

  {
    commonName: "Indian Paintbrush",
    scientificName: "Castilleja miniata",
    descriptions: ["wildflower","red","parasitic","medium","mountain","bright","summer blooming"],
    facts: [
      "It is a partial parasite, tapping nutrients from nearby plants.",
      "Hummingbirds are major pollinators.",
      "Its red color comes from modified leaves called bracts."
    ],
    image: "",
    habitat: "Common in open forests, moist meadows, and alpine slopes."
  },

  {
    commonName: "Mule Deer",
    scientificName: "Odocoileus hemionus",
    descriptions: ["mammal","large","brown","herbivore","common","mountain","sagebrush","wildlife"],
    facts: [
      "Named for their large, mule-like ears.",
      "They use a bounding gait called 'stotting' to evade predators.",
      "They migrate between high and low elevations seasonally."
    ],
    image: "images/mule_deer.jpg",
    habitat: "Lives in forests, sagebrush flats, foothills, and suburban edges."
  },

  {
    commonName: "Moose",
    scientificName: "Alces alces",
    descriptions: ["mammal","large","dark","solitary","wetland","forest","brown"],
    facts: [
      "Moose can run up to 35 mph and swim for long distances.",
      "They feed heavily on willow and aquatic plants.",
      "Their long legs help them move through deep snow and marshes."
    ],
    image: "",
    habitat: "Found along rivers, marshes, and willow-filled forests."
  },

  {
    commonName: "Red-tailed Hawk",
    scientificName: "Buteo jamaicensis",
    descriptions: ["bird","raptor","medium-large","brown","flying","common","bird of prey"],
    facts: [
      "Its scream is widely used in movies for dramatic effect.",
      "It primarily hunts rodents and small mammals.",
      "It adapts well to rural and urban areas."
    ],
    image: "",
    habitat: "Seen in open fields, forests, cliffs, and roadsides."
  },

  {
    commonName: "Black-billed Magpie",
    scientificName: "Pica hudsonia",
    descriptions: ["bird","medium","black and white","social","urban","intelligent"],
    facts: [
      "Magpies are highly intelligent and can use tools.",
      "They live in cooperative social groups.",
      "They build large, dome-shaped stick nests."
    ],
    image: "",
    habitat: "Lives in open fields, farms, forests, and towns."
  },

  {
    commonName: "Chickadee",
    scientificName: "Poecile atricapillus",
    descriptions: ["bird","small","black and white","songbird","forest","common","backyard"],
    facts: [
      "Chickadees hide seeds and remember thousands of locations.",
      "Their call changes depending on danger level.",
      "They survive cold nights by lowering their body temperature."
    ],
    image: "",
    habitat: "Common in forests, parks, and backyard feeders."
  },

  {
    commonName: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    descriptions: ["insect","bug","butterfly","orange","black","small","flying","migratory","meadow"],
    facts: [
      "Monarchs migrate thousands of miles to Mexico every year.",
      "Their caterpillars feed only on milkweed.",
      "They are toxic to predators."
    ],
    image: "",
    habitat: "Found in meadows, gardens, and milkweed-rich fields."
  },

  {
    commonName: "Honeybee",
    scientificName: "Apis mellifera",
    descriptions: ["insect","bug","bee","small","striped","flying","pollinator","social","yellow","black"],
    facts: [
      "Honeybees communicate using a waggle dance.",
      "They live in large colonies.",
      "They pollinate many food crops."
    ],
    image: "",
    habitat: "Seen around flowers, gardens, farms, and meadows."
  },

  {
    commonName: "Boxelder Bug",
    scientificName: "Boisea trivittata",
    descriptions: ["insect","bug","small","black","red","flying","cluster-forming","urban","common"],
    facts: [
      "They gather on warm walls in fall.",
      "They feed on maple and boxelder seeds.",
      "They are harmless to people."
    ],
    image: "",
    habitat: "Common around boxelder and maple trees."
  },

  {
    commonName: "Ladybug",
    scientificName: "Coccinellidae",
    descriptions: ["insect","bug","beetle","small","red","black spots","flying","garden","meadow"],
    facts: [
      "Ladybugs eat aphids.",
      "Some overwinter indoors.",
      "Their color warns predators."
    ],
    image: "",
    habitat: "Found in gardens, meadows, and forests."
  },

  {
    commonName: "Two-striped Grasshopper",
    scientificName: "Melanoplus bivittatus",
    descriptions: ["insect","bug","grasshopper","medium","brown","jumping","meadow","farm","common"],
    facts: [
      "Very common in western states.",
      "Can damage crops.",
      "Feeds on grasses."
    ],
    image: "",
    habitat: "Found in grasslands and open fields."
  },

  {
    commonName: "Blue Dasher Dragonfly",
    scientificName: "Pachydiplax longipennis",
    descriptions: ["insect","bug","dragonfly","small","blue","flying","wetland","pond","predator"],
    facts: [
      "Dragonflies are aerial hunters.",
      "They patrol ponds.",
      "Larvae live underwater."
    ],
    image: "",
    habitat: "Seen near ponds and marshes."
  }

];

//HERE IS THE BEGINNING OF MY FUNCTIONS AND STUFF

///////////////////////////////////////////
//         SEARCH BAR & FUNCTION         //
///////////////////////////////////////////

let searchButton = document.querySelector('.search');
//this is saying when you click the button the search function will be ran
searchButton.addEventListener('click', search);




///////////////////////////////////////////
//            INNER HTML                  //
///////////////////////////////////////////

function speciesOutline(species){
    return `<div class="species-card">
                <img src="${species.image}" alt="picture of "${species.commonName}">
                <div class="species-details">
                    <h2 class="amatic-sc-bold">${species.commonName}</h2>
                    <p>${species.habitat}</p>
                </div>
            </div>`
};

let randomNum = Math.floor(Math.random()* species.length);
let creatureBox = document.querySelector("#species");

function showAnimal(species) {
    let html = speciesOutline(species);
    creatureBox.innerHTML += html
};

function init(){
    showAnimal(species[randomNum]);
};

init();
///////////////////////////////////////////
//                             //
///////////////////////////////////////////




///////////////////////////////////////////
//                            //
///////////////////////////////////////////