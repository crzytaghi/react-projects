import React, { useState } from 'react';

// We can access all of the props from the Tours component since we passed the {...tour}
const Tour = ({ id, image, info, price, name, removeTour }) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            ${price}
          </h4>
        </div>
        {/* info.substring(0,200) tells the broswer that we only want to display indexes 0 through 200 of the total string if readMore is false. */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        {/* Add a button that deletes that specific tour based on its id. */}
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
};

export default Tour;
