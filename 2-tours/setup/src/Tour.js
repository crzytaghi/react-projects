import React, { useState } from 'react';

// We can access all of the props from the Tours component since we passed the {...tour} spread opeartors
const Tour = ({ id, image, info, price, name, removeTour }) => {

  const [readMore, setReadMore] = useState(false);

  const toggleInfo = () => {
    setReadMore(!readMore);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={toggleInfo}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
