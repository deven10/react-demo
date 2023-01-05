import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export const Products = () => {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : "",
        }
    }

  return (
    <>
        <div className='product__searchbox'>
            <input className='product__searchbar' type="search" placeholder='Search Products' />
        </div>
        <nav className='product__navlinks'>
            <NavLink style={navLinkStyles} to="featured">Featured</NavLink>
            <NavLink style={navLinkStyles} to="new">New</NavLink>
        </nav>
        <Outlet />
    </>
    )
}
