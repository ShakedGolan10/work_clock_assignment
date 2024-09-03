'use client'
import { useState } from 'react';
import { TextField, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckInOut from './check_in_out';
import { getLog, LogRes, updateLog } from '@/service/log.service';

const StyledInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const emptyLogRes = {logId: '', enterTime: false, exitTime: false}

export default function MainPage() {
  const [userId, setUserId] = useState<string>('');
  const [currLog, setCurrLog] = useState<LogRes>(emptyLogRes)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleFetchLog = async () => {
    const logResult = await getLog(userId)
    setCurrLog(logResult)
  };

  const handleClick = async (type?: string) => {
    const {enterTime, exitTime} = (type === 'exit') ? {exitTime: new Date(), enterTime: ''} : {enterTime: new Date(), exitTime: ''}
    await updateLog(currLog.logId, enterTime, exitTime)
    await handleFetchLog()
}

  return (!currLog.logId ? 
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: 'primary.main' }}>
        Welcome to the Work Clock
      </Typography>
      <Typography variant="h6" component="h1" sx={{ textAlign: 'center'}}>
        Please enter your Id
      </Typography>
      <StyledInput
        fullWidth
        label="Enter Employee Id"
        variant="outlined"
        value={userId}
        onChange={handleInputChange}
        sx={{ maxWidth: '500px', alignSelf: 'center' }}
      />
      <Button variant="contained" color="primary" onClick={handleFetchLog} sx={{ maxWidth: '200px', alignSelf: 'center' }}>
        Submit
      </Button>
    </Box>
  : <CheckInOut log={currLog} getBack={()=> setCurrLog(emptyLogRes)} handleClick={(type?) => handleClick(type)} />);
}
