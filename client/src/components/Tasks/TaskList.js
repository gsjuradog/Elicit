import React from 'react';
import moment from 'moment';
import { Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';

export default function TaskList({ tasks }) {
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
