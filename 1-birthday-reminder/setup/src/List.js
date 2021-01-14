import React from 'react';

// Desctructer the people prop as the paramter in order to access each object in the list
const List = ({ people, setPeople }) => {

  const deleteItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        // Desctructure each person in order to access each key value within each person object
        const { id, name, age, image } = person;
        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
            <button style={{ width: '7rem', justifyContent: 'start', alignContent: 'start' }} className='btn' onClick={() => deleteItem(id)}>Delete</button>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
