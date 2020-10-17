import React from "react";

import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-12-02-2018-04-33-40.jpg?1"
        profileSrc="https://in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-12-02-2018-04-33-40.jpg?1"
        title="Samanta"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ2tWq4FFUZvo67qmHh4zxBY87xdHhdwcJ2g&usqp=CAU"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_ajPBZShh2Afi_8g5cny3C_l_gAjwLIyVgs1GA=s83-c-mo"
        title="Akm Elias"
      />
      <Story
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-12-02-2018-04-33-40.jpg?1"
        profileSrc="https://in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-12-02-2018-04-33-40.jpg?1"
        title="Priya prakash"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ2tWq4FFUZvo67qmHh4zxBY87xdHhdwcJ2g&usqp=CAU"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_ajPBZShh2Afi_8g5cny3C_l_gAjwLIyVgs1GA=s83-c-mo"
        title="Rafe kazi"
      />
    </div>
  );
}

export default StoryReel;
