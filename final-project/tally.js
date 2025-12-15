
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
    image: "images/sagebrush.jpg",
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
    image: "images/arrowleaf.jpg",
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
    image: "images/indianpaintbrush.jpg",
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
    image: "images/moose.jpg",
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
    image: "images/redtailedHawk.jpg",
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
    image: "images/magpie.jpg",
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
    image: "images/blackCappedChickadee.jpg",
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
    image: "images/monarchButterfly.jpg",
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
    image: "images/honeybee.jpg",
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
    image: "images/boxelder.jpg",
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
    image: "images/ladybug.jpg",
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
    image: "images/twostripedGrasshopper.jpg",
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
    image: "images/bluedasherDragonfly.jpg",
    habitat: "Seen near ponds and marshes."
  },

  {
    commonName: "American Red Squirrel",
    scientificName: "Tamiasciurus hudsonicus",
    descriptions: [
      "mammal",
      "small",
      "squirrel",
      "brown",
      "red",
      "fast",
     // "tree-dwelling",
      "forest",
      "common"
    ],
    facts: [
      "Red squirrels are very territorial and vocal.",
      "They store food in large caches called middens.",
      "They are active year-round, even in winter."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tamiasciurus_hudsonicus_7_Luc_Viatour.jpg",
    habitat: "Found in coniferous forests, woodlands, and parks."
  },
  {
    commonName: "Striped Skunk",
    scientificName: "Mephitis mephitis",
    descriptions: [
      "mammal",
      "medium",
      "skunk",
      "black",
      "white stripes",
      "nocturnal",
      "ground-dwelling",
      "common"
    ],
    facts: [
      "Skunks spray a strong-smelling liquid for defense.",
      "They have poor eyesight but an excellent sense of smell.",
      "They eat insects, rodents, and plants."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Striped_skunk.jpg",
    habitat: "Lives in grasslands, forests, farmland, and suburban areas."
  },
  {
    commonName: "Canada Goose",
    scientificName: "Branta canadensis",
    descriptions: [
      "bird",
      "large",
      "waterfowl",
      "goose",
      "black neck",
      "white chin strap",
      "migratory",
      "common"
    ],
    facts: [
      "Canada geese are highly social and form lifelong pair bonds.",
      "They migrate in V-shaped formations.",
      "They aggressively defend nesting areas."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Canada_Goose_Alberta.jpg",
    habitat: "Found near lakes, rivers, wetlands, and grassy open areas."
  },
  {
    commonName: "Mountain Lion",
    scientificName: "Puma concolor",
    descriptions: [
      "mammal",
      "large",
      "predator",
      "tan",
      "solitary",
      "stealthy",
      "mountain",
      "forest"
    ],
    facts: [
      "Mountain lions can leap over 40 feet in a single bound.",
      "They are solitary and highly elusive.",
      "They primarily hunt deer."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Puma_concolor_cougar.jpg",
    habitat: "Lives in mountainous regions, forests, and remote wilderness."
  },
  {
    commonName: "American Black Bear",
    scientificName: "Ursus americanus",
    descriptions: [
      "mammal",
      "large",
      "bear",
      "black",
      "brown",
      "omnivore",
      "forest",
      "mountain"
    ],
    facts: [
      "Black bears are excellent climbers.",
      "They eat berries, insects, plants, and meat.",
      "They enter a state of torpor during winter."
    ],
    image: "images/americanBlackBear.jpg",
    habitat: "Found in forests, mountains, and wooded river corridors."
  },
  {
    commonName: "Grizzly Bear",
    scientificName: "Ursus arctos horribilis",
    descriptions: [
      "mammal",
      "large",
      "bear",
      "brown",
      "powerful",
      "omnivore",
      "mountain",
      "rare"
    ],
    facts: [
      "Grizzlies have a distinct shoulder hump made of muscle.",
      "They can run up to 35 miles per hour.",
      "They dig extensively for roots and rodents."
    ],
    image: "images/grizzlybear.jpg",
    habitat: "Lives in remote mountainous and wilderness areas."
  },
  {
    commonName: "Elk",
    scientificName: "Cervus canadensis",
    descriptions: [
      "mammal",
      "large",
      "herbivore",
      "brown",
      "herd animal",
      "antlers",
      "mountain",
      "meadow"
    ],
    facts: [
      "Male elk bugle loudly during the fall rut.",
      "Elk shed and regrow antlers every year.",
      "They migrate seasonally between elevations."
    ],
    image: "images/elk.jpg",
    habitat: "Found in mountain meadows, forests, and valleys."
  },
  {
    commonName: "Yellow-pine Chipmunk",
    scientificName: "Neotamias amoenus",
    descriptions: [
      "mammal",
      "small",
      "chipmunk",
      "striped",
      "fast",
      "ground-dwelling",
      "forest",
      "common"
    ],
    facts: [
      "Chipmunks store food in underground burrows.",
      "They communicate with high-pitched chirps.",
      "They are active during the daytime."
    ],
    image: "images/squirrel.jpg",
    habitat: "Lives in forests, rocky slopes, and wooded areas."
  },
  {
    commonName: "Barn Owl",
    scientificName: "Tyto alba",
    descriptions: [
      "bird",
      "medium",
      "owl",
      "nocturnal",
      "white",
      "silent flight",
      "predator",
      "farmland"
    ],
    facts: [
      "Barn owls have exceptional hearing for hunting in darkness.",
      "They swallow prey whole and regurgitate pellets.",
      "Their heart-shaped face helps focus sound."
    ],
    image: "images/barnowl.jpg",
    habitat: "Found near open fields, farms, and grasslands with nesting structures."
  }

  
];

//HERE IS THE BEGINNING OF MY FUNCTIONS AND STUFF

///////////////////////////////////////////
//         SEARCH BAR & FUNCTION         //
///////////////////////////////////////////

let searchButton = document.querySelector('.search');
//this is saying when you click the button the search function will be ran
searchButton.addEventListener('click', search);

function search(){
  //calls the id of the search bar. .value calls just the value that is inputed
  let speciesQuery = document.querySelector('#search').value;


  let filterSpecies = species.filter(function(animal){
    return(
      //the || is or to allow any of the results to match and not make it so all of them have to match
      animal.commonName.toLowerCase().includes(speciesQuery.toLowerCase()) ||
      //species.descriptions.toLowerCase().includes(speciesQuery.toLowerCase()) ||
      //animal.habitat.toLowerCase().includes(speciesQuery.toLowerCase()) ||
      animal.descriptions.find(descriptions => descriptions.toLowerCase().includes (speciesQuery.toLowerCase()))
      );
  });

  //let sortedSpecies = filterSpecies.sort(compareRecipes);
  //function compareRecipes(a,b){
  //}

  //clear out any previous content
  creatureBox.innerHTML = '';
  
  //output this onto the screen
  filterSpecies.forEach(function(animal){
    showAnimal(animal);
  });
};



///////////////////////////////////////////
//            INNER HTML                  //
///////////////////////////////////////////

function speciesOutline(species){
    return `<div class="species-card">
                <img src="${species.image}" alt="picture of ${species.commonName}">
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