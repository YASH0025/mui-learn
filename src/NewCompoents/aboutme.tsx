import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import useStyles from "../components/style";
import one from "./4.jpg";

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        About
      </Typography>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <CardMedia
                component="img"
                image={one}
                alt="Icon"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "1000px", // Adjust the max height as needed
                  objectFit: "contain",
                  backgroundColor: "rgba(0, 0, 0, 0.303)",
                  borderRadius: "5px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Card>
              <CardContent
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.083)",
                  //   padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{ color: "#fff", marginBottom: "20px" }}
                >
                  About Tony Stark
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.descriptionss}
                  style={{ color: "#fff", marginBottom: "10px" }}
                >
                  Tony Stark, also known as Iron Man, is a fictional character
                  in the Marvel Comics universe. He is a billionaire
                  industrialist, genius inventor, and philanthropist who is the
                  CEO of Stark Industries, a multinational conglomerate that
                  manufactures advanced weaponry and technology.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.descriptionss}
                  style={{ color: "#fff", marginBottom: "10px" }}
                >
                  Born into wealth and inheriting Stark Industries from his
                  father, Howard Stark, Tony Stark is a genius engineer,
                  inventor, and businessman. He is known for his wit, charm, and
                  larger-than-life personality. Despite his playboy image, Stark
                  is deeply troubled by the destructive potential of his own
                  inventions and the impact of his company's activities on the
                  world.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.descriptionss}
                  style={{ color: "#fff", marginBottom: "10px" }}
                >
                  After being kidnapped by terrorists who demand he build a
                  weapon of mass destruction, Stark instead constructs a suit of
                  power armor to escape. He later refines the suit and uses it
                  to fight crime and protect the world as the armored superhero,
                  Iron Man.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.descriptionss}
                  style={{ color: "#fff", marginBottom: "10px" }}
                >
                  Over the years, Tony Stark has faced numerous challenges, both
                  as Iron Man and in his personal life. From battling powerful
                  villains to dealing with his own inner demons, Stark's journey
                  is one of redemption, growth, and sacrifice.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.descriptionss}
                  style={{ color: "#fff" }}
                  gutterBottom
                >
                  Despite his flaws and struggles, Tony Stark remains one of the
                  most iconic and beloved characters in the Marvel Universe,
                  inspiring generations with his intelligence, courage, and
                  determination to make the world a better place.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AboutPage;
