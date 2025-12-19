import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { formatRelativeTime } from "../../utils/formatTime";
import { formatNumber } from "../../utils/formatNumber";
import { likePost, retweetPost, bookmarkPost } from "../../services/postService";
import "./FeedPost.css";

function FeedPosts({
  id,
  displayName,
  username,
  verified,
  timestamp,
  postText,
  image,
  avatar,
  likes: initialLikes,
  retweets: initialRetweets,
  comments: initialComments,
  views,
  isAd,
}) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [retweets, setRetweets] = useState(initialRetweets);

  const handleLike = async (e) => {
    e.stopPropagation();
    try {
      await likePost(id);
      setLiked(!liked);
      setLikes(liked ? likes - 1 : likes + 1);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleRetweet = async (e) => {
    e.stopPropagation();
    try {
      await retweetPost(id);
      setRetweeted(!retweeted);
      setRetweets(retweeted ? retweets - 1 : retweets + 1);
    } catch (error) {
      console.error("Error retweeting post:", error);
    }
  };

  const handleBookmark = async (e) => {
    e.stopPropagation();
    try {
      await bookmarkPost(id);
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error("Error bookmarking post:", error);
    }
  };

  const handleComment = (e) => {
    e.stopPropagation();
    console.log("Comment on post:", id);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    console.log("Share post:", id);
  };

  return (
    <div className="feed__post">
      <div className="feed__userAvatar">
        <Avatar src={avatar || image} />
      </div>

      <div className="feed__postBody">
        <div className="feed__postHeader">
          <div className="feed__postHeaderText">
            <div className="feed__postHeaderInfo">
              <h3>
                {displayName}
                {verified && <VerifiedIcon className="feed__badge" />}
              </h3>
              <span className="feed__username">@{username}</span>
              <span className="feed__dot">·</span>
              <span className="feed__timestamp">
                {formatRelativeTime(timestamp)}
              </span>
              {isAd && <span className="feed__adLabel">Ad</span>}
            </div>
          </div>
          <MoreHorizIcon className="feed__moreIcon" />
        </div>

        <div className="feed__postText">
          <p>{postText}</p>
        </div>

        {image && <img src={image} alt="Post content" className="feed__postImage" />}

        <div className="feed__postFooter">
          <div className="feed__footerItem feed__footerItem--comment" onClick={handleComment}>
            <HiOutlineChatBubbleOvalLeft className="feed__footerIcon" />
            {initialComments > 0 && <span>{formatNumber(initialComments)}</span>}
          </div>

          <div
            className={`feed__footerItem feed__footerItem--retweet ${retweeted ? "feed__footerItem--retweeted" : ""}`}
            onClick={handleRetweet}
          >
            <AiOutlineRetweet className="feed__footerIcon" />
            {retweets > 0 && <span>{formatNumber(retweets)}</span>}
          </div>

          <div
            className={`feed__footerItem feed__footerItem--like ${liked ? "feed__footerItem--liked" : ""}`}
            onClick={handleLike}
          >
            {liked ? (
              <FaHeart className="feed__footerIcon" />
            ) : (
              <FiHeart className="feed__footerIcon" />
            )}
            {likes > 0 && <span>{formatNumber(likes)}</span>}
          </div>

          <div className="feed__footerItem feed__footerItem--views">
            <BiBarChart className="feed__footerIcon" />
            {views > 0 && <span>{formatNumber(views)}</span>}
          </div>

          <div className="feed__footerGroup">
            <div
              className={`feed__footerItem feed__footerItem--bookmark ${bookmarked ? "feed__footerItem--bookmarked" : ""}`}
              onClick={handleBookmark}
            >
              {bookmarked ? (
                <FaBookmark className="feed__footerIcon" />
              ) : (
                <FiBookmark className="feed__footerIcon" />
              )}
            </div>

            <div className="feed__footerItem feed__footerItem--share" onClick={handleShare}>
              <RiShare2Line className="feed__footerIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPosts;
