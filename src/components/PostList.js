import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../store/slices/postSlice";
import PostExcerpt from "./PostExcerpt";

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

  let content;
  if (postStatus === "loading") {
    content = <h2 className="text-slate-400 text-2xl font-bold">Loading...</h2>;
  } else if (postStatus === "success") {
    const renderedPosts = post.map((post, index) => (
      <PostExcerpt key={index} post={post} />
    ));
    content = renderedPosts;
  } else if (postStatus === "failed") {
    content = (
      <h2 className="text-slate-400 text-2xl font-bold">{postError}</h2>
    );
  }

  return (
    <section className="flex flex-col-reverse items-center justify-center mb-16 gap-4">
      <h2 className="text-slate-400 text-2xl font-bold">Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
