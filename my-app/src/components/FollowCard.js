import React from 'react';

const UserCard = (props) =>{

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.login}</p>
            <p>{props.email}</p>
            <p>{props.location}</p>
            <img src = {props.avatar} />
        </div>
    );
}

export default UserCard;