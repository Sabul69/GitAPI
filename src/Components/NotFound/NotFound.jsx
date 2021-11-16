import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-col w-full h-96 mt-40 bg-color4  justify-evenly items-center">
            <h3 className="text-5xl font-bold w-full text-center">Sorry, Not Found :(</h3>
                <h4 className="font-bold"><Link to="/">Go back</Link></h4>
        </div>
    )
}

export default NotFound
