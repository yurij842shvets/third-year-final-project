import logo from "../../assets/logo.png";
import userPic from "../../assets/user-pic.png";
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks'
import {logout} from '../../redux/slice/authSlice'
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store/store";

export default function MainPageHeader() {
      const userName = useAppSelector((state: RootState) => state.auth.currentUser?.name);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
      dispatch(logout())
      navigate('/')
    }

    return (
              <header className="main-page-header">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <h4>INVESTIQ</h4>
                </div>
        
                <div className="main-page-links-wrapper">
                  <img src={userPic} alt="user" />
                  <p className="main-page-link">{userName}</p>
                  <p className="main-page-link" onClick={handleLogout}>Вийти</p>
                </div>
              </header>
    )
}