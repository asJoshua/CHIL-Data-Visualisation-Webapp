import React, { useEffect, useState  } from 'react';
import {
    Box,
    CircularProgress,
    Collapse,
    IconButton,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import axios from 'axios';
import { VariableLayout } from "@/components/layouts/variable-layout"; // Assuming you still need this


const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    height: "100%", 
    width: '100%', 
    padding: theme.spacing(4), 
    boxSizing: 'border-box', 
}));

const StyledTableCell = styled(TableCell)(() => ({
    color: 'black',
}));

const StyledTableRow = styled(TableRow)(() => ({
    '& > *': {
        borderBottom: 'unset',
    },
}));

const ContactSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openRows, setOpenRows] = useState<string[]>([]);
    const [page, setPage] = useState(0); 
    const [rowsPerPage, setRowsPerPage] = useState(5); 

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get('/chil/api/contact/submissions/', {
                    withCredentials: true,
                });
                setSubmissions(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching submissions:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    const handleRowClick = (id: string) => {
        setOpenRows((prevOpenRows) => {
            return prevOpenRows.includes(id)
                ? prevOpenRows.filter((rowId) => rowId !== id)
                : [...prevOpenRows, id];
        });
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    const visibleSubmissions = rowsPerPage > 0
        ? submissions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : submissions;

    return (
        <VariableLayout >
        <StyledTableContainer>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="collapsible contact submissions table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Inquiry</StyledTableCell>
                            <StyledTableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleSubmissions.map((submission) => {
                            const isRowOpen = openRows.includes(submission.id);

                            return (
                                <React.Fragment key={submission.id}>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {submission.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{submission.email}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {submission.inquiry.substring(0, 50) +
                                                (submission.inquiry.length > 50 ? '...' : '')}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() => handleRowClick(submission.id)}
                                            >
                                                {isRowOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                            </IconButton>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <TableCell
                                            style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 30, color: 'black' }}
                                            colSpan={4}
                                        >
                                            <Collapse in={isRowOpen} timeout="auto" unmountOnExit>
                                                <Box sx={{ margin: 1 }}>
                                                    <Typography
                                                        variant="body2"
                                                        gutterBottom
                                                        component="div"
                                                        color="black"
                                                    >
                                                        Inquiry:
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        gutterBottom
                                                        component="div"
                                                        color="black"
                                                    >
                                                        {submission.inquiry}
                                                    </Typography>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </StyledTableRow>
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100, { label: 'All', value: -1 }]}
                component="div"
                count={submissions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    color: 'black', // General text color
                    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-select': {
                        color: 'black', // Target specific elements
                    },
                    '& .MuiIconButton-root': {
                        color: 'black', // Target the pagination buttons
                    },
                    '& .MuiSelect-selectMenu': { // Target the select menu
                        color: 'black',
                    },
                    '& .MuiMenuItem-root': { // Target the menu items
                        color: 'black',
                    },
                }}
            />
            {error && <Typography color="error">Error: {error.message}</Typography>}
            {loading && <CircularProgress />}
            </StyledTableContainer>
        </VariableLayout>
    );
};

export default ContactSubmissions;