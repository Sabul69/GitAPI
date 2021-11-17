import React from 'react'

const Form = ({handleSearch, handleUser}) => {
    return (
        <div>
        <div className="text-center">
        <input onChange={(e)=>handleUser(e)} className="text-xl p-2 mt-20 border-solid border-2 border-r-0 rounded-r-none rounded-xl" type="text" name="username" id="username" placeholder="Username" />
        <button onClick={handleSearch} className="text-xl p-2 bg-color1 font-bold text-color4 border-solid border-l-0 border-2 rounded-l-none rounded-xl border-color1 hover:bg-color4 hover:text-color1 transition">Search</button>
    </div>
        </div>
    )
}

export default Form
