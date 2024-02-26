import { AppBar, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Grid container>
        <AppBar
          position="static"
          color="primary"
          style={{ height: "100px" }} // Adjust the height here
        >
          <Toolbar style={{ justifyContent: "space-between", height: "100%" }}>
            <Typography variant="body1" color="inherit">
              &copy; 2024 Tony Stark Industries
            </Typography>
            <div>
              <IconButton
                aria-label="Facebook"
                color="inherit"
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                component="a"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                color="inherit"
                component="a"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Footer;
