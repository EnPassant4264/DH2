export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	melmetal: {
		inherit: true,
		name: "Melmetal",
		num: -1,
		types: ["Steel"],
		baseStats: {hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34},
		abilities: {0: "What the Sigma", H: "Iron Fist"},
	},
	ninjask: {
		inherit: true,
		gen: 3,
		copen: true,
		name: "Ninjask",
		num: -2,
		types: ["Bug", "Flying"],
		baseStats: {hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160},
		abilities: {0: "Ultra Luck", 1: "Speed Boost", H: "Infiltrator"},
	},
	toxapex: {
		inherit: true,
		name: "Toxapex",
		num: -3,
		fish: true,
		types: ["Poison", "Water"],
		baseStats: {hp: 152, atk: 142, def: 53, spa: 50, spd: 63, spe: 35},
		abilities: {0: "Merciless", 1: "Gex Server", H: "Degenerator"},
	},
	silcoon: {
		inherit: true,
		gen: 3,
		name: "Silcoon",
		num: -4,
		fish: true,
		types: ["Ground", "Flying"],
		baseStats: {hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91},
		abilities: {0: "Intimidate", 1: "just the birds", H: "toxic masculinity"},
		evos: null,
	},
	togedemaru: {
		inherit: true,
		name: "Togedemaru",
		num: -5,
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 50, def: 100, spa: 50, spd: 100, spe: 133},
		abilities: {0: "Iron Barbs", 1: "Lightning Rod", H: "Benevolent Blessing"},
	},
	bramblin: {
		inherit: true,
		name: "Bramblin",
		num: -6,
		types: ["Grass", "Ghost"],
		baseStats: {hp: 75, atk: 125, def: 60, spa: 75, spd: 70, spe: 120},
		abilities: {0: "Wind Rider", 1: "!dt air slash", H: "Infiltrator"},
		evos: null,
	},
	anarlvet: {
		name: "Anarlvet",
		num: -7,
		diamondHand: true,
		gender: "M",
		types: ["Dark"],
		baseStats: {hp: 94, atk: 113, def: 73, spa: 98, spd: 65, spe: 132},
		abilities: {0: "Auctor Wile"},
		weightkg: 226.2,
	},
	gholdengo: {
		inherit: true,
		name: "Gholdengo",
		num: -8,
		types: ["Ghost", "Silly"],
		baseStats: {hp: 100, atk: 60, def: 90, spa: 125, spd: 90, spe: 110},
		abilities: {0: "Alpha Sigma Rizz"},
	},
	kingler: {
		inherit: true,
		name: "Kingler",
		num: -9,
		fish: true,
		types: ["Water"],
		baseStats: {hp: 70, atk: 130, def: 130, spa: 50, spd: 70, spe: 50},
		abilities: {0: "Carcinization", 1: "Shell Armor", H: "Tough Claws"},
	},
	kinglermega: {
		name: "Kingler-Mega",
		num: -10,
		baseSpecies: "Kingler",
		forme: "Mega",
		fish: true,
		types: ["Water", "Steel"],
		baseStats: {hp: 72, atk: 132, def: 212, spa: 62, spd: 102, spe: 32},
		abilities: {0: "Sckckckckeptic"},
		requiredItem: "Kinglerite",
		weightkg: 140.0,
	},
	feebas: {
		inherit: true,
		gen: 3,
		name: "Feebas",
		num: -11,
		fish: true,
		types: ["Water"],
		baseStats: {hp: 20, atk: 25, def: 20, spa: 10, spd: 55, spe: 80},
		abilities: {0: "Swift Swim", 1: "Oblivious", H: "Adaptability"},
	},
	microwave: {
		name: "microwave",
		num: -12,
		types: ["Fire", "Steel", "Electric"],
		baseStats: {hp: 51, atk: 89, def: 121, spa: 113, spd: 177, spe: 49},
		abilities: {0: "Lightning Rod", 1: "Parting Gift", H: "Transistor"},
		weightkg: 150.0,
	},
	glaceon: {
		inherit: true,
		name: "Glaceon",
		num: -13,
		types: ["Ice"],
		baseStats: {hp: 85, atk: 60, def: 110, spa: 130, spd: 95, spe: 65},
		abilities: {0: "Perfectionist", 1: "MILF", H: "Ice Body"},
		weightkg: 25.9,
	},
	lytlegai: {
		name: "Lytlegai",
		num: -14,
		types: ["Steel", "Fairy"],
		baseStats: {hp: 60, atk: 115, def: 75, spa: 60, spd: 85, spe: 85},
		abilities: {0: "Just a Little Guy"},
		weightkg: 30.0,
	},
	sylveon: {
		inherit: true,
		name: "Sylveon",
		trans: true,
		num: -15,
		types: ["Fairy"],
		baseStats: {hp: 60, atk: 130, def: 110, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Gex Server", 1: "MILF", H: "Pixilate"},
	},
	ohmyrod: {
		name: "Ohmyrod",
		num: -16,
		fish: true,
		types: ["Water", "Grass"],
		baseStats: {hp: 75, atk: 130, def: 134, spa: 95, spd: 86, spe: 45},
		abilities: {0: "Water Absorb", 1: "Sckckckckeptic", H: "Innings Out"},
		weightkg: 96.9,
	},
	celesteela: {
		inherit: true,
		name: "Celesteela",
		num: -17,
		types: ["Steel", "Dragon"],
		baseStats: {hp: 107, atk: 101, def: 103, spa: 107, spd: 101, spe: 71},
		abilities: {0: "Levitate", H: "Compound Eyes"},
		weightkg: 999.9,
	},
	bigcrammer: {
		name: "Big Crammer",
		num: -18,
		fish: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 89, atk: 93, def: 69, spa: 119, spd: 111, spe: 109},
		abilities: {0: "Protostasis"},
		weightkg: 36.0,
		tags: ["Paradox"],
	},
	archeops: {
		inherit: true,
		name: "Archeops",
		num: -19,
		types: ["Ghost", "Steel"],
		baseStats: {hp: 85, atk: 110, def: 65, spa: 95, spd: 95, spe: 130},
		abilities: {0: "Armor Tail", 1: "Iron Barbs", H: "Chained Wrath"},
	},
	runerigus: {
		inherit: true,
		name: "Runerigus",
		num: -20,
		types: ["Ground", "Ghost"],
		baseStats: {hp: 85, atk: 100, def: 120, spa: 80, spd: 80, spe: 70},
		abilities: {0: "Wandering Spirit", H: "Neutralizing Gas"},
		weightkg: 66.6,
	},
	crabominable: {
		inherit: true,
		name: "Crabominable",
		num: -21,
		fish: true,
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 87, atk: 112, def: 57, spa: 62, spd: 117, spe: 93},
		abilities: {0: "Anger Shell", 1: "Iron Fist", H: "Unseen Fist"},
		weightkg: 180.0,
	},
	samurottsinnoh: {
		name: "Samurott-Sinnoh",
		num: -22,
		fish: true,
		trans: true,
		types: ["Fire", "Dark"],
		baseStats: {hp: 80, atk: 105, def: 80, spa: 70, spd: 75, spe: 115},
		abilities: {0: "Blaze", H: "Sharpness"},
		weightkg: 90.6,
	},
	wyrdeer: {
		inherit: true,
		name: "Wyrdeer",
		num: -23,
		types: ["Normal", "Psychic"],
		baseStats: {hp: 110, atk: 105, def: 72, spa: 105, spd: 75, spe: 85},
		abilities: {0: "Intimidate", 1: "MILF", H: "Sap Sipper", S: "Psychic Surge"},
	},
	goomba: {
		name: "Goomba",
		num: -24,
		trans: true,
		types: ["Poison", "Normal"],
		baseStats: {hp: 80, atk: 95, def: 80, spa: 95, spd: 80, spe: 55},
		abilities: {0: "Strong Jaw", 1: "Innings Out", H: "Sheer Force", S: "Intimidate"},
		weightkg: 138.0,
	},
	fridgile: {
		name: "Fridgile",
		num: -25,
		types: ["Ice", "Rock"],
		baseStats: {hp: 255, atk: 35, def: 45, spa: 75, spd: 45, spe: 100},
		abilities: {0: "Snow Warning", 1: "Sand Stream", H: "Innings Out"},
		weightkg: 1.0,
	},
	zaciancrowned: {
		inherit: true,
		forme: null,
		requiredItem: null,
		battleOnly: null,
		name: "Zacian-Crowned",
		trans: true,
		num: -26,
		abilities: {0: "Stall", H: "Identity Crisis"},	
	},
	
	melmetal2: {
		name: "Melmetal 2",
		num: -27,
		types: ["Steel"],
		baseStats: {hp: 135, atk: 144, def: 144, spa: 80, spd: 65, spe: 34},
		abilities: {0: "Iron Fist", H: "Gex Server"},
		weightkg: 802.0,
	},
	pidown: {
		name: "Pidown",
		num: -28,
		types: ["Fighting", "Poison"],
		baseStats: {hp: 130, atk: 125, def: 100, spa: 40, spd: 90, spe: 45},
		abilities: {0: "Guts", 1: "Gluttony", H: "Mold Breaker"},
		weightkg: 102.9,
	},
	silvally: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
		otherFormes: ["Silvally-Bug", "Silvally-Dark", "Silvally-Dragon", "Silvally-Electric", "Silvally-Fairy", "Silvally-Fighting", "Silvally-Fire", "Silvally-Flying", "Silvally-Ghost", "Silvally-Grass", "Silvally-Ground", "Silvally-Ice", "Silvally-Lemon", "Silvally-Poison", "Silvally-Psychic", "Silvally-Rock", "Silvally-Silly", "Silvally-Steel", "Silvally-Water"],
		formeOrder: [
			"Silvally", "Silvally-Fighting", "Silvally-Flying", "Silvally-Poison", "Silvally-Ground", "Silvally-Rock", "Silvally-Bug", "Silvally-Ghost", "Silvally-Steel",
			"Silvally-Fire", "Silvally-Water", "Silvally-Grass", "Silvally-Electric", "Silvally-Psychic", "Silvally-Ice", "Silvally-Dragon", "Silvally-Dark", "Silvally-Fairy", "Silvally-Lemon", "Silvally-Silly",
		],
	},
	vivillonplainshigh: {
		name: "Vivillon-Plains-High",
		num: -29,
		baseSpecies: "Vivillon",
		forme: "Plains-High",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 73, atk: 79, def: 75, spa: 104, spd: 104, spe: 106},
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Natural Cure"},
		weightkg: 17.0,
	},
	moltres: {
		inherit: true,
		name: "Moltres",
		num: -30,
		types: ["Fire", "Flying"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
		abilities: {0: "Pressure", 1: "just the birds", H: "Flame Body"},
		weightkg: 60.0,
	},
	kurayami: {
		name: "Kurayami",
		num: -31,
		types: ["Dark"],
		baseStats: {hp: 85, atk: 100, def: 95, spa: 110, spd: 95, spe: 95},
		abilities: {0: "Magic Guard", H: "Dark Aura"},
		weightkg: 999.7,
	},
	hitmontop: {
		inherit: true,
		name: "Hitmontop",
		num: -32,
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 115, def: 65, spa: 35, spd: 145, spe: 50},
		abilities: {0: "Intimidate", 1: "Technician", H: "Sckckckckeptic"},
		weightkg: 48.0,
	},
	zelda: {
		name: "Zelda",
		trans: true,
		num: -33,
		types: ["Fighting", "Flying"],
		baseStats: {hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 100},
		abilities: {0: "Sniper", 1: "MILF", H: "Stamina"},
		weightkg: 70.0,
	},
	cascoon: {
		inherit: true,
		gen: 3,
		name: "Cascoon",
		num: -34,
		types: ["Bug", "Fairy"],
		baseStats: {hp: 105, atk: 65, def: 115, spa: 85, spd: 95, spe: 25},
		abilities: {0: "Shed Skin", 1: "Unaware", H: "Magic Guard"},
		evos: null,
	},
	sentret: {
		inherit: true,
		name: "Sentret",
		num: -35,
		types: ["Normal"],
		baseStats: {hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20},
		abilities: {0: "Run Away", 1: "Parting Gift", H: "Frisk"},
	},
	drigike: {
		name: "Drigike",
		copen: true,
		num: -36,
		types: ["Rock"],
		baseStats: {hp: 65, atk: 80, def: 60, spa: 135, spd: 65, spe: 80},
		abilities: {0: "Crossover", 1: "Lightning Rod", H: "Storm Drain"},
		weightkg: 445.0,
	},
	phish: {
		name: "Phish",
		num: -37,
		fish: true,
		types: ["Ghost", "Electric"],
		baseStats: {hp: 52, atk: 123, def: 104, spa: 111, spd: 104, spe: 87},
		abilities: {0: "Illusion", 1: "Imposter", H: "Good as Gold"},
		weightkg: 69.0,
	},
	smelmetal: {
		name: "Smelmetal",
		num: -38,
		types: ["Steel", "Silly"],
		baseStats: {hp: 97, atk: 99, def: 144, spa: 77, spd: 107, spe: 37},
		abilities: {0: "Iron Nose"},
		weightkg: 570.0,
	},
	starmie: {
		inherit: true,
		name: "Starmie",
		num: -39,
		fish: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 60, atk: 85, def: 90, spa: 115, spd: 110, spe: 115},
		abilities: {0: "Illuminate", 1: "Natural Cure", H: "Analytic"},
		weightkg: 80.0,
	},
	victreebel: {
		inherit: true,
		name: "Victreebel",
		num: -40,
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 125, def: 115, spa: 60, spd: 115, spe: 60},
		abilities: {0: "Fly Eater", H: "Gluttony"},
		weightkg: 15.5,
	},
	bondra: {
		name: "Bondra",
		copen: true,
		num: -41,
		types: ["Grass", "Fire"],
		baseStats: {hp: 103, atk: 113, def: 93, spa: 43, spd: 93, spe: 113},
		abilities: {0: "Strong Jaw", 1: "Hustle", H: "Chlorophyll"},
		weightkg: 312.0,
	},
	tangetteeternal: {
		name: "Tangette-Eternal",
		num: -42,
		types: ["Grass", "Fairy"],
		baseStats: {hp: 90, atk: 85, def: 100, spa: 120, spd: 90, spe: 75},
		abilities: {0: "Growth Veil"},
		weightkg: 64.75,
	},
	donmigo: {
		name: "Donmigo",
		num: -43,
		types: ["Ground", "Flying"],
		baseStats: {hp: 90, atk: 120, def: 100, spa: 70, spd: 70, spe: 70},
		abilities: {0: "just the birds", H: "Bravery"},
		weightkg: 78.5,
	},
	dragoone: {
		name: "Dragoone",
		num: -44,
		types: ["Normal", "Dragon"],
		baseStats: {hp: 88, atk: 97, def: 50, spa: 78, spd: 175, spe: 78},
		abilities: {0: "Snakewood"},
		weightkg: 206.5,
	},
	collachet: {
		name: "Collachet",
		num: -45,
		diamondHand: true,
		gender: "M",
		types: ["Fighting"],
		baseStats: {hp: 102, atk: 148, def: 113, spa: 80, spd: 78, spe: 54},
		abilities: {0: "toxic masculinity", 1: "Intimidate", H: "Parting Gift"},
		weightkg: 538.3,
	},
	guiltrism: {
		name: "Guiltrism",
		num: -46,
		diamondHand: true,
		gender: "M",
		types: ["Flying"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 100},
		abilities: {0: "just the birds", H: "Prism Wings"},
		weightkg: 77.2,
	},
	swampert: {
		inherit: true,
		name: "Swampert",
		num: -47,
		fish: true,
		gen: 3,
		types: ["Water", "Ground"],
		baseStats: {hp: 100, atk: 110, def: 90, spa: 75, spd: 90, spe: 60},
		abilities: {0: "Torrent", H: "Steel Drummer"},
		weightkg: 81.9,
	},
	swooliobat: {
		name: "Swooliobat",
		num: -48,
		types: ["Psychic", "Flying"],
		baseStats: {hp: 97, atk: 57, def: 105, spa: 107, spd: 105, spe: 64},
		abilities: {0: "Unaware", 1: "Klutz", H: "Prankster"},
		weightkg: 325.5,
	},
	electrode: {
		inherit: true,
		name: "Electrode",
		num: -49,
		types: ["Electric"],
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "What the Sigma", 1: "Static", H: "Aftermath"},
	},
	electrodemega: {
		name: "Electrode-Mega",
		num: -50,
		baseSpecies: "Electrode",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 52, atk: 52, def: 52, spa: 152, spd: 52, spe: 242},
		abilities: {0: "Time Bomb"},
		weightkg: 133.2,
	},
	mariokartwii: {
		name: "Mario Kart Wii",
		num: -51,
		types: ["Steel"],
		baseStats: {hp: 100, atk: 80, def: 100, spa: 70, spd: 40, spe: 135},
		abilities: {0: "Gorilla Tactics"},
		weightkg: 1.0,
	},
	impalpitoad: {
		name: "Impalpitoad",
		num: -52,
		fish: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69},
		abilities: {0: "MILF", H: "Impalpable"},
	},
	scrubby: {
		name: "Scrubby",
		num: -53,
		fish: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 110, atk: 60, def: 75, spa: 125, spd: 90, spe: 90},
		abilities: {0: "Quick Feet", 1: "What the Sigma", H: "Screen Cleaner"},
		weightkg: 0.1,
	},
	palpitoadissocool: {
		name: "palpitoad is so cool",
		num: -54,
		fish: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 120, atk: 100, def: 85, spa: 100, spd: 85, spe: 70},
		abilities: {0: "MILF", H: "champion"},
	},
	spewpa: {
		inherit: true,
		name: "Spewpa",
		num: -55,
		types: ["Bug", "Ghost"],
		baseStats: {hp: 70, atk: 50, def: 120, spa: 110, spd: 120, spe: 30},
		abilities: {0: "Shed Skin", 1: "Perish Body", H: "Magic Bounce"},
		evos: null,
	},
	
	moltresmega: {
		name: "Moltres-Mega",
		num: -56,
		baseSpecies: "Moltres",
		forme: "Mega",
		types: ["Fire", "Flying"],
		baseStats: {hp: 92, atk: 127, def: 102, spa: 162, spd: 102, spe: 107},
		abilities: {0: "Magic Bounce"},
		weightkg: 70.0,
		requiredItem: "Moltresite",
	},
	jirachitwo: {
		name: "Jirachitwo",
		num: -57,
		gen: 3,
		types: ["Psychic", "Ground"],
		baseStats: {hp: 95, atk: 95, def: 100, spa: 95, spd: 100, spe: 70},
		abilities: {0: "Benevolent Blessing"},
		weightkg: 5.0,
	},
	shinxfishing: {
		name: "Shinx-Fishing",
		num: -58,
		fish: true,
		types: ["Electric"],
		baseStats: {hp: 46, atk: 66, def: 35, spa: 41, spd: 35, spe: 46},
		abilities: {0: "Fishercat", 1: "toxic masculinity", H: "Guts"},
		weightkg: 9.5,
	},
	conquescape: {
		name: "Conquescape",
		num: -59,
		diamondHand: true,
		gender: "N",
		types: ["Ice"],
		baseStats: {hp: 115, atk: 25, def: 74, spa: 86, spd: 220, spe: 75},
		abilities: {0: "Frozen Landscape"},
		weightkg: 999.9,
	},
	daiyafia: {
		name: "Daiyafia",
		num: -60,
		diamondHand: true,
		gender: "M",
		types: ["Normal"],
		baseStats: {hp: 125, atk: 100, def: 100, spa: 100, spd: 100, spe: 50},
		abilities: {0: "What the Sigma", H: "The Diamond Hand"},
		weightkg: 999.9,
	},
	metapod: {
		inherit: true,
		name: "Metapod",
		num: -61,
		types: ["Bug", "Grass"],
		baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
		abilities: {0: "Shed Skin", 1: "Multiscale", H: "Grassy Surge"},
		weightkg: 9.9,
		evos: null,
	},
	kakuna: {
		inherit: true,
		name: "Kakuna",
		num: -62,
		types: ["Bug", "Poison"],
		baseStats: {hp: 100, atk: 120, def: 100, spa: 80, spd: 100, spe: 100},
		abilities: {0: "Shed Skin", 1: "Sharpness", H: "Tinted Lens"},
		weightkg: 10.0,
		evos: null,
	},
	enamorustherian: {
		inherit: true,
		name: "Enamorus-Therian",
		num: -63,
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 74, atk: 105, def: 110, spa: 135, spd: 100, spe: 46},
		abilities: {0: "Overcoat", H: "Gex Server"},
		weightkg: 48.0,
	},
	pokestarfisherman: {
		name: "Pokestar Fisherman",
		num: -64,
		fish: true,
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Sckckckckeptic", H: "I Love Fishing"},
		weightkg: 100.0,
	},
	magnegiri: {
		name: "Magnegiri",
		num: -65,
		fish: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 70, atk: 60, def: 90, spa: 125, spd: 95, spe: 80},
		abilities: {0: "Magnetic Storm"},
		weightkg: 94.0,
	},
	mario: {
		name: "mario",
		num: -66,
		types: ["Ghost", "Steel"],
		baseStats: {hp: 104, atk: 44, def: 104, spa: 104, spd: 44, spe: 44},
		abilities: {0: "Stall", 1: "Cursed Body", H: "Mega Launcher"},
	},
	contamicow: {
		name: "Contamicow",
		copen: true,
		num: -67,
		types: ["Dark", "Poison"],
		baseStats: {hp: 80, atk: 110, def: 73, spa: 73, spd: 120, spe: 79},
		abilities: {0: "Sheer Force", 1: "Strong Jaw", H: "Cud Chew"},
	},
	whonhef: {
		name: "Whonhef",
		copen: true,
		num: -68,
		types: ["Normal", "Fighting"],
		baseStats: {hp: 80, atk: 110, def: 73, spa: 73, spd: 120, spe: 79},
		abilities: {0: "Sharpness", 1: "Berserk", H: "Hyper Cutter"},
	},
	fishfactory: {
		name: "Fish Factory",
		num: -69,
		fish: true,
		types: ["Steel", "Fire"],
		baseStats: {hp: 120, atk: 40, def: 100, spa: 90, spd: 90, spe: 60},
		abilities: {0: "White Smoke", 1: "MILF", H: "Flash Fire"},
		weightkg: 999.0,
	},
	cowboybandido: {
		name: "cowboy_bandido",
		num: -70,
		types: ["Dark", "Fighting"],
		baseStats: {hp: 100, atk: 135, def: 120, spa: 70, spd: 95, spe: 80},
		abilities: {0: "Sand Rush", 1: "What the Sigma", H: "River Thief"},
		weightkg: 58.0,
	},
	basculinbluestriped: {
		inherit: true,
		name: "Basculin-Blue-Striped",
		num: -71,
		fish: true,
		types: ["Water"],
		baseStats: {hp: 85, atk: 92, def: 95, spa: 90, spd: 95, spe: 98},
		abilities: {0: "Rock Head", 1: "Adaptability", H: "Fishy Surge"},
		weightkg: 18.0,
	},
	pokestargiant: {
		inherit: true,
		name: "Pokestar Giant",
		num: -72,
		types: ["Normal"],
		baseStats: {hp: 150, atk: 100, def: 80, spa: 100, spd: 80, spe: 60},
		abilities: {0: "Supreme Overlord", 1: "Pressure", H: "Big Lady"},
		weightkg: 999.0,
	},
	richardpetty: {
		name: "Richard Petty",
		num: -73,
		types: ["Normal"],
		baseStats: {hp: 43, atk: 43, def: 43, spa: 43, spd: 43, spe: 200},
		abilities: {0: "Speed Boost", H: "Steely Spirit"},
		weightkg: 60.0,
	},
	impidimp: {
		inherit: true,
		name: "Impidimp",
		num: -74,
		types: ["Fairy", "Dark"],
		baseStats: {hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50},
		abilities: {0: "Prankster", 1: "Frisk", H: "Pickpocket"},
		weightkg: 5.5,
	},
	impidimpmega: {
		name: "Impidimp-Mega",
		num: -75,
		baseSpecies: "Impidimp",
		forme: "Mega",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 47, atk: 87, def: 42, spa: 37, spd: 52, spe: 112},
		abilities: {0: "Pure Power"},
		weightkg: 5.5,
		requiredItem: "Impidimpite",
	},
	lemon: {
		name: "Lemon",
		num: -76,
		types: ["Lemon"],
		baseStats: {hp: 70, atk: 75, def: 90, spa: 107, spd: 120, spe: 55},
		abilities: {0: "Mold Breaker", 1: "Ripen", H: "Acidic Drizzle"},
		weightkg: 0.1,
	},
	fishingzombie: {
		name: "Fishing Zombie",
		num: -77,
		fish: true,
		types: ["Ghost", "Water"],
		baseStats: {hp: 110, atk: 85, def: 110, spa: 90, spd: 80, spe: 5},
		abilities: {0: "PVZ Fishing", H: "Damp"},
		weightkg: 4.8,
	},
	pokestarmt: {
		name: "Pokestar MT",
		num: -78,
		types: ["Steel"],
		baseStats: {hp: 105, atk: 103, def: 105, spa: 100, spd: 97, spe: 90},
		abilities: {0: "Analytic", H: "Kaiju Killer"},
		weightkg: 999.0,
	},
	margaretthatcher: {
		name: "Margaret Thatcher",
		num: -79,
		types: ["Normal", "Poison"],
		baseStats: {hp: 120, atk: 80, def: 90, spa: 80, spd: 70, spe: 69},
		abilities: {0: "Poison Puppeteer", 1: "Gex Server", H: "Iron Lady"},
		weightkg: 81.0,
	},
	fleshvaliant: {
		name: "Flesh Valiant",
		num: -80,
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 70, atk: 105, def: 85, spa: 95, spd: 115, spe: 80},
		abilities: {0: "Skill Issue"},
		weightkg: 50.0,
	},
	fleshvaliantmega: {
		name: "Flesh Valiant-Mega",
		num: -81,
		baseSpecies: "Flesh Valiant",
		forme: "Mega",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 72, atk: 137, def: 67, spa: 137, spd: 137, spe: 112},
		abilities: {0: "Mystic Slicer"},
		weightkg: 50.0,
		requiredItem: "Fleshvaliantite",
	},
	abomasnow: {
		inherit: true,
		name: "Abomasnow",
		num: -82,
		types: ["Ice", "Grass"],
		baseStats: {hp: 108, atk: 78, def: 72, spa: 112, spd: 108, spe: 47},
		abilities: {0: "Snow Warning", 1: "Aboma Care", H: "Sckckckckeptic"},
		weightkg: 135.5,
	},
	komala: {
		inherit: true,
		name: "Komala",
		num: -83,
		types: ["Normal"],
		baseStats: {hp: 65, atk: 115, def: 65, spa: 75, spd: 95, spe: 65},
		abilities: {0: "Sckckckckeptic", H: "Bramblin Mentality"},
		weightkg: 19.9,
	},
	inkay: {
		inherit: true,
		fish: true,
	},

	silvallybug: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallydark: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallydragon: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyelectric: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyfairy: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyfighting: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyfire: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyflying: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyghost: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallygrass: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyground: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyice: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallypoison: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallypsychic: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallyrock: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallysteel: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallywater: {
		inherit: true,
		num: 773,
		fish: true,
		abilities: {0: "Stall", H: "RKS System"},
	},
	silvallylemon: {
		name: "Silvally-Lemon",
		baseSpecies: "Silvally",
		forme: "Lemon",
		types: ["Lemon"],
		num: 773,
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Stall", H: "RKS System"},
		requiredItem: "Lemon Memory",
		changesFrom: "Silvally",
	},
	ronaldreagan: {
		name: "Ronald Reagan",
		num: -85,
		types: ["Fire", "Dark"],
		baseStats: {hp: 125, atk: 85, def: 90, spa: 105, spd: 95, spe: 60},
		abilities: {0: "Reaganomics"},
		weightkg: 83.0,
	},
	limelips: {
		name: "Lime Lips",
		num: -86,
		types: ["Lemon", "Fairy"],
		baseStats: {hp: 80, atk: 110, def: 70, spa: 90, spd: 70, spe: 110},
		abilities: {0: "Dazzling", H: "Strong Jaw"},
		weightkg: 123.4,
	},
	lemotic: {
		name: "Lemotic",
		num: -87,
		types: ["Lemon", "Ghost"],
		baseStats: {hp: 139, atk: 146, def: 57, spa: 115, spd: 71, spe: 72},
		abilities: {0: "Minus", 1: "Mega Launcher", H: "Perish Body"},
		weightkg: 150.0,
	},
	zestii: {
		name: "Zestii",
		num: -88,
		diamondHand: true,
		gender: "F",
		types: ["Lemon"],
		baseStats: {hp: 80, atk: 65, def: 90, spa: 120, spd: 125, spe: 95},
		abilities: {0: "Lemon Squeezy"},
		weightkg: 44.6,
	},
	sunflora: {
		inherit: true,
		name: "Sunflora",
		num: -89,
		types: ["Grass", "Fire"],
		baseStats: {hp: 85, atk: 110, def: 75, spa: 110, spd: 110, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Drought"},
		weightkg: 8.5,
	},
	rawringmoon: {
		name: "Rawring Moon",
		num: -90,
		types: ["Dragon", "Silly"],
		baseStats: {hp: 105, atk: 129, def: 71, spa: 55, spd: 101, spe: 109},
		abilities: {0: "just the birds", H: "Protosynthesis"},
		weightkg: 360.0,
	},
	boogerponclownerstone: {
		name: "Boogerpon-CLOWNerstone",
		num: -91,
		types: ["Grass", "Silly"],
		baseStats: {hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110},
		abilities: {0: "Get Silly"},
		weightkg: 39.8,
	},
	keisbergif: {
		name: "Keisberg-IF",
		num: -92,
		types: ["Ice", "Silly"],
		baseStats: {hp: 105, atk: 120, def: 110, spa: 75, spd: 110, spe: 25},
		abilities: {0: "Clownery", H: "Inner Focus"},
		weightkg: 236.9,
	},
	indeedee: {
		name: "Indeedee",
		num: -93,
		types: ["Psychic", "Silly"],
		baseStats: {hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 135},
		abilities: {0: "Inner Focus", 1: "Psychic Surge", H: "Synchronize"},
		weightkg: 28.0,
	},
	applesnewestemoji: {
		name: "Apple\'s Newest Emoji",
		num: -94,
		types: ["Fire", "Lemon"],
		baseStats: {hp: 92, atk: 65, def: 100, spa: 110, spd: 82, spe: 108},
		abilities: {0: "Flame Body", 1: "Unaware", H: "Zesty"},
		weightkg: 0.2,
	},
	cinderace: {
		inherit: true,
		name: "Cinderace",
		num: -95,
		types: ["Fire"],
		baseStats: {hp: 80, atk: 116, def: 85, spa: 65, spd: 85, spe: 99},
		abilities: {0: "Blaze", H: "Libero"},
		weightkg: 33.0,
	},
	lemonfish: {
		name: "Lemon Fish",
		num: -96,
		fish: true,
		types: ["Lemon", "Water"],
		baseStats: {hp: 100, atk: 105, def: 80, spa: 60, spd: 60, spe: 80},
		abilities: {0: "Swift Swim", 1: "Ripen", H: "Lemonade"},
		weightkg: 1,
	},
	dracolition: {
		name: "Dracolition",
		num: -97,
		types: ["Steel", "Fighting"],
		baseStats: {hp: 110, atk: 128, def: 105, spa: 60, spd: 95, spe: 40},
		abilities: {0: "Wrecking Ball", 1: "Intimidate", H: "Dragon\'s Maw"},
		weightkg: 235.4,
	},

	silvallysilly: {
		name: "Silvally-Silly",
		baseSpecies: "Silvally",
		forme: "Silly",
		types: ["Silly"],
		num: 773,
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Stall", H: "RKS System"},
		requiredItem: "Silly Memory",
		changesFrom: "Silvally",
	},
	silvallystellar: {
		name: "Silvally-Stellar",
		baseSpecies: "Silvally",
		forme: "Stellar",
		types: ["Stellar"],
		num: 773,
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Stall", H: "RKS System"},
		//requiredItem: "Stellarium Z",
		changesFrom: "Silvally",
	},
	goddease: {
		name: "Goddease",
		num: -100,
		types: ["Normal", "Flying"],
		baseStats: {hp: 80, atk: 120, def: 100, spa: 90, spd: 140, spe: 70},
		abilities: {0: "just the birds", H: "Pressure"},
		weightkg: 10.8,
	},
	jableye: {
		gen: 3,
		name: "Jableye",
		num: -101,
		types: ["Ghost", "Dark", "Poison"],
		baseStats: {hp: 75, atk: 75, def: 100, spa: 75, spd: 100, spe: 50},
		abilities: {0: "Justified", H: "Jankster"},
		weightkg: 11.0,
	},
	kyrum: {
		name: "Kyrum",
		num: -102,
		types: ["Bug", "Dark"],
		baseStats: {hp: 71, atk: 102, def: 78, spa: 52, spd: 55, spe: 92},
		abilities: {0: "Swarm", 1: "Tinted Lens", H: "just the birds"},
		weightkg: 17.5,
	},
	raccoon: {
		name: "Raccoon",
		num: -103,
		types: ["Dark", "Silly"],
		baseStats: {hp: 75, atk: 100, def: 70, spa: 63, spd: 75, spe: 102},
		abilities: {0: "Pickpocket", 1: "Parting Gift", H: "Prankster"},
		weightkg: 15.5,
	},
	lucariocalm: {
		name: "Lucario-Calm",
		num: -104,
		types: ["Fighting", "Psychic", "Steel"],
		baseStats: {hp: 70, atk: 115, def: 70, spa: 105, spd: 70, spe: 105},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Justified"},
		weightkg: 47.0,
	},
	nedontrol: {
		name: "Nedontrol",
		diamondHand: true,
		num: -105,
		gender: "M",
		types: ["Rock"],
		baseStats: {hp: 126, atk: 95, def: 120, spa: 49, spd: 131, spe: 54},
		abilities: {0: "Bon Appetit"},
		weightkg: 434.5,
	},
	princirang: {
		name: "Princirang",
		diamondHand: true,
		num: -106,
		gender: "F",
		types: ["Fairy"],
		baseStats: {hp: 98, atk: 93, def: 86, spa: 83, spd: 80, spe: 135},
		abilities: {0: "Honor Student"},
		weightkg: 110.3,
	},
	ironclown: {
		name: "Iron Clown",
		num: -107,
		types: ["Steel", "Silly"],
		baseStats: {hp: 90, atk: 72, def: 100, spa: 122, spd: 108, spe: 98},
		abilities: {0: "Quark Drive", H: "Get Silly"},
		weightkg: 156.0,
	},
	thepearlhand: {
		name: "The Pearl Hand",
		num: -108,
		types: ["Water", "Dragon"],
		baseStats: {hp: 50, atk: 100, def: 100, spa: 100, spd: 100, spe: 125},
		abilities: {0: "The Pearl Hand"},
		weightkg: 0.5,
	},
	mcfish: {
		name: "McFish",
		num: -109,
		types: ["Normal", "Dark"],
		baseStats: {hp: 125, atk: 125, def: 90, spa: 50, spd: 90, spe: 60},
		abilities: {0: "The Ever-Growing Hunger of Capitalism™"},
		weightkg: 999.9,
	},
	applwirm: {
		name: "Applwirm",
		num: -110,
		types: ["Ground", "Bug"],
		baseStats: {hp: 80, atk: 125, def: 100, spa: 75, spd: 80, spe: 115},
		abilities: {0: "Hustle", H: "Katabatic Winds"},
		weightkg: 7.2,
	},
	minunandplusled: {
		name: "minun and plusle :D",
		num: -111,
		gen: 3,
		types: ["Electric", "Electric"],
		baseStats: {hp: 75, atk: 50, def: 50, spa: 100, spd: 100, spe: 125},
		abilities: {0: "best friends"},
		weightkg: 8.4,
	},

	traike: {
		name: "Traike",
		trans: true,
		num: -112,
		types: ["Fighting", "Electric"],
		baseStats: {hp: 75, atk: 130, def: 50, spa: 115, spd: 50, spe: 95},
		abilities: {0: "Sturdy", 1: "No Guard", H: "Mold Breaker"},
		weightkg: 71.4,
	},
	groudon: {
		inherit: true,
		gen: 3,
		name: "Groudon",
		num: -113,
		types: ["Ground"],
		baseStats: {hp: 90, atk: 130, def: 120, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Drought"},
		weightkg: 950.0,
	},
	drliberty: {
		name: "Dr. Liberty",
		diamondHand: true,
		num: -114,
		types: ["Psychic"],
		baseStats: {hp: 89, atk: 71, def: 78, spa: 120, spd: 117, spe: 100},
		abilities: {0: "Mad Scientist"},
		weightkg: 76.4,
	},
	absol: {
		inherit: true,
		name: "Absol",
		gen: 3,
		num: -115,
		types: ["Dark", "Ghost"],
		baseStats: {hp: 94, atk: 104, def: 74, spa: 104, spd: 74, spe: 114},
		abilities: {0: "Forewarn", 1: "Divining Horn", H: "Hoenn Stan"},
		weightkg: 47.0,
	},
	sunfloragrave: {
		name: "Sunflora-Grave",
		num: -116,
		types: ["Ghost"],
		baseStats: {hp: 95, atk: 120, def: 75, spa: 120, spd: 110, spe: 20},
		abilities: {0: "Zombies on Your Lawn"},
		weightkg: 0.1,
	},
	ironboulder: {
		name: "Iron Boulder",
		num: -117,
		types: ["Rock", "Psychic"],
		baseStats: {hp: 90, atk: 120, def: 80, spa: 68, spd: 108, spe: 124},
		abilities: {0: "Quark Drive"},
		weightkg: 162.5,
	},
	hydralemon: {
		name: "Hydralemon",
		num: -118,
		types: ["Lemon", "Dragon"],
		baseStats: {hp: 106, atk: 80, def: 110, spa: 120, spd: 80, spe: 44},
		abilities: {0: "Supersour Syrup", 1: "Regenerator", H: "Sticky Hold"},
		weightkg: 93.0,
	},
	zapdos: {
		inherit: true,
		name: "Zapdos",
		num: -119,
		types: ["Electric", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100},
		abilities: {0: "Pressure", 1: "just the birds", H: "Static"},
		weightkg: 52.6,
	},
	solarbean: {
		name: "Solar Bean",
		num: -120,
		types: ["Grass", "Fire"],
		baseStats: {hp: 85, atk: 110, def: 75, spa: 110, spd: 110, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Drought"},
		weightkg: 8.5,
	},
	
	hiveweb: {
		num: -126,
		name: "Hiveweb",
		types: ["Bug", "Normal"],
		baseStats: {hp: 85, atk: 90, def: 90, spa: 90, spd: 100, spe: 55},
		abilities: {0: "Honeyed Web", 1: "Shield Dust", H: "Compound Eyes"},
		weightkg: 9.1,
	},
	syndicant: {
		num: -125,
		name: "Syndican\'T",
		diamondHand: true,
		types: ["Bug"],
		baseStats: {hp: 129, atk: 97, def: 91, spa: 95, spd: 89, spe: 74},
		abilities: {0: "Eusociality"},
		weightkg: 128.4,
	},
	fishmarketing3: {
		num: -124,
		name: "Fish Marketing 3",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 90, atk: 50, def: 60, spa: 125, spd: 70, spe: 115},
		abilities: {0: "buy fish"},
		weightkg: 0.1,
	},
	lemonganium: {
		num: -123,
		name: "Lemonganium",
		types: ["Lemon"],
		baseStats: {hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80},
		abilities: {0: "Sour Hour", H: "Unaware"},
		weightkg: 100.5,
	},
	carnivineif: {
		num: -122,
		name: "Carnivine-IF",
		types: ["Fairy", "Silly"],
		baseStats: {hp: 99, atk: 117, def: 96, spa: 64, spd: 96, spe: 58},
		abilities: {0: "Ghoul Gobbler", H: "What the Sigma"},
		weightkg: 35.6,
	},
	grumpig: {
		inherit: true,
		num: -121,
		name: "Grumpig",
		gen: 3,
		types: ["Psychic"],
		baseStats: {hp: 125, atk: 40, def: 100, spa: 110, spd: 115, spe: 70},
		abilities: {0: "Pure Power", 1: "Thick Fat", H: "Gluttony"},
		weightkg: 71.5,
	},

	impromancer: {
		name: "Impromancer",
		types: ["Ghost"],
		baseStats: {hp: 82, atk: 94, def: 90, spa: 120, spd: 89, spe: 100},
		abilities: {0: "Blight of the Fallen"},
		weightkg: 0.2,
	},
	panderdragoon: {
		name: "Pander Dragoon",
		types: ["Dragon", "Ground"],
		baseStats: {hp: 120, atk: 65, def: 85, spa: 115, spd: 95, spe: 90},
		abilities: {0: "Timefrozen Body"},
		weightkg: 1.0,
	},
	soruarc: {
		name: "Soruarc",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 55, atk: 75, def: 70, spa: 125, spd: 80, spe: 105},
		abilities: {0: "Bloodline Spell: Blazeball"},
		weightkg: 66.0,
	},
	emolga: {
		inherit: true,
		name: "Emolga",
		copen: true,
		types: ["Electric", "Flying"],
		baseStats: {hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 104},
		abilities: {0: "United Party"},
		weightkg: 5.0,
	},
	skibidragon: {
		name: "Skibidragon",
		types: ["Dragon"],
		baseStats: {hp: 97, atk: 80, def: 89, spa: 100, spd: 117, spe: 72},
		abilities: {0: "Rain Dish", 1: "Bathroom Break", H: "MILF"},
		weightkg: 43.7,
	},
	hitmontopmega: {
		name: "Hitmontop-Mega",
		baseSpecies: "Hitmontop",
		forme: "Mega",
		types: ["Fighting", "Normal"],
		baseStats: {hp: 67, atk: 152, def: 102, spa: 37, spd: 147, spe: 82},
		abilities: {0: "Necrodancer"},
		weightkg: 72.0,
		requiredItem: "Hitmontopite",
	},
	porygonz: {
		inherit: true,
		name: "Porygon-Z",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90},
		abilities: {0: "Adaptability", 1: "Download", H: "Analytic"},
		weightkg: 34.0,
	},
	porygonzmega: {
		name: "Porygon-Z-Mega",
		baseSpecies: "Porygon-Z",
		forme: "Mega",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 170, def: 100, spa: 80, spd: 100, spe: 100},
		abilities: {0: "Conversion-Z"},
		weightkg: 34.0,
		requiredItem: "Porygonite-Z",
	},
	furumo: {
		name: "Furumo",
		types: ["Water", "Fairy", "Ice"],
		baseStats: {hp: 85, atk: 105, def: 60, spa: 109, spd: 60, spe: 111},
		abilities: {0: "Water Veil", 1: "Pixilate", H: "Refrigerate"},
		weightkg: 36.0,
	},
	megaman: {
		name: "mega man",
		types: ["Normal", "Fire"],
		baseStats: {hp: 99, atk: 99, def: 64, spa: 99, spd: 64, spe: 120},
		abilities: {0: "Magic Guard", 1: "Solid Rock", H: "MILF"},
		weightkg: 77.1,
	},
	fudgesaur: {
		name: "Fudgesaur",
		types: ["Silly", "Ground"],
		baseStats: {hp: 80, atk: 85, def: 86, spa: 122, spd: 65, spe: 87},
		abilities: {0: "Disgusting, Repulsive Dessert"},
		weightkg: 100.0,
	},
	fudgesaurmega: {
		name: "Fudgesaur-Mega",
		baseSpecies: "Fudgesaur",
		forme: "Mega",
		types: ["Silly", "Ground"],
		baseStats: {hp: 80, atk: 105, def: 123, spa: 122, spd: 125, spe: 70},
		abilities: {0: "Pristine Dessert"},
		weightkg: 100.0,
		requiredItem: "Fudgesaurite",
	},
	darkpoison: {
		name: "darkpoison",
		types: ["Dark", "Poison"],
		baseStats: {hp: 200, atk: 100, def: 50, spa: 75, spd: 50, spe: 25},
		abilities: {0: "Rough Skin", 1: "Shed Skin", H: "Stakeout"},
		weightkg: 0.3,
	},

	swampertmega: {
		inherit: true,
		baseStats: {hp: 102, atk: 152, def: 112, spa: 97, spd: 112, spe: 72},
		abilities: {0: "Sour Sipper"},
		weightkg: 102.0,
	},
	sigmaricelion: {
		name: "Sigma Rice Lion",
		types: ["Normal", "Electric"],
		baseStats: {hp: 100, atk: 75, def: 90, spa: 66, spd: 68, spe: 95},
		abilities: {0: "Sigma Surge"},
		weightkg: 190.0,
	},
	zoruahisui: {
		inherit: true,
		name: "Zorua-Hisui",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 35, atk: 40, def: 45, spa: 55, spd: 55, spe: 50},
		abilities: {0: "Illusion"},
		weightkg: 12.5,
	},
	wishiwashi: {
		inherit: true,
		name: "Wishiwashi",
		fish: true,
		types: ["Water", "Bug"],
		baseStats: {hp: 50, atk: 41, def: 56, spa: 46, spd: 46, spe: 35},
		abilities: {0: "MILF", 1: "Wimp Out", H: "Technician"},
		weightkg: 0.3,
	},
	necrozmaultra: {
		inherit: true,
		name: "Necrozma-Ultra",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 97, atk: 167, def: 97, spa: 167, spd: 97, spe: 129},
		abilities: {0: "Ultra Necrozma Clause"},
		weightkg: 230.0,
		requiredItem: null,
		battleOnly: null,
	},
	nihilego: {
		inherit: true,
		name: "Nihilego",
		types: ["Poison", "Rock"],
		baseStats: {hp: 109, atk: 53, def: 47, spa: 127, spd: 131, spe: 103},
		abilities: {0: "Beast Boost", H: "Toxic Chain"},
		weightkg: 55.5,
	},
	lickilord: {
		name: "Lickilord",
		trans: true,
		gender: "M",
		types: ["Silly"],
		baseStats: {hp: 100, atk: 80, def: 85, spa: 85, spd: 140, spe: 35},
		abilities: {0: "Bon Appetit", 1: "Oblivious", H: "Cloud Nine"},
		weightkg: 94.3,
	},
	citrusjams: {
		name: "Citrus Jams",
		types: ["Lemon", "Electric"],
		baseStats: {hp: 97, atk: 11, def: 40, spa: 111, spd: 73, spe: 83},
		abilities: {0: "Punk Rock", 1: "Gex Server", H: "Dazzling"},
		weightkg: 3.3,
	},
	everhl: {
		name: "Everhál",
		diamondHand: true,
		gender: "F",
		types: ["Dragon"],
		baseStats: {hp: 103, atk: 143, def: 98, spa: 75, spd: 100, spe: 50},
		abilities: {0: "Slayer of Beasts"},
		weightkg: 241.8,
	},
	rayquaza: {
		inherit: true,
		num: -991,
		name: "Rayquaza",
		gen: 3,
		types: ["Dragon", "Flying"],
		baseStats: {hp: 95, atk: 130, def: 80, spa: 130, spd: 80, spe: 95},
		abilities: {0: "Air Lock", H: "Bon Appetit"},
		weightkg: 206.5,
	},
	chinchou: {
		inherit: true,
		name: "Chinchou",
		fish: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 75, atk: 1, def: 38, spa: 50, spd: 50, spe: 66},
		abilities: {0: "Volt Absorb", 1: "Water Absorb", H: "Just a Little Guy"},
		weightkg: 12.0,
	},
	grimace: {
		name: "Grimace",
		types: ["Poison"],
		baseStats: {hp: 105, atk: 108, def: 105, spa: 99, spd: 75, spe: 45},
		abilities: {0: "Socially Unaware", 1: "Thick Fat", H: "Corrosion"},
		weightkg: 500.0,
	},
	pyroaring: {
		name: "Pyroaring",
		types: ["Poison", "Ground"],
		baseStats: {hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20},
		abilities: {0: "Poison Point", 1: "Water Absorb", H: "Unaware"},
		weightkg: 81.5,
	},
	houndoom: {
		inherit: true,
		name: "Houndoom",
		types: ["Dark", "Steel"],
		baseStats: {hp: 75, atk: 90, def: 70, spa: 125, spd: 85, spe: 105},
		abilities: {0: "Doomer"},
		weightkg: 49.5,
	},
	togepi: {
		inherit: true,
		name: "togepi",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 35, atk: 20, def: 83, spa: 40, spd: 83, spe: 20},
		abilities: {0: "Simple", 1: "Serene Grace", H: "Super Luck"},
		weightkg: 1.5,
	},
	tylerthecreator: {
		name: "Tyler the Creator",
		gender: "M",
		types: ["Lemon", "Ground"],
		baseStats: {hp: 109, atk: 110, def: 95, spa: 75, spd: 102, spe: 56},
		abilities: {0: "Fruity Bars", 1: "Alpha Sigma Rizz", H: "Inner Focus"},
		weightkg: 90.7,
	},
};
