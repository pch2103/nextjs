import React from 'react';

const Item = (props) => {
    const { data } = props.page;
    return (
        <div>
            {data.map(d => (
                <p className='text-gray-800 p-4 font-medium'
                   key={d.id}>{d.attributes.header}</p>
            ))}
        </div>
    );
};

export default Item;