// prettier-ignore
import React from 'react'
import { ThemeProvider, theme } from '@material-ui/core';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story></Story>
    </ThemeProvider>
  ),
];
