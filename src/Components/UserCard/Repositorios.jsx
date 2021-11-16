import React from 'react'

const Repositorios = ({nombre,url}) => {
    return (
        <div className="my-2">
        <h3 className="hover:text-color1"><a href={url}>{nombre}</a></h3>
        </div>
    )
}

export default Repositorios
