import HomeDb from './HomeDb';
import stylesForHeader from './HomeHeader.module.css';
import UserIcon from '../../Images/UserIcon1.jpg';

const HomeHeader=()=>{
    return(
        <div className={stylesForHeader.HeaderContainer}>
            <button className={stylesForHeader.dropdownButton}>Manali</button>
                <div className={stylesForHeader.dropdownContent}>
                <a href="#"><b>Profile</b></a>
                <a href="#"><b>Log out</b></a>
                </div>
        </div>
    );
}

export default HomeHeader;