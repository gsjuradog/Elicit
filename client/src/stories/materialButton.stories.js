import React from 'react';
import { Button } from '@material-ui/core';

export default {
  title: 'Material button',
  component: Button,
};

export const Success = () => (
  <Button variant="contained" color="primary">
    Logged in
  </Button>
);
