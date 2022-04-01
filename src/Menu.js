import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <article class="section-center">
      {menuItems.map((items) => {
        const { title, id, desc, img, price } = items;
        return (
          <artilce className="menu-items" key={id}>
            <img src={img} alt={title} />
            <div className="items-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <div className="text">
                <p>{desc}</p>
              </div>
            </div>
          </artilce>
        )
      })}
    </article>
  )
}

export default Menu
