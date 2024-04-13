import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./HeroContainer.module.css";

const HeroContainer = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.heroContainer}>
        <div className={styles.errorHandler}>
          <div className={styles.logManager}>
            <div className={styles.findAHostForEveryJourneyParent}>
              <b className={styles.findAHostContainer}>
                <span>{`Find a `}</span>
                <span className={styles.host}>host</span>
                <span> for every journey</span>
              </b>
              <h3 className={styles.discoverTheBest}>
                Discover the best local rental properties that fits your every
                travel needs
              </h3>
            </div>
            <div className={styles.form}>
              <TextField
                className={styles.autocompletebasic}
                placeholder="Accommodation"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="25px" height="25px" src="/iconhome.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "64px",
                    backgroundColor: "#fff",
                    paddingRight: "12px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className={styles.grouped}>
                <div className={styles.wrapper}>
                  <DatePicker
                    value={frameDateTimePickerValue}
                    onChange={(newValue) => {
                      setFrameDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-in",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className={styles.container}>
                  <DatePicker
                    value={frameDateTimePicker1Value}
                    onChange={(newValue) => {
                      setFrameDateTimePicker1Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-out",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled-1.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className={styles.groupedChild}
                  placeholder="Guest"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="25px" height="25px" src="/iconuser.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "64px",
                      backgroundColor: "#fff",
                      paddingRight: "12px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.85)" },
                  }}
                />
              </div>
              <Button
                className={styles.searchButton}
                startIcon={
                  <img width="19px" height="19px" src="/iconsearch.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00c29f",
                  borderRadius: "4px",
                  "&:hover": { background: "#00c29f" },
                  width: 142,
                  height: 64,
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
