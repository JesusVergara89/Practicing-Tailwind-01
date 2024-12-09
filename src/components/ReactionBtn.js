import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../store/slices/postSlice";

const reactionsEmojis = {
  thumbsUp: "👍",
  wow: "😱",
  heart: "❤️",
  rocket: "🚀",
  coffe: "☕️",
};

const ReactionBtn = ({ post }) => {
  const dispatch = useDispatch(reactionAdded);
  const reacttionBtns = Object.entries(reactionsEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="border p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 disabled:bg-red-950"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div className="min-w-fit flex flex-wrap justify-center gap-3">{reacttionBtns}</div>;
};

export default ReactionBtn;
