import SignUp from "./sign-up.component";
import { Grid } from "@mui/material";
import SignInBox from "./sign-in-box.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const SignIn = () => {
  document.title = "Sign in/Sign up";
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (Object.keys(currentUser).length !== 0) {
    navigate("../");
  }
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
