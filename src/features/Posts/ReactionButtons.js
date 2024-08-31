import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};
const ReactionButtons = ({ posts }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: posts.id, reaction: name }))
        }
      >
        {emoji}
        {posts.reactions[name] || 0}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
