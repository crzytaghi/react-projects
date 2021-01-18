import React, { useState, useEffect } from 'react'
import rgbToHex from './utils' // function pulled from stack-overflow to convert RGB values to hex

const SingleColor = ({ rgb, weight, index, hexColor }) => {

  const [alert, setAlert] = useState(false);

  // join the rgb array to get a string of all the rbg values separated by commas. 
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`; // Set the hexValue to the hexColor including the '#' so that when it is copied to the clipboard with the correct syntax.

  // When the user clicks on each article, it will copy the hexValue of each color to the clipboard.
  const copyValue = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  // Will run on pageload and after every instance the alert value is updated. Will display the information on the article the user clicked on and delete that value after 3 seconds. Then will remove the setTimeout function by returning a cleanup function.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [alert])

  // const hex = rgbToHex(...rgb);

  return (
    // if the index value is greater than 10, it will add a 'color-light' class to that specific article. We also set the background color to the rgb value that we generated. After every render, the index values are tied to the array from 0-20. As the index value grows, the colors get darker.
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={copyValue}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {/* if alert is true, will display copied to clipbaord as text in the square. */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
