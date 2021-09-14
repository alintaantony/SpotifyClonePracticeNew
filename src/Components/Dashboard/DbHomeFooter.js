import stylesForDbHomeFooter from "./DbHomeFooter.module.css";
import songDemo from "../../Music/ItachiTheme.mpeg";
import { AiFillPlayCircle } from "react-icons/ai";

const dbHomeFooter = () => {
  return (
    <div className={stylesForDbHomeFooter.musicContainer}>
      <audio src={songDemo} preload="metadata">
        {/* <source src={songDemo} type="audio/mpeg"/> */}
      </audio>
      <button className={stylesForDbHomeFooter.playPauseButton}>
        <AiFillPlayCircle className={stylesForDbHomeFooter.playlogo} />
      </button>
      <div>0:00</div>
      <div>
        <input type="range" />
      </div>
      <div>2:49</div>
    </div>
  );
};

export default dbHomeFooter;
