import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  useEffect(() => {
    // fetch post by postId
    if (postId) {
      console.log("fetch post by postId");
    }
  }, []);

  return <div>Post {postId}</div>;
}

export default Post;
