import React from 'react'
import { Feed } from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Save, Share, Steal
            <br className='max-md: hidden' />
            <span>
                AI prompts
            </span>
        </h1>

        <p className='desc text-center'>
            open source AI prompting tool
        </p>

        <Feed />
    </section>
  )
}

export default Home