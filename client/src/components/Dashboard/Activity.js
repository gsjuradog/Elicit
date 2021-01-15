import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Snacks in home',
    '2 tasks acomplished',
    'Unfinished'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'Video Streaming consumption',
    '3 task acomplished',
    'Finished'
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Familly Memories',
    '1 task acomplished',
    'Unfinished'
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Colacao',
    '1 task acomplished',
    'Waiting for new task'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Museum Renovation',
    '0 tasks acomplished',
    'Unfinished'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Activity() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Activity</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
