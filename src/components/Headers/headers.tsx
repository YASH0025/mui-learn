import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useStyles from "../style";
import SideDrawer from "../SIdeDrawer/sidedrawer"; // Check the import path
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Headers = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" className={classes.title}>
          Blogs Album
        </Typography>
        <IconButton style={{ fontSize: 15 }} href="/login">
          <HomeIcon />
          Home
        </IconButton>
        <IconButton style={{ fontSize: 15 }} href="/login">
          <BookIcon />
          Blogs
        </IconButton>
        <IconButton style={{ fontSize: 15 }} href="/login">
          <InfoIcon />
          About
        </IconButton>
        <IconButton style={{ fontSize: 15 }} href="/login">
          <ContactPageIcon />
          Contact
        </IconButton>

        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <Toolbar className={classes.tagline}> New Blogs</Toolbar>
    </>
  );
};

export default Headers;
