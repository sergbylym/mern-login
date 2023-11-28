import { Box, Modal } from "@mui/material";

const Modals = (type, handleModalClose) => {
  return (
    <>
      <Modal open={type === "login"} onClose={handleModalClose}>
      <Box> Login Modal</Box> 
      </Modal>
      <Modal type={type === "register"} onClose={handleModalClose}>
        <Box>Register Modal</Box>
      </Modal>
    </>
  );
};

export default Modals;
