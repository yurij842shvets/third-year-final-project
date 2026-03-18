import logo from "../../assets/logo.png";
import userPic from "../../assets/user-pic.png";

export default function StatisticsHeader() {
    return (
              <header className="main-page-header">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <h4>INVESTIQ</h4>
                </div>
        
                <div className="main-page-links-wrapper">
                  <img src={userPic} alt="user" />
                  <p className="main-page-link">User Name</p>
                  <p className="main-page-link">Вийти</p>
                </div>
              </header>
    )
}