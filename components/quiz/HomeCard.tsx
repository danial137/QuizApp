import { ICategory } from '@/types/types'
import Image from 'next/image'
import React from 'react'

interface Props {
    category: ICategory
}


const HomeCard = ({ category }:Props) => {
    return (
        <div className='border-2 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1) hover:-translate-y-1 transition-transform duration-300 ease-in-out]'>
            <div className='rounded-xl h-[9rem] py-1'>
                <Image src={category.image ? category.image : `/categories/image--${category.name.toLowerCase().split("").join("-")}.svg`}
                    alt={category.name}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                />
            </div>
        </div>
    )
}

export default HomeCard