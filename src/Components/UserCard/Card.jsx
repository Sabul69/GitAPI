import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Repositorios from './Repositorios'

const Card = ({rest}) => {
    const [repos, setrepos] = useState(false)
    const [infoRepos, setinfoRepos] = useState([])
    const {avatar, github, github_name, public_repos, followers, following} = rest
    const {pathname} = useLocation();
    // console.log(rest)

    useEffect(() => {
       if (repos) {
           const handleFetch=async()=>{
                const response = await fetch(`https://api.github.com/users/${github_name}/repos`)
                const result = await response.json();
                setinfoRepos(result);            }
            handleFetch();
            console.log("1")
       } 
    }, [repos, github_name])

    const handleRepos=()=>{
        setinfoRepos([])
        setrepos(!repos)
    }
    return (
        <div className="">
            <div className="rounded-full border-solid border-2 card-header w-44 mx-auto">
            <img src={avatar} alt={github} className="rounded-full w-44 h-44" />
        </div>
        <div className="m-10"><h2 className="text-center text-2xl mb-5 font-bold">{github_name}</h2></div>
            <div className="card-body flex justify-between items-center flex-wrap">
                <p onClick={handleRepos} className={`mr-8 hover:text-color2 ${pathname!=="/" ? "hidden" :""}`} >
                <span className=" text-xl	font-bold"> Repositorios: </span>{" "}
                {public_repos}
                </p>
                <p className={`mr-8 hover:text-color2 ${pathname!=="/" ? "hidden" :""}`}>
                <Link to={`/followers/${github_name}`}>
                    <span className=" text-xl	font-bold	"> Followers: </span>{" "}
                    {followers}
                </Link>
                </p>
                <p className={`mr-8 ${pathname!=="/" ? "hidden" :""}`}>
                <span className="text-xl font-bold	"> Following: </span>{" "}
                {following}
                </p>
            </div>
            <div className="mt-5 text-center">
            <button className={`rounded-xl bg-color1 text-color4 border-solid border-2 border-black p-2 font-bold hover:bg-color4 hover:text-color1 transition ${pathname==="/" ? "" :""}`}><a href={github}>Ir al perfil</a></button>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h3 className={`font-bold text-xl my-3 ${repos ? "" : "hidden" }`}>Ir a repositorio</h3>
            {repos&& infoRepos.map(user =>(<Repositorios
                nombre={user.name}
                url={user.html_url}/>))

            }
            </div>
        </div>
    )
}

export default Card
