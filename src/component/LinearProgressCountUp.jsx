import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useCountUp } from 'use-count-up';
import {products} from '../data/data';

export default function LinearProgressCountUp() {
  const { value } = useCountUp({
    isCounting: true,
    duration: 2,
    easing: 'linear',
    start: 0,
    end: 75 ,
    onComplete: () => ({
      shouldRepeat: false,
      delay:2,
    }),
  });
  
  return (
   
    <LinearProgress
    
    variant='determinate'
    value={Number(value)}
    >
     <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
        {/* LOADING… {`${Math.round(Number(value))}%`} */}
      </Typography>
   </LinearProgress>
  
 
  );
}