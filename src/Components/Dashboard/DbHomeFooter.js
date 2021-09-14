import stylesForDbHomeFooter from "./DbHomeFooter.module.css";
import songDemo from "../../Music/ItachiTheme.mpeg";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiSkipPrevious, BiSkipPreviousCircle } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiShuffle } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import UserIcon from "../../Images/UserIcon1.jpg";
import SongImageIcon from "../../Images/songimageIcon.jpg";
import { AiOutlineHeart } from "react-icons/ai";
const dbHomeFooter = () => {
  return (
    <div className={stylesForDbHomeFooter.musicContainer}>
      <audio src={songDemo} preload="metadata">
        {/* <source src={songDemo} type="audio/mpeg"/> */}
      </audio>
      <ul>
        <div className={stylesForDbHomeFooter.sideFooterContainer}>
          <ul>
            <span>
              <img src={SongImageIcon} alt="User Icon image" />
            </span>
            <li>
              <p className={stylesForDbHomeFooter.songTitle}>
                <b>Teri Meri</b>
              </p>
              <li>
                <p className={stylesForDbHomeFooter.songArtist}>
                  Darshan Raval,Neha kakkar
                </p>
              </li>
            </li>
            <li>
              <AiOutlineHeart className={stylesForDbHomeFooter.heartlogo} />
            </li>
          </ul>
        </div>
        <div className={stylesForDbHomeFooter.controlsContainer}>
          <li>
            <button className={stylesForDbHomeFooter.playPauseButton}>
              <BiShuffle className={stylesForDbHomeFooter.shufflelogo} />
            </button>
          </li>

          <li>
            <button className={stylesForDbHomeFooter.playPauseButton}>
              <BiSkipPrevious className={stylesForDbHomeFooter.previouslogo} />
            </button>
          </li>
          <li>
            <button className={stylesForDbHomeFooter.playPauseButton}>
              <AiFillPlayCircle className={stylesForDbHomeFooter.playlogo} />
            </button>
          </li>
          <li>
            <button className={stylesForDbHomeFooter.playPauseButton}>
              <BiSkipNext className={stylesForDbHomeFooter.nextlogo} />
            </button>
          </li>

          <li>
            <button className={stylesForDbHomeFooter.playPauseButton}>
              <FiRepeat className={stylesForDbHomeFooter.shufflelogo} />
            </button>
          </li>

          <div>
            <ul>
              <li>0:00</li>
              <li>
                <div>
                  <input type="range" />
                </div>
              </li>
              <li>
                <div>2:49</div>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default dbHomeFooter;
