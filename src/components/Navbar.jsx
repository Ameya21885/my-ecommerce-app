import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Men", link: "/men" },
  { id: 3, title: "Women", link: "/women" },
  { id: 4, title: "Kids", link: "/kids" },
];

const accountInitialValues = {
  login: { view: "login" },
  signup: { view: "signup" },
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 characters length")
    .max(9, "Name should be of Maximum 9 characters length")
    .required("Name is required"),
});

export default function Navbar() {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setMobileOpen(open);
  };

  const toggleSignup = () => toggleAccount(accountInitialValues.signup);
  const toggleLogin = () => toggleAccount(accountInitialValues.login);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
      <Box sx={{display:"flex", alignItems:'center'}}>
      <img
          src="https://i.pinimg.com/736x/db/16/45/db1645cc1ed95625a5dff41ee9a0f164.jpg"
          alt="logo"
          width={50}
          style={{ borderRadius: "50%", marginRight: 8 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Logo
        </Typography>
      </Box>
        <IconButton
          onClick={toggleDrawer(false)}
          aria-label="close navigation menu"
        >
          <CloseIcon
            sx={{
              border: "2px solid black",
              borderRadius: "20px",
              color: "black",
            }}
          />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page.id} disablePadding>
            <ListItemButton component={NavLink} to={page.link}>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
    onSubmit: (values, { setSubmitting }) => {
      if (Object.keys(formik.errors).length === 0) {
        setUser(
          account.view === "login"
            ? { email: values.email }
            : { name: values.name }
        ); // Store user data
        setOpen(false);
        // setOpen(false); // Close dialog only if there are no errors
      }
      // setSubmitting(false);
      // setUser(
      //   account.view === "login"
      //     ? { email: values.email }
      //     : { name: values.name }
      // ); // Store user data
      // setOpen(false);
    },
  });

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Logout Function
  const handleLogout = () => {
    setUser(null); // Clear user data
    handleCloseMenu(); // Close menu
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2f2f2f" }}>
      {/* <Container maxWidth="xl" sx={{ backgroundColor: "#2f2f2f" }}>

      </Container> */}
      <Toolbar
        sx={{ justifyContent: { xs: "space-between", md: "flex-start" } }}
      >
        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        {/* Logo */}
        <Box
          sx={{
            // display:'flex',
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <img
            src="https://i.pinimg.com/736x/db/16/45/db1645cc1ed95625a5dff41ee9a0f164.jpg"
            alt="logo"
            width={50}
            style={{ borderRadius: "50%", marginRight: 8 }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
            }}
          >
            LOGO
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.id}
              component={NavLink}
              to={page.link}
              sx={{ color: "white", mx: 1 }}
            >
              {page.title}
            </Button>
          ))}
        </Box>

        {/* Login Button */}
        {/* <Button variant="contained" onClick={handleClickOpen}>
            Login
          </Button> */}
        {user ? (
          <>
            <Typography
              sx={{ color: "white", mx: 2 }}
              onClick={handleMenuClick}
            >
              {user.name || user.email}
            </Typography>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>

            
          </>
        ) : (
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              background:
                "linear-gradient(90deg, rgba(37,36,36,1) 0%, rgba(23,21,21,1) 35%, rgba(28,27,27,1) 100%)",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(28,27,27,1) 0%, rgba(23,21,21,1) 65%, rgba(37,36,36,1) 100%)",
              },
            }}
          >
            Login
          </Button>
        )}

        {/* Login/Signup Modal */}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {account.view === "login" ? (
            <Box>
              <DialogTitle id="responsive-dialog-title">Login</DialogTitle>
              <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    type="password"
                    margin="dense"
                  />
                </DialogContent>
                <DialogActions sx={{ flexDirection: "column", gap: 1 }}>
                  <Button
                    variant="contained"
                    // onClick={handleClose}
                    type="submit"
                  >
                    Continue
                  </Button>
                  <Typography>
                    Create an account?{" "}
                    <span
                      onClick={toggleSignup}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Click here.
                    </span>
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I agree to the terms & privacy policy."
                    />
                  </FormGroup>
                </DialogActions>
              </form>
            </Box>
          ) : (
            <Box>
              <DialogTitle id="responsive-dialog-title">Sign Up</DialogTitle>
              <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                  <TextField
                    fullWidth
                    label="Your Name"
                    margin="dense"
                    id="email"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    fullWidth
                    label="Email address"
                    margin="dense"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="dense"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </DialogContent>
                <DialogActions sx={{ flexDirection: "column", gap: 1 }}>
                  <Button
                    variant="contained"
                    // onClick={handleClose}
                    type="submit"
                  >
                    Continue
                  </Button>
                  <Typography>
                    Already have an account?{" "}
                    <span
                      onClick={toggleLogin}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Login here.
                    </span>
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I agree to the terms & privacy policy."
                    />
                  </FormGroup>
                </DialogActions>
              </form>
            </Box>
          )}
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}
