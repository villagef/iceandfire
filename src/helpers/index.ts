import { BooleanLiteral } from "typescript";

interface IPropsCharacter {
  character: string;
  alive: string;
  gender: string;
  culture: string;
  allegiances: string[];
}

interface IPropsHouse {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string;
  seats: string;
  hasDiedOut: string;
  overlord: string;
  numberOfCadetBranches: number;
}

export function createCharactersModel(props: any): IPropsCharacter[] {
  const { characters } = props;
  const newArray: any = [];

  const handleCharacter = (character: any): string => {
    const value = [character.culture, ...character.aliases].filter(
      (val) => val !== ""
    );

    return `${value}`;
  };

  const takeNumberFromString = (value: string) => {
    const numArr = value.match(/\d/g);
    return numArr ? +numArr.join("") : null;
  };

  const handleAlive = (character: any): string => {
    if (!character.born && !character.died) {
      return "Unknown";
    } else if (!character.born) {
      return "No";
    } else if (character.born && character.died) {
      //DON'T UNDERSTAND HOW TO COUNT THE DIFFERENCE BASED ON THE DATASET
      const value = takeNumberFromString(character.died)
        ? takeNumberFromString(character.died)
        : 0;
      return `No, died at ${value} years old`;
    } else {
      return "Yes";
    }
  };

  const handleAllegiances = (character: any): string[] => {
    const array = character.allegiances.map((url: string) => {
      const arr = url.split("/");
      const value = arr.at(-1);
      return value;
    });

    return array;
  };

  characters.map((character: any) => {
    newArray.push({
      character: handleCharacter(character),
      alive: handleAlive(character),
      gender: character.gender,
      culture: character.culture ? character.culture : "Unknown",
      allegiances: handleAllegiances(character),
    });
  });

  return newArray;
}

export function createHouseModel(props: any): IPropsHouse {
  const { house } = props;

  const convertArrayToString = (array: string[]) => {
    return array.length > 0 ? array.join(", ") : "Undefined";
  };

  return {
    name: house.name ? house.name : "Undefined",
    region: house.region ? house.region : "Undefined",
    coatOfArms: house.coatOfArms ? house.coatOfArms : "Undefined",
    words: house.words ? house.words : "Undefined",
    titles: convertArrayToString(house.titles),
    seats: convertArrayToString(house.seats),
    hasDiedOut: house.diedOut.length ? house.diedOut : "Undefined",
    overlord: house.overlord ? house.overlord : "Undefined",
    numberOfCadetBranches: house.cadetBranches
      ? house.cadetBranches.length
      : "Undefined",
  };
}
