import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: string;
  format?: (value: number) => string;
}

interface Row{
  campaignId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface TableProps {
  columns: Column[];
  rows?: Row[];      
  onRowClick?: (id: string) => void;
//   ? means props are optional
}

const DataTable: React.FC<TableProps> = ({ columns, rows = [], onRowClick }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 320 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={"left"}
                  style={{ minWidth: column.minWidth}}
                  sx={{
                    backgroundColor: "primary.main",
                    border: "1px solid",
                    borderColor: "white"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  align="center"
                  sx={{
                    backgroundColor: "default.main",
                    color: "secondary.main",
                  }}>
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow 
                  hover
                  sx={{
                    cursor: "pointer",              
                  }}
                  role="checkbox" 
                  tabIndex={-1} 
                  key={index}
                  onClick={() => onRowClick?.(row["campaignId"])}>
                    {columns.map((column) => {
                      const value = row[column.id as keyof Row];
                      return (
                        <TableCell 
                          key={column.id} 
                          align={"left"}
                          sx={{ 
                            backgroundColor: "default.main", 
                            color: "secondary.main", 
                            borderBottom: "1.25px Solid", 
                            borderColor: "primary.light" 
                            }}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        slotProps={{
          select: {
          MenuProps: {
            PaperProps: {
              sx: {
                color: "secondary.main"
              }
            },
            MenuListProps: {
              sx: {
                padding: "0px",
              }
            }
          },
        }
      }}
        sx={{
          "& .MuiSvgIcon-root": {
            color: "secondary.main",
          },
          backgroundColor: "default.main",
          color: "secondary.main",
        }}
      />
    </Paper>
  );
};

export default DataTable;

// code adapted from the mui sticky table
// https://mui.com/material-ui/react-table/?srsltid=AfmBOorkpzQkY3Vs-epAQoiPlPHClghk9DVzuMCSl-pYpe5-v5xT__DC
