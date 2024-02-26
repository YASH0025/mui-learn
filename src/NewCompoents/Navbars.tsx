import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import useStyles from "../components/style";
import Drawerss from "./drawer";
import { Link } from "react-scroll";
import AppsIcon from "@mui/icons-material/Apps";

const Navbars = () => {
  const classes = useStyles();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Drawerss>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Drawerss>

          <Typography variant="h6" className={classes.title}>
            BlogAlbum
          </Typography>

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleClick("home")}
          >
            <IconButton style={{ fontSize: 15 }}>
              <HomeIcon />
              Home
            </IconButton>
          </Link>
          <Link
            to="blogs"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleClick("blogs")}
          >
            <IconButton style={{ fontSize: 15 }}>
              <BookIcon />
              Blog
            </IconButton>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleClick("skills")}
          >
            <IconButton style={{ fontSize: 15 }}>
              <AppsIcon />
              Skills
            </IconButton>
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleClick("about")}
          >
            <IconButton style={{ fontSize: 15 }}>
              <InfoIcon />
              About
            </IconButton>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleClick("contact")}
          >
            <IconButton style={{ fontSize: 15 }}>
              <ContactPageIcon />
              Contact
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbars;
