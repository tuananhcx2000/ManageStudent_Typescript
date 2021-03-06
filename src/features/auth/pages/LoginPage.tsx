import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import firebase from "firebase";
import React, { useEffect } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useHistory } from "react-router-dom";
import { authSelector, login } from "../authSlice";

interface LoginPageProps {}

const useStyle = makeStyles((theme) => {
  return {
    root: {},
    box: {
      width: theme.spacing(50),
      textAlign: "center",
      padding: "30px",
    },
  };
});

const LoginPage = (props: LoginPageProps) => {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  const { logging } = useAppSelector(authSelector);
  const history = useHistory();
  // const isSignIn = Boolean(localStorage.getItem("access_token"));

  // if (isSignIn) {
  //   history.push(`/admin`);
  // }

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/admin",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({ username: user?.displayName as string, password: "ok" }));
        console.log(user);
        console.log("test login");
      }
    });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Paper elevation={3} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Login
        </Typography>
        <Box mt={2}>
          {/* <Button variant='contained' color='primary' fullWidth onClick={handleLoginClick}>
            {logging && <CircularProgress color='secondary' size={20} />}
            &nbsp; Fake Login
          </Button> */}
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
