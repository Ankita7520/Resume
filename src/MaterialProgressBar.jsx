import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function MaterialProgressBar() {
  const progressValue = 50; // Set the progress value between 0 and 100

  return (
    <div>
      <h2>Material-UI Progress Bar</h2>
      <LinearProgress variant="determinate" value={progressValue} />
      <p>{progressValue}%</p>
    </div>
  );
}

export default MaterialProgressBar;
