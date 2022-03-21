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
    "& .MuiTablePagination-displayedRows": {
      display: "none",
    },
    "& .MuiPaper-root": {
      boxShadow: "5px 5px 14px 0px rgba(101, 102, 115, 1)",
    },
  },
});
