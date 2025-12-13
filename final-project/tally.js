
const species = [

  {
    commonName: "Quaking Aspen",
    scientificName: "Populus tremuloides",
    descriptions: ["tree","mdium","white bark","trembling leaves","clonal","mountain","forest","common","green"],
    easeOfFinding: 5,
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
    easeOfFinding: 5,
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
    descriptions: ["wildflowr","yellow","medium","broad leaves","sun-loving","mountain","meadow","spring blooming"],
    easeOfFinding: 4,
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
    descriptions: ["wildflowr","red","parasitic","medium","mountain","bright","summer blooming"],
    easeOfFinding: 3,
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
    easeOfFinding: 5,
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
    easeOfFinding: 3,
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
    descriptions: ["bird","rptor","medium-large","brown","flying","common","bird of prey"],
    easeOfFinding: 5,
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
    descriptions: ["bird","mdium","black and white","social","urban","intelligent"],
    easeOfFinding: 5,
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
    descriptions: ["bird","sall","black and white","songbird","forest","common","backyard"],
    easeOfFinding: 5,
    facts: [
      "Chickadees hide seeds and remember thousands of locations.",
      "Their 'chick-a-dee-dee' call varies depending on danger level.",
      "They survive cold nights by lowering their body temperature."
    ],
    image: "",
    habitat: "Common in forests, parks, and backyard feeders."
  },
  {
    commonName: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    descriptions: ["insect","bug","butterfly","orange","black","small","flying","migratory","meadow"],
    easeOfFinding: 3,
    facts: [
      "Monarchs migrate thousands of miles to Mexico every year.",
      "Their caterpillars feed only on milkweed.",
      "They are toxic to predators due to milkweed chemicals."
    ],
    image: "",
    habitat: "Found in meadows, gardens, and milkweed-rich fields."
  },
  {
    commonName: "Honeybee",
    scientificName: "Apis mellifera",
    descriptions: ["insect","bug","bee","small","striped","flying","pollinator","social","yellow","black"],
    easeOfFinding: 5,
    facts: [
      "Honeybees use the 'waggle dance' to communicate food locations.",
      "They live in colonies with tens of thousands of workers.",
      "They pollinate a huge portion of human food crops."
    ],
    image: "",
    habitat: "Seen around flowers, gardens, farms, and meadows."
  },
  {
    commonName: "Boxelder Bug",
    scientificName: "Boisea trivittata",
    descriptions: ["insect","bug","small","black","red","flying","cluster-forming","urban","common"],
    easeOfFinding: 5,
    facts: [
      "Boxelder bugs gather in large groups on warm walls during fall.",
      "They feed on boxelder, maple, and ash tree seeds.",
      "They do not damage houses or bite."
    ],
    image: "",
    habitat: "Common around boxelder and maple trees, especially in warm fall weather."
  },
  {
    commonName: "Ladybug",
    scientificName: "Coccinellidae",
    descriptions: ["insect","bug","beetle","small","red","black spots","flying","garden","meadow"],
    easeOfFinding: 5,
    facts: [
      "Ladybugs are major predators of aphids.",
      "Some species gather indoors to overwinter.",
      "Their bright colors warn predators of toxic chemicals."
    ],
    image: "",
    habitat: "Found in gardens, meadows, forests, and agricultural fields."
  },
  {
    commonName: "Two-striped Grasshopper",
    scientificName: "Melanoplus bivittatus",
    descriptions: ["insect","bug","grasshopper","medium","brown","jumping","meadow","farm","common"],
    easeOfFinding: 5,
    facts: [
      "One of the most common grasshoppers in the western U.S.",
      "Can cause crop damage in large swarms.",
      "Feeds on grasses and leafy plants."
    ],
    image: "",
    habitat: "Found in grasslands, fields, and open dry areas."
  },
  {
    commonName: "Blue Dasher Dragonfly",
    scientificName: "Pachydiplax longipennis",
    descriptions: ["insect","bug","dragonfly","small","blue","flying","wetland","pond","predator"],
    easeOfFinding: 4,
    facts: [
      "Dragonflies are powerful aerial hunters.",
      "Blue Dashers perch on reeds and patrol small ponds.",
      "Their larvae live underwater."
    ],
    image: "",
    habitat: "Seen around ponds, marshes, and still water."
  },

  // --- New Birds Section ---
  {
    commonName: "American Robin",
    scientificName: "Turdus migratorius",
    descriptions: ["bird","mdium","brown","orange breast","songbird","common","forest","suburban","flying"],
    easeOfFinding: 5,
    facts: [
      "Robins are known for their early spring song and bright orange breast.",
      "They primarily eat worms, insects, and berries.",
      "They often forage on lawns and gardens."
    ],
    image: "",
    habitat: "Found in forests, fields, suburban yards, and parks."
  },
  {
    commonName: "Mountain Bluebird",
    scientificName: "Sialia currucoides",
    descriptions: ["bird","sall","blue","songbird","open country","flying","common","meadow"],
    easeOfFinding: 4,
    facts: [
      "Males are bright blue, females are grayish-blue.",
      "They primarily eat insects and some berries.",
      "They nest in cavities or bird boxes in open landscapes."
    ],
    image: "",
    habitat: "Found in open meadows, sagebrush plains, and foothills."
  },
  {
    commonName: "Yellow-rumped Warbler",
    scientificName: "Setophaga coronata",
    descriptions: ["bird","sall","yellow","gray","songbird","forest","migratory","flying","common"],
    easeOfFinding: 4,
    facts: [
      "Named for the distinctive yellow patch on their rump.",
      "They migrate long distances between breeding and wintering grounds.",
      "Eat insects and berries."
    ],
    image: "",
    habitat: "Found in forests, riparian zones, and open woods during migration."
  },
  {
    commonName: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    descriptions: ["bird","lrge","raptor","white head","brown body","flying","predator","water"],
    easeOfFinding: 3,
    facts: [
      "Bald eagles feed mainly on fish and are strong flyers.",
      "They build massive nests called eyries.",
      "They mate for life and return to the same nesting site annually."
    ],
    image: "",
    habitat: "Found near rivers, lakes, and wetlands with tall trees."
  },
  {
    commonName: "Great Horned Owl",
    scientificName: "Bubo virginianus",
    descriptions: ["bird","lrge","nocturnal","raptor","brown","forest","solitary","flying"],
    easeOfFinding: 2,
    facts: [
      "They are powerful nocturnal hunters with silent flight.",
      "Eat mammals, birds, and reptiles.",
      "They have tufts of feathers resembling 'horns'."
    ],
    image: "",
    habitat: "Found in forests, deserts, and urban parks."
  },
  {
    commonName: "Red-winged Blackbird",
    scientificName: "Agelaius phoeniceus",
    descriptions: ["bird","sall","black","red shoulders","songbird","marsh","flying","common"],
    easeOfFinding: 5,
    facts: [
      "Males have bright red and yellow shoulder patches.",
      "They are highly social and form large flocks.",
      "They nest in marshes and wetlands."
    ],
    image: "images/redwinged_blackbird.jpg",
    habitat: "Found in marshes, wetlands, and open fields."
  },
  {
    commonName: "Canada Goose",
    scientificName: "Branta canadensis",
    descriptions: ["bird","lrge","waterfowl","long neck","migratory","flying","common"],
    easeOfFinding: 5,
    facts: [
      "Canada geese migrate long distances twice a year.",
      "They often form large flocks in lakes, rivers, and ponds.",
      "They feed mainly on grasses and aquatic plants."
    ],
    image: "",
    habitat: "Found near lakes, rivers, wetlands, and open fields."
  },
  {
    commonName: "Mallard Duck",
    scientificName: "Anas platyrhynchos",
    descriptions: ["bird","mdium","waterfowl","duck","flying","common","pond","river"],
    easeOfFinding: 5,
    facts: [
      "Mallards are the most common wild duck in North America.",
      "Males have bright green heads while females are mottled brown.",
      "They feed on aquatic plants, insects, and small fish."
    ],
    image: "",
    habitat: "Found in ponds, lakes, rivers, marshes, and urban parks."
  },
  {
    commonName: "Wood Duck",
    scientificName: "Aix sponsa",
    descriptions: ["bird","mdium","colorful","waterfowl","duck","flying","common"],
    easeOfFinding: 4,
    facts: [
      "Wood ducks nest in tree cavities near water.",
      "They are highly colorful, with males showing iridescent plumage.",
      "They feed on seeds, fruits, and insects."
    ],
    image: "",
    habitat: "Found in wooded swamps, rivers, ponds, and wetland forests."
  }
]

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
                <img src="${species.image}" alt="picture of ${species.commonNamename}">
                <div class="species-details">
                    <h2 class="amatic-sc-bold">${species.commonName}</h2>
                    <p>${species.description}</p>
                </div>
            </div>`
};

function showAnimal(species) {
    let html = recipeOutline(species);
    recipeBox.innerHTML += html
};


///////////////////////////////////////////
//                             //
///////////////////////////////////////////




///////////////////////////////////////////
//                            //
///////////////////////////////////////////