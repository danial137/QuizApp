import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <main className='h-[100vh] flex items-center justify-center'>
            <SignUp />
        </main>
    )
}

export default page