import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/store";
import classes from "./LoggedInPage.module.css";
import axios from "axios";
// var axios = require("axios").default;

const accessToken =
  "BQBlH9wfw0sttz2ibTIo4RXQ283YPz3WvcDklVLMRudXXLGRS0w4uONoVkPs08k4oeH-8cUQxcOy3GkWgdZnRueNCkH9lS6UnZHo7lV7owV3LvYcDmPfIVJ1HJCoewJmT02J8EEkH4IzIC1yqf7KkioHXP7V4kcu3Cg";
// to get new token
// https://developer.spotify.com/console/get-playlist/

const LoggedInPage = () => {
  const dispatch = useDispatch();
  const [songIndex, setSongIndex] = useState(0);
  const name = useSelector((state) => state.user.userName);
  const pass = useSelector((state) => state.user.password);
  const songs = useSelector((state) => state.user.songs);
  const showSong = useSelector((state) => state.user.showSong);

  const song = songs.map((song) => {
    return {
      id: song.track.id,
      name: song.track.name,
      prevUrl: song.track.preview_url,
      songUrl: song.track.external_urls.spotify,
    };
  });
  useEffect(() => {
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
    console.log("fetch req sent");
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(userAction.onLogout());
    localStorage.removeItem("isLogged");
  };

  const showSongs = () => {
    dispatch(userAction.showSong());
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

      {showSong && (
        <div>
          <h3> {song[songIndex].name}</h3>
          <h3> {song.length}</h3>

          <audio
            controls
            src={song[songIndex].prevUrl}
            type="audio/mpeg"
          ></audio>
          <button
            onClick={() => {
              if (songIndex === song.length) {
                setSongIndex(0);
              } else {
                setSongIndex( songIndex + 1);
              }
            }}
          >
            next
          </button>
          <button onClick={() => {
              if (songIndex === -1) {
                setSongIndex((song.length)-1);
              } else {
                setSongIndex( songIndex - 1);
              }
            }}>prev</button>
        </div>
      )}
      {/*showSong &&
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
        })*/}
    </div>
  );
};

export default LoggedInPage;
