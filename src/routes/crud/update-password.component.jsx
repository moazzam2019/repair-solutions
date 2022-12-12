import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const theme = createTheme();

const API = "https://light-crow-kerchief.cyclic.app/api/users/updateMyPassword";

const UpdatePassword = () => {
  const { config } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    if (data.get("currentPassword").length !== 0)
      body.passwordCurrent = data.get("currentPassword");
    if (data.get("newPassword").length !== 0)
      body.password = data.get("newPassword");
    if (data.get("newPasswordConfirm").length !== 0)
      body.passwordConfirm = data.get("newPasswordConfirm");

    try {
      await axios.patch(API, body, config).then((res) => {
        alert("Data Updated Successfully, Please log in again!");
        localStorage.clear();
        window.location.replace("/sign-in");
      });
    } catch (err) {
      if (err.response.data.message === "jwt expired") {
        alert("Session expired, Please log in again.");
        localStorage.clear();
        window.location.replace("/sign-in");
      } else alert(err.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1 style={{ textAlign: "center" }}>Update Password</h1>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="password"
              id="currentPassword"
              autoComplete="currentPassword"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
              autoComplete="newPassword"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPasswordConfirm"
              label="Confirm Password"
              type="password"
              id="newPasswordConfirm"
              autoComplete="newPasswordConfirm"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UpdatePassword;
