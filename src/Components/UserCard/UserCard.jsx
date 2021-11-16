import React from 'react'
import Card from './Card';
import Error from './Error';

//css
import './UserCard.styles.css'
const UserCard = ({error, ...rest}) => {
    return (
      
      <div className="rounded-lg box-content mx-3 card bg-color4">
        {error? (<Error/>) : <Card rest={rest}/>}
    </div>
    )
}

export default UserCard
