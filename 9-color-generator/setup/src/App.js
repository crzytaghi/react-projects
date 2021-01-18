import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10)); //Sets the list default value to the #f15025 color which is displayed to the page.

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10); //Accesses the values.js package and displays 1 base color that the user entered and 10% of each tint and shade with a total of 21 colors since 10% of 100 is 10 which shows 10 of each tint and shade. If we entered all(20) then we would only show 20% of the color so 5 colors for tint and shade
      setList(colors); // Taken from the value that the user entered into the input
    } catch (error) {
      setError(true)
      console.log(error);
    }

  };

  return (
    <React.Fragment>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => {
              setColor(event.target.value); //Set the color to what ever value the user enters into the input box
            }}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`} /> {/* If the user enters an incorrect value, the class of the input box is changed to 'error', which outlines the box in red. */}
          <button className="btn" type="submit">submit</button>
        </form>
      </section>
      <section className="colors">
        {/* map through the list array which contains the base color as well as all of the tints and shades from the users input color. */}
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </React.Fragment>
  )
}

export default App
