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
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.signInPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.signInParent}>
              <h2 className={styles.signIn}>Sign in</h2>
              <div className={styles.form1}>
                <form className={styles.form2}>
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
                    Sign in
                  </Button>
                </form>
              </div>
            </div>
            <div className={styles.formChild} />
            <SocialMediaLogin
              orSignUpWith="Or sign in with"
              image="/image1@2x.png"
              image1="/image-16@2x.png"
              image2="/image-22@2x.png"
            />
            <div
              className={styles.dontHaveAnContainer}
              onClick={onDontHaveAnClick}
            >
              <span>{`Don’t have an account yet? `}</span>
              <span className={styles.signUp}>Sign up</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.copyrightInfo}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.supportLinks}>
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

export default SignInPage;
