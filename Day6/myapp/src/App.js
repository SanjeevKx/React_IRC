import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme, itemColor }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : itemColor,
  ...theme.typography.body2,
  padding: theme.spacing(2), // Increase padding for better visualization
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ModifiedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Item itemColor="#FF5733">xs=2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item itemColor="#33FF55">xs=2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item itemColor="#5733FF">xs=2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item itemColor="#FF33A2">xs=2</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
