import React, { useState } from 'react'
import Form from '../../Components/Home/Form'
import UserCard from '../../Components/UserCard/UserCard'
import Loader from '../../Components/Loader/Loader'
import "./Home.styles.css"

const Home = () => {
    
    const [User, setUser] = useState()
    const [loader, setLoader] = useState(false)
    const [Information, setInformation] = useState(null)

    const handleSearch=async()=>{
        setInformation(null)
        setLoader(true)
        const API = `https://api.github.com/users/${User}`;
        const response = await fetch(API);
        const result = await response.json();
        setInformation(result)
        setLoader(false)
    }

    const handleUser=(e)=>{
        setUser(e.target.value);
    }

    return (
        <div className="h-screen ">
        <div className=" altura box">
            <Form
            handleUser={handleUser}
            handleSearch={handleSearch}
            />
            <div className="flex place-content-center">
        {Information &&
            (<UserCard
            avatar={Information?.avatar_url}
            github={Information?.html_url}
            github_name={Information?.login}
            public_repos={Information?.public_repos}
            followers={Information?.followers}
            following={Information?.following}
            error={Information.message}
            /> )
        }
        </div>
        {loader && <Loader />}
        </div>
        </div>
    )
}

export default Home
