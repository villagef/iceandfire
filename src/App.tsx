import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters, fetchHouse } from "./store/fetch";
import Layout from "./templates";
import CustomPaginationActionsTable from "./components/Table/MainTable";
import { createCharactersModel, createHouseModel } from "./helpers";
import HouseTable from "./components/Table/HouseTable";

function App() {
  const dispatch = useDispatch();
  const charactersData = useSelector((state: any) => state.characters);
  const houseData = useSelector((state: any) => state.house);
  const gender = useSelector((state: any) => state.characters.gender);
  const name = useSelector((state: any) => state.characters.name);
  const currentPage = useSelector((state: any) => state.characters.currentPage);
  const rowsPerPage = useSelector((state: any) => state.characters.rowsPerPage);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, rowsPerPage, gender, name));
  }, [currentPage, rowsPerPage]);

  useEffect(() => {
    dispatch(fetchHouse("5"));
  }, []);

  return (
    <Layout>
      {charactersData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* <HouseTable data={createHouseModel(houseData)}/> */}
          <CustomPaginationActionsTable
            data={createCharactersModel(charactersData)}
          />
        </>
      )}
    </Layout>
  );
}

export default App;
