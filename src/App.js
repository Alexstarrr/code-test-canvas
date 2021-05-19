import React, { useEffect, useRef } from 'react';
import './App.css';

const rgbColorLoop = () => {
  let rgbColor = [];
  for (let i = 8; i <= 256; i += 8){
    for (let j = 8; j <= 256; j += 8){
      for (let k = 8; k <= 256; k += 8){
          rgbColor.push([i,j,k])
      }
    }
  }
  return rgbColor;
}

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const allColors = rgbColorLoop();
    const closedPosList = [];
    const openPosList = [];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Check if position exist in array
    const checkPosition = (x,y,pArray) => {
      for(const position of pArray) {
        if (position[0] === x && position[1] === y)
          return  true;
        else
          continue;
      }
    }
    
    const fillPosWithColor = () => {
      const getPosAroundCenter = (x,y) => [[x-1,y],[x-1,y-1],[x,y-1],[x+1,y-1],[x+1,y],[x+1,y+1],[x,y+1],[x-1,y+1]];
      // starts the position array with center point
      openPosList.push([128,64]);
      while (closedPosList.length < allColors.length) {
        // pop out the checked position from open list 
        const centerPoint = openPosList.shift();
        // push the checked position to closed list
        closedPosList.push(centerPoint);
        const currentColor = allColors[closedPosList.indexOf(centerPoint)]
        // Start fill
        ctx.fillStyle = `rgb(${currentColor[0]},${currentColor[1]},${currentColor[2]})`;
        ctx.fillRect(centerPoint[0], centerPoint[1], 1, 1);    
        const x = centerPoint[0];
        const y = centerPoint[1];
        const posAroundCenter = getPosAroundCenter(x,y);
        for (const pos of posAroundCenter) {
          if (!checkPosition(pos[0],pos[1],openPosList) && !checkPosition(pos[0],pos[1],closedPosList) && pos[0]>=0 && pos[1]>=0 && pos[0]<=256 && pos[1]<=128)
          openPosList.push([pos[0],pos[1]]);
        }
      }
    }

    fillPosWithColor();
  },[])

  return (
    <div className="App">
      <canvas 
        ref={canvasRef}
        width={256}
        height={128}
      />   
    </div>
  );
}

export default App;
