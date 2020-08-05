import React from 'react';

const TabIndexItem = ({title, content}) => {
    return (
        <ul>
            <li>
                {title}
                <h3>{content}</h3>
            </li>
        </ul>
    )
}

export default TabIndexItem;