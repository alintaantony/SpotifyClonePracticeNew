import HomeDb from "./HomeDb";
import stylesForHeader from "./HomeHeader.module.css";
import UserIcon from "../../Images/UserIcon1.jpg";
import dailyMixIcon from "../../Images/DailyzMixIconOne.jpg";
import SongLayoutOne from "../UI/SongLayoutOne";

const HomeHeader = () => {
  const dummyList = [
    {
      id: "1",
      img: dailyMixIcon,
      title: "Daily Mix 1",
      description: "Divine, Atif Aslam, King and more",
    },
    {
      id: "2",
      img: dailyMixIcon,
      title: "Daily Mix 2",
      description: "Eminem, NF, Yelawolf and more",
    },
    {
      id: "3",
      img: dailyMixIcon,
      title: "Daily Mix 3",
      description: "Eminem, NF, Yelawolf and more",
    },
  ];

  const dailyMixlist = dummyList.map((dailyMix) => (
    <li><SongLayoutOne
        key={dailyMix.id}
      src={dailyMix.img}
      alt={dailyMix.title}
      title={dailyMix.title}
      description={dailyMix.description}
    />
    </li>
  ));
  return (
    <div className={stylesForHeader.MainContainer}>
      <div className={stylesForHeader.HeaderContainer}>
        <button className={stylesForHeader.dropdownButton}>
          <span>
            <img src={UserIcon} alt="User Icon image" />
          </span>
          <span>
            <p>Alint</p>
          </span>
        </button>

        <div className={stylesForHeader.dropdownContent}>
          <a href="#">
            <b>Profile</b>
          </a>
          <a href="#">
            <b>Log out</b>
          </a>
        </div>
      </div>
      <div className={stylesForHeader.HomeBodyContainer}>
        <h1 className={stylesForHeader.HBCH1}>Good Afternoon</h1>
        <h2 className={stylesForHeader.HBCH2}>Made for you</h2>
        <p className={stylesForHeader.HBCP}>Get better recommendations the more you listen.</p>
        <ul>{dailyMixlist}</ul>
      </div>
    </div>
  );
};

export default HomeHeader;
