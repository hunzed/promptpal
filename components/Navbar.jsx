"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2'>
            <Image src="/public/assets/images/logo.sv" alt="logo" width={80} height={40} className='object-contain'></Image>
        </Link>
    </nav>
  )
}

export default Navbar