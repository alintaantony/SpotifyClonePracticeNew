import stylesForDbHomeFooter from "./DbHomeFooter.module.css";
import songDemo from "../../Music/ItachiTheme.mpeg";

const dbHomeFooter = () => {
  return (
    <div className={stylesForDbHomeFooter.musicContainer}>
      <audio src={songDemo} preload="metadata">
        {/* <source src={songDemo} type="audio/mpeg"/> */}
      </audio>
      <button>Play/Pause</button>
      <div>0:00</div>
      <div><input type='range'/></div>
      <div>2:49</div>
    </div>
  );
};

export default dbHomeFooter;
