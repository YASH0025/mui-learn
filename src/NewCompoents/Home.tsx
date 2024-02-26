import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import one from "./1.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  const buttonsData = [
    { icon: <FacebookIcon />, color: "#3b5998" },
    { icon: <InstagramIcon />, color: "#C13584" },
    { icon: <GitHubIcon />, color: "#FFFFFF" },
    { icon: <XIcon />, color: "#FF0000" },
  ];
  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }} textAlign="center">
        Stark Industries
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card style={{ height: "100%" }}>
                <CardContent
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "",
                    // backgroundColor: "rgba(0, 0, 0, 0.403)",
                    backgroundColor: "rgba(0, 0, 0, 0.083)",

                    padding: "20px",
                    borderRadius: "30px",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ padding: "15px", color: "white" }}
                  >
                    Welcome to the Landing Page of Tony Stark and Stark
                    Industries!{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={{ padding: "15px", color: "#666" }}
                  >
                    Welcome to the official landing page dedicated to Tony
                    Stark, also known as Iron Man, and Stark Industries. Tony
                    Stark, a genius billionaire philanthropist, is the CEO of
                    Stark Industries, a global leader in advanced technology,
                    innovation, and engineering. Founded by his father, Howard
                    Stark, Stark Industries has revolutionized multiple
                    industries, including aerospace, defense, clean energy, and
                    artificial intelligence.
                    <br />
                    Tony Stark, the charismatic and enigmatic genius behind the
                    Iron Man suit, is a force to be reckoned with in the Marvel
                    Universe. As a founding member of the Avengers, Tony Stark
                    brings his unparalleled intellect, wit, and courage to every
                    battle he faces. Explore the world of Tony Stark and
                    discover the incredible technology, heart-pounding action,
                    and unforgettable moments that make him one of the most
                    iconic superheroes of all time. Join forces with Iron Man
                    and immerse yourself in the thrilling world of Tony Stark
                    today!
                  </Typography>
                  {/* <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={{ padding: "15px", color: "#666" }}
                  >
                    Tony Stark, the charismatic and enigmatic genius behind the
                    Iron Man suit, is a force to be reckoned with in the Marvel
                    Universe. As a founding member of the Avengers, Tony Stark
                    brings his unparalleled intellect, wit, and courage to every
                    battle he faces. Explore the world of Tony Stark and
                    discover the incredible technology, heart-pounding action,
                    and unforgettable moments that make him one of the most
                    iconic superheroes of all time. Join forces with Iron Man
                    and immerse yourself in the thrilling world of Tony Stark
                    today!
                  </Typography> */}
                  <Typography variant="caption" style={{ color: "#999" }}>
                    This landing page serves as a hub for all things related to
                    Tony Stark and Stark Industries. Explore the latest news,
                    innovations, and projects undertaken by Stark Industries
                    under the visionary leadership of Tony Stark. Learn about
                    Iron Man's heroic endeavors, technological advancements, and
                    his contributions to making the world a safer place. Join us
                    as we delve into the extraordinary world of Tony Stark and
                    Stark Industries, where innovation knows no bounds.
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    style={{ marginTop: "40px" }}
                    gap={3}
                  >
                    {buttonsData.map((button, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        size="large"
                        style={{
                          borderRadius: "80px",
                          border: `3px solid ${button.color}`,
                          color: button.color,
                        }}
                      >
                        <IconButton>{button.icon}</IconButton>
                      </Button>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  image={one}
                  alt="Icon"
                  style={{
                    width: "100%", // Adjust the width as needed, for example, "30%" or "200px"
                    height: "auto", // Auto height to maintain aspect ratio
                    maxHeight: "700px", // Limit the maximum height of the image
                    backgroundColor: "rgba(0, 0, 0, 0.083)",
                    borderRadius: "30px",

                    objectFit: "contain", // Ensure entire image is visible without cropping
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
