import logo from "../../assets/logo.png";
import userPic from "../../assets/user-pic.png";
import { useAppSelector } from "../../redux/hooks/hooks";

export default function StatisticsHeader() {
  const userName = useAppSelector((state) => state.auth.currentUser?.name)
  return (
    <header className="main-page-header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4>INVESTIQ</h4>
      </div>

      <div className="main-page-links-wrapper">
        <img src={userPic} alt="user" />
        <p className="main-page-link">{userName}</p>
        <p className="main-page-link">Вийти</p>
      </div>
    </header>
  );
}
