import stylesForSLO from "./SongLayoutOne.module.scss";
import {BiPlay} from "react-icons/bi";

const SongLayoutOne = (props) => {
  return (
    <div className={stylesForSLO.mainContainer}>
      <div classname={stylesForSLO.container}>
        <img src={props.src} alt={props.alt} />
        <div className={stylesForSLO.imageContainer}>
          <BiPlay className={stylesForSLO.playicon}/>
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SongLayoutOne;
