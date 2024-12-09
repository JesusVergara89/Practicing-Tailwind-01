import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "../store/slices/postSlice";
import AuthorPost from "./AuthorPost";

const PostList = () => {
  const post = useSelector(selectAllPost);

  const renderedPosts = post.map((post) => (
    <div
      className="w-2/3  border p-2 rounded-md flex flex-col hover:bg-slate-700 hover:cursor-pointer"
      key={post.id}
    >
      <h3 className="text-slate-400 text-xl font-bold">{post.title}</h3>
      <p className="text-slate-400 text-sm">{post.body.substring(0, 100)}</p>
      <AuthorPost userId={post.userId} />
    </div>
  ));

  return (
    <section className="flex flex-col items-center justify-center mb-16 gap-4">
      <h2 className="text-slate-400 text-2xl font-bold">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
