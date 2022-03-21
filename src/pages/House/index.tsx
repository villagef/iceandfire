import { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHouse } from "../../store/fetch";
import { createHouseModel } from "../../helpers";
import HouseTable from "../../components/Table/HouseTable";

function HousePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();
  const houseData = useSelector((state: any) => state.house);

  useEffect(() => {
    dispatch(fetchHouse(id ? id : ""));
  }, []);

  return (
    <>
      {houseData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <HouseTable data={createHouseModel(houseData)} />
      )}
    </>
  );
}

export default memo(HousePage);
