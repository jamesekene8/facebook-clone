import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });
  // }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTgxNzYwNzM3MjE4MTQzMzYz/screen-shot-2021-06-15-at-63133-pm.png"
        message="This is my first post"
        timestamp="This is a stamp"
        username="Edwin Diaz"
        image="https://cms.harlequinfloors.com/wp-content/uploads/2020/01/jumping-dancers-scaled.jpg"
      />
      <Post
        profilePic="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTgxNzYwNzM3MjE4MTQzMzYz/screen-shot-2021-06-15-at-63133-pm.png"
        message="This is my first post"
        timestamp="This is a stamp"
        username="Edwin Diaz"
      />
    </div>
  );
};

export default Feed;
