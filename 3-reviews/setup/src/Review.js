import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRandom } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0); // Set the initial index to 0 to access the first value in the array.
  const { name, job, image, text } = people[index]; // Access the properties of each index value in the people array. As the index value changes, so will the person in the array.

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * people.length)
    // setIndex(newIndex);
    if (newIndex === index) {
      prevPerson();
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}><FaRandom /></button>
    </article>
  );
};

export default Review;
