import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../store/slices/postSlice";
import { selectAllUsers } from "../store/slices/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePost = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("Error adding post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <label htmlFor="postAuthor">Author:</label>
        <select
          className="border p-2 rounded-md bg-red-400 hover:bg-red-500"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value="">Select author</option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="border p-2 rounded-md bg-red-400 hover:bg-red-500"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md disabled:bg-red-950"
          onClick={onSavePost}
          disabled={!canSave}
        >
          Add post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
