import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/store";
import classes from "./LoggedInPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { addAdminAction } from "../../store/addAdmin";

const accessToken =
  "BQDM3FXI0v39g2kZRr1Oe_mxvadnWUllCxMjA8YYv5xnVBIUjsFpn_twffHWt_5USiOeR842BhkBTucpBArqKJLx50iyO04WpQRVp_jLt0TNqVhiASwBZ3aEIWjKEPeYXCYcqlKkmbaqgn1-FSSneiYr0QJFk9QspaQ";

// to get new token
// https://developer.spotify.com/console/get-playlist/

const LoggedInPage = () => {
  const dispatch = useDispatch();
  const [songIndex, setSongIndex] = useState(0);
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.userName);
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
    axios("https://api.spotify.com/v1/playlists/3vTVQzTLZEgGpqGuVucPkB", {
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
    //to make sure can't logged back by pressing back button
    navigate("/", { replace: true });
  };

  const showSongs = () => {
    dispatch(userAction.showSong());
  };

  const timeToLogout = localStorage.getItem("exp-time"); // section expires in ms

  const currentTime = new Date().getTime(); /// gets current date and time in milliseconds

  const remainingTime = timeToLogout - currentTime;
  setTimeout(logoutHandler, remainingTime);

  const getToUIhandler = () => {
    navigate("/console");
  };

  return (
    <div className={classes["main-cointainer"]}>
      <section className={classes.box}>
        <h1 className={classes.welcome}>welcome</h1>
        <h3 className={classes.message}>{`user name: ${name}`}</h3>
        <div className={classes['buttons-container']}>
          <button className={classes.button} onClick={getToUIhandler}>
            get to console
          </button>
          <button
            className={classes.button}
            onClick={() => navigate("/flowchart")}
          >
            flowchart
          </button>
          <button
            disabled={true}
            className={classes.button}
            onClick={showSongs}
          >
            {!showSong ? "get songs" : "hide songs"}
          </button>
          <button className={classes.button} onClick={logoutHandler}>
            logout
          </button>
        </div>
      </section>

      {showSong && (
        <div>
          <h3> {song[songIndex].name}</h3>

          <audio
            controls
            src={song[songIndex].prevUrl}
            type="audio/mpeg"
          ></audio>
          <button
            onClick={() => {
              if (songIndex === song.length - 1) {
                setSongIndex(0);
              } else {
                setSongIndex(songIndex + 1);
              }
            }}
          >
            next
          </button>
          <button
            onClick={() => {
              if (songIndex === 0) {
                setSongIndex(song.length - 1);
              } else {
                setSongIndex(songIndex - 1);
              }
            }}
          >
            prev
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedInPage;
