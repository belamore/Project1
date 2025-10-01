let base;
let mouth1, mouth2, mouth3, mouth4;
let eyes1, eyes2, eyes3;
let brows1, brows2, brows3, brows4, brows5;
let hair1, hair2, hair3;
let outfit1, outfit2, outfit3, outfit4;
let item1, item2, item3;
let hand1, hand2;

let mouth_id, eyes_id, brows_id, hair_id, outfit_id, item_id, hand_id;

let bgImages = [];
let currentBgIndex = 0;
let randomizeButton;
let nextPanelButton;

let bgDialogues = [
  [ // bg1 - cafe
    "I'm craving a latte right now.",
    "This is a perfect place to study.",
    "This cafe is so cozy.",
    "I should try the croissants here.",
    "The rain outside is relaxing.",
    "I wonder if they’ll play live music tonight."
  ],
  [ // bg2 - room
    "It's time to go to sleep now.",
    "I need to clean my room and reorganize my closet.",
    "Where did I leave my phone?",
    "I should open a window, it feels hot in here.",
    "I left my journal here somewhere.",
    "Maybe I’ll rearrange my room tomorrow."
  ],
  [ // bg3 - garden
    "This is a great place to take a picture!",
    "I love the smell of the flowers.",
    "the flowers are beautiful, I should take some pictures.",
    "The weather is nice today.",
    "I hear the bees buzzing nearby.",
    "I should've taken my allergy pills."
  ],
  [ // bg4 - beach
    "The sunset looks amazing.",
    "The sea breeze feels nice.",
    "I could stay here forever.",
    "I need to apply some more sunscreen.",
    "The waves sound so calming.",
    "The seashells are so pretty."
  ],
  [ // bg5 - supermarket
    "I need to grab some milk and eggs.",
    "I wonder if there's any discounts.",
    "The checkout line is so long!",
    "I should get some snacks for later.",
    "I hope they have my favorite bread."
  ],
  [ //bg6 - school campus
    "I'm running late to class!",
    "I wonder if any of my friends are on campus right now.",
    "I'm nervous for my exam next class.",
    "I forgot to bring my headphones today!",
    "Where should I eat today?",
  ],
  [ //bg7 - arcade
    "What game should I try next?",
    "I need to buy more tokens!",
    "Nooo I ran out of tokens!",
    "I'm so jealous, they got what I wanted!",
    "I'm going to try this claw machine."
  ]

];

let storyPanels = [];
let currentPanel = 0;


let names = ["Alex", "Mia", "Riley", "Taylor", "Claire", "Sammy", "Lily", "Emilia", "Avery", "Bianca", "Jade", "Kathy", "Penny", "Olive"];
let currentName = "";

function preload() {
  base = loadImage("base.png");

  mouth1 = loadImage("mouth1.png");
  mouth2 = loadImage("mouth2.png");
  mouth3 = loadImage("mouth3.png");
  mouth4 = loadImage("mouth4.png");

  eyes1 = loadImage("eyes1.png");
  eyes2 = loadImage("eyes2.png");
  eyes3 = loadImage("eyes3.png");

  brows1 = loadImage("brows1.png");
  brows2 = loadImage("brows2.png");
  brows3 = loadImage("brows3.png");
  brows4 = loadImage("brows4.png");
  brows5 = loadImage("brows5.png");

  hair1 = loadImage("hair1.png");
  hair2 = loadImage("hair2.png");
  hair3 = loadImage("hair3.png");

  outfit1 = loadImage("outfit1.png");
  outfit2 = loadImage("outfit2.png");
  outfit3 = loadImage("outfit3.png");
  outfit4 = loadImage("outfit4.png");

  item1 = loadImage("item1.png");
  item2 = loadImage("item2.png");
  item3 = loadImage("item3.png");

  hand1 = loadImage("hand1.png");
  hand2 = loadImage("hand2.png");

  bgImages[0] = loadImage("bg1.jpg");
  bgImages[1] = loadImage("bg2.jpg");
  bgImages[2] = loadImage("bg3.jpg");
  bgImages[3] = loadImage("bg4.jpg");
  bgImages[4] = loadImage("bg5.jpg");
  bgImages[5] = loadImage("bg6.jpg");
  bgImages[6] = loadImage("bg7.jpg");
}

