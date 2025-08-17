import React, { useState, useEffect } from "react";
import axios from "axios";

const databaseURL = import.meta.env.VITE_FIREBASE_URL;

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!postId) {
    console.error("❌ postId is required for LikeButton");
    return null;
  }

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await axios.get(`${databaseURL}/posts/${postId}.json`);
        if (res.data?.likes !== undefined) {
          setLikes(res.data.likes);
        }
      } catch (err) {
        console.error("Error fetching likes:", err);
      }
    };
    fetchLikes();
  }, [postId]);

  const handleLike = async () => {
    try {
      const newLikes = liked ? likes - 1 : likes + 1;
      await axios.patch(`${databaseURL}/posts/${postId}.json`, { likes: newLikes });
      setLikes(newLikes);
      setLiked(!liked);
    } catch (err) {
      console.error("Error updating likes:", err);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      {/* Like button */}
      <div
        onClick={handleLike}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
      >
        <img
          src="/hu.png"
          alt="Like"
          style={{
            width: "40px",
            height: "40px",
            filter: liked ? "brightness(1)" : "grayscale(100%)",
            marginTop: "3px",
          }}
        />
      </div>

      {/* Like count */}
      <div
        style={{
          marginTop: "6px",
          fontSize: "14px",
          color: "#fff",
          textShadow: "0 0 4px rgba(0,0,0,0.4)",
          backgroundColor: "#064232",
          padding: "8px",
          borderRadius: "20px",
        }}
      >
        {likes} {likes === 1 ? "Like" : "Likes"}
      </div>
    </div>
  );
};

export default LikeButton;
