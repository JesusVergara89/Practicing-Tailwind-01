import React, { useState } from 'react'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

  return (
    <section className='flex flex-col items-center justify-center mb-16 gap-4'>
        <h2 className='text-slate-500 text-center text-2xl font-bold' >Add new post</h2>
        <form className='flex flex-col items-center justify-center gap-4'>
            <label htmlFor='postTitle' >Post title:</label>
            <input
            type='text'
            id='postTitle'
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor='postContent' >Content:</label>
            <textarea
            id='postContent'
            value={content}
            onChange={onContentChanged}
            />
            <button className='bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md' >Add post</button>
        </form>
    </section>
  )
}

export default AddPostForm