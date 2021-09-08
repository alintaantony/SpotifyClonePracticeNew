import stylesForSidenav from "./SidebarDash.module.css";
import spotifyIcon from "../../Images/spotifyIcon7.jpg";
import { VscHome } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

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
                {/* <img src={homeIcon} alt="Home Logo"></img> */}
                <VscHome className={stylesForSidenav.img} />
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
                {/* <img src={searchIcon} alt="Search Logo"></img> */}
                <FiSearch className={stylesForSidenav.img} />
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
                {/* <img src={libraryIcon} alt="Library Logo"></img> */}
                <VscLibrary className={stylesForSidenav.img} />
              </li>
              <li>
                <p>
                  <b>Your Library</b>
                </p>
              </li>
            </ul>
          </div>
        </li>
        <br />
        <li>
          <div className={stylesForSidenav.homeLogo}>
            <ul>
              <li>
                {/* <img src={createplaylistlogo} alt="Create playlist Logo"></img> */}
                <AiOutlinePlus
                  className={stylesForSidenav.createPlaylistLogo}
                />
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
          <div className={stylesForSidenav.heartMainContainer}>
            <ul>
              <li>
                <div className={stylesForSidenav.heartContainer}>
                  {/* <img src={likesonglogo} alt="Liked song Logo"></img> */}
                  <AiFillHeart className={stylesForSidenav.heartLogo} />
                </div>
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
