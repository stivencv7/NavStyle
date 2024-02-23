import React from 'react'



export const NavHome = ({ changeActiveNavItem, items, renderItem }) => {
  return (
    <div className="nav-container">
    {
      items.map((item, i) => (
        <div
          className={ `nav-item item-${i} ${item.active ? 'active' : ''}` }
          onClick={ () => changeActiveNavItem(i) }
        >
          { renderItem(item) }
        </div>
      ))
    }
    <div className="nav-item-highlighter" />
  </div>
  )
};