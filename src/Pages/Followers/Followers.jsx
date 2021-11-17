import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import UserCard from "../../Components/UserCard/UserCard";

//Components

const Followers = () => {
  //Hooks
  const { user } = useParams();
  //State
  const [followers, setFollowers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setFollowers([]);
    setLoader(true);
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const result = await response.json();
      setFollowers(result);
    };
    handleUserFollowers();
    setLoader(false);
  }, [user]);

  return (
    <div className="">
      <h2 className="pt-12 font-bold text-3xl text-left ml-44">{`Followers: ${user}`}</h2>
      <div className="flex flex-wrap w-11/12 m-auto justify-around">
        {followers && followers.length > 0 && !loader ? (
            followers.map(user => (
            <UserCard
                key={user.id}
                avatar={user.avatar_url ? user.avatar_url : null}
                github={user.html_url}
                github_name={user.login}
            />
            ))
        ) : (
            <Loader/>
        )}
      </div>
    </div>
  );
};

export default Followers;