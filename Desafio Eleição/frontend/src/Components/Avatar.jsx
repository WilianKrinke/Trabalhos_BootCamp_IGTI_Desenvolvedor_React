import React from 'react';

const Avatar = ({nameImage}) => {
    return <img src={require(`../assets/${nameImage}.png`)} alt={nameImage} />  
}

export default Avatar;
