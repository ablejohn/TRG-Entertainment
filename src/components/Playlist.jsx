import React from "react";
import "../styling/playlist.css";

const Playlist = () => {
  return (
    <section className="playlist-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title">Featured Playlist</h2>
            <div className="title-underline"></div>
            <div className="playlist-container">
              <iframe
                className="spotify-iframe"
                src="https://open.spotify.com/embed/playlist/2gyQt8GeSWbNawYsi0WRsB"
                frameBorder="0"
                allow="encrypted-media"
                title="Spotify Playlist"
                height="380"
                onLoad={() =>
                  console.log("Spotify playlist loaded successfully")
                }
                onError={() => console.error("Failed to load Spotify playlist")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
