import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 60px 30px 60px;
`;

export const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#4285f4",
    },
    "& .MuiTableCell-footer": {
      color: "black",
      backgroundColor: "#fbbc04",
    },
  },
});
