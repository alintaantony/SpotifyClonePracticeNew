import stylesForSLT from "./SongLayoutTwo.module.css";

const SongLayoutTwo = (props) => {
  return (
    <div className={stylesForSLT.mainContainer}>
      <div classname={stylesForSLT.container}>
        <ul>
          <li>
            <img src={props.src} alt={props.alt} />
          </li>
          <li>
            <h2>{props.title}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SongLayoutTwo;
