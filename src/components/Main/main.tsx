import { Container, Typography } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <>
      <main>
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            PhotoAlbum
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eveniet laborum magni rerum molestias sit possimus ipsam delectus id
            assumenda sed alias tempora adipisci.
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default Main;
