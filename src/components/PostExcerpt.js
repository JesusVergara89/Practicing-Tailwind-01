import React from "react";
import AuthorPost from "./AuthorPost";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";

const PostExcerpt = ({ post }) => {
  return (
    <div
      className="w-2/3  border p-2 rounded-md flex flex-col hover:bg-slate-700 hover:cursor-pointer">
      <h3 className="text-slate-400 text-xl font-bold">{post.title}</h3>
      <p className="text-slate-400 text-sm">{post.body.substring(0, 100)}</p>
      <AuthorPost userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionBtn post={post} />
    </div>
  );
};

export default PostExcerpt;
