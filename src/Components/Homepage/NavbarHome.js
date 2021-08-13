import stylesForNavbar from "./NavbarHome.module.css";
import spotifyIcon from "../../Images/spotifyIcon7.jpg";

const NavbarHome = () => {
  return (
    <div className={stylesForNavbar.navbarHome}>
      <ul>
        <li>
          <img src={spotifyIcon} alt="Spotify Logo"></img>
        </li>
        <li>
          <p>
            <b>Spotify</b>
          </p>
        </li>
        <nav className={stylesForNavbar.homeNavbar}>
          <b>
            <li>
              <a href="https://www.spotify.com/in-en/">Support </a>
            </li>
            <li>
              <a href="https://www.spotify.com/in-en/">Sign up</a>
            </li>
            <li>
              <a href="https://www.spotify.com/in-en/">Log in</a>
            </li>
          </b>
        </nav>
      </ul>
    </div>
  );
};

export default NavbarHome;
