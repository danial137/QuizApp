"use client"
import { chart, home } from '@/utils/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    const pathname = usePathname()

    const menu = [
        {
            name: "Home",
            icon: home,
            link: '/'
        },
        {
            name: "My Stats",
            icon: chart,
            link: '/'
        }
    ]

    return (
        <div className='min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center'>
            <nav className='flex-1 flex items-center justify-between'>
                <Link href='/' className='flex items-center gap-2'>
                    <Image src="/icon--logo-lg.png" alt='logo' width={50} height={50} />
                    <h1 className='text-3xl font-bold text-blue-400'>Persian Quiz </h1>
                </Link>

                <ul className='flex items-center gap-8'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className={`py-1 px-6 flex items-center gap-2 text-lg leading-none text-gray-400 rounded-lg`}>
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}

export default Header