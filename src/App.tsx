import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./store/fetch";

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.characters);
  const gender = useSelector((state: any) => state.characters.gender);
  const name = useSelector((state: any) => state.characters.name);
  const currentPage = useSelector((state: any) => state.characters.currentPage);
  const rowsPerPage = useSelector((state: any) => state.characters.rowsPerPage);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, rowsPerPage, gender, name));
  }, []);

  return (
    <div className="App">
      <div>App</div>
    </div>
  );
}

export default App;
