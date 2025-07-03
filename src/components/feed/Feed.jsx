import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import "./Feed.css";
import FeedPosts from "./FeedPost.jsx";

import db from "../../database/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Feed() {
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

  const handleChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), post);
      setPost({
        postText: "",
        image: "",
        gif: "",
        tags: "",
        emojis: "",
        schedule: "",
        location: "",
      });
      getPosts(); // refresh feed after post
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    try {
      const posts = collection(db, "posts");
      const postSnapshot = await getDocs(posts);
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeed(postList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(feed);

  return (
    <div className="feed">
      <h1>this is feed</h1>
      <div className="feed__options">
        <div className="feed__options___forYou">
          <h3>For you</h3>
        </div>
        <div className="feed__options___following">
          <h3>Following</h3>
        </div>
      </div>

      <div className="feed__postContainer">
        <div className="profileAvatar">
          <Avatar />
        </div>
        <div className="post">
          <form onSubmit={submitPost}>
            <input
              name="postText"
              type="text"
              placeholder="What's happening?"
              onChange={handleChange}
              value={post.postText}
            />
            <Button type="submit" variant="outlined">
              Post
            </Button>
          </form>
          <PhotoOutlinedIcon />
          <GifBoxOutlinedIcon />
          <DnsOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
          <EventRepeatOutlinedIcon />
          <PlaceOutlinedIcon />
        </div>
      </div>

      <div className="feed__postFeed">
        {feed.length == 0 ? (
          <p>Loading.....</p>
        ) : (
          feed.map(({ id, postText, image, gif, tags, emojis }) => {
            {
              /* const { lat, long } = location;
              const { seconds, nanoseconds } = schedule; */
            }
            return (
              <FeedPosts
                key={id}
                postText={postText}
                image={image}
                gif={gif}
                tags={tags}
                emojis={emojis}
                //   schedule={{ seconds: seconds, nanoseconds: nanoseconds }}
                //   location={{ latitude: lat, longitude: long }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Feed;
