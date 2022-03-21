interface IPropsCharacter {
  character: string;
  alive: string;
  gender: string;
  culture: string;
  allegiances: string[];
}

export function createCharactersModel(props: any): IPropsCharacter[] {
  const { characters } = props;
  const newArray: any = [];

  const handleCharacter = (character: any): string => {
    const value = [character.name, ...character.aliases].filter(
      (val) => val !== ""
    );

    return `${value}`;
  };

  const handleAlive = (character: any): string => {
    if (!character.born && !character.died) {
      return "Unknown";
    } else if (!character.born) {
      return "No";
    } else if (character.born && character.died) {
      const value = +character.died - +character.born;
      return `No, died at ${value} years old`;
    } else {
      return "Yes";
    }
  };

  const handleAllegiances = (character: any): string[] => {
    const array: string[] = [];

    character.allegiances &&
      character.allegiances.map((url: string) => {
        const arr = url.split("/");
        const value = arr.at(-1);
        value && array.push(value);
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