import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";

import LeftSidebarOptions from "./LeftSidebarOptions";
import "./LeftSidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>this is sidebar</h1>
      <div>
        <XIcon className="sidebar__xImage" />
      </div>
      <div className="sidebar__options">
        <LeftSidebarOptions active Icon={<HomeIcon />} text="Home" />
        <LeftSidebarOptions Icon={<SearchIcon />} text="Search" />
        <LeftSidebarOptions
          Icon={<NotificationsNoneIcon />}
          text="Notifications"
        />
        <LeftSidebarOptions Icon={<MailOutlineIcon />} text="Messages" />
        <LeftSidebarOptions Icon={<PersonOutlineIcon />} text="Profile" />
        <LeftSidebarOptions Icon={<MoreHorizIcon />} text="More" />
      </div>
      <div>
        <Button variant="contained">Post</Button>
      </div>
    </div>
  );
}

export default Sidebar;
