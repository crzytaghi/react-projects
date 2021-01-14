import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// new Set pulls all of the data and only returns unique values. Since we are mapping through the items array and only returning the categories, Set will only return the unique categories from that array as an object. 
// We add the ... spread operator to spread out the new Set object into the allCategories array and also add 'all' in order to access all values.
// Any new items added to the items array will be added to the list. If it contains a new category then it will be added as an index in the allCategories array automatically and the button will get added to the page.
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // filterItems takes a parameter category, which is a string, then filters the remaining list based on the category you selected. If the item.category is equal to the category of the button the user clicked, it will display only those items.
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline">
          </div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
