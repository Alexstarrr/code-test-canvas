import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  // const ctx = canvas.getContext("2d");
  useEffect(() => {
    // const rgbColorLoop = () => {
    //   let rgbColor = [];
    //   for (let i = 8; i <= 256; i += 8){
    //     for (let j = 8; j <= 256; j += 8){
    //       for (let k = 8; k <= 256; k += 8){
    //           rgbColor.push([i,j,k])
    //       }
    //     }
    //   }
    //   // rgbColor = rgbColor.slice(0,4000);
    //   return rgbColor;
    // }
    // const oldrgbColor = rgbColorLoop();
    // setPixelColor(rgbColorLoop());
    // console.log(canvasRef);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')
    let rgbColor = [];
    let index = 0;
    for (let i = 8; i <= 256; i += 8){
      for (let j = 8; j <= 256; j += 8){
        for (let k = 8; k <= 256; k += 8){
            rgbColor.push([i,j,k])
            ctx.fillStyle= `rgb(${i},${j},${k}`;
            ctx.fillRect(index%256, Math.floor(index/256), 1, 1);
            index ++ ;
        }
      }
    }
      // ctx.fillStyle= `rgb(${el[0]},${el[1]},${el[2]}`;
      // ctx.fillRect(index%256, Math.floor(index/256), 1, 1);

    // ctx.fillStyle = "rgb(256,8,256)";
    // ctx.fillRect(1, 0, 1, 1);
    // console.log(pixelColor);
  },[])

  return (
    <div className="App">
      <canvas 
        ref={canvasRef}
        width={256}
        height={128}
        data-testid="canvas"
      />   
    </div>
  );
}

export default App;
