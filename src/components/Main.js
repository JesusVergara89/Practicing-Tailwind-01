import React from 'react'

const Main = () => {
  return (
    <main className='max-w-4xl mx-auto'>
        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12'>
            <article className='sm:w-1/2'>
            <h2 className='max-w-md text-5xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white'>
                We boldy go <span className='text-indigo-700 dark:text-indigo-300'>where no rockets</span> has been before...
            </h2>
            <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
                We're building rockets for the next century today. From the Moon to Mars, Jupiter and beyond.
            </p>
            <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
                Think ACME Rockets.
            </p>
            </article>
            <img src='/rocketdab.png' alt='rocketdab' className='w-1/2' />
        </section>
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
    </main>
  )
}

export default Main