export interface IIndexable {
  [key: string]: any;
}

const RARITIES: IIndexable = {
  'lesser': .2,
  '': .6249,
  'greater': .16,
  'epic': .01,
  'legendary': .005,
  'godly': .0001
};

const ELEMENT: IIndexable = {
  '': .5,
  'acid': .0625,
  'ice': .0625,
  'water': .0625,
  'fire': .0625,
  'lightning': .0625,
  'earth': .0625,
  'wind': .0625,
  'death': .0625
};

const WEAPON: IIndexable = {
  'club': .05,
  'dagger': .05,
  'handaxe': .05,
  'quarterstaff': .05,
  'spear': .05,
  'halberd': .05,
  'lance': .05,
  'morningstar': .05,
  'rapier': .05,
  'scimitar': .05,
  'trident': .05,
  'crossbow': .05,
  'longbow': .05,
  'throwing knives': .05,
  'claymore': .05,
  'scythe': .05,
  'glaive': .05,
  'battleaxe': .05,
  'whip': .05,
  'gauntlets': .05
};

const MODIFIER: IIndexable = {
  '': .82,
  'of great distance': .03,
  'of power': .03,
  'of seeking': .03,
  'of vampiric energy': .03,
  'of haste': .03,
  'of protection': .03,
};

export const getWeapon = () => {
  const rarity = getRandomValueWithProbability(RARITIES);
  const element = getRandomValueWithProbability(ELEMENT);
  const weapon = getRandomValueWithProbability(WEAPON);
  const modifier = getRandomValueWithProbability(MODIFIER);

  return [rarity, element, weapon, modifier].join(' ');
}

export const getRandomValueWithProbability = (probabilityMap: IIndexable) => {
  const rand = Math.random();

  let probabilityArray: string[] = [];
  for (const value of Object.keys(probabilityMap)) {
    const times = probabilityMap[value] * 10000;
    const valueArr = Array(times).fill(value);

    probabilityArray = [...probabilityArray, ...valueArr]
  }

  return probabilityArray[Math.floor(rand * 10000)];
}