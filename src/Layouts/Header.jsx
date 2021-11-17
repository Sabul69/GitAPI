import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="bg-color1 w-auto flex justify-between">
        <p className ="my-1 px-5 py-3 bg-color4 text-color text-3xl text-center  font-bold rounded-t-full ml-1 w-auto">S</p>
        <h1 className="text-center text-color4 font-bold text-4xl py-3 w-11/12"><Link to="/">GitHub API</Link></h1>
        </header>
        <Outlet/>
        </>
    )
}

export default Header
