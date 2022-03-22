import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchWrapper = styled.td`
  width: 100%
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const useStyles = makeStyles({
  root: {
    "& .MuiTable-root": {
      background: "#f7fbff",
    },
    "& .MuiTableCell-head": {
      color: "white",
      background: "linear-gradient(90deg, rgba(0,92,169,1) 0%, rgba(0,99,182,1) 100%)",
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
