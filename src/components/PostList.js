import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../store/slices/postSlice";
import AuthorPost from "./AuthorPost";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";

const PostList = () => {
  const dispatch = useDispatch();

  const post = useSelector(selectAllPost);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const renderedPosts = post.map((post) => (
    <div
      className="w-2/3  border p-2 rounded-md flex flex-col hover:bg-slate-700 hover:cursor-pointer"
      key={post.id}
    >
      <h3 className="text-slate-400 text-xl font-bold">{post.title}</h3>
      <p className="text-slate-400 text-sm">{post.body.substring(0, 100)}</p>
      <AuthorPost userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionBtn post={post} />
    </div>
  ));

  return (
    <section className="flex flex-col-reverse items-center justify-center mb-16 gap-4">
      <h2 className="text-slate-400 text-2xl font-bold">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
