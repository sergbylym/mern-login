import { Button, TextField, Typography } from "@mui/material";
import styles from "./AuthForm.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginization, registration } from "../../redux/slices/auth";
const AuthForm = ( {formType, handleModalClose }) => {
  const dispatch = useDispatch();
  const isRegisterFormType = formType === "register";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { email: "", password: "" }, mode: "onChange" });

  const onSubmit = async (values) => {
    console.log(values);

    const data = await dispatch(
      isRegisterFormType ? registration(values) : loginization(values)
    );
    if (!data.payload) {
      alert(`${isRegisterFormType ? "Register" : "Login"} failed`);
    }
    if("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token)
    }
    handleModalClose();
  };

  return (
    <>
      <Typography sx={{ mb: "16px" }} variant="h2" className={styles.title}>
        {isRegisterFormType ? "Register" : "Login"}
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          {...register("email", { required: "Email field is required" })}
         /* errors={Boolean(errors?.email?.message)} */
          helperText={errors.email ? "Email field is required" : ""}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", {
            required: "Password field is required",
            minLength: 6,
          })}
         /* errors={Boolean(errors?.password?.message)} */
          helperText={errors.password ? "Password field is required" : ""}
        />

        <Button
          sx={{ mt: "16px" }}
          disabled={!isValid}
          variant="contain"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default AuthForm;
