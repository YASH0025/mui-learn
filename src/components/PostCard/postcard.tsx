import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import useStyles from "../style";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostCard = ({ post }: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={8} lg={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.cards} style={{ padding: "25px" }}>
            <div className={classes.cardDetails}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue Reading.............
              </Typography>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardsMedia}
                image={post.image}
                title={post.title}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default PostCard;
