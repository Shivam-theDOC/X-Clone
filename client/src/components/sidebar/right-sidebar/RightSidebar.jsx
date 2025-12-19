import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./RightSidebar.css";

function RightSidebar() {
  // Mock news data - in real app, this would come from API
  const newsItems = [
    {
      id: 1,
      category: "Entertainment",
      headline: "Prabhas' Rebel Saab Single Releases Today at 8:11 p.m.",
      time: "2 days ago",
      postCount: "121.2K",
      avatars: ["/avatar1.jpg", "/avatar2.jpg"]
    },
    {
      id: 2,
      category: "Sports",
      headline: "Senuran Muthusamy Scores Maiden Test Century for South Africa in Guwahati",
      time: "5 hours ago",
      postCount: "10.9K",
      avatars: ["/avatar3.jpg", "/avatar4.jpg"]
    },
    {
      id: 3,
      category: "Sports",
      headline: "Smriti Mandhana Postpones Wedding After Father's Heart Attack",
      time: "2 hours ago",
      postCount: "1,674",
      avatars: ["/avatar5.jpg", "/avatar6.jpg", "/avatar7.jpg"]
    }
  ];

  return (
    <div className="rightSidebarContainer">
      {/* Search Box */}
      <div className="rightSidebar__search">
        <SearchIcon className="rightSidebar__searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Subscribe to Premium */}
      <div className="rightSidebar__section">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <Button variant="contained" className="rightSidebar__subscribeBtn">
          Subscribe
        </Button>
      </div>

      {/* Today's News */}
      <div className="rightSidebar__section">
        <div className="rightSidebar__sectionHeader">
          <h2>Today's News</h2>
          <CloseIcon className="rightSidebar__closeIcon" />
        </div>

        <div className="rightSidebar__newsItems">
          {newsItems.map((item) => (
            <div key={item.id} className="rightSidebar__newsItem">
              <div className="rightSidebar__newsContent">
                <div className="rightSidebar__newsCategory">
                  {item.category} · {item.time} · {item.postCount} posts
                </div>
                <div className="rightSidebar__newsHeadline">
                  {item.headline}
                </div>
              </div>
              <div className="rightSidebar__newsAvatars">
                {item.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    src={avatar}
                    className="rightSidebar__newsAvatar"
                    sx={{ width: 24, height: 24 }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's happening */}
      <div className="rightSidebar__section">
        <h2>What's happening</h2>
        <div className="rightSidebar__whatshappening">
          {/* Placeholder for what's happening content */}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
