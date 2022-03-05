import React from 'react';


const SimpleLink = ({text, linkTo}): JSX.Element => {
    return (
        <a href={linkTo}>{text}</a>
    )
}

export default SimpleLink;