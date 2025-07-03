function FeedPosts({ postText, image, gif, tags, emojis, schedule, location }) {
  return (
    <div>
      <div className="feed__userAvatar"></div>
      <div className="feed__postBody"></div>
      <h1>{postText}</h1>
      <h1>{image}</h1>
      <h1>{gif}</h1>
      <h1>{tags}</h1>
      <h1>{emojis}</h1>
      <h1>{schedule}</h1>
      <h1>{location}</h1>
    </div>
  );
}

export default FeedPosts;
