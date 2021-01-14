import React from 'react';
import Review from './Review';
import { FaGithub } from 'react-icons/fa'; // run npm install react-icons to import react icons. Then import each icon from their library. the FaGithub icon is store in the 'react-icons/fa' library.

function App() {

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
