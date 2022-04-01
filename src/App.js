import React, {useState} from 'react';
import items from './data';
import Navbar from './Navbar';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return;
    }

    const newCategory = items.filter((item) => item.category === category);
    setMenuItems(newCategory);
  };
  
  return (
    <>
      <Navbar />
      <main>
        <section className="section menu">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu menuItems={menuItems}/>
        </section>
      </main>
    </>
  )
}

export default App
