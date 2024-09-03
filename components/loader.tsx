import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

export function Loader() {
  
    return (
        <section className='flex flex-col items-center z-[300] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <CircularProgress />
        <Typography sx={{ mt: 2 }} color="white">
            Loading...
        </Typography>
    </section>
            )
}
