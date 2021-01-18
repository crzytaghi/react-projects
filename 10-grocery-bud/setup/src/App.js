import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return []
  };
}

function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      // display alert
      // setAlert({ show: true, msg: 'please enter values', type: 'danger' });
      showAlert(true, 'please enter value', 'danger'); // Then enter in the values that you want to be passed into setAlert function given the condition.
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
    } else {
      showAlert(true, 'item added to the list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]); // Add a newItem with an id and title key and add it to the list array.
      setName(''); // Clear the input field after the user has clicked submit.
    }
  };

  // create a showAlert function that takes three parameters and sets their defaults, if not values are entered, it will enter the values you passed as parameters. You can then, using ES6, call the setAlert state function and pass in the three parameter as long as their values are the same. You could have also writting setAlert(show:show,msg:msg,type:type) but since the keys and values are the same you only need to type the keys.
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type }); // PASS IN THE VALUES AS AN OBJECT IN ORDER TO ACCESS THEM
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id == id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // You can run your useEffect() function to run a setTimeout function on the setAlert state function which removes the value from the page after 4 seconds. Then return your cleanup callback function to remove the setTimeout from the memory.
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAlert({ ...alert, show: false });
  //   }, 4000);
  //   return () => {
  //     clearTimeout(timeout);
  //   }
  // }, [alert]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(event) => {
            setName(event.target.value);
          }} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {/* Only display the list of there are items in the list */}
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App
