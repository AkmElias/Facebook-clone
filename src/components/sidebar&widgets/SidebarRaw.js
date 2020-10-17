import React from "react";
import { Avatar } from "@material-ui/core";

import "./SidebarRaw.css";

function SidebarRaw({ src, Icon, title }) {
  return (
    <div className="sidebarRaw">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRaw;
