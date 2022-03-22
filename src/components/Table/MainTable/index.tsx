import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { SearchWrapper, TableWrapper, TableLink, useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../../../store/charactersSlice";
import { Link } from "react-router-dom";
import DropdownSearch from "../../Dropdown";
import InputSearch from "../../Input";
import { useState } from "react";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(
  props: TablePaginationActionsProps
): JSX.Element {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { count, page, rowsPerPage, onPageChange } = props;
  const charactersData = useSelector((state: any) => state.characters);

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
    dispatch(charactersActions.handleCurrentPage(charactersData.firstPage));
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
    dispatch(
      charactersActions.handleCurrentPage(charactersData.currentPage - 1)
    );
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
    dispatch(
      charactersActions.handleCurrentPage(charactersData.currentPage + 1)
    );
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(charactersActions.handleCurrentPage(charactersData.lastPage));
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomPaginationActionsTable(props: any): JSX.Element {
  const charactersData = useSelector((state: any) => state.characters);
  const [page, setPage] = useState<number>(charactersData.currentPage - 1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    charactersData.rowsPerPage
  );
  const classes = useStyles();
  const { data } = props;
  const dispatch = useDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(+event.target.value);

    dispatch(charactersActions.handleCurrentPage(charactersData.firstPage));
    dispatch(charactersActions.handleRowsPerPage(+event.target.value));
  };
  return (
    <TableWrapper className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <SearchWrapper>
                <DropdownSearch />
                <InputSearch />
              </SearchWrapper>
            </TableRow>
            <TableRow>
              {Object.keys(data[0]).map((column: string) => (
                <TableCell key={column}>{column.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: number) => (
              <TableRow key={row.character + index}>
                <TableCell>{row.character}</TableCell>
                <TableCell>{row.alive}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.culture}</TableCell>
                <TableCell>
                  {row.allegiances.map((val: string, index: number) => (
                    <Link key={val + index} to={`/house/${val}`}>
                      {<TableLink>{val}</TableLink>}
                    </Link>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                count={rowsPerPage * +charactersData.lastPage}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}
