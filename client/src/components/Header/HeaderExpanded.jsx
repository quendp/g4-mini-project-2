import React from 'react'
import HeaderNavMenu from './HeaderNavMenu'
import HeaderCategories from './HeaderCategories'

const HeaderExpanded = (props) => {

  return (
    <nav className={props.onBurgerClick + " h-nav-container d-flex flex-column justify-content-start align-items-center pt-5"}>
        <HeaderNavMenu />
        <HeaderCategories onBurgerClick = {props.onBurgerClick} categoriesData = {props.categoriesData} />
    </nav>
  )
}

export default HeaderExpanded