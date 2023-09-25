"use client";
// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from "src/pages/tables/actions";
import { STATE_REDUCER_KEY } from "src/pages/tables/constants";
import LoadingCustomOverlay from "src/@core/components/common/LoadingOverLay";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "username", label: "Username", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "phone", label: "Phone", minWidth: 170 },
  {
    id: "website",
    label: "Website",
    minWidth: 170,
    align: "right",
    name: "website"
  }

];


const TableStickyHeader = () => {
  const dispatch = useDispatch();
  // ** States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { data = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].basicTable);
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(fetchPrices());
  }, []);
  return (
    <LoadingCustomOverlay active={requestInProgress}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow key={row.id} hover role='checkbox' tabIndex={-1} >
                    {columns.map(column => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </LoadingCustomOverlay>
  );
};

export default TableStickyHeader;
