import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./store/fetch";
import Layout from "./templates";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const RouterWrapper = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

function App() {
  const dispatch = useDispatch();
  const gender = useSelector((state: any) => state.characters.gender);
  const culture = useSelector((state: any) => state.characters.culture);
  const currentPage = useSelector((state: any) => state.characters.currentPage);
  const rowsPerPage = useSelector((state: any) => state.characters.rowsPerPage);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, rowsPerPage, gender, culture));
  }, [currentPage, rowsPerPage, gender, culture]);

  return <RouterWrapper />;
}

export default App;
