import HomeDb from "./HomeDb";
import stylesForHeader from "./HomeHeader.module.css";
import UserIcon from "../../Images/UserIcon1.jpg";
import dailyMixIcon from "../../Images/DailyzMixIconOne.jpg";
import SongLayoutOne from "../UI/SongLayoutOne";
import onRepeatOne from "../../Images/onRepeatOne.jpg";
import repeatRewindIcon from "../../Images/repeatRewindIconOne.jpg";
import SongLayoutTwo from "../UI/SongLayoutTwo";
import timeCapsuleIcon from "../../Images/timeCapsuleIconOne.jpeg";

const HomeHeader = () => {

  const myDate=new Date();
  const hrs=myDate.getHours();
  var greeting;

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
      description: "Eminem, Hopsin, Yelawolf and more",
    },
    {
      id: "3",
      img: dailyMixIcon,
      title: "Daily Mix 3",
      description: "Akon, Pitbull, Enrique Iglesias and more",
    },
  ];

  const dummyListForSongs = [
    {
      id: "1",
      img: onRepeatOne,
      title: "On Repeat",
      
    },
    {
      id: "2",
      img: repeatRewindIcon,
      title: "Repeat Rewind",
      
    },
    {
      id: "3",
      img: timeCapsuleIcon,
      title: "Your Time Capsule",
      
    },
    
  ];

  const dummyRecentlyPlayedList=[
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
      description: "Eminem, Hopsin, Yelawolf and more",
    },
    {
      id: "3",
      img: dailyMixIcon,
      title: "Daily Mix 3",
      description: "Akon, Pitbull, Enrique Iglesias and more",
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

  const dailyMixSongList=dummyListForSongs.map((songMix)=>(
  <li><SongLayoutTwo 
    key={songMix.id}
    src={songMix.img}
    alt={songMix.title}
    title={songMix.title}
  />
  </li>
  ));

  const recentlyPlayedSongs=dummyRecentlyPlayedList.map((recentPlayedSong)=>(
    <li><SongLayoutOne
    key={recentPlayedSong.id}
    src={recentPlayedSong.img}
    alt={recentPlayedSong.title}
    title={recentPlayedSong.title}
    description={recentPlayedSong.description}
    />
    </li>
  ));
  
  if(hrs<12){
    greeting='Good Morning';
  }
  else if(hrs>12 && hrs<17){
    greeting='Good Afternoon';
  }
  else{
    greeting='Good Evening';
    console.log(greeting);
  }
  
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

        <h1 className={stylesForHeader.HBCH1}>{greeting} </h1><ul>{dailyMixSongList}</ul>
        
        <h2 className={stylesForHeader.HBCH2}>Made for you</h2>
        <p className={stylesForHeader.HBCP}>Get better recommendations the more you listen.</p> 
        <ul>{dailyMixlist}</ul>
        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}
        {/* <h2 className={stylesForHeader.HBCH2}>Recently Played </h2>
        <p className={stylesForHeader.HBCP}>Get better recommendations the more you listen.</p> 
        <ul>{recentlyPlayedSongs}</ul> */}





        </div>
        
    </div>
  
  );
};

export default HomeHeader;
