import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.confirmPasswordField}>
          <div className={styles.form}>
            <div className={styles.createAccountParent}>
              <h2 className={styles.createAccount}>Create Account</h2>
              <div className={styles.formWrapper}>
                <form className={styles.form1}>
                  <div className={styles.formFields}>
                    <TextField
                      className={styles.email}
                      placeholder="Email address"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className={styles.password}
                      placeholder="Password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className={styles.confirmPassword}
                      placeholder="Confirm password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword-1.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className={styles.searchFlightsButton}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign up
                  </Button>
                </form>
              </div>
              <div className={styles.socialLoginContainerWrapper}>
                <div className={styles.socialLoginContainer} />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className={styles.iAlreadyHaveContainer}
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className={styles.login}>Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
