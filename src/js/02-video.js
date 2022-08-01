import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME = "videoplayer-current-time";
const iframeEl = document.querySelector('#vimeo-player');
const playerEl = new Vimeo(iframeEl);
const seconds = JSON.parse(localStorage.getItem(CURRENT_TIME));

playerEl.setCurrentTime(seconds.seconds);

playerEl.on(`timeupdate`, throttle(timeRec, 1000));

function timeRec(currentTime) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(currentTime))
};

