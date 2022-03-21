import axios from "axios";
import { charactersActions } from "./charactersSlice";
import { houseActions } from "./houseSlice";

const baseURL = "https://www.anapioficeandfire.com/api";
const REGEX = /page=(\d+)/;

const parseLastPage = (value: string): number => {
  const array = value.split(",");
  const lastValue = array[array.length - 1].trim();
  const lastPageNumber = lastValue.match(REGEX);
  if (!lastPageNumber) return 1;
  return +lastPageNumber[1];
};

export function fetchCharacters(
  pageNumber: number,
  pageSize: number,
  gender: string,
  name: string
) {
  return async (dispatch: any) => {
    const response = async () => {
      const data = await axios({
        baseURL,
        url: `/characters?page=${pageNumber}&pageSize=${pageSize}&gender=${gender}&name=${name}`,
      })
        .then((res) => {
          return {
            characters: res.data,
            lastPage: parseLastPage(res.headers.link),
          };
        })
        .catch((error) => console.log(error));

      return data;
    };

    try {
      const characters = await response().then((res: any) => res.characters);
      const lastPage = await response().then((res: any) => res.lastPage);
      dispatch(charactersActions.toggleLoader(true));
      dispatch(charactersActions.fetchCharacters(characters));
      dispatch(charactersActions.handleLastPage(lastPage));
    } catch (error: any) {
      throw new Error(error);
    } finally {
      dispatch(charactersActions.toggleLoader(false));
    }
  };
}

export function fetchHouse(id: string) {
  return async (dispatch: any) => {
    const response = async () => {
      const data = await axios(`${baseURL}/houses/${id}`)
        .then((res) => {
          return {
            house: res.data,
          };
        })
        .catch((error) => console.log(error));

      return data;
    };

    try {
      const house = await response().then((res: any) => res.house);
      dispatch(houseActions.toggleLoader(true));
      dispatch(houseActions.fetchHouse(house));
    } catch (error: any) {
      throw new Error(error);
    } finally {
      dispatch(houseActions.toggleLoader(false));
    }
  };
}
