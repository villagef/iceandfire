import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./store/fetch";
import Layout from "./templates";
import CustomPaginationActionsTable from "./components/Table/MainTable";
import { createCharactersModel } from "./helpers";

function App() {
  const dispatch = useDispatch();
  const charactersData = useSelector((state: any) => state.characters);
  const gender = useSelector((state: any) => state.characters.gender);
  const name = useSelector((state: any) => state.characters.name);
  const currentPage = useSelector((state: any) => state.characters.currentPage);
  const rowsPerPage = useSelector((state: any) => state.characters.rowsPerPage);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, rowsPerPage, gender, name));
  }, []);

  return (
    <Layout>
      {charactersData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <CustomPaginationActionsTable
          data={createCharactersModel(charactersData)}
        />
      )}
    </Layout>
  );
}

export default App;
