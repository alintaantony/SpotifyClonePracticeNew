import stylesForDbHomeFooter from "./DbHomeFooter.module.css";
import songDemo from "../../Music/ItachiTheme.mpeg";

const dbHomeFooter = () => {
  return (
    <div className={stylesForDbHomeFooter.musicContainer}>
      <audio controls>
        <source src={songDemo} type="audio/mpeg"/>
      </audio>
    </div>
  );
};

export default dbHomeFooter;
