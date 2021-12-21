import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/store";
import classes from "./LoggedInPage.module.css";
// import axios from "axios";
var axios = require("axios").default;

// to get new token
// https://developer.spotify.com/console/get-playlist/

const LoggedInPage = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.userName);
  const pass = useSelector((state) => state.user.password);
  const songs = useSelector((state) => state.user.songs);
  const showSong = useSelector((state) => state.user.showSong);

  const logoutHandler = () => {
    dispatch(userAction.onLogout());
    localStorage.removeItem("isLogged");
  };

  const accessToken =
    "BQAGEkGz5PnncgFGLg3mzW3qK0mY65CHEd4UtkQffOlMMJrsoj-IZzFJZQN6NueRA7W2BPgLo9TRonlRXeA6oz_pGx9fc3AhN8I37pPksmrBinenHpgs5nQNszQhZ6nzVNNKaKWBw5hDVURaGX5y7AWHdgE8z645mYc";

  const song = songs.map((song) => {
    return {
      id: song.track.id,
      name: song.track.name,
      prevUrl: song.track.preview_url,
      songUrl: song.track.external_urls.spotify,
    };
  });
  const showSongs = () => {
    dispatch(userAction.showSong());
      axios
        .get("https://api.spotify.com/v1/playlists/3vTVQzTLZEgGpqGuVucPkB", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          const tracks = res.data.tracks.items;
          dispatch(userAction.getSongs(tracks));
        })
        .catch((err) => console.log(err));
    
  };

  return (
    <div className={classes["main-cointainer"]}>
      <section className={classes.box}>
        <h1 className={classes.welcome}>welcome</h1>
        <h3 className={classes.message}>{`user name: ${name}`}</h3>
        <h3>{`user password: ${pass}`}</h3>
        <button className={classes.button} onClick={logoutHandler}>
          logout
        </button>
        <button className={classes.button} onClick={showSongs}>
          {!showSong ? "get songs" : "hide songs"}
        </button>
      </section>
      {showSong &&
        song.map((song) => {
          return (
            <ul key={song.id}>
              <li>
                <p>{song.name}</p>
                <span>
                  <audio controls src={song.prevUrl} type="audio/mpeg"></audio>
                </span>
                <span>
                  <a href={song.songUrl}>open in spotify</a>
                </span>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default LoggedInPage;
