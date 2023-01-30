import React, { useEffect, useState } from "react";
import Mobmenu from "./Mobmenu";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [homes, setHome] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const posts = await response.json();
      setPosts(posts);
      //console.log(posts);
    }
    async function homepagecontent() {
      const homepagedata = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const homedata = await homepagedata.json();
      setHome(homedata.acf);
      //console.log(homedata.acf);
    }

    loadPosts();
    homepagecontent();
  }, []);
  // console.log(homes);
  return (
    <div>
      <>
        <div className="home-sec" id="top-sections">
          <div className="main-slide">
            <Mobmenu />
              <video
                className="videoTag video-overly desktops"
                autoPlay
                loop
                muted
                poster={homes.hero_banner_image}
                >
                {homes.hero_video && (
                <source src={homes.hero_video} type="video/mp4" />
                )}
              </video>

              <video
                className="videoTag video-overly mobiles"
                autoPlay
                loop
                muted
                poster={homes.hero_banner_image}
                >
                {homes.hero_video_mbl && (
                <source src={homes.hero_video_mbl} type="video/mp4" />
                )}
              </video>
          </div>
        </div>
        <div className="home-top-banner">
          <div className="container">
            <div className="top-logo"></div>
          </div>
        </div>
      </>
    </div>
  );
};
