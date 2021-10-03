import React from 'react';
import { string } from 'prop-types';

const HeaderTitle = ({title}) => {
    return <h1>{title}</h1>
}

HeaderTitle.propTypes = {
    title: string.isRequired
}

export default HeaderTitle;