function setup() {
  createCanvas(900, 600);

  randomizeButton = createButton('Start New Story');
  randomizeButton.position(width / 2 + 275, height + 90);
  randomizeButton.mousePressed(startStory);

  nextPanelButton = createButton('Next Panel');
  nextPanelButton.position(width / 2 + 530, height - 100);
  nextPanelButton.mousePressed(addPanel);

  startStory();
}

function draw() {
  background(220);

  if (storyPanels.length > 0) {
    let panel = storyPanels[currentPanel];

    image(bgImages[panel.bg], 0, 0, width, height);

    image(base, 150, 0);

    if (panel.hair === 1) image(hair1, 150, 0);
    else if (panel.hair === 2) image(hair2, 150, 0);
    else if (panel.hair === 3) image(hair3, 150, 0);

    if (panel.mouth === 1) image(mouth1, 150, 0);
    else if (panel.mouth === 2) image(mouth2, 150, 0);
    else if (panel.mouth === 3) image(mouth3, 150, 0);
    else if (panel.mouth === 4) image(mouth4, 150, 0);

    if (panel.eyes === 1) image(eyes1, 150, 0);
    else if (panel.eyes === 2) image(eyes2, 150, 0);
    else if (panel.eyes === 3) image(eyes3, 150, 0);

    if (panel.brows === 1) image(brows1, 150, 0);
    else if (panel.brows === 2) image(brows2, 150, 0);
    else if (panel.brows === 3) image(brows3, 150, 0);
    else if (panel.brows === 4) image(brows4, 150, 0);
    else if (panel.brows === 5) image(brows5, 150, 0);

    if (panel.outfit === 1) image(outfit1, 150, 0);
    else if (panel.outfit === 2) image(outfit2, 150, 0);
    else if (panel.outfit === 3) image(outfit3, 150, 0);
    else if (panel.outfit === 4) image(outfit4, 150, 0);

    if (panel.item === 1) image(item1, 150, 0);
    else if (panel.item === 2) image(item2, 150, 0);
    else if (panel.item === 3) image(item3, 150, 0);

    if (panel.hand === 1) image(hand1, 150, 0);
    else if (panel.hand === 2) image(hand2, 150, 0);


    fill(255, 224, 235, 245);
    stroke(255);
    strokeWeight(4);
    rect(80, height - 130, width - 200, 110, 15);
    noStroke();

    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(panel.dialogue, width / 2, height - 90);


    stroke(0);
    strokeWeight(2);
    fill(255);
    rect(100, 420, 150, 40);

    noStroke();
    fill(0);
    textSize(33);
    textAlign(LEFT, CENTER);
    text(currentName, 120, height - 160);
  }
}

function startStory() {
  storyPanels = [];
  createCharacter();
  addPanel();
  currentPanel = 0;


  currentName = random(names);
}

function createCharacter() {
  mouth_id = int(random(1, 5));
  eyes_id = int(random(1, 4));
  brows_id = int(random(1, 6));
  hair_id = int(random(1, 4));
  outfit_id = int(random(1, 5));
  item_id = int(random(1, 4));
  hand_id = int(random(1, 3));
}

function addPanel() {
  currentBgIndex = int(random(bgImages.length));
  let possibleLines = bgDialogues[currentBgIndex];
  let dialogue = random(possibleLines);

  storyPanels.push({
    mouth: mouth_id,
    eyes: eyes_id,
    brows: brows_id,
    hair: hair_id,
    outfit: outfit_id,
    item: item_id,
    hand: hand_id,
    bg: currentBgIndex,
    dialogue: dialogue
  });

  currentPanel = storyPanels.length - 1;
}