import { Box, Modal } from "@mui/material";
import styles from "./Modals.module.scss"
const Modals = ({type, handleModalClose}) => {
  return (
    <>
      <Modal open={type === "login"} onClose={handleModalClose}>
      <Box className={styles.formContainer}> Login Modal</Box> 
      </Modal>
      <Modal open={type === "register"} onClose={handleModalClose}>
        <Box className={styles.formContainer}>Register Modal</Box>
      </Modal>
    </>
  );
};

export default Modals;
