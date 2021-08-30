import stylesForSidenav from "./SidebarDash.module.css";
import spotifyIcon from "../../Images/spotifyIcon7.jpg";
import homeIcon from "../../Images/HomeLogoThree.png";
import searchIcon from "../../Images/searchIconTwo.png";
import libraryIcon from "../../Images/libraryLogoOne.png";
import createplaylistlogo from "../../Images/createplaylistlogo.png";
import likesonglogo from "../../Images/LikedsongsLogo.png";

const SidebarDash = (props) => {
  return (
    
    <div className={stylesForSidenav.sidebarContainer}>
      <ul>
        <li>
          <div className={stylesForSidenav.spotifyLogo}>
            <ul>
              <li>
                <img src={spotifyIcon} alt="Spotify Logo"></img>
              </li>
              <li>
                <p>
                  <b>Spotify</b>
                </p>
              </li>
              
            </ul>
          </div>
        </li>
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                <img src={homeIcon} alt="Home Logo"></img>
              </li>
              <li>
                <p>
                  <b>Home</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                <img src={searchIcon} alt="Search Logo"></img>
              </li>
              <li>
                <p>
                  <b>Search</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                <img src={libraryIcon} alt="Library Logo"></img>
              </li>
              <li>
                <p>
                  <b>Your Library</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
        <br/>
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                <img src={createplaylistlogo} alt="Create playlist Logo"></img>
              </li>
              <li>
                <p>
                  <b>Create Playlist</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                <img src={likesonglogo} alt="Liked song Logo"></img>
              </li>
              <li>
                <p>
                  <b>Liked Song</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
   
    
  );
};

export default SidebarDash;
