export const Pokedex: {[speciesid: string]: SpeciesData} = {
	//Slate 1: Grass, Fire, Water
	prairret: {
		num: 1,
		name: "Prairret",
		types: ["Grass"],
		baseStats: {hp: 85, atk: 105, def: 100, spa: 65, spd: 75, spe: 100},
		abilities: {0: "Overgrow", H: "Poison Heal"},
		heightm: 0.7,
		weightkg: 35.5,
	},
	fluxtape: {
		num: 2,
		name: "Fluxtape",
		types: ["Fire"],
		baseStats: {hp: 60, atk: 89, def: 50, spa: 115, spd: 60, spe: 126},
		abilities: {0: "Flame Body", 1: "Competitive", H: "Flash Fire"},
		heightm: 1.7,
		weightkg: 0.2,
	},
	cetaidon: {
		num: 3,
		name: "Cetaidon",
		types: ["Water"],
		baseStats: {hp: 110, atk: 125, def: 85, spa: 80, spd: 80, spe: 50},
		abilities: {0: "Torrent", H: "Water Veil"},
		heightm: 1.6,
		weightkg: 371.1,
	},
	//Slate 2: Dragon, Fairy, Steel
	drakotomy: {
		num: 4,
		name: "Drakotomy",
		types: ["Dragon"],
		baseStats: {hp: 95, atk: 100, def: 105, spa: 90, spd: 80, spe: 40},
		abilities: {0: "Regenerator", H: "Hustle"},
		heightm: 1.2,
		weightkg: 462.3,
	},
	gencook: {
		num: 5,
		name: "Gencook",
		types: ["Fairy"],
		baseStats: {hp: 80, atk: 70, def: 110, spa: 90, spd: 120, spe: 60},
		abilities: {0: "Ripen", 1: "Gluttony", H: "Oblivious"},
		heightm: 1.0,
		weightkg: 115.3,
	},
	heraleo: {
		num: 6,
		name: "Heraleo",
		types: ["Steel"],
		baseStats: {hp: 65, atk: 100, def: 125, spa: 75, spd: 85, spe: 75},
		abilities: {0: "Dauntless Shield", 1: "Intimidate", H: "Tough Claws"},
		heightm: 1.0,
		weightkg: 100.0,
	},
};