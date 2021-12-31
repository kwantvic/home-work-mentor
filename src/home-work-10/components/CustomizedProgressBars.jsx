import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ margin: '0 auto' }}>
      <CircularProgress size={40} thickness={4} />
    </Box>
  );
}
