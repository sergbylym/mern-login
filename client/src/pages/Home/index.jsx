import styles from "./Home.module.scss";
import { Button, Typography } from "@mui/material";
import  Modals from "../../components/Modals";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { isAuthSelector, logout } from "../../redux/slices/auth";

const Home = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const userEmail = useSelector(state => state.auth.userEmail)

  const [showModalType, setShowModalType] = useState(null)
    const handleLogoutClick = ( ) => {
      if(window.confirm("Are you sure that you wont to logout ?")) {
        dispatch(logout())
      }
    }
  return (
    <div className={styles.container}>
      {isAuth && (
        <>
          <Typography variant="h3">You are logged in !</Typography>
          <Typography variant="h3">User Email : {userEmail}</Typography>
        </>
      )}  

      <div className={styles.buttonsContainer}>
        {isAuth ? (
          <Button variant="contained" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <>
            <Button variant="contained" onClick={() => setShowModalType("login")}> Log in</Button>
            <Button variant="contained" onClick={() => setShowModalType("register")}> Register</Button>
          </>
        )}

        <Modals type={showModalType} handleModalClose={() => setShowModalType(null)} />
      </div>
    </div>
  );
};

export default Home;
