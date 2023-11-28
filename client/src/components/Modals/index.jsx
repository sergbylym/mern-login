import { Box, Modal } from "@mui/material";
import styles from './Modals.module.scss'  
const Modals = (type, handleModalClose) => {
  return (
    <>
      <Modal open={type === "login"} onClose={handleModalClose}>
      <Box classname={styles.formContainer}> Login Modal</Box> 
      </Modal>
      <Modal type={type === "register"} onClose={handleModalClose}>
        <Box classname={styles.formContainer}>Register Modal</Box>
      </Modal>
    </>
  );
};

export default Modals;
