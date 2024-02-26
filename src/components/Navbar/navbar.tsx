import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Main from "../Main/main";
import Grids from "../Grid/grid";
import useStyles from "../style";
import Cards from "../Card/card";
import React from "react";

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget as unknown as null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description 1",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description 2",
      imageUrl: "https://source.unsplash.com/random/thor",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description 3",
      imageUrl: "https://source.unsplash.com/random/captain",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description 4",
      imageUrl: "https://source.unsplash.com/random/ironman",
    },
    {
      id: 3,
      title: "Card 5",
      description: "Description 5",
      imageUrl: "https://source.unsplash.com/random/goku",
    },
    {
      id: 3,
      title: "Card 6",
      description: "Description 6",
      imageUrl: "https://source.unsplash.com/random/phone",
    },
    {
      id: 3,
      title: "Card 7",
      description: "Description 7",
      imageUrl: "https://source.unsplash.com/random/books",
    },
    {
      id: 3,
      title: "Card 8",
      description: "Description 8",
      imageUrl: "https://source.unsplash.com/random/thanos",
    },
    {
      id: 3,
      title: "Card 9",
      description: "Description 9",
      imageUrl: "https://source.unsplash.com/random/antman",
    },
    // Add more cards as needed
  ];

  const sections = [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#about" },
    { title: "Contact Us", url: "#contact" },
  ];

  return (
    <>
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            {sections.map((section, index) => (
              <Button key={index} color="inherit" href={section.url}>
                {section.title}
              </Button>
            ))}
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  handleClick(event)
                }
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Main />
            <div className={classes.buttons}>
              <Grids />
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Cards
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
