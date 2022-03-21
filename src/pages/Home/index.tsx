import { memo } from "react";
import { useSelector } from "react-redux";
import CustomPaginationActionsTable from "../../components/Table/MainTable";
import { createCharactersModel } from "../../helpers";

function HomePage(): JSX.Element {
  const charactersData = useSelector((state: any) => state.characters);

  return (
    <>
      {charactersData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <CustomPaginationActionsTable
          data={createCharactersModel(charactersData)}
        />
      )}
    </>
  );
}

export default memo(HomePage);
