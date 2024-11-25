import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery, Box, Container, Experimental_CssVarsProvider } from "@mui/material";

import MainCard from "../Template/MainCard";
// import AuthFooter from "../profile/authfoot";
import Logo from "../assets/logo_log";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// import Authwrap from "./authwrap";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";

const USER_REGEX = /^[a-zA-Z]{4,20}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const Register = () => {
  const theme = useTheme();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPasswordc, setShowPasswordc] = React.useState(false);
  const handleClickShowPasswordC = () => setShowPasswordc((show) => !show);
  const handleMouseDownPasswordC = (event) => {
    event.preventDefault();
  };

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result); // Lines to test user inputs
    console.log(user); // Lines to test user inputs
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result); // Lines to test user inputs
    console.log(password); // Lines to test user inputs
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PASSWORD_REGEX.test(password);
    if(!v1 || !v2)
    {
      setErrMsg("Invalid Entry")
      return;
    }
    console.log(user, password);
    setSuccess(true);
  };

  return (
    <>
    {success ? (
    <section>
      <h2>success</h2>
      <p>
        <Button variant="outlined" href="#">Sign in</Button>
      </p>    
    </section>):(
    <Container
  sx={{
    backgroundImage: 'url(src/assets/Isometric_Floor.jpg)',
    backgroundSize: 'contain', // Ensures the image covers the entire area
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Full viewport width
    height: '100vh', // Full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}

  maxWidth = 'false'
>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ minHeight: "100vh", display: "block"}}
      >

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <MainCard sx={{
    backgroundColor: 'rgba(195, 221, 171, 0.75)', // Dark semi-transparent background
    backdropFilter: 'blur(10px) saturate(180%)', // Blur and saturation for glass morphic effect
    WebkitBackdropFilter: 'blur(2px) saturate(180%)', // For Safari support
    borderRadius: '12px', // Rounded corners
    border: '1px solid rgba(255, 255, 255, 0.125)', // Light border
  }}
>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 1 }}>
                    <Link to="https://alligatorinfosoft.com/">
                      <Logo  />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={2}>
                          <Typography
                            variant={matchDownSM ? "h4" : "h3"}
                            color={theme.palette.secondary.main}
                            gutterBottom
                          >
                            Register
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            Enter your Credentials to Continue
                          </Typography>
                          <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                          >
                            {errMsg}
                          </p>
                          <Divider />
                          <form onSubmit={handleSubmit}>
                            <TextField
                              label="User Name"
                              id="outlined-basic"
                              sx={{ m: 1, width: "30ch" }}
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              required
                              aria-invalid={validName ? "true" : "false"} // Set aria-invalid attribute
                              aria-describedby="uidnote" // Set aria-describedby attribute
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                              error={!validName && user.length > 0}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    {validName && user.length > 0 && (
                                      <span className={validName ? "valid" : "hide"}>
                                        <CheckCircleOutlineIcon sx={{ color: "green" }} />
                                      </span>
                                    )}
                                    {!validName && user.length > 0 && (
                                      <span className={validName || !user ? "hide" : "invalid"}>
                                        <CancelIcon sx={{ color: "red" }} />
                                      </span>
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                            {userFocus && user && !validName && (
                              <p id="uidnote" className="instructions">
                                <InfoIcon sx={{ fontSize: 16 }} />
                                 4 to 20 characters <br />
                                Must Begin With a letter <br />
                              </p>
                            )}
                            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password">
                                Password
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-password"
                                label="Password"
                                required
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-invalid={validPassword ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                endAdornment={
                                  <InputAdornment position="end">
                                    {validPassword ? (
                                      <CheckCircleOutlineIcon sx={{ color: "green" }} />
                                    ) : (
                                      !validPassword &&
                                      password.length > 0 && <CancelIcon sx={{ color: "red" }} />
                                    )}
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                              />
                            </FormControl>
                            {passwordFocus && password && !validPassword && (
                              <p id="pwdnote" className="instructions">
                                <InfoIcon sx={{ fontSize: 16 }} />
                                8 to 20 characters <br />
                                Atleast 1 Digit <br />
                                Atleast 1 Uppercase, Lowercase <br />
                                Atleast 1 special Character ! @ # $ % <br />
                              </p>
                            )}
                            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-confirmpassword">
                                Confirm Password
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-confirmpassword"
                                type={showPasswordc ? "text" : "password"}
                                label="Confirm Password"
                                value={matchPassword}
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onChange={(e) => setMatchPassword(e.target.value)}
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                endAdornment={
                                  <InputAdornment position="end">
                                    {validMatch && matchPassword ? (
                                      <CheckCircleOutlineIcon sx={{ color: "green" }} />
                                    ) : (
                                      !validMatch &&
                                      matchPassword.length > 0 && (
                                        <CancelIcon sx={{ color: "red" }} />
                                      )
                                    )}
                                    <IconButton
                                      aria-label="toggle confirm password visibility"
                                      onClick={handleClickShowPasswordC}
                                      onMouseDown={handleMouseDownPasswordC}
                                      edge="end"
                                    >
                                      {showPasswordc ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                              />
                            </FormControl>
                            {matchFocus && !validMatch ? (
                              <p id="confirmnote" className="instructions">
                                <InfoIcon sx={{ fontSize: 16 }} />
                                Must match the first password input field.
                              </p>
                            ) : null}
                            <Divider sx={{ pb: 2 }} />
                            <Button
                              type="submit"
                              variant="contained"
                              endIcon={<SendIcon />}
                              disabled={!validName || !validPassword || !validMatch ? true : false}
                            >
                              Sign Up
                            </Button>
                          </form>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Placeholder for registration form */}
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
        </Grid>
      </Grid>    
    </Container>
    )}
    </>
  );
};

export default Register;

