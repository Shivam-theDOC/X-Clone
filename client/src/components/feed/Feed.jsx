import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { MdOutlinePoll } from "react-icons/md";

import "./Feed.css";
import FeedPosts from "./FeedPost.jsx";
import { getPosts, createPost } from "../../services/postService";

function Feed() {
  const [activeTab, setActiveTab] = useState("for-you");
  const [post, setPost] = useState({
    postText: "",
    image: "",
    gif: "",
    tags: "",
    emojis: "",
    schedule: "",
    location: "",
  });
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const submitPost = async (e) => {
    e.preventDefault();
    if (!post.postText.trim()) return;

    try {
      await createPost(post);
      setPost({
        postText: "",
        image: "",
        gif: "",
        tags: "",
        emojis: "",
        schedule: "",
        location: "",
      });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post");
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts();
      setFeed(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <div className="feed__tabs">
          <div
            className={`feed__tab ${activeTab === "for-you" ? "feed__tab--active" : ""}`}
            onClick={() => setActiveTab("for-you")}
          >
            <span>For you</span>
            {activeTab === "for-you" && <div className="feed__tabIndicator" />}
          </div>
          <div
            className={`feed__tab ${activeTab === "following" ? "feed__tab--active" : ""}`}
            onClick={() => setActiveTab("following")}
          >
            <span>Following</span>
            {activeTab === "following" && <div className="feed__tabIndicator" />}
          </div>
        </div>
      </div>

      {/* Post Creation Box */}
      <div className="feed__tweetBox">
        <form onSubmit={submitPost}>
          <div className="feed__input">
            <Avatar />
            <input
              name="postText"
              type="text"
              placeholder="What's happening?"
              onChange={handleChange}
              value={post.postText}
            />
          </div>
          <div className="feed__inputOptions">
            <div className="feed__inputIcons">
              <PhotoOutlinedIcon className="feed__icon" />
              <GifBoxOutlinedIcon className="feed__icon" />
              <MdOutlinePoll className="feed__icon" />
              <SentimentSatisfiedOutlinedIcon className="feed__icon" />
              <EventRepeatOutlinedIcon className="feed__icon" />
              <PlaceOutlinedIcon className="feed__icon" />
            </div>
            <Button
              type="submit"
              variant="contained"
              className="feed__postButton"
              disabled={!post.postText.trim()}
            >
              Post
            </Button>
          </div>
        </form>
      </div>

      {/* Feed Posts */}
      {loading ? (
        <div className="feed__loading">Loading.....</div>
      ) : error ? (
        <div className="feed__error">{error}</div>
      ) : feed.length === 0 ? (
        <div className="feed__empty">No posts yet</div>
      ) : (
        feed.map((feedPost) => (
          <FeedPosts
            key={feedPost.id}
            id={feedPost.id}
            displayName={feedPost.displayName || "User Name"}
            username={feedPost.username || "username"}
            verified={feedPost.verified || false}
            timestamp={feedPost.timestamp || new Date()}
            postText={feedPost.postText}
            image={feedPost.image}
            avatar={feedPost.avatar}
            likes={feedPost.likes || 0}
            retweets={feedPost.retweets || 0}
            comments={feedPost.comments || 0}
            views={feedPost.views || 0}
            isAd={feedPost.isAd || false}
          />
        ))
      )}
    </div>
  );
}

export default Feed;
