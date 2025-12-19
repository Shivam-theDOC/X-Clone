import LeftSidebar from "../../components/sidebar/left-sidebar/LeftSidebar";

import RightSidebar from "../../components/sidebar/right-sidebar/RightSidebar";

import Feed from "../../components/feed/Feed";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
};

export default HomePage;
