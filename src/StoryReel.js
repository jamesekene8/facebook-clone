import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/1144695/pexels-photo-1144695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/925043/pexels-photo-925043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Anna Mila"
      />
      <Story
        image="https://images.pexels.com/photos/7224304/pexels-photo-7224304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
        profileSrc="https://images.pexels.com/photos/5572781/pexels-photo-5572781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Georgian Spenser"
      />
      <Story
        image="https://images.pexels.com/photos/9828293/pexels-photo-9828293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/2793772/pexels-photo-2793772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Mary Parks"
      />
      <Story
        image="https://images.pexels.com/photos/6450772/pexels-photo-6450772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/7037113/pexels-photo-7037113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Hannah Bright"
      />
      <Story
        image="https://images.pexels.com/photos/9784197/pexels-photo-9784197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/3277299/pexels-photo-3277299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Drey Hanson"
      />
    </div>
  );
};

export default StoryReel;
