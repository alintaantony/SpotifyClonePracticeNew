import stylesForSLO from "./SongLayoutOne.module.css";

const SongLayoutOne = (props) => {
  return (
    <div className={stylesForSLO.mainContainer}>
      <div classname={stylesForSLO.container}>
        <img src={props.src} alt={props.alt} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SongLayoutOne;
