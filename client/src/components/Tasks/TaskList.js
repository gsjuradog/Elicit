import React from 'react';
import moment from 'moment';
import { Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function TaskList({ tasks }) {
  //gets props from project in /project
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Task</TableCell>
            <TableCell component={Link} to={{ pathname: '/answers', state: tasks }}>
              Sub-Tasks
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {moment(Date(row.createdAt.seconds * 1000)).format('MMM Do YYYY HH:mm')}
              </TableCell>
              <TableCell>{row.data.task}</TableCell>
              <TableCell>{row.data.questions}</TableCell>
              {/*Future layers of functionality*/}
              {/* <TableCell>{row.activity}</TableCell>
              <TableCell align="right">{row.status}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
