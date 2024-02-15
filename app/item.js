import React from 'react';
import Image from "next/image";

const Item = (props) => {
    const {data} = props.page;

    const main = 'https://strapi.cherenkov.xyz'

    return (
        <div>
            {data.map(d => (
                    <div key={d.id}>
                        {d.attributes.pic.data !== null ?
                                <Image width={64}
                                       height={64}
                                       className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                                       src={main + d.attributes.pic.data?.attributes.url}
                                       alt={d.id}/> : <></>
                        }
                        <p className='text-gray-800 p-4 font-medium'
                        >{d.attributes.header}</p>

                    </div>
                )
            )}
        </div>
    )
        ;
};

export default Item;