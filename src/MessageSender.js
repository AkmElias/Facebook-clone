import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // some db logic here
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="What is on your mind"
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
