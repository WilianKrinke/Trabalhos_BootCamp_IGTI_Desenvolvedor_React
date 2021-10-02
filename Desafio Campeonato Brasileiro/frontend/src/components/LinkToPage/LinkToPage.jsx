import React from 'react';
import { Link } from 'react-router-dom';

const LinkToPage = ({url, title}) => {
    return <Link to={url}>{title}</Link>
}

export default LinkToPage;
