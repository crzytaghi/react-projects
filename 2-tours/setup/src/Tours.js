import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
      </div>
      <div className='underline'>

      </div>
      <div>
        {tours.map((tour) => {
          // {...tour} allows us to access all of the props in the Tour component.
          // Passed the removeTour function from the App.js file which we then pass down to the Tour component using prop drilling.
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
};

export default Tours;
