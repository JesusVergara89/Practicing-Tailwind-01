import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdd } from "../store/slices/postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postAdd({
          id: nanoid(),
          title,
          body: content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mb-16 gap-4">
      <h2 className="text-slate-500 text-center text-2xl font-bold">
        Add new post
      </h2>
      <form className="flex flex-col items-center justify-center gap-4">
        <label htmlFor="postTitle">Post title:</label>
        <input
          className="border p-2 rounded-md bg-red-400 hover:bg-red-500"
          type="text"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="border p-2 rounded-md bg-red-400 hover:bg-red-500"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={onSavePost}
        >
          Add post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
