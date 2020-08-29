import React from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./Sidebar.css";
import SidebarRaw from "./SidebarRaw";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRaw src={user.photoURL} title={user.displayName} />
      <SidebarRaw
        Icon={LocalHospitalIcon}
        title="Covid-19 Information center"
      />
      <SidebarRaw Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRaw Icon={PeopleIcon} title="Friends" />
      <SidebarRaw Icon={ChatIcon} title="Messenger" />
      <SidebarRaw Icon={StoreFrontIcon} title="MarketPlace" />
      <SidebarRaw Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRaw Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
