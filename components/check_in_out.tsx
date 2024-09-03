'use client'
import React from 'react';
import { LogRes } from '@/service/log.service';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import { Typography } from '@mui/material';

// Styling for the round and red exit button
const RedButton = styled(IconButton)({
  color: '#fff',
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
});

// Styling for the round and green enter button
const GreenButton = styled(IconButton)({
  color: '#fff',
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
});

interface CheckInOutProps {
  log: LogRes
  getBack: () => void
  handleClick: (type?: string) => void
}

export default function CheckInOut({ log, getBack, handleClick }: CheckInOutProps) {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      {log.enterTime && !log.exitTime && (
        <RedButton onClick={() => handleClick('exit')}>
            <Typography variant="subtitle2" component="h1" sx={{ textAlign: 'center'}}>
                Exit Clock
            </Typography>
          <ExitToAppIcon />
        </RedButton>
      )}
      {!log.enterTime && (
        <GreenButton onClick={() => handleClick()}>
              <Typography variant="subtitle2" component="h1" sx={{ textAlign: 'center'}}>
                Enter Clock
            </Typography>
          <LoginIcon />
        </GreenButton>
      )}
      <IconButton onClick={getBack} size="large">
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}
