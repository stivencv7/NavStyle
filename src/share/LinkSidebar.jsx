import React from 'react'
import { Link } from 'react-router-dom'

export const LinkSidebar = ({moreStyle,icon}) => {
  return (
    <li className={`text-color-icons  text-[20px] ${moreStyle}`}>{icon}</li>
  )
}
