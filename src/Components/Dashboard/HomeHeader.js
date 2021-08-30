import HomeDb from './HomeDb';
import stylesForHeader from './HomeHeader.module.css';
import UserIcon from '../../Images/UserIcon1.jpg';

const HomeHeader=()=>{
    return(
        <div className={stylesForHeader.MainContainer}>
        <div className={stylesForHeader.HeaderContainer}>
            
            <button className={stylesForHeader.dropdownButton}>
                
                    <span>
                        <img src={UserIcon} alt="User Icon image"/>
                    </span>
                    <span><p>Manali</p></span>
                
            </button>
           
                <div className={stylesForHeader.dropdownContent}>
                <a href="#"><b>Profile</b></a>
                <a href="#"><b>Log out</b></a>
                </div>
        </div>
        <div className={stylesForHeader.HomeBodyContainer}>
            <h1>Good Afternoon</h1>
        </div>
        </div>
        

    );
}

export default HomeHeader;