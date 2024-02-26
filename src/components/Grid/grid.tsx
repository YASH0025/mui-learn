import { Button, Grid } from "@mui/material";

const Grids = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary">
            see my photos
          </Button>
          <Button variant="outlined" color="primary">
            Sencondary Actions
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Grids;
