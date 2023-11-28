import styles from "./Home.module.scss";
import { Button, Typography } from "@mui/material";
import { Modals } from "../../components";

const Home = () => {
  const isAuth = false;
  const userEmail = "sergbylym@gmail.com";
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
            <Button variant="contained" onClick={() => console.log("Log In")}> Log in</Button>
            <Button variant="contained" onClick={() => console.log("Register")}> Register</Button>
          </>
        )}

        <Modals type= {"login"} handleModalClose={() => console.log("close")}/>
      </div>
    </div>
  );
};

export default Home;
