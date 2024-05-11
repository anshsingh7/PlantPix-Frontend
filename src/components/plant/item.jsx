import React from 'react';
import {Link} from 'react-router-dom'
// import {FaSearch} from "react-icons/fa"

const Item = ({id, name, image, description, type}) => {
return(
    <div className='rounded-xl overflow-hidden shadow-lg'>
        <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
            <Link to={`plant/${id}`} className='h-12 w-12 bg-white rounded-full flex-Center absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
            {/* <FaSearch className='hover:rotate-90 hover:scale-125 transition-all duration-200'/> */}
            </Link> 
            <img src={image?image:""} alt='plantImage' className='w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>
        </div>
        <div className='p-4 overflow-hidden'>
            <h4 className='my-[6px] medium-16 line-clamp-2 text-green'>{name?name:""}</h4>
            <div className='flex gap-5'>
                <div className='bold-16'>{description?description:""}</div>
            </div>
        </div>
    </div>
)
}

export default Item;