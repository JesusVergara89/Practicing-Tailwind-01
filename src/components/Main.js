import React from 'react'
import Rockets from './Rockets'

const Main = () => {
  return (
    <main className='max-w-4xl mx-auto'>
        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40'>
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
        <section id='rockets' className='p-6 my-12 scroll-mt-20'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Our rockets
            </h2>
            <Rockets />
        </section>
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
        <section id='testimonials' className='p-6 my-12'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Testimonials
            </h2>
            <figure className='my-12'>
                <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
                    <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 custom-quote custom-quote-font custom-quote-position custom-quote_ custom-quote-font_ custom-quote-position_' ></p>
                </blockquote>
            </figure>
            <figcaption className='italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400' >
                &#8212; Jesus V. Arias, Genius
            </figcaption>
        </section>
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
        <section id='contact' className='p-6 my-12'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Contact
            </h2>
        </section>
    </main>
  )
}

export default Main