import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // if the tour id does not match the id that is being returned (the id of the tour being clicked on), it will be returned in the newTours variable which is the remaining tours. 
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true); // WIll breifly display loading on the screen then the remainder of the function will run.
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    console.log(tours);
  };

  // Runs on initial page load and runs the fetchTours function to access the data from the api
  useEffect(() => {
    fetchTours();
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={() => fetchTours()} className='btn'>fetch tours</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </main>
  )
}

export default App;
