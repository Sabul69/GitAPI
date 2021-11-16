import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="bg-color1 w-auto flex justify-between">
        <p className ="p-8 bg-color4 text-color text-4xl text-center  font-bold rounded-t-full mt-3 ml-1 w-auto">S</p>
        <h1 className="text-center text-color4 font-bold text-5xl py-8 w-11/12"><Link to="/">GitHub API</Link></h1>
        </header>
        <Outlet/>
        </>
    )
}

export default Header
