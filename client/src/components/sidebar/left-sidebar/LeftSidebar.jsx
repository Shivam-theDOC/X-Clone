import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { BsLightningCharge } from "react-icons/bs";

import LeftSidebarOptions from "./LeftSidebarOptions";
import "./LeftSidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <XIcon className="sidebar__xImage" />
      </div>

      <div className="sidebar__options">
        <LeftSidebarOptions active Icon={<HomeIcon />} text="Home" />
        <LeftSidebarOptions Icon={<SearchIcon />} text="Explore" />
        <LeftSidebarOptions
          Icon={<NotificationsNoneIcon />}
          text="Notifications"
          badge={6}
        />
        <LeftSidebarOptions Icon={<MailOutlineIcon />} text="Messages" />
        <LeftSidebarOptions
          Icon={<BsLightningCharge />}
          text="Grok"
        />
        <LeftSidebarOptions Icon={<PeopleOutlineIcon />} text="Communities" />
        <LeftSidebarOptions Icon={<PersonOutlineIcon />} text="Profile" />
        <LeftSidebarOptions Icon={<MoreHorizIcon />} text="More" />
      </div>

      <div className="sidebar__postButton">
        <Button variant="contained" fullWidth>Post</Button>
      </div>

      <div className="sidebar__profile">
        <div className="sidebar__profileInfo">
          <Avatar src="" alt="User" />
          <div className="sidebar__profileText">
            <h4>Shivam Singh</h4>
            <p>@docgaming1tw</p>
          </div>
        </div>
        <MoreHorizIcon className="sidebar__profileMore" />
      </div>
    </div>
  );
}

export default Sidebar;
