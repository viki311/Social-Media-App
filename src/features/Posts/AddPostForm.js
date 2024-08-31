import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { PostAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => {
    console.log(userId, "UserID");
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(PostAdded(title, content, userId));
      setContent("");
      setTitle("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const UserOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post.</h2>
      <form>
        <label htmlFor="PostTitle">Post Title:</label>
        <input
          type="text"
          onChange={onTitleChange}
          id="PostTitle"
          value={title}
          name="PostTitle"
        />
        <label htmlFor="postAuthor">Post Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value="">select</option>
          {UserOptions}
        </select>
        <label htmlFor="PostContent">Post Content:</label>
        <textarea
          type="text"
          onChange={onContentChange}
          id="PostContent"
          value={content}
          name="PostContent"
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
