import { Box, Modal } from "@mui/material";
import AuthForm from "../AuthForm";
import styles from "./Modals.module.scss";
const Modals = ( {type, handleModalClose} ) => {
  return (
    <>
      <Modal open={type === "login"} onClose={handleModalClose}>
        <Box className={styles.formContainer}>
          <AuthForm formType={type} handleModalClose={handleModalClose} />
        </Box>
      </Modal>
      <Modal open={type === "register"} onClose={handleModalClose}>
        <Box className={styles.formContainer}>
          <AuthForm formType={type} handleModalClose={handleModalClose} />{" "}
        </Box>
      </Modal>
    </>
  );
};

export default Modals;
