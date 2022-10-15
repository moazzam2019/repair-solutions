import SignUp from "./sign-up.component";
import { Grid } from "@mui/material";

import SignInBox from "./sign-in-box.component";
import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    document.title = "Sign in/Sign up";
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SignUp />
        </Grid>
        <Grid item xs={12} md={6}>
          <SignInBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
