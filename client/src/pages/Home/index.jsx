import styles from "./Home.module.scss";
import { Button, Typography } from "@mui/material";
import { Modals } from "../../components";
import { useState } from "react";

const Home = () => {
  const isAuth =false;
  const userEmail = "sergbylym@gmail.com";

  const [showModalType, setShowModalType] = useState(null)
    
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
          <Button variant="contained" onClick={() => console.log("Logout")}>
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
