import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const LinkToPage = ({url, title}) => {
    return <Link to={url} data-testid="routerlink">{title}</Link>
}

LinkToPage.propTypes = {
    url: string.isRequired,
    title: string.isRequired
}

export default LinkToPage;
