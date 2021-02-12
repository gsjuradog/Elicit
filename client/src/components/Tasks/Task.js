import { Typography, Container, Grid } from '@material-ui/core';
import { Table, TableCell, TableRow, TableHead } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

export default function Task({ title, questions }) {
  const classes = useStyles();
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Sub-Tasks</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
          <Typography>{questions}</Typography>
        </Grid>
      </Container>
    </>
  );
}
