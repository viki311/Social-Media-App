import { useSelector, UseSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
